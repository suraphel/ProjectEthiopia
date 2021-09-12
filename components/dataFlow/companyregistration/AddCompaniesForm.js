// import  {useRef} from 'react'
// import  './AddCompanies.css';
import UserInput from "../../hooks/user-inputs";
import Button from "../../ui/button/Button";

function AddCompaniesForm(props) {
  const {
    value: companyname,
    isValid: validcompname,
    hasError: inValidcompname,
    valueChangeHandler: compnameChangeHandler,
    onfocusHandler: blurcompname,
    reset: resetcompanyname,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: contactperson,
    isValid: validcontactperson,
    hasError: inValidcontactperson,
    valueChangeHandler: contactpersonChangeHandler,
    onfocusHandler: blurcontactperson,
    reset: resetcontactperson,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: tele,
    isValid: validtele,
    hasError: inValidtele,
    valueChangeHandler: teleChangeHandler,
    onfocusHandler: blurtele,
    reset: resettele,
  } = UserInput((value) => value.trim() !== "");

  let formValidation = false;
  if (validcompname && validcontactperson && validtele) {
    formValidation = true;
  }

  // const companyname = useRef();
  // const contactperson = useRef();
  // const telephone = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    // console.log(companyname,contactperson,tele);

    const companyDataObject = {
      companyname,
      contactperson,
      tele,
    };

    props.onAddcompaniesform(companyDataObject);

    resetcompanyname("");
    resetcontactperson("");
    resettele("");

    // const items = {
    //   name: companyname.current.value,
    //   cperson: contactperson.current.value,
    //   sname: telephone.current.value}
  };

  // const items = {
  //   name :companyname.current.value,
  //   cperson: contactperson.current.value,
  //   sname :telephone.current.value

  // }

  const nameInputClasses = inValidcompname
    ? "form-control invalid"
    : "form-control ";

  const contactInputClasses = inValidcontactperson
    ? "form-control invalid"
    : "form-control ";

  const teleInputClasses = inValidtele
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitHandler}>
      <div className="app">
        <div className={nameInputClasses}>
          <label htmlFor="compname"> Company Name </label>
          <input
            type="text"
            id="compname"
            // ref={companyname}
            onBlur={blurcompname}
            onChange={compnameChangeHandler}
            value={companyname}
          />
          {inValidcompname && (
            <p className="error-text">Please fill in a valid name</p>
          )}
        </div>

        <div className={contactInputClasses}>
          <label htmlFor="contperson"> Contact Person </label>
          <input
            type="text"
            id="contperson"
            // ref={contactperson}
            value={contactperson}
            onBlur={blurcontactperson}
            onChange={contactpersonChangeHandler}
          />
          {inValidcompname && (
            <p className="error-text">Please enter a valid Contact Person</p>
          )}
        </div>

        <div className={teleInputClasses}>
          <label htmlFor="tel"> Telephone </label>
          <input
            type="number"
            id="tel"
            // ref={telephone}
            value={tele}
            onBlur={blurtele}
            onChange={teleChangeHandler}
          />
          {inValidcompname && (
            <p className="error-text">Please enter a valid Phone</p>
          )}
        </div>
        <Button className="button"> Add Company</Button>
      </div>
    </form>
  );
}

export default AddCompaniesForm;
