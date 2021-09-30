// const Gardner = (props) => {
// 	return (
// 		<div className={classes.HouseCleaner}>
// 		<p> Another interesting page of Gardening</p>
// 		</div>
// 	);
// };
// export default Gardner;

import { Redirect, useContext, Switch, Fragment } from "react";
import Link from "next/link";
import Layout from "../components/usersAccount/Layout/Layout";
import UserProfile from "../components/usersAccount/Profile/UserProfile";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import AuthenContext from "../components/Token/LogInAuthentication ";
import StartingPageContent from "../components/usersAccount/StartingPage/StartingPageContent";

const Gardner = () => {
  const authCtx = useContext(AuthenContext);
  const isLoggedIn = authCtx.loggedIn;

  return (
    <Fragment>
      <Link href="/">
        <HomePage />
      </Link>

      {!authCtx.isLoggedIn && (
        <Link href="/auth">
          <AuthPage />
        </Link>
      )}

      {authCtx.IsloggedIn && (
        <Link href="/">
          <UserProfile />
        </Link>
      )}
      {/* 
      <Link href="*">
        <Redirect href="/" />
      </Link> */}
    </Fragment>
  );
};

export default Gardner;

// <Layout>
//   <Switch>
//     <Link href="/">
//       <HomePage />
//     </Link>
//
//     {authCtx.isLoggedIn && (
//       <Link href="/">
//         <UserProfile />
//       </Link>
//     )}{" "}

/* this will redirect to home page if invalid input */
//     <Link href="*">
//       <Redirect to="/" /> /
//     </Link>{" "}
//   </Switch>

// </Layout>
