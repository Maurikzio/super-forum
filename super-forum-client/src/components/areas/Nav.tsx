import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import "./Nav.css";
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SideBarMenus";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions(); //to determine if we are on a mobil device

  const getMobileMenu = () => {
    if (width <= 768) {
      return <FontAwesomeIcon icon={faBars} size="lg" className="nav-mobile-menu" onClick={onClickToggle} />;
    }
    return null;
  };

  const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };

  const onRequestClose = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
    setShowMenu(false);
  };

  return (
    <React.Fragment>
      <ReactModal
        className="modal-menu"
        isOpen={showMenu}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <SideBarMenus />
      </ReactModal>
      <nav className="navigation">
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
