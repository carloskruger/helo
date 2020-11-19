import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {

    

    render(){

        return(
            <div>
                <img src={ this.props.user.profile_pic } alt={ this.props.user.username} height="100px"/>
                <p>{this.props.user.username}</p>
                <ul>   
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/new">New Post</Link></li>
                    <li><Link to="/">logout</Link></li>
                </ul>
            </div>
        )
    }
}



const mapStateToProps = state => state

export default connect(mapStateToProps)(Nav);

