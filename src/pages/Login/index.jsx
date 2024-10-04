import { Link } from "react-router-dom"
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"
import Header from "../../components/Header"

export default function Login() {
    return (
        <div className="flex flex-col items-center">
            <Header label="Login" />

            <form className="flex flex-col gap-4 w-72">
                <CustomInput type="email" placeholder="Email" />
                <CustomInput type="password" placeholder="Senha" />

                <CustomButton label="Acessar" />
            </form>


            <Link to={'/'}>Não tem cadastro? Clique aqui!</Link>
        </div>
    )
}