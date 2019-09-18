import React, {Component} from 'react';
import {Link} from "react-router-dom";


export class Home extends Component {


    render() {
        return (
            <>
                <h2> Welcome {this.props.location.state.username}</h2>
                <Link to="/">Back</Link>
            </>
        )
    }
}