import { BtnsLogin, Container, Icons, Image_welcome, Login_register, logo_title } from "./styles";
import password_image from "../../assets/login/password.svg";
import icon_facebook from "../../assets/login/facebook.png";
import icon_google from "../../assets/login/google.png"
import Input from "../../components/Input"
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
                    <Input
                        label="Informe o seu E-mail"
                        placeholder="E-mail"
                        colorLabel="white"
                        id="email"
                        autocomplete="off"
                    />

                    <Input
                        label="Informe sua senha"
                        type="password"
                        id="password"
                        placeholder="Senha"
                        autocomplete="off"
                        colorLabel="white"
                    />

                    <div id="ForgotPassword" >
                        <a href="" >Esqueceu a senha?</a>
                    </div>

                    <BtnsLogin>
                        <div id="btnSubmit">
                            <button>Login</button>
                        </div>

                        <p>ou</p>
                        <Icons>
                            <img src={icon_facebook} />
                            <img src={icon_google} />
                        </Icons>
                    </BtnsLogin>

                </form>

            </Login_register>
        </Container>


    );
}

export default Login;