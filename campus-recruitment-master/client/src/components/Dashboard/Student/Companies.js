import React from "react";
import { Table, Grid, Header,Button } from "semantic-ui-react";
import axios from "axios";
import swal from 'sweetalert'
class Companies extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get("http://localhost:3002/api/company/").then(res => {
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
        .delete(`http://localhost:3002/api/company`, {
          data: { email: event.target.name }
        })
        .then(res => {
          if (res.status === 200) {
            axios.get("http://localhost:3002/api/company/").then(res => {
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
              Companies Table
            </Header>
          </Grid.Column>
        </Grid>

        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>CEO</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {data.map(item => (
            <Table.Body key={item._id}>
              <Table.Row>
                <Table.Cell>{item.ceo}</Table.Cell>
                <Table.Cell>{item.companyName}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.role}</Table.Cell>
              </Table.Row>

              {this.props.role !== "admin" ? null : (
                <Button negative
                  type="submit"
                  name={item.email}
                  onClick={this.handleRemove}
                >
                  Remove
                </Button>
              )}
            </Table.Body>
          ))}
        </Table>
      </div>
    );
  }
}

export default Companies;
