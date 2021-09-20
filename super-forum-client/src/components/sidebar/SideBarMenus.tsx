import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faRegistered, faSignInAlt, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserProfileSetType } from "../../store/user/Reducer";
import { AppState } from "../../store/AppState";
import "./SideBarMenus";
import Registration from "../auth/Registration";
import Login from "../auth/Login";
import Logout from "../auth/Logout";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickToogleLogin = () => {
    setShowLogin(!showLogin)
  }

  const onClickToggleLogout = () => {
    setShowLogout(!showLogout);
  };


  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span className="menu-name" onClick={onClickToggleRegister}>
            register
          </span>
        </li>
        <Registration isOpen={showRegister} onClickToggle={onClickToggleRegister} />
        <li>
          <FontAwesomeIcon icon={faSignInAlt}/>
          <span onClick={onClickToogleLogin} className="menu-name">
            login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToogleLogin}/>
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onClickToggleLogout} className="menu-name">
            logout
          </span>
          <Logout isOpen={showLogout} onClickToggle={onClickToggleLogout} />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;
