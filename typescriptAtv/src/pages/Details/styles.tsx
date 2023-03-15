import styled from "styled-components";

export const DivIconBack = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  #icone {
    cursor: pointer;
    transition: all 0.2s;
  }

  #icone:hover {
    transform: scale(1.02);
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #ffa;
  border-radius: 10px;
  padding: 10px 15px;

  h3 {
    text-align: center;
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-left: 11px;
    font-size: 20px;
    margin: 10px;
  }

  img {
    margin-left: 180px;
    width: 50px;
    heigth: 50px;
  }

  span {
    margin-left: 12px;
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
  }
`;
