import React from "react";
import logo from "../../assets/image 2.svg";

import SignUp from "../../components/SignUp"; 

import { ContainerRegistration } from "./style";

export default function Home() {

  return (
    
    <ContainerRegistration>
        <div className="divTitulo-img">
        <img className="imgLogo" src={logo} alt="logo" />
        <span>
            Não tem <br />
            Login? <br />
            Cadastre-se
        </span>
        </div>
        <div className="divSignUp">
        <SignUp />
        </div>
    </ContainerRegistration>
     
  );
}
