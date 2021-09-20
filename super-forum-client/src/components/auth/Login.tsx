import React, { useEffect, useReducer, FC } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../../store/user/Reducer";
import { ModalProps } from "../types/ModalProps";
import { allowSubmit } from "./common/Helpers";
import userReducer from "./common/UserReducer";

const Login: FC<ModalProps> = ({ isOpen, onClickToggle }) => {

  const [
    { userName, password, resultMsg, isSubmitDisabled },
    dispatch,
  ] = useReducer( userReducer, {
    userName: "",
    password: "",
    resultMsg: "",
    isSubmitDisabled: true,
  });
  
  const reduxDispatch = useDispatch();

  useEffect(() => {
    //here we will replace the graphql call
    reduxDispatch({
      type: UserProfileSetType,
      payload: {
        id: 1, 
        userName: "testUser",
      }
    })
  },[reduxDispatch]);

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "userName", payload: e.target.value});
    if(!e.target.value){
      allowSubmit(dispatch, "Username cannot be empty", true);
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "userName", payload: e.target.value});
    if(!e.target.value){
      allowSubmit(dispatch, "Password cannot be empty", true);
    }else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClickToggle(e);
  }

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
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="form-buttons form-buttons-sm">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={isSubmitDisabled}
              onClick={onClickLogin}
            >
              Login
            </button>
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>

          <span className="form-btn-left">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>

    </ReactModal>
  )
};

export default Login;