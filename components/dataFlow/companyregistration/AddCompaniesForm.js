// import  {useRef} from 'react'
// import  './AddCompanies.css';
// import { Int32 } from "bson";
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
    value: lineOfBusiness,
    isValid: ValidlineOfBusiness,
    hasError: inValidlineOfBusiness,
    valueChangeHandler: lineOfBusinessChangeHandler,
    onfocusHandler: blurlineOfBusiness,
    reset: resetlineOfBusiness,
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

  const {
    value: TIN,
    isValid: validtin,
    hasError: inValidtin,
    valueChangeHandler: tinChangeHandler,
    onfocusHandler: blurtin,
    reset: resettin,
  } = UserInput((value) => value.trim() !== "");

  let formValidation = false;
  if (
    validcompname &&
    validcontactperson &&
    validtele &&
    validtin
    // lineOfBusiness
  ) {
    formValidation = true;
  }

  // const companyname = useRef();
  // const contactperson = useRef();
  // const telephone = useRef();
  // cn

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValidation) {
      return;
    }

    // console.log(companyname,contactperson,tele);

    //getting the select option  form input from the form

    let e = document.getElementById("lineOfBusiness");
    let lineOfBusiness = e.value;

    const companyDataObject = {
      companyname,
      contactperson,
      tele,
      TIN,
      lineOfBusiness,
    };

    console.log("here is the text " + lineOfBusiness);

    props.onAddcompaniesform(companyDataObject);

    resetcompanyname("");
    resetcontactperson("");
    resettele("");
    resettin("");

    let use = (companyDataObject.lineOfBusiness = "");

    console.log("here is the formted form " + use);

    // resetForm("");

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

  const tinInputClasses = inValidtin ? "form-control invalid" : "form-control ";

  const lineOfBusinessClasses = inValidlineOfBusiness
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="app">
        <div className={tinInputClasses}>
          <label htmlFor="tin"> TIN ID </label>
          <input
            type="number"
            id="TIN"
            // ref={telephone}
            value={TIN}
            onBlur={blurtin}
            onChange={tinChangeHandler}
          />
          {inValidtin && (
            <p className="error-text">Please enter a valid TIN ID</p>
          )}
        </div>
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

        <div className={lineOfBusinessClasses}>
          <label htmlFor="lineOfBusiness"> Line of Business </label>
          <select id="lineOfBusiness" required>
            <option value=""></option>
            <option value="Mechanic">Mechanic </option>
            <option value="HandyMan">HandyMan </option>
            <option value="House Hel">House Help </option>
            <option value="IT Solution">IT Solution </option>
            <option value="Architect">Architect </option>
            <option value="Gardner">Gardner </option>
            <option value="Transport">Transport </option>
            <option value="Cleaning">Cleaning </option>
            <option value="other">Other ... </option>
          </select>

          {/* // ) || (
            //   <input
            //     type="text"
            //     id="lineOfBusiness"
            //     // ref={telephone}
            //     value={lineOfBusiness}
            //     onBlur={blurlineOfBusiness}
            //     onChange={lineOfBusinessChangeHandler}
            //   /> 
          
          // {inValidlineOfBusiness && (
          //   <p className="error-text">Specify Line of Business </p>
          // )}*/}
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
          {inValidcontactperson && (
            <p className="error-text">Please enter a valid Contact Person</p>
          )}
        </div>
        <div className={teleInputClasses}>
          <label htmlFor="tel"> Telephone </label>
          <input
            type="tel"
            id="tel"
            // ref={telephone}
            value={tele}
            onBlur={blurtele}
            onChange={teleChangeHandler}
          />
          {inValidtele && (
            <p className="error-text">Please enter a valid Phone number</p>
          )}
        </div>

        <Button className="button"> Add Company </Button>
      </div>
    </form>
  );
}

export default AddCompaniesForm;
