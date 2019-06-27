import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Image
} from "semantic-ui-react";
import Jobs from "./Jobs";
import Companies from "./Companies";
import Login from "../../Auth/Login";

class Student extends React.Component {
  state = {
    jobs: [],
    companies: [],
    screen: "jobs"
  };

  handleScreen = event => {
    if (event.target.name === "jobs") {
      this.setState({
        screen: "jobs"
      });
    } else {
      this.setState({
        screen: "companies"
      });
    }
  };

  render() {
    return (
      <div>
        {/* <Button negative onClick = {}>Signout</Button> */}
        <Segment inverted>
          <Grid stackable textAlign="center" >

          <Grid.Row verticleAlign="middle">
            <Grid.Column>
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular />
             
            </Header>
            <h2>Companies</h2>
             <Button negative name="companies" onClick={this.handleScreen}>
                  View
                </Button>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row verticleAlign="middle">
                <Grid.Column>
            <Header as='h2' icon textAlign='center'>
              <Icon name='desktop' circular />
              
            </Header>
            <h2>Jobs</h2>
             <Button negative name="jobs" onClick={this.handleScreen}>
                  View
                </Button>
                </Grid.Column>
                </Grid.Row>




            {/* <Divider vertical>OR</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="copyright outline" />
                  Companies
                </Header>
                <Button primary name="companies" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="briefcase" />
                  Jobs
                </Header>
                <Button primary name="jobs" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>
            </Grid.Row> */}
          </Grid>
        </Segment>

        {this.state.screen === "companies" ? (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Companies />
            </Grid.Column>
          </Grid>
        ) : (
            <Grid textAlign="center" verticalAlign="middle" className="app">
              <Grid.Column>
                <Jobs role={this.props.role} />
              </Grid.Column>
            </Grid>
          )}
      </div>
    );
  }
}

export default Student;
