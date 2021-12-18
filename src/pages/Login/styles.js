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
        margin: 30px auto 0 auto;
        

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
}`;

export const Link = styled.div`
    width: inherit;
    color: #00BFA6;
    text-align: end;
    font-weight: bold;
`;


export const BtnsLogin = styled.div`
    display: flex;
    margin: 40px 0px 40px 80px;
    gap: 20px;
    text-align: center;

`;

export const Icons = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 90px;
    display: flex;
    margin-left: 20px;
    gap: 20px;
    cursor: pointer;
`;

export const Registro = styled.div`
    text-align: end;
    font-weight: bold;

>a{
    padding-right: 15px;
    color: #00BFA6;
    font-size: 20px;
}
`;







