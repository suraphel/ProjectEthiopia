// A wrapper
// A encloser to make my life easy that will

import classes from "./DataGrid.module.css";
import Link from "next/link";

const DataGrid = (props) => {
  return (
    <div>
      <Link>{props.children}</Link>
    </div>
  );
};
export default DataGrid;
