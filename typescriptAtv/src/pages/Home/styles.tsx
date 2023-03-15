import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 700px;
`;

export const DivLogInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 10px;
`;

export const Card = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: #ffa;
`;

export const DivNameImgLogin = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
  }

  p {
    width: 600px;
    margin-left: 12px;
    font-size: 18px;
  }

  img {
    margin-left: 10px;
  }

  span {
    width: 600px;
    margin-left: 12px;
    margin-top: 10px;
    font-size: 18px;
  }
`;

export const BtnVerMais = styled.button`
  width: 130px;
  height: 30px;
  background-color: orange;
  font-size: 12px;
  border: none;
  transition: all 0.3s;
  margin-left: 12px;
  margin-top: 15px;

  &&:hover {
    transform: scale(1.02);
  }
`;
