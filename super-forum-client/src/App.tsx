import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
// import LeftMenu from "./components/areas/LeftMenu";
// import Main from "./components/areas/main/Main";
// import Nav from "./components/areas/Nav";
// import RightMenu from "./components/areas/RightMenu";
// import Sidebar from "./components/areas/sidebar/Sidebar";
import Home from "./components/routes/Home";

function App() {
  const renderHome = (props: any) => <Home {...props} />;
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" render={renderHome} />
        <Route path="/categorythreads/:categoryId" render={renderHome} />
      </Switch>
    </Router>
    // <div className="App">
    //   <Nav />
    //   <Sidebar />
    //   <LeftMenu />
    //   <Main />
    //   <RightMenu />
    // </div>
  );
}

export default App;
