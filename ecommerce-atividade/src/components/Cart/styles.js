import styled from "styled-components";


export const TotalCart = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    height: 552px;
    width: 880px;
    background: #FFFFFF;
    position: absolute;
    z-index: 99;
    border: 1px solid #DEE2E7;
    border-radius: 6px;
    overflow: auto;
    

    .linha{
        width: 840px;
        height: 1px;
        background-color: #DEE2E7;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 136px;
    padding: 0 10px;

    .divImgInf {
        display: flex;

        .img{
            height: 80px;
            width: 80px;
            object-fit: cover;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .divInf{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 605px;
            margin-left: 10px;

            h3{
                font-family: 'Inter', sans-serif; 
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                color: #1C1C1C;
                margin-bottom: 2px;
            }

            p{
                font-family: 'Inter', sans-serif; 
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: -0.2px;
                color: #8B96A5;

            }

            .divTotalBtn{
                display: flex;
                gap: 5px;
                margin-top: 2px;

            }

        }
       
    }

    .divTotalQuantidade{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        
        span{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            width: 123px;
            text-align: end;
        }


        #quantidade{
            border: 1px solid #DEE2E7;
            border-radius: 6px;
            width: 123px;
            height: 40px;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #1C1C1C;
        }
    }

`;

export const BtnRemove = styled.button`
    font-family: 'Inter', sans-serif; 
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FA3434;
    height: 30px;
    width: 71px;
    background: #FFFFFF;
    border: 1px solid #DEE2E7;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    transition: all 0.3s;

    &&:hover{
        transform: scale(1.1);
    }

`;

export const BtnSave = styled.button`
    height: 30px;
    width: 108px;
    background: #FFFFFF;
    border: 1px solid #DEE2E7;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    font-family: 'Inter', sans-serif; 
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #0D6EFD;
    transition: all 0.3s;

    &&:hover{
        transform: scale(1.1);
    }

`;


export const BtnClear = styled.button`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    width: 115px;
    height: 22px;
    background: #FFFFFF;
    border: 1px solid #BBBB31;
    border-radius: 6px;
    color: #BBBB31;
    margin-right: 40px;
    transition: all 0.3s;

    &&:hover{
        transform: scale(1.1);
    }

`;

export const BtnFinalizarPedido = styled.button`
    width: 160px;
    height: 40px;
    background: RGB(117, 203, 120);
    border: 1px solid RGB(117, 203, 120);
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 40px;
    transition: all 0.3s;

    &&:hover{
        transform: scale(1.1);
    }
`;

export const MensagemCart = styled.h3`
    height: 100vh;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DivBtnClearFinalizarPedido = styled.div`
    height: 100vh;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-right: 20px;
    height: 100px;
    width: 100%;
    padding: 10px 0;
`;