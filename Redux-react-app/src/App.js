import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditUser";
import Header from "./component/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addUser" component={AddEditUser} />
          <Route exact path="/editUser/:id" component={AddEditUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
