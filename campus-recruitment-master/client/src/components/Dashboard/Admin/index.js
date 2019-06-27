import React from "react";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";

import Companies from "../Student/Companies";
import Jobs from "../Student/Jobs";
import Students from "../Company/Students";
import {Link} from 'react-router-dom';



class Admin extends React.Component {
  state = {
    jobs: [],
    companies: [],
    screen: "students"
  };


  handleScreen = event => {
    switch (event.target.name) {
      case "students":
        this.setState({ screen: "students" });
        return;
      case "companies":
        this.setState({ screen: "companies" });
        return;
      case "jobs":
        this.setState({ screen: "jobs" });
        return;
      default:
        this.setState({ screen: "students" });
        return;
    }
  };

  renderScreen = screen => {
    switch (screen) {
      case "companies":
        return (
          <div>
            <Grid textAlign="center" verticalAlign="middle" className="app">
              <Grid.Column>
                  <Companies role = {this.props.role}/>
              </Grid.Column>
            </Grid>
          </div>
        );

      case "jobs":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
                <Jobs role = {this.props.role} />
            </Grid.Column>
          </Grid>
        );

      case "students":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
                <Students  role = {this.props.role}/>
            </Grid.Column>
          </Grid>
        );

      default:
        return "Please select";
    }
  };

  render() {

 

    return (

      
      
      <div>
        
        
        <Segment inverted>
        
          <Grid columns={2} inverted textAlign="center" color = "black">
          <Grid.Row verticleAlign="middle">
            <Grid.Column>
            <Header as='h2' icon textAlign='center' color = "white">
              <Icon name='users' circular color = "white" />
              
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
                
                <Grid.Column>
                <Grid.Row verticleAlign="middle">
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' circular />
              
            </Header>
            <h2>Students</h2>
             <Button negative name="students" onClick={this.handleScreen}>
                  View
                </Button>
                </Grid.Row>
                </Grid.Column>
                
                
            {/* <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="globe" />
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

              <Grid.Column>
                <Header icon>
                  <Icon name="briefcase" />
                  Students
                </Header>
                <Button primary name="students" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>
            </Grid.Row> */}
          </Grid>
        </Segment>

        {this.renderScreen(this.state.screen)}
      </div>
    );
  }
}

export default Admin;
