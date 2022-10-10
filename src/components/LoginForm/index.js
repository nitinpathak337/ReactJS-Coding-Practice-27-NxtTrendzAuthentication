// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  usernameEntered = event => {
    this.setState({username: event.target.value})
  }

  passwordEntered = event => {
    this.setState({password: event.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  login = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {showError, errorMsg} = this.state

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
          {showError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
