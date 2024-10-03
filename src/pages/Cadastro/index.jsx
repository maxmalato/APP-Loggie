import { Link } from "react-router-dom"
import Botao from "../../components/Botao"
import CustomInput from "../../components/CustomInput"
import Header from "../../components/Header"

export default function Cadastro() {
    return (
        <div className="flex flex-col items-center">
            <Header label="Cadastro" />

            <form className="flex flex-col gap-4 w-72">
                <CustomInput type="text" placeholder="Nome" />
                <CustomInput type="email" placeholder="Email" />
                <CustomInput type="password" placeholder="Senha" />
                <CustomInput type="password" placeholder="Repita sua senha" />
            </form>

            <Botao label="Cadastrar" />

            <Link to={'/login'}>Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}