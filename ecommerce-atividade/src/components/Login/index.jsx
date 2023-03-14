import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

export default function Login( ) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const enviaLogin = ( ) => {
        navigate("/products");
  };

  return (
    <Container>
      <form onSubmit={enviaLogin}>
        <br />
        <br />
        <br />
        <br />
        <label>Log in</label>
        <br />
        <br />
        <label htmlFor="emailLogar">Email</label>
        <br />
        <input
          type="email"
          name="emailLogar"
          id="emailLogar"
          value={email}
          placeholder="Enter Your Email Address"
          onChange={() => setEmail()}
        />
        <br />
        <br></br>
        <label htmlFor="senhaLogar">Senha</label>
        <br />
        <input
          type="password"
          name="senhaLogar"
          id="senhaLogar"
          value={senha}
          placeholder="Enter Your Password"
          onChange={() => setSenha()}
        />
        <br />
        <br />
        <input type="checkbox" name="salvarDados" id="salvarDados" />
        <label htmlFor="salvarDados" id="labelLembrar">
          Remember
        </label>
        <br />
        <button type="submit" id="btnLogar">
          Log in
        </button>
        <div id="linha" />
        <p>Don't have an account?</p>
        <a onClick={() => navigate("/registration")}>Sign up</a>
      </form>
    </Container>
  );
}
