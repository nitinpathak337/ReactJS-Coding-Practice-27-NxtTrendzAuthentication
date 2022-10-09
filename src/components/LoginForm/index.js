// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: ''}

  usernameEntered = event => {
    this.setState({userName: event.target.value})
  }

  passwordEntered = event => {
    this.setState({password: event.target.value})
  }

  login = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
  }

  render() {
    return (
      <div className="bg">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container">
          <img
            className="website-logo-2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label htmlFor="username" className="label-el">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="input-el"
            placeholder="Username"
            onChange={this.usernameEntered}
          />
          <label htmlFor="password" className="label-el">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input-el"
            onChange={this.passwordEntered}
          />
          <button className="login-button" type="submit" onClick={this.login}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
