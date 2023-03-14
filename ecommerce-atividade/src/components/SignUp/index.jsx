import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container } from "./style";

export default function Cadastro( ) {
  const [nome, setNome] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
 
  const navigate = useNavigate()

  const enviaCadastro = ( ) => {
    localStorage.setItem("name", nome)
    localStorage.setItem("email", emailCadastro)
    localStorage.setItem("senha", senhaCadastro)
    navigate("/products")
  }

  return (
    <Container>
      <form onSubmit={enviaCadastro}>
        <br />
        <label>Cadastre-se</label>
        <br />
        <br />
        <label>Nome</label>
        <br />
        <input
          type="text"
          name="nomeCadastro"
          id="nomeCadastro"
          value={nome}
          placeholder="Enter Your Full Name"
          onChange={( ) => setNome( )}
        />
        <br />
        <br />
        <label htmlFor="emailCadastro">Email</label>
        <br />
        <input
          type="email"
          name="emailCadastro"
          id="emailCadastro"
          value={emailCadastro}
          placeholder="Enter Your Email Address"
          onChange={( ) => setEmailCadastro( )}
        />
        <br />
        <br></br>
        <label htmlFor="senhaCadastro">Senha</label>
        <br />
        <input
          type="password"
          name="senhaCadastro"
          id="senhaCadastro"
          value={senhaCadastro}
          placeholder="Enter Your Password"
          onChange={( ) => setSenhaCadastro( )}
        />
        <br />
        <br />
        <input type="checkbox" name="aceitarTermos" id="aceitarTermos" />
        <label htmlFor="aceitarTermos" id="labelTermos">
          I agree with <a className="palavraChave">Terms</a> and{" "}
          <a className="palavraChave">Privacy</a>
        </label>
        <br />
        <button type="submit" id="btnCadastro">
          Sign up
        </button>
        <div id="linha" />
        <p>Already have an account?</p>
        <a onClick={() => navigate("/")} >Log in</a>
      </form>
    </Container>
  );
}
