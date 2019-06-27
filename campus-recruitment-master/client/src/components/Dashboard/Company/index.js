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
import FontAwesome from 'fontawesome';

import Students from "./Students";
import Applications from "./Applications";
import Post from "./Post";

class Company extends React.Component {
  state = {
    jobs: [],
    companies: [],
    screen: "students"
  };

  handleScreen = event => {
    if (event.target.name === "applications") {
      this.setState({
        screen: "applications"
      });
    } else if (event.target.name === "students") {
      this.setState({
        screen: "students"
      });
    } else {
      this.setState({
        screen: "post"
      });
    }
  };

  

  renderScreen = screen => {
    switch (screen) {
      case "students":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
                <Students role={this.props.role} />
            </Grid.Column>
          </Grid>
        );

      case "applications":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
                <Applications />
            </Grid.Column>
          </Grid>
        );

      case "post":
        return (
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column>
              <Post role={this.props.role} />
            </Grid.Column>
          </Grid>
        );

      default:
        this.setState({ screen: "students" });
    }
  };
  render() {
    console.log(this.props.role);
    return (
      <div>
        <Segment inverted>
        <Grid columns={2} inverted textAlign="center">
        <Grid.Row verticleAlign="middle">
            <Grid.Column>
              
            <Header as='h2' icon textAlign='center'>
              <Icon name='users' />
              </Header>
            <h2>Students</h2>
           
             <Button negative name="students" onClick={this.handleScreen}>
                  View
                </Button>
                </Grid.Column>
                </Grid.Row>
    <Divider inverted />

   
    <Grid.Row verticleAlign="middle">
                <Grid.Column>
            <Header as='h2' icon textAlign='center'>
              <Icon name='envelope outline'  />
             
            </Header>
            <h2>Applications</h2>
             <Button negative name="applications" onClick={this.handleScreen}>
                  View
                </Button>
                </Grid.Column>
                </Grid.Row>
    <Divider horizontal inverted>
    
    </Divider>
         

          

                

    {/* <Divider hidden />

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
              <Header as='h3'>
                  <Icon name="student" />
                  Students
                </Header>
                <Button negative name="students" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header as = 'h3'>
                  <Icon name="briefcase" />
                  Applications
                </Header>
                <Button negative name="applications" onClick={this.handleScreen}>
                  View
                </Button>
              </Grid.Column>
            </Grid.Row> */}
          </Grid>
        </Segment>

        {this.state.screen === "post" ? null : (
          <Button
            color="green"
            animated
            name="post"
            onClick={this.handleScreen}
          >
            <Button.Content visible>Post A job</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        )}

        {this.renderScreen(this.state.screen)}
      </div>
    );
  }
}

export default Company;
