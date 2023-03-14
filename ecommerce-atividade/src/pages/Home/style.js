import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #0F1F37;
  background-size: auto;
  
  @media (max-width: 1445px) {
    flex-wrap: wrap;
    height: 100%;
    min-width: 1164px;
    gap: 50px;
    padding-bottom: 20px;
  }
 

  .divTitulo-img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    span{
      font-family: 'Poppins', sans-serif;
      font-size: normal;
      font-weight: 900;
      font-size: 96px;
      line-height: 144px;
      color: #FFFFFF;
    }
  }

  .imgLogo{
    position: absolute;
    top: 60px;
    left: 60px;
  }

  .divLogin{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

