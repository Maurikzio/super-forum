import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserProfileSetType } from "../../services/User/Reducer";
import { AppState } from "../../store/AppState";
import "./SideBarMenus";

const SideBarMenus = () => {
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

  return (
    <React.Fragment>
      <ul>
        <FontAwesomeIcon icon={faUser} />
        <span className="menu-name">{user?.userName}</span>
      </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;
