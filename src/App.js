import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './component/auth/Login'
import Dashboard from './component/layout/dashboard'

class App extends Component { 

  render() {
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

export default (App)
