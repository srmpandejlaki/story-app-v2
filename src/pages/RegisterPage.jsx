import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/register-input";
import { register } from "../utils/index";

function RegisterPage() {
  async function onRegisterHandler(user) {
    await register(user);
  }

  return (
    <section className='register-page'>
      <h2>Santai aja kawan ...</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>Kembali ke <Link to="/">Masuk</Link></p>
    </section>
  )
}

export default RegisterPage;