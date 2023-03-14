import styled from "styled-components";

export const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1485px;
    min-height: 100%;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    background-color: #FFFF;
`;

export const DivInputCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1393px;
    margin-top: 40px;
`;

export const DivCartQuantidade = styled.div`
    position: relative;
    display: flex;
    width: 36px;
    top: 10px;

    svg{
        cursor: pointer;
    }

    &&:hover{
        transform: scale(1.1);
    }
`;

export const QuantidadeItensCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background: #BBBB31;
    position: absolute;
    top: -25px;
    left: 5px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #FFFF;

`;

export const InputPesquisa = styled.input`
    border: solid 2px #0F1F37;
    padding: 10px 15px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-size: 20px;
`;

export const DivCartSair = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const DivIconSair = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 53px;
    width: 36px;
    cursor: pointer;

    &&:hover{
        transform: scale(1.1);
    }

    label{
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        cursor: pointer;
    }
`;