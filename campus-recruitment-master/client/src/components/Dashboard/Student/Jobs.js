import React from "react";
import { Table, Grid, Header, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import swal from "sweetalert";
import Swal from 'sweetalert2';
class Jobs extends React.Component {
  state = {
    data: [],
    applied: false
  };
  componentDidMount() {
    axios.get("http://localhost:3002/api/company/jobs").then(res => {
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
        .delete(`http://localhost:3002/api/company/jobs`, {
          data: { companyName: event.target.name }
        })
        .then(res => {
          if (res.status === 200) {
            axios.get("http://localhost:3002/api/company/jobs").then(res => {
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

  handleApply = event => {
    event.preventDefault();

    swal("Great", "You Have Applied", "success");
    this.setState({
      applied: true
    });
  };
 

  render() {
    const { data } = this.state;
    const { role } = this.props;
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column>
            <Header as="h2" icon color="red" textAlign="center">
              Jobs Table
            </Header>
          </Grid.Column>
        </Grid>

        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>CEO</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {data.map(item => (
            <Table.Body key={item._id}>
              <Table.Row>
                <Table.Cell>{item.ceo}</Table.Cell>
                <Table.Cell>{item.companyName}</Table.Cell>
                <Table.Cell>{item.position}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.salary}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                {role === "student" ? (
                  <Button negative
                    name={item.position}
                    onClick={this.handleApply}
                    disabled={this.state.applied}
                  >
                    <Button.Content visible>Apply</Button.Content>
                    
                  </Button>
                ) : null}
              </Table.Row>

              {this.props.role !== "admin" ? null : (
                <Button negative
                  type="submit"
                  name={item.companyName}
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

export default Jobs;
