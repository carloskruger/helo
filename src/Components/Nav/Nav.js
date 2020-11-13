import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {

    

    render(){
        {console.log(this.props.username)}
{console.log(this.props.profile_pic)}
        return(
            <div>
                <p>The picture should be here</p>
                <img src={this.props.profile_pic} height="250px"/>
        <p>{this.props.username}</p>
                <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/post/:postid">New Post</Link></li>
                <li><Link to="/">logout</Link></li>
                </ul>
            </div>
        )
    }
}



const mapStateToProps = state => state

export default connect(mapStateToProps)(Nav);

