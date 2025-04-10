import React from 'react';
import PropTypes from 'prop-types';

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  onNameChange = (event) => {
    this.state(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChange = (event) => {
    this.state(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChange = (event) => {
    this.state(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.register(() => {
      return {
        name: event.target.value,
        email: event.target.value,
        password: event.target.value,
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='form-container'>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChange} />
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
        <input type="password" placeholder="Password" autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
        <button>Register</button>
      </form>
    )
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;