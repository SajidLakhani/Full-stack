import React, { Component } from 'react';
import {Link }from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Signout extends Component {
    render() {
        return (
            <div>
                <Button negative onClick = {<Link to="/login"></Link>}>SignOut</Button>
            </div>
        );
    }
}

export default Signout;