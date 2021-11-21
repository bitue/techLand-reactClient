
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import LinearProgress from '@mui/material/LinearProgress';


const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return   <LinearProgress />
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;