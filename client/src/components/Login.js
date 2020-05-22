import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    axios.post('/login', {
      email: this.state.userName,
      password: this.state.password
    }).then(res => {
      localStorage.setItem('example-jwt-jwt', res.data);
      this.props.history.push('/protected')
    }).catch(() => this.setState({

      error: true
    }));
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <form onSubmit={e => this.submit(e)}>
          <label>email</label><input type="text" name="userName" onChange={e => this.change(e)} /><br/>
          <label>password</label><input type="password" name="password" onChange={e => this.change(e)} /><br />
          <button type="submit">Submit</button>
        </form>
        {error && <p>Invalid credentials</p>}
      </div>
    );
  }

}

export default Login;