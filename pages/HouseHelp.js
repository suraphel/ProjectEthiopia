import UploadingToDb from '../../dataFlow/uploadingToDb/UploadingToDb';
import classes from './Pages.module.css';

const HouseHelp = (props) => {
	return (
		<div className={classes.HouseCleaner}>
			
			<UploadingToDb>And some more text</UploadingToDb> 
		</div>
	);
};
export default HouseHelp;
