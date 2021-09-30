import classes from "../components/ui/carts/Carts.module.css";
import Carts from "../components/ui/carts/Carts";

import Link from "next/link";

const ComponentUI = (props) => {
  return (
    <div className={classes.works}>
      {/* <Carts>
        <Link href="/FetchingFromDB">
          <div>
            <img src="/paintBrushunit.jpg" width={40} height={40} />
            <p> Plumber </p>
          </div>
        </Link>
      </Carts>

      <Carts>
        <Link href="/FetchingFromDB">
          <div>
            <img src="/paintBrushunit.jpg" width={40} height={40} />
            <p> Painter </p>
          </div>
        </Link>
      </Carts> */}

      <Carts>
        <img src="/carWorkShop.png" width={40} height={40} />
        <Link href="/FetchingFromDB">Mechanic</Link>
      </Carts>

      {/* <div classesName={classes.Carts}> */}

      <Carts classesName={classes.Carts}>
        <img src="/handyManIcon.jpg" width={40} height={40} />
        <Link href="/FetchingFromDB">HandyMan</Link>
      </Carts>

      <Carts>
        <img src="/houseHelp.png" width={40} height={40} />
        <Link href="/FetchingFromDB">House Help</Link>
      </Carts>
      <Carts>
        <img src="/computerEngineer.png" width={40} height={40} />
        <Link href="/FetchingFromDB">IT Solution</Link>
      </Carts>

      <Carts>
        <img src="/artictect.png" width={40} height={40} />
        <Link href="/FetchingFromDB">Architect</Link>
      </Carts>
      <Carts>
        <img src="/Gardner.png" width={40} height={40} />
        <Link href="/FetchingFromDB">Gardner</Link>
      </Carts>
      <Carts>
        <img src="/movingTracl.png" width={40} height={40} />
        <Link href="/UploadingChoresToDb">Transport</Link>
      </Carts>
      <Carts>
        <img src="/paintBrushunit.jpg" width={40} height={40} />
        <Link href="/UploadingChoresToDb">Cleaning</Link>
      </Carts>

      {/* <Carts>
        <ul>
          <li>
            <Link href="/FetchingFromDB">FetchFirebase</Link>
          </li>
          <li>
            <Link href="/UploadingChoresToDb">ChoreForm</Link>
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>
          </li>
          <li>
            <Link href="/testing">FetchMongoDb</Link>{" "}
          </li>
          <li>
            <Link href="new-meetup">ChoreForV2IMG</Link>
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>{" "}
          </li>{" "}
          <li>
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
          </li>
          <li>
            <Link href="/UploadingChoresToDb">Gardner</Link>{" "}
          </li>{" "}
          <li>
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
          </li>
        </ul>
      </Carts> */}
    </div>
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
