import { Container, Image_welcome, Login_register, logo_title } from "./styles";
import password_image from "../../assets/login/password.svg";
import burguer from "../../assets/login/burger.png";


function Login() {
    return (
        <Container>
            <Image_welcome>
                <h2>Bem-vindo de volta!!</h2>
                <p>Olá, é bom vê-lo de volta
                    acesse sua conta e veja as promoções.</p>

                <img src={password_image} alt="imagem_login" />
            </Image_welcome>

            <Login_register>

                <div className="container_logo">
                    <div className="logo">
                        <img src={burguer} alt="logo" />
                    </div>
                    <h3>Kibelicia</h3>

                </div>
                <form>
                    <input
                        label="Informe o seu E-mail"
                        placeholder="E-mail"
                        colorLabel="white"
                        id="email"
                        autocomplete="off"
                    />

                    <input
                        label="Informe sua senha"
                        type="password"
                        id="password"
                        placeholder="Senha"
                        autocomplete="off"
                        colorLabel="white"
                    />

                    {/* <div id="ForgotPassword" >
                            <p>Esqueceu a senha?</p> 
                        </div> */}
                    <div id="btnSubmit">
                        <button>Login</button>
                    </div>
                </form>

            </Login_register>
        </Container>


    );
}

export default Login;