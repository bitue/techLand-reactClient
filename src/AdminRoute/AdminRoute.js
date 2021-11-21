
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import LinearProgress from '@mui/material/LinearProgress';


const AdminRoute = ({children, ...rest}) => {
    const {user, loading ,isAdmin, token} = useContext(AuthContext)
    if(loading){
        return  <LinearProgress />

    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email && isAdmin ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/dashboard",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default AdminRoute;