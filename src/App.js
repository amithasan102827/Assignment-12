import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './components/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import Register from './components/Register/Register';
import CarDetails from './components/CarDetails/CarDetails';
import DashBoard from './components/DashBoard/DashBoard';
import ExploreAllCars from './components/ExploreAllCars/ExploreAllCars';
import AllCarDetails from './components/AllCarDetails/AllCarDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute  path="/carDetails/:detailsId">
             <CarDetails></CarDetails>
            </PrivateRoute>
           
            <PrivateRoute  path="/allCarDetails/:allDetailsId">
             <AllCarDetails></AllCarDetails>
            </PrivateRoute>

           
            

            <Route path="/dashboard">
             <DashBoard></DashBoard>
            </Route>

            <Route path="/exploreAllCars">
             <ExploreAllCars></ExploreAllCars>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
