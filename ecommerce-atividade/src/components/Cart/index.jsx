import React, { useContext } from "react";
import MyContext from "../../context/MyContext";

import {
  TotalCart,
  Item,
  BtnClear,
  BtnFinalizarPedido,
  BtnRemove,
  BtnSave,
  MensagemCart,
  DivBtnClearFinalizarPedido,
} from "./styles";

export default function Cart() {
  const { cart, setCart } = useContext(MyContext);

  function finalizarPedido() {
    let cartModal = document.getElementById("totalCart");
    cartModal.style.display = "none";

    if (cart.length > 0) {
      alert("Pedido finalizado com sucesso!");
    } else {
      alert("Error: não há produtos no carrinho.");
    }
  }

  function clear() {
    setCart([]);
  }

  function removerProduto(produto) {
    cart.forEach((element, index) => {
      if (element.descricao === produto.descricao && element.quantidade >= 2) {
        element.quantidade = element.quantidade - 1;
      } else if (
        element.descricao === produto.descricao &&
        element.quantidade <= 1
      ) {
        cart.splice(index, 1);
      }
    });

    setCart([...cart]);
  }

  return (
    <>
      <TotalCart id="totalCart">
        {cart.length > 0 ? (
          cart.map((produto, i) => {
            return (
              <div key={i}>
                <Item>
                  <div className="divImgInf">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${produto.img})` }}
                    />
                    <div className="divInf">
                      <h3>
                        {produto.descricao} with multiple colors, for men and
                        lady
                      </h3>
                      <p>
                        Size: {produto.tamanho}, Color: {produto.cor}, Material:
                        {produto.material}
                      </p>
                      <p>Seller: {produto.vendedor}</p>
                      <div className="divTotalBtn">
                        <BtnRemove
                          type="button"
                          onClick={() => removerProduto(produto)}
                        >
                          Remover
                        </BtnRemove>
                        <BtnSave type="button">Save for later</BtnSave>
                      </div>
                    </div>
                  </div>
                  <div className="divTotalQuantidade">
                    <span>${produto.valor * produto.quantidade}</span>
                    <form>
                      <select name="quantidade" id="quantidade">
                        <option value={produto.quantidade}>
                          Qty: {produto.quantidade}
                        </option>
                      </select>
                    </form>
                  </div>
                </Item>
                <div className="linha"></div>
              </div>
            );
          })
        ) : (
          <MensagemCart>Não há produtos no carrinho!</MensagemCart>
        )}

        <DivBtnClearFinalizarPedido>
          <BtnFinalizarPedido type="button" onClick={finalizarPedido}>
            Finalizar Pedido
          </BtnFinalizarPedido>
          <BtnClear type="button" onClick={clear}>
            Clear
          </BtnClear>
        </DivBtnClearFinalizarPedido>
      </TotalCart>
    </>
  );
}
