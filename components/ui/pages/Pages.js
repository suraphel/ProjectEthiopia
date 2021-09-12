import classes from './Pages.module.css';

const Pages = (props) => {
	return <div className={`${props.className} ${classes.page}`}> {props.children}</div>;
};
export default Pages;
