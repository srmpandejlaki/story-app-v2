import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/login-input';
import { login } from '../utils/index';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun yaaa <Link to="/register">Daftar di sini aja</Link></p>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;