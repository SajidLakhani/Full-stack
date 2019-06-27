import React, { Component } from "react";
import Login from "./components/Auth/Login";

import StudentDashboard from "./components/Dashboard/Student/index";
import CompanyDashboard from "./components/Dashboard/Company/index";
import AdminDashboard from "./components/Dashboard/Admin/index";
// import './app.css'

class App extends Component {
  state = {
    loggedIn: false,
    role: ""
  };

  handleLogin = () => {
    this.setState({
      loggedIn: true
    });
  };

  handleRole = event => {
    this.setState({
      role: event.target.value
    });
  };

  renderDash = role => {
    switch (role) {
      case "student":
        return <StudentDashboard role={this.state.role} />;

      case "company":
        return <CompanyDashboard role={this.state.role} />;

      case "admin":
        return <AdminDashboard role={this.state.role} />;

      default:
        return <Login />;
    }
  };
  render() {
    return (
      <div>
        {this.state.loggedIn && this.state.role.length > 0 ? (
          this.renderDash(this.state.role)
        ) : (
          <Login
            role={this.state.role}
            handleRole={this.handleRole}
            handleLogin={this.handleLogin}
          />
        )}
      </div>
    );
  }
}

export default App;
