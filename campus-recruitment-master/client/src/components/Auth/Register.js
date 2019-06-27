import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
  Select,
  Dropdown,
  Input
} 
from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Swal from "sweetalert2";

class Register extends React.Component {
  state = {
    companyName: "",
    username: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    role: ""
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: Swal.fire({
        type: 'error',
        title: 'Error...',
        text: 'Please Fill All Fields!',
        footer: '<a href>Back On Register</a>'
      }) };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: Swal.fire({
        type: 'error',
        title: 'Error...',
        text: 'Password Must Be Larger Than 8 Digits!',
        footer: '<a href>Back On Register</a>'
      }) };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 8 || passwordConfirmation.length < 8) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  

  postData = () => {
    const {
      role,
      email,
      password,
      username,
      companyName,
      lastname
    } = this.state;

    if (role === "student") {
      axios
        .post(`http://localhost:3002/api/student/register`, {
          name: username,
          lastname: lastname,
          email: email,
          password: password,
          role: "student"
        })
        .then(res => {
          if (res.status === 200) {

            swal(
              "Great!",
              "Thanks for registering you may now login ",
              "success"
            );
          } else {
            alert("Something Wrong please try again later");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (role === "company") {
      axios
        .post(`http://localhost:3002/api/company/register`, {
          name: username,
          email: email,
          password: password,
          role: "company",
          "Company Name": companyName
        })
        .then(res => {
          if (res.status === 200) {
            swal(
              "Great!",
              "Thanks for registering you may now login ",
              "success"
            );
          } else {
            alert("Something Wrong please try again later");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (role === "admin") {
      axios
        .post(`http://localhost:3002/api/admin/register`, {
          name: username,
          email: email,
          password: password,
          role: "admin"
        })
        .then(res => {
          if (res.status === 200) {
            swal(
              "Great!",
              "Thanks for registering you may now login ",
              "success"
            );
          } else {
            alert("Something Wrong please try again later");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  handleSubmit = event => {
    if (this.isFormValid()) {
      event.preventDefault();
      this.postData();
    }
  };

  handleRole = event => {
    this.setState({
      role: event.target.value
    });
  };

  render() {
   
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      companyName,
      lastname
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app" style={{ height: "100vh" }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="red" textAlign="center">
            <Icon name="handshake outline" color="red" />
            Register
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment inverted>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                value={username}
                type="text"
              />

              <Form.Input
                fluid
                name="lastname"
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
                onChange={this.handleChange}
                value={lastname}
                type="text"
              />

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                type="email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
                type="password"
              />

              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                type="password"
              />

              {this.state.role === "company" ? (
                <Form.Input
                  fluid
                  name="companyName"
                  icon="copyright outline"
                  iconPosition="left"
                  placeholder="Company Name"
                  onChange={this.handleChange}
                  value={companyName}
                  type="text"
                />
              ) : null}

              <Form.Group inline>
                <label>Student</label>
                <input
                  type="radio"
                  value="student"
                  checked={this.state.role === "student"}
                  onChange={this.handleRole}
                />

                <label>Company</label>
                <input
                  type="radio"
                  value="company"
                  checked={this.state.role === "company"}
                  onChange={this.handleRole}
                />

                <label>Admin</label>
                <input
                  type="radio"
                  value="admin"
                  checked={this.state.role === "admin"}
                  onChange={this.handleRole}
                />
              </Form.Group>

              <Button color="red" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Already a user? <Link to="/">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
