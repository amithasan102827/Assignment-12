import { CircularProgress } from '@mui/material';
import React from 'react';

import useAuth from  '../Hooks/useAuth';
import {
    Route,
    Redirect,
  } from "react-router-dom";

const AdminPrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading,admin}=useAuth();
    if(isLoading){
        return <CircularProgress/>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
         user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminPrivateRoute;