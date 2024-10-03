import { Link } from "react-router-dom"
import Botao from "../../components/Botao"
import CustomInput from "../../components/CustomInput"
import Header from "../../components/Header"

export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <Header label="Login" />
            
            <form className="flex flex-col gap-4 w-72">
                <CustomInput type="email" placeholder="Email" />
                <CustomInput type="password" placeholder="Senha" />
            </form>

            <Botao label="Acessar"  />

            <Link to={'/'}>Não tem cadastro? Clique aqui!</Link>
        </div>
    )
}