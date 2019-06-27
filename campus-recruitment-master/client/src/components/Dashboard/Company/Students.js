import React from "react";
import { Table, Grid, Header } from "semantic-ui-react";
import axios from "axios";
import swal from "sweetalert";
import { Button } from 'semantic-ui-react';

class Students extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("http://localhost:3002/api/student/").then(res => {
      if (res.status === 200) {
        const userData = res.data.userData;
        this.setState({
          data: userData
        });
      }
    });
  }

  handleRemove = event => {
    event.preventDefault();

    if (this.props.role !== "admin") {
      swal("Sorry", "You Are Not Authorized", "error");
    } else {
      axios
        .delete(`http://localhost:3002/api/student`, {
          data: { email: event.target.name }
        })
        .then(res => {
          if (res.status === 200) {
            axios.get("http://localhost:3002/api/student/").then(res => {
              if (res.status === 200) {
                const userData = res.data.userData;
                this.setState({
                  data: userData
                });
              }
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column>
          <Header as="h2" icon color="red" textAlign="center">
              Students Table
            </Header>
          </Grid.Column>
        </Grid>

        <Table inverted>
          <Table.Header>
          
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Applied To</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {data.map(item => (
            <Table.Body key={item._id}>
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.lastname}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.appliedTo}</Table.Cell>
                {this.props.role !== "admin" ? null : (
                  <Button negative
                    type="submit"
                    name={item.email}
                    onClick={this.handleRemove}
                  >
                    Remove
                  </Button>
                )}
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    );
  }
}

export default Students;
