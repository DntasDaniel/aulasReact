import React from "react";

import logo from "../../assets/image 2.svg";

import Login from "../../components/Login";

import { Container } from "./style";

export default function Home() {
  return (
    <Container id="totalCart">
      <div className="divTitulo-img">
        <img className="imgLogo" src={logo} alt="logo" />
        <span>
          Já tem login? <br />
          Entre
        </span>
      </div>
      <div className="divLogin">
        <Login />
      </div>
    </Container>
  );
}
