import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Item, DetalhesItem, BotaoAddToCart } from "./style";
import MyContext from "../../context/MyContext";
import productslist from "../../../productslist.json";
import { FiCornerUpLeft } from "react-icons/fi";



export default function Details() {
  const { addItens } = useContext(MyContext);
  const [produto, setProduto] = useState([]);
  const electronics = productslist.Electronics;
  const clothing = productslist.Clothing;
  const totalItens = [];

  electronics.forEach((item) => {
    totalItens.push(item);
  });

  clothing.forEach((item) => {
    totalItens.push(item);
  });

  const { id } = useParams();

  const idProcurado = totalItens.find((item) => item.id === id);

  const navigate = useNavigate()

  function backStore(){
    navigate("/products")
  }

  useEffect(() => {
    setProduto(idProcurado);
  }, []);

  return (
    <Container id="totalCart">
      <Item>
        <FiCornerUpLeft className="iconBack" size={30} onClick={backStore} />
        <div
          className="img"
          style={{ backgroundImage: `url(${produto.img})` }}
        />
        <DetalhesItem>
          <h2>{produto.descricao}</h2>
          <h3>
            Cor: <span>{produto.cor}</span>
          </h3>
          <h3>
            Material: <span>{produto.material}</span>
          </h3>
          <h3>
            Tamanho: <span>{produto.tamanho}</span>
          </h3>
          <h3>
            Vendedor: <span>{produto.vendedor}</span>
          </h3>
          <h3>
            Valor: <span>{`R$${produto.valor},00`}</span>
          </h3>
        </DetalhesItem>
        <BotaoAddToCart onClick={() => {addItens(produto)}}>Add to Cart</BotaoAddToCart>
      </Item>
    </Container>
  );
}
