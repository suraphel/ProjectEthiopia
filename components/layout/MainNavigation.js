import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import Link from "next/link";
import AuthenContext from "../Token/LogInAuthentication ";

function MainNavigation() {
  const authCtx = useContext(AuthenContext);
  const IsloggedIn = authCtx.loggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
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

          {!IsloggedIn && (
            <li className={classes.li}>
              <Link
                href="/AuthForm"
                // className={classes.link}
              >
                Login
              </Link>
            </li>
          )}

          {authCtx.IsloggedIn && (
            <button onClick={logoutHandler}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
