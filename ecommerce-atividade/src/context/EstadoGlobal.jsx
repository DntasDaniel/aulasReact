import React, { useState } from "react";
import MyContext from "./MyContext";

export default function EstadoGlobal({ children }) {
  const [cart, setCart] = useState([]);

  function addItens(item) {
    const existente = cart.find(
      (produto) => produto.descricao === item.descricao
    );

    if (existente) {
      cart.forEach((produto) => {
        if (produto === existente) {
          produto.quantidade = produto.quantidade + 1;
        }
      });

      setCart([...cart]);
    } else {
      const quantidade = {
        ...item,
        quantidade: 1,
      };

      setCart([...cart, quantidade]);
    }
  }

  return (
    <MyContext.Provider value={{ cart, setCart, addItens }}>
      {children}
    </MyContext.Provider>
  );
}
