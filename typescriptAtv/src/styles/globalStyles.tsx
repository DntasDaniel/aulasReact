import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        background-color: #ddd;
        
    }
    svg{
        margin-left:35%;
        border:solid #333 3px;
        border-radius: 100px;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
