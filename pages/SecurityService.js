 import Pages from '../components/ui/pages/Pages';
import classes from '../components/ui/pages/pages.module.css';
import Button from '../components/ui/button/Button';

const SecurityService = (props) => {
	return (
		<Pages className={classes.pages}>
			<div className={classes.pages}>
				<h2> Security Service </h2>
			</div>

			<form>
				<div className={classes.pages}>
					<label htmlFor="CompanyName"> Contact Person</label>
					<input type="text" id="companyName" />
				</div>

				<div className={classes.pages}>
					<label htmlFor="CompanyName"> Occassion</label>
					<input type="text" id="companyName" />
				</div>
				<div className={classes.pages}>
					<label htmlFor="CompanyName"> Address</label>
					<textarea rows="3" id="companyName" />
				</div>
				<div className={classes.pages}>
					<label htmlFor="CompanyName"> Telephone Number</label>
					<input type="text" id="companyName" />
				</div>
				<div className={classes.pages}>
					<label htmlFor="CompanyName"> Email</label>
					<input type="text" id="companyName" />
				</div>

				<Button type="submit"> Submit</Button>
			</form>
		</Pages>
	);
};

export default SecurityService;
