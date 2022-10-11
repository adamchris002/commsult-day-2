import React from "react";
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  onLogin = () => {
    if (
      this.state.username === "atmajaya" &&
      this.state.password === "atma2022"
    ) {
      this.props.changePage("home");
    } else {
      this.setState({ errorMessage: "Invalid Login" });
    }
  };

  render() {
    return (
      <div className="form-login">
        <div>
          <label>Username: </label>
          <input
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <br/>
          {this.state.errorMessage !== "" ? (
            <label className="label-error">{this.state.errorMessage}</label>
          ) : null}
        </div>

        <div>
          <label>Password: </label>
          <input
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            type="password"
          />
          <br/>
          {this.state.errorMessage !== "" ? (
            <label className="label-error">{this.state.errorMessage}</label>
          ) : null}
        </div>

        <button className="button-login" onClick={this.onLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
