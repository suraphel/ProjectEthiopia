import MainNavigation from "./MainNavigation";
// import MainNavigation from "../usersAccount/Layout/MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>

      <footer className={classes.footer}>
        <nav>
          <ul className={classes.__links}>
            <li className={classes.__link}>
              <a href="#">Support</a>
            </li>
            <li className={classes.__link}>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Layout;
