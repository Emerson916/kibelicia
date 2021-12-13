import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary: #33FFA9;
        --secundary: #308570;
        --color-green-gradient: linear-gradient(180deg, #33FFA9 10%, #308570 120%);
        --textPrimary: #000000;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif, Arial;
        color: var(--textPrimary);
       
    }
    
    
`;