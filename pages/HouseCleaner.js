import classes from "../components/ui/carts/Carts.module.css";
import Carts from "../components/ui/carts/Carts";

import Link from "next/link";

const ComponentUI = (props) => {
  return (
    <test className={classes.test}>
      <Carts>
        <ul>
          <li>
            <Link href="/UploadingChoresToDb">Singer</Link>
          </li>
          {/* {/* <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>
          </li> */}
          <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Electician</Link>{" "}
          </li>
          <li>
            <Link href="UploadingChoresToDb">Singer</Link>
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>{" "}
          </li>{" "}
          {/* <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Electician</Link>{" "}
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Plumber</Link>{" "}
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Satelite </Link>
          </li> */}
        </ul>
      </Carts>
    </test>
  );
};

export default ComponentUI;

{
  /* <li className={classes.cart}>
            {" "}
            <Link href="/UploadingChoresToDb"></Link>{" "}
          </li>
          <li className={classes.cart}>
            {" "}
{" "}
          </li>
          <li className={classes.cart}>
            {" "}
          </li>
          <li className={classes.cart}>
            {" "}
          </li>
          <li className={classes.cart}>
            {" "}
          </li> */
}
