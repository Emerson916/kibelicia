import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    
`;

export const Image_welcome = styled.div`
    width: 40vw;
    height: inherit;
    background: var(--color-green-gradient);
    text-align: justify;
    padding: 70px 0 0 40px;
    color: #fff;
    
    >h2{
        font-size: 32px;
    }

    >p{
        padding-top: 20px;
        padding-right: 40px;
        font-size: 20px;
    }   
    >img{
        width: 450px;
        height: 450px;
        padding: 0 30px 0 30px;
    }
`;

export const Login_register = styled.div`
    width: 60vw;
    height: inherit;

    .container_logo{
        width: 100%;
        
        >h3{
            width: 100%;
            margin: 10px auto 0 auto;
            text-align: center;
            font-size: 2.0rem;   
        }
    }
    
    .logo{
        width: 80px;
        height: 80px;
        text-align: center;
        border-radius: 90px;
        margin: 100px auto 0 auto;
        padding: 10px;
        background-color: var(--primary);

        >img{
            width: 60px;
            height: 60px;
        }   
    }

    >form{
        width: 500px;
        display: inline-block;
        vertical-align: middle;
        margin: 80px auto 0 auto;

        >input{
            width: 450px;
            height: 40px;
            border-radius: 5px;
            border: solid 1px var(--primary);
            padding: 10px;
            margin: 10px;
        }

        button {
        width: 150px;
        padding: 10px;
        font-weight: bold;
        background-color: var(--primary);
        border: 2px solid var(--textPrimary);
        border-radius: 90px;
        color: var(--textPrimary);
        cursor: pointer;
        transition: .2s;

        :hover{
            border: 2px solid var(--primary);
            background-color: transparent;
            color: var(--primary);
        }
        :active{
            transform: scale(0.95);
        }
    }
    }
`;





