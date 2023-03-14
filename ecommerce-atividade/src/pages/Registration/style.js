import styled from "styled-components";

export const ContainerRegistration = styled.div`

  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #0F1F37;
  
  @media (max-width: 1400px) {
    flex-wrap: wrap;
    height: 100%;
    min-width: 1117px;
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

  .divSignUp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;