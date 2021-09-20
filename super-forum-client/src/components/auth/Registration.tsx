import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
import { isPassWordValid, PasswordTestResult } from "../../common/validators/PasswordValidator";
import { ModalProps } from "../types/ModalProps";
import { allowSubmit } from "./common/Helpers";
import userReducer from "./common/UserReducer";
import "./Registration";

// export interface RegistrationProps {
//   isOpen: boolean;
//   onClickToggle: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
// }

const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [isRegisteredDisabled, setRegisteredDisabled] = useState(true);
  const [{ userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled }, dispatch] = useReducer(userReducer, {
    userName: "maurikzio",
    password: "",
    email: "maurikzio@gmail.com",
    passwordConfirm: "",
    resultMsg: "",
  });

  // const allowRegister = (msg: string, setDisabled: boolean) => {
  //   setRegisteredDisabled(setDisabled);
  //   dispatch({ payload: msg, type: "resultMsg" });
  // };

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "userName" });
    if (!e.target.value) allowSubmit(dispatch, "Username cannot be empty", true)
    else allowSubmit(dispatch, "", false);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "email" });
    if (!e.target.value) allowSubmit(dispatch, "Email cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "password" });
    const passwordCheck: PasswordTestResult = isPassWordValid(e.target.value);
    console.log({ passwordCheck });
    if (!passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true);
      return;
    }
    passwordsSame(passwordConfirm, e.target.value);
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "passwordConfirm" });
    passwordsSame(password, e.target.value);
  };

  const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
    if (passwordVal !== passwordConfirmVal) {
      allowSubmit(dispatch, "Passwords do not match", true);
      return false;
    } else {
      allowSubmit(dispatch, "", false);
      return true;
    }
  };

  const onClickRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>username</label>
            <input type="text" value={userName} onChange={onChangeUserName} />
          </div>
          <div>
            <label>email</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
          <div>
            <label>password</label>
            <input type="password" placeholder="Password" value={password} onChange={onChangePassword} />
          </div>
          <div>
            <label>password confirmation</label>
            <input
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </div>
        </div>
        <div className="reg-buttons">
          <div className="reg-bnt-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={!isSubmitDisabled}
              onClick={onClickRegister}
            >
              Register
            </button>
            <button style={{ marginLeft: ".5em" }} className="cancel-btn" onClick={onClickCancel}>
              Close
            </button>
          </div>
          <span className="reg-btn-right">
            <strong>{resultMsg || "Un defined"}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Registration;
