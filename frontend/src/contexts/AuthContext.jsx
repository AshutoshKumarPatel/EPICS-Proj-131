import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Validate token and load user's info
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, error, loading, setIsAuthenticated, setUser, setError, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
