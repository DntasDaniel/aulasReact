import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    min-width: 500px;
    min-height: 730px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.div`
    height: 600px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img{
        height: 300px;
        width: 300px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .iconBack{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 300px;
        margin-top: -50px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .iconBack:hover{
        transform: scale(1.1);
    }

`;

export const DetalhesItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;

    h2{
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    h3{
        text-align: start;
    }

    span{
        font-weight: 400;
    }
`;

export const BotaoAddToCart = styled.button`
    margin-top: 20px;
    width: 150px;
    height: 35px;
    background: #BBBB31;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    border: none;

    &&:hover{
        transform: scale(1.1);
    }
`;