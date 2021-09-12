import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import Link from "next/link";
import AuthenticationContext from "../Token/LogInAuthentication ";

function MainNavigation() {
  const authCtx = useContext(AuthenticationContext);
  const IsloggedIn = authCtx.loggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        Balemoja
      </Link>

      {/* <button className={classes.toggle}>
        <span className={classes.toggle}></span>
        <span className={classes.toggle}></span>
        <span className={classes.toggle}></span>
      </button> */}

      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {/* <li>
            <Link href="/UploadingChoresToDb">Chores</Link>
          </li> */}
          <li className={classes.li}>
            {/* next Link href = '/name of component wrapped in link' */}
            <Link href="/UploadingCompaniesToDb">New Company</Link>
          </li>
          <li className={classes.li}>
            <Link
              href="/AuthForm"
              // className={classes.link}
            >
              Login
            </Link>
          </li>
          {authCtx.IsloggedIn && (
            <button onClick={logoutHandler}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
