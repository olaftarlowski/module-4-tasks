import React, { useState } from "react";

import { UserFormWrapper } from "./styling/userForm-styling";
import useInputsBasic from "./hooks/valid-input-hook";
import { InputText, InputPredefined, Button, Textarea, ErrorMessage } from "./";

const nameFieldCheck = (val) => val.trim() !== "";
const emailFieldCheck = (val) => val.includes("@") && val.trim().length > 5;
const bioFieldCheck = (val) => val.trim().length > 9;

const UserForm = () => {
  const {
    value: nameField,
    validity: nameFieldValid,
    error: nameFieldError,
    inputValueHandler: nameFieldChangeHandler,
    inputTouchHandler: nameFieldTouchedHandler,
    resetInput: nameFieldReset,
  } = useInputsBasic(nameFieldCheck);

  const {
    value: emailField,
    validity: emailFieldValid,
    error: emailFieldError,
    inputValueHandler: emailFieldChangeHandler,
    inputTouchHandler: emailFieldTouchedHandler,
    resetInput: emailFieldReset,
  } = useInputsBasic(emailFieldCheck);

  const {
    value: bioField,
    validity: bioFieldValid,
    error: bioFieldError,
    inputValueHandler: bioFieldChangeHandler,
    inputTouchHandler: bioFieldTouchedHandler,
    resetInput: bioFieldReset,
  } = useInputsBasic(bioFieldCheck);

  const [radioInput, setRadioInput] = useState("");
  const [termsInput, setTermsInput] = useState(false);
  const [isRadioInputValid, setIsRadioInputValid] = useState(true);
  const [isTermsMarked, setIsTermsMarked] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const radioInputHandler = (e) => {
    setRadioInput(e.target.value);
  };
  const checkboxHandler = () => {
    setTermsInput((e) => !e);
  };

  let formValid = false;

  if (nameFieldValid && emailFieldValid && bioFieldValid) {
    formValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (formValid) {
      if (!termsInput) {
        setIsTermsMarked(false);
      } else {
        setIsTermsMarked(true);
      }
      if (!radioInput) {
        setIsRadioInputValid(false);
      } else {
        setIsRadioInputValid(true);
      }
      if (!termsInput || !radioInput) {
        return;
      }
    }

    setTermsInput(false);
    setIsTermsMarked(true);
    setRadioInput("");
    setIsRadioInputValid(true);

    nameFieldReset();
    emailFieldReset();
    bioFieldReset();

    setIsFormSubmitted(true);

    console.log({ nameField, emailField, bioField, radioInput });
  };

  if (isFormSubmitted) {
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  }

  return (
    <UserFormWrapper>
      <form onSubmit={submitFormHandler}>
        <InputText
          type="text"
          label="Name"
          elemName="name"
          value={nameField}
          isValid={nameFieldError}
          onchange={nameFieldChangeHandler}
          onblur={nameFieldTouchedHandler}
        />
        {nameFieldError && (
          <ErrorMessage>Name input can't be empty.</ErrorMessage>
        )}
        <InputText
          type="text"
          label="Email"
          elemName="email"
          value={emailField}
          isValid={emailFieldError}
          onchange={emailFieldChangeHandler}
          onblur={emailFieldTouchedHandler}
        />
        {emailFieldError && <ErrorMessage>Wrong email adress.</ErrorMessage>}
        <Textarea
          label="Bio"
          elemName="description"
          value={bioField}
          isValid={bioFieldError}
          onchange={bioFieldChangeHandler}
          onblur={bioFieldTouchedHandler}
        />
        {bioFieldError && (
          <ErrorMessage>Bio must have at least 10 characters.</ErrorMessage>
        )}
        <div>
          <InputPredefined
            type="radio"
            label="Male"
            elemName="radio-male"
            value="male"
            checked={radioInput === "male"}
            clickEvent={radioInputHandler}
          />
          <InputPredefined
            type="radio"
            label="Female"
            elemName="radio-female"
            value="female"
            checked={radioInput === "female"}
            clickEvent={radioInputHandler}
          />
          {!isRadioInputValid && (
            <ErrorMessage>Please choose an option</ErrorMessage>
          )}
        </div>
        <InputPredefined
          type="checkbox"
          label="Terms and conditions"
          elemName="terms"
          checked={termsInput}
          clickEvent={checkboxHandler}
        />
        {!isTermsMarked && <ErrorMessage>Please check Terms</ErrorMessage>}
        <Button formValid={formValid}>Submit !</Button>
      </form>
      {isFormSubmitted && <p className="success">SUBMIT SUCCESSFUL !</p>}
    </UserFormWrapper>
  );
};

export default UserForm;
