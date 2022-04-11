import React, { useState, useEffect } from "react";

// const localhost = dynamic(
//   () => import("../components/chatroom/chatComponents"),
//   {
//     ssr: false,
//   }
// );

// import Cookies from "cookies";

let logoutTimer;

const AuthenContext = React.createContext({
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

// function parseCookies(req) {
//   return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
// }

// gettingStoredToken.getIntialProps = ({ req, res }) => {
//   const cookies = new Cookies(req, res);
//   // parseCookies(req);

//   cookies.get("cname");

//   return {
//     works: cookies.value,
//   };

//   console.log(cname);
// };

const gettingStoredToken = () => {
  // const localhost = window.localhost();
  // console.log("localhosta");

  const testing = window.localStorage.getItem();
  console.log(testing + " from the local storgage ");

  const storedToken = localhost.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  const remainingTime = timeCalculator(storedExpirationTime);

  if (remainingTime < 7200) {
    localStorage.removeItem("token");
  }
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
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
    <AuthenContext.Provider value={contextValue}>
      {props.children}
    </AuthenContext.Provider>
  );
};
export default AuthenContext;
