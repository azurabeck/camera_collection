import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './component/auth/Login'
import Dashboard from './component/layout/dashboard'

class App extends Component { 

  render() {

    const { auth } = this.props

    return (
      <div className="App">
          <Switch> 
              <Route exact path='/' component={Login}></Route>   
              <Route path='/home' component={Dashboard}></Route>          
          </Switch>
      </div>
    );
  }  
}


const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps, null)(App)
