import React, { FC } from "react";
import Nav from "../areas/Nav";
import SideBar from "../areas/sidebar/Sidebar"
import LeftMenu from "../areas/LeftMenu";
import Main from "../areas/main/Main";
import RightMenu from "../areas/RightMenu";
import "./Home.css";

const Home: FC = () => {
  return (
    <div className="screen-root-container home-container">
      <div className="navigation">
        <Nav />
      </div>
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
};

export default Home;