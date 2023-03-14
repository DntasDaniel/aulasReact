import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Products from "../../components/Products";
import Cart from "../../components/Cart";
import productslist from "../../../productslist.json";

import MyContext from "../../context/MyContext";

import { IoIosCart, IoIosLogOut } from "react-icons/io";

import {
  Total,
  InputPesquisa,
  DivInputCart,
  QuantidadeItensCart,
  DivCartQuantidade,
  DivCartSair,
  DivIconSair,
} from "./style";

export default function HomeProducts() {
  const categorias = Object.keys(productslist);
  const categoriaOne = categorias[0];
  const categoriaTwo = categorias[1];
  const { cart, setCart } = useContext(MyContext);

  const [valorInput, setValorInput] = useState("");

  const navigate = useNavigate()

  function abrirCart(event) {
    let cart = document.getElementById("totalCart");
    cart.style.display = "flex";
    event.stopPropagation();
  }

  function sairPage() {
    navigate("/")
    localStorage.clear()

  }

  window.addEventListener("click", function (event) {
    let openCart = document.getElementById("totalCart");

    if (!openCart.contains(event.target)) {
      if (openCart.style.display == "flex") {
        openCart.style.display = "none";
      }
    }
  });

  return (
    <Total>
      <Cart Prod={productslist.Electronics} />
      <DivInputCart>
        <div>
          <InputPesquisa
            value={valorInput}
            type="text"
            onChange={(e) => setValorInput(e.target.value)}
            placeholder="Pesquisar"
          />
        </div>

        <DivCartSair>
          <DivCartQuantidade id="divCartQuantidade">
            <QuantidadeItensCart>{cart.length}</QuantidadeItensCart>
            <IoIosCart size={30} onClick={abrirCart} />
          </DivCartQuantidade>
          <DivIconSair onClick={sairPage}>
            <IoIosLogOut size={30} />
            <label>Sair</label>
          </DivIconSair>
        </DivCartSair>
      </DivInputCart>

      <Products
        produtos={productslist.Electronics}
        name={categoriaOne}
        valorInput={valorInput}
      />

      <Products
        produtos={productslist.Clothing}
        name={categoriaTwo}
        valorInput={valorInput}
      />
    </Total>
  );
}
