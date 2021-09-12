// const Gardner = (props) => {
// 	return (
// 		<div className={classes.HouseCleaner}>
// 		<p> Another interesting page of Gardening</p>
// 		</div>
// 	);
// };
// export default Gardner;

import { Redirect, useContext, Switch } from "react";
import Link from "next/link";
import Layout from "../components/usersAccount/Layout/Layout";
import UserProfile from "../components/usersAccount/Profile/UserProfile";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import AuthenticationContext from "../components/Token/LogInAuthentication ";
import StartingPageContent from "../components/usersAccount/StartingPage/StartingPageContent";

const Gardner = () => {
  const authCtx = useContext(AuthenticationContext);
  const isLoggedIn = authCtx.loggedIn;

  return (
    // <Layout>
    <Link href="/">
      <HomePage />
    </Link>
    // </Layout>

    // <Layout>
    //   <Switch>
    //     <Link href="/" exact>
    //       <a>HomePage </a>
    //     </Link>
    /* 
        {!authCtx.isLoggedIn && (
          <Link href="/auth">
            <a> AuthPage </a>
          </Link>
        )}

        {authCtx.isLoggedIn && (
          <Link href="/">
            <a> UserProfile </a>
          </Link>
        )}
        {/* this will redirect to home page if invalid input */
    /* <Link href="*">
          <Redirect to="/" /> /
        </Link>{" "}
        */
    //   </Switch>
    // </Layout>
  );
};

export default Gardner;
