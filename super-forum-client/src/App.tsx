import "./App.css";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";
import Nav from "./components/Nav";
import RightMenu from "./components/RightMenu";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
