import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1393px;
    min-height: 481px;
    background: rgba(215, 217, 206, 0.17);

    #titulo{
        display: flex;
        align-items: center;
        height: 65px;
        background: #0F1F37;

         span{
            display: flex;
            align-items: center;
            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 35px;
            line-height: 52px;
            margin-left: 30px;
        }
    }

    #listaTotalProdutos{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        min-height: 416px;
        text-align: left;

        .item{
            display: flex;
            flex-direction: column;
            justify-content: left;
            width: 243px;

            .img{
                height: 261px;
                width: 243px;
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                background-color: white;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            }

            label{
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 23px;
                line-height: 38px;
                color: #000000;
                width: 270px;
            }

            span{
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 25px;
                line-height: 38px;
                color: #000000;
            }

           

        }
    }

`;

export const DivBtnAddToCartDetails = styled.div`
    display: flex;
    gap: 8px;
    
`;

export const BotaoAddToCart = styled.button`
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

export const BotaoDetails = styled.button`
    width: 80px;
    height: 35px;
    background: #BBBB31;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    border: none;
    
    a{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF; 
    }

    &&:hover{
        transform: scale(1.1);
    }
`;