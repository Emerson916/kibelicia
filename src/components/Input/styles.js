import styled from "styled-components";

export const Container = styled.div`
    max-width: 420px;
    padding: 1rem;
    
    > label{
        position: relative; 
        > span{
            position: absolute;
            left: 2px;
            top: 0;
            margin: 7.2px;
            white-space: nowrap;
            background: #fff;
            color: #A8A8A8;
            transition: transform 200ms ease-in;
            line-height: 2.7;
            padding: 0px 10px 0px 10px;
        }
        
        > input {
            display: block;
            width: 100%;
            border: 2px solid #33FFA9;
            padding: 1rem;
            background: transparent;
            border-radius: 10px;
            height: 56px;
        } 
        > input:focus+span,
          input:not(:placeholder-shown)+span {
            transform: translate(0.25rem, -65%) scale(0.8);
            color: #4F4F4F;
            font-size: 15px;
            font-weight: 700;
        }
        
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px white inset;
        }
    } 
`;