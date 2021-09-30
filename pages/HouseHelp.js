// import UploadingToDb from "../../dataFlow/uploadingToDb/UploadingToDb";
import Mechanic from "./Mechanic";
import SearchBar from "./SearchBar";
import UploadingChoresToDb from "./UploadingChoresToDb";
// import classes from "./Pages.module.css";

const HouseHelp = (props) => {
  return (
    <div>
      <UploadingChoresToDb />
      <Mechanic />
    </div>
  );
};
export default HouseHelp;
