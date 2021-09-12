import React, { useState, useEffect } from "react";

let logoutTimer;

const AuthenticationContext = React.createContext({
        token: "",
        login: (token) => {},
        IsloggedIn: false,
        logout: () => {},
});

const timeCalculator = (expirationTime) => {
        const startTime = new Date().getTime();
        const endingTime = new Date(expirationTime).getTime();
        const remainingTime = endingTime - startTime;
        return remainingTime;
};

const gettingStoredToken = () => {
        const storedToken = localStorage.getItem("token");
        const storedExpirationTime = localStorage.getItem("expirationTime");
        const remainingTime = timeCalculator(storedExpirationTime);

        if (remainingTime < 3600) {
                localStorage.removeItem("token");
        }
        return {
                token: storedToken,
                duration: remainingTime,
        };
};

export const AuthenticationWrapper = (props) => {
        const tokenData = gettingStoredToken();
        let startToken;
        if (startToken) {
                startToken = tokenData.data;
        }
        const [token, setToken] = useState(startToken);
        const userIsLoggedIn = !!token; // flips the bool value.

        const logoutHandler = () => {
                setToken(null);
                localStorage.removeItem("token");
                if (logoutTimer) {
                        clearTimeout(logoutTimer);
                }
        };

        const loginHandler = (token, expirationTime) => {
                setToken("token");
                localStorage.setItem("token", token);
                const remainingTime = timeCalculator(expirationTime);
                logoutTimer = setTimeout(logoutHandler, remainingTime);
        };

        useEffect(() => {
                if (tokenData) {
                        setTimeout(logoutHandler, tokenData.duration);
                }
        }, [tokenData]);

        const contextValue = {
                token: token,
                IsloggedIn: userIsLoggedIn,
                login: loginHandler,
                logout: logoutHandler,
        };
        return (
                <AuthenticationContext.Provider value={contextValue}>
                        {props.children}
                </AuthenticationContext.Provider>
        );
};
export default AuthenticationContext;
