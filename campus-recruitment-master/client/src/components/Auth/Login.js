import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getData = () => {
    if (this.props.role === "student") {
      axios
        .get("http://localhost:3002/api/student")
        .then(res => {
          if (res.status === 200) {
            const data = res.data.userData;

            for (let i = 0; i < data.length; i++) {
              if (
                data[i].email === this.state.email &&
                data[i].password === this.state.password &&
                data[i].role === this.props.role
              ) {
                this.props.handleLogin();
                this.setState({ errors: [] });
              } else {
                let error;
                error = { message: "This user does not exist" };
                this.setState({
                  errors: this.state.errors.concat(error)
                });
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.props.role === "company") {
      axios
        .get("http://localhost:3002/api/company")
        .then(res => {
          if (res.status === 200) {
            const data = res.data.userData;

            for (let i = 0; i < data.length; i++) {
              if (
                data[i].email === this.state.email &&
                data[i].password === this.state.password &&
                data[i].role === this.props.role
              ) {
                this.props.handleLogin();
                this.setState({ errors: [] });
              } else {
                let error;
                error = { message: "This user does not exist" };
                this.setState({
                  errors: this.state.errors.concat(error)
                });
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .get("http://localhost:3002/api/admin")
        .then(res => {
          if (res.status === 200) {
            const data = res.data.userData;

            for (let i = 0; i < data.length; i++) {
              if (
                data[i].email === this.state.email &&
                data[i].password === this.state.password &&
                data[i].role === this.props.role
              ) {
                this.props.handleLogin();
                this.setState({ errors: [] });
              } else {
                let error;
                error = { message: "This user does not exist" };
                this.setState({
                  errors: this.state.errors.concat(error)
                });
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.getData();
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  };

  render() {
    const { email, password, errors, loading } = this.state;

    return (
      <Grid
        textAlign="center"
        verticalAlign="middle"
        className="app"
        style={{ height: "100vh",
        width:"500dp"

      }}
      >
        <Grid.Column style={{ maxWidth: 500 }
      
      }>
          <Header as="h1" icon color="red" textAlign="center">
            <Icon name="sign-in" color="red" />
            SignIn
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment inverted>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={email}
                className={this.handleInputError(errors, "email")}
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
                className={this.handleInputError(errors, "password")}
                type="password"
              />

              <Form.Group inline>
                <label>Student</label>
                <input
                icon = "mail"
                  type="radio"
                  value="student"
                  checked={this.props.role === "student"}
                  onChange={this.props.handleRole}
                />

                <label>Company</label>
                <input
                  type="radio"
                  value="company"
                  checked={this.props.role === "company"}
                  onChange={this.props.handleRole}
                />

                <label>Admin</label>
                <input
                  type="radio"
                  value="admin"
                  checked={this.props.role === "admin"}
                  onChange={this.props.handleRole}
                />
              </Form.Group>

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="red"
                fluid
                size="large"
              >
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
            Don't have an account? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
