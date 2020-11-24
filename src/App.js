
import './App.css';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import { connect } from 'react-redux';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import React, {Component} from 'react';
import { render } from '@testing-library/react';

class App extends Component {



render(){

  return (
  
    <div className="App">

       {this.props.location.pathname!=='/' && <Nav/>}
         {routes}

     </div>

  )
}
  }

const mapStateToProps = state => state

export default withRouter (connect(mapStateToProps)(App));
