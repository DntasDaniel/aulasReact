import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import HomeProducts from "./pages/HomeProducts";
import Registration from "./pages/Registration";

export default function rotas() {
  let [autorizacao, setAutorizacao] = useState("");

  const pegarInfoAutorizacao = localStorage.getItem("telaAutorizada");
  const navigate = useNavigate();

  useEffect(() => {
    setAutorizacao(pegarInfoAutorizacao);

    if (autorizacao === true) {
      navigate("/products");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/products" element={<HomeProducts />} />
    </Routes>
  );
}
