import classes from "../components/searchBar/Search.module.css";

const SearchBar = (props) => {
  return (
    <div>
      {/* <h2> Screened, Vetted and Rated professionals are a click away</h2>
			<h3>Get the job done by reliable and certified professionals</h3> */}
      <form className={classes.searchbar}>
        <input type="text" name="search" />
      </form>
    </div>
  );
};
SearchBar.propTypes = {};

export default SearchBar;
