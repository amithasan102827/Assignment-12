import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider,getIdToken, signInWithPopup, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";




const useFirebase = () => {
    initializeAuthentication()
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const [admin,setAdmin]=useState(false);
    // const [token,setToken]=useState('');
    const googleProvider = new GoogleAuthProvider();

    // Register new user
    const registerUser = (email, password, name,location,history ) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayNane: name }
                setUser(newUser);

                // SAVE USER
                saveUser(email, name, 'POST')
                const destination = location?.state?.from || '/';
                history.push(destination);

                // send name to firebase after new user creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                setAuthError('')
                history.replace('/');

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }

    // onAuthStateChanged
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // jwt id token
                // getIdToken(user)
                // .then(idToken=>{
                //     setToken(idToken);
                // })

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, []);


    // Login user with email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password,location,history)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);


                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // google sing in
    const singInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;

                 // SAVE USER
                 saveUser(user.email, user.displayName, 'PUT')
                // ...
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            }).catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // logout
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // SAVE USER
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://mighty-journey-16776.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // admin data load
    useEffect(()=>{
        fetch(`https://mighty-journey-16776.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin));
    },[user.email])

    return {
        user,
        admin,
        // token,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
        singInWithGoogle
    }

}

export default useFirebase;