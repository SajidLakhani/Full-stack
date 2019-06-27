import React from "react";
import { Grid, Header, Form, Input, Segment, Button } from "semantic-ui-react";
import swal from "sweetalert";
import axios from "axios";
class Post extends React.Component {
  state = {
    data: [],
    ceo: "",
    position: "",
    description: "",
    companyName: "",
    salary: null,
    date: "24/04/2019"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const {
      ceo,
      companyName,
      position,
      description,
      salary,
      date
    } = this.state;
    event.preventDefault();
    if (this.props.role === "company") {
      axios
        .post(`http://localhost:3002/api/company/jobs`, {
          ceo: ceo,
          position: position,
          description: description,
          companyName: companyName,
          salary: salary,
          date: date
        })
        .then(res => {
          if (res.status === 200) {
            swal("Great!", "Your job is posted ", "success");
          }
        })
        .catch(err => console.log(err));
    }
  };
  
  render() {
    console.log(this.state);

    const { ceo, position, description, companyName, salary } = this.state;
    return (





      

      <div>
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column>
            <Header as="h2" icon color="blue" textAlign="center">
              Post A Job
            </Header>
          </Grid.Column>
        </Grid>

        

        <Form onSubmit={this.handleSubmit} size="small">
          <Segment inverted>
            <Form.Input
              fluid
              name="ceo"
              icon="user"
              iconPosition="left"
              placeholder="ceo"
              onChange={this.handleChange}
              value={ceo}
              type="text"
            />

            <Form.Input
              fluid
              name="position"
              icon="user"
              iconPosition="left"
              placeholder="position"
              onChange={this.handleChange}
              value={position}
              type="text"
            />

            <Form.Input
              fluid
              name="description"
              icon="user"
              iconPosition="left"
              placeholder="description"
              onChange={this.handleChange}
              value={description}
              type="text"
            />

            <Form.Input
              fluid
              name="companyName"
              icon="user"
              iconPosition="left"
              placeholder="companyName"
              onChange={this.handleChange}
              value={companyName}
              type="text"
            />

            <Form.Input
              fluid
              name="salary"
              icon="user"
              iconPosition="left"
              placeholder="salary"
              onChange={this.handleChange}
              value={salary}
              type="number"
            />

            <Button negative
             fluid size="large">
              Submit
            </Button>
          </Segment>
        </Form>
        </div>
      
    );
  }
}

export default Post;
