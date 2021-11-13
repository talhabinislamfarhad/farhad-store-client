import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { admin, user, isLoading } = useAuth();
    if (isLoading) {
        return <div className='text-center my-5'><Spinner animation="border" variant="warning" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && user.displayName && admin ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;