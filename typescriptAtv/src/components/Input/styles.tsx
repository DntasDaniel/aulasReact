import styled from "styled-components";

export const DivInputBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const InputLog = styled.input`
  width: 350px;
  height: 40px;
  font-size: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const BtnBuscar = styled.button`
  height: 40px;
  width: 90px;
  background-color: orange;
  font-size: 16px;
  color: white;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &&:hover {
    transform: scale(1.02);
  }
`;
