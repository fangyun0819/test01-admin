import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import LoginForm from './components/LoginForm.js'
import RegisterForm from './components/RegisterForm.js'

class LoginPage extends Component {
  constructor(){
    super();
    this.state = {
      isLogin: true,
      username: 'username',
      password: 'password'
    }
  }
    submit(){
        //e.preventDefault();
        // gather your data/credentials here
        const {username , password} = this.state;
        const credentials = { username: username, password: password};
        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    _handerRegister(){
      this.setState({isLogin: false})
    }

    _handleLogin(){
      this.setState({isLogin: true})
    }

    _handerUsernameChange(username){
      this.setState(username);
    }

    _handerPasswordChange(password){
      this.setState(password);
    }

    _renderForm(){
      if(this.state.isLogin)
        return (<LoginForm 
          _handerRegister={ () => this._handerRegister()}
          onSubmit={ (username, password) => this.props.userLogin({username, password})}/>)
      else
        return (<RegisterForm _handleLogin={ () => this._handleLogin()}/>)
    }
    render() {
        return (
            <form >
              {this._renderForm()}
            </form>
        );
    }
};

export default connect(undefined, { userLogin })(LoginPage);