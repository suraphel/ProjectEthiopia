// import { useContext } from "react";
// import Link from "next/link";
// import AuthenticationContext from "../../Token/LogInAuthentication ";
// import classes from "./MainNavigation.module.css";

// const MainNavigation = () => {
//   const authCtx = useContext(AuthenticationContext);
//   const isLoggedIn = authCtx.isLoggedIn;
//   const logoutHandler = () => {
//     authCtx.logout();
//     // this will call the logout fucntion in auth-context
//   };
//   return (
//     <header className={classes.header}>
//       {/*  these are topbar list items rendered/ visible conditionally upon login status */}
//       <Link href="/">
//         <div className={classes.logo}>Balemoja</div>
//       </Link>

//       <nav>
//         <ul>
//           {!isLoggedIn && (
//             <li>
//               {/* link to the login page */}
//               <Link href="/AuthForm">Login</Link>
//             </li>
//           )}
//           {isLoggedIn && (
//             <li>
//               <Link href="/profile">Profile</Link>
//             </li>
//           )}
//           {isLoggedIn && (
//             <li>
//               <button onClick={logoutHandler}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default MainNavigation;
