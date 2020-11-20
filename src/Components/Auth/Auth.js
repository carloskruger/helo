import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {loginUser} from '../../ducks/reducer';
import {registerUser} from '../../ducks/reducer';
import Nav from '../Nav/Nav';


class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            profile_pic : ''
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = async (e) => {
        e.preventDefault();
        const {username, password} = this.state
        try {
            const user = await axios.post('/auth/register', {username, password})
            console.log("register user : ", user)
            console.log("register user.data : ", user.data)
            this.props.registerUser(user.data)
            this.props.history.push('/dashboard')
        } 
        catch(err){ 
                console.log(err)
        }
    }

    login = async (e) => {
        e.preventDefault();
        const {username, password} = this.state
        try {
            const user = await axios.post('/auth/login', {username, password})
            console.log("We are at the logoin function at Auth front end")
            console.log("login user", user)
            console.log("login user.data", user.data)
            this.props.loginUser(user.data)
            this.props.history.push('/dashboard')
        } 
        catch(err){ 
                alert(err)
        }
    }


    render(){
        console.log("this.props.location.pathname: ",this.props.location.pathname )
        {this.props.location.pathname !== '/' && <Nav />}
        const {username, password, profile_pic} = this.state;
        return(
            <div>
            <input name="username" 
                        type="username"
                        value={ username }
                        placeholder="username" 
                        onChange={ e => this.changeHandler(e)}/>
            <input    name="password" 
                        type="password"
                        value={password} 
                        placeholder="password" 
                        onChange={ e => this.changeHandler(e)}/>
            <button onClick={e => this.login(e)}>Login</button>
            <button onClick={e => this.register(e)}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser, registerUser})(Auth)