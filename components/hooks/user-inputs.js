import {  useState } from "react";


const UserInput = (validation) =>{
    const [enteredValue, setEnteredValue] = useState(''); 
    const [isTouced, setIsTouched] = useState(''); 

    const valueIsValid = validation(enteredValue); 
    const hasError = !valueIsValid && isTouced; 

    const valueChangeHandler = (event) =>{
        setEnteredValue(event.target.value);
    }

    const onfocusHandler =(event) => {
        setIsTouched(true);
    }

    const resetValue = () => {
        setEnteredValue('');
        setIsTouched(false); 
    }

    // Validation object
    return {
    value:enteredValue,
    isValid : valueIsValid,
    hasError : hasError,
    valueChangeHandler,
    onfocusHandler,
    reset:resetValue,
};

}

export default UserInput;