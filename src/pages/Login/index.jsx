import { Link } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api"

// COMPONENTES
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"
import Header from "../../components/Header"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })

            localStorage.setItem('token', token.token)
        } catch (error) {
            alert("Erro")
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header label="Login" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                <CustomInput type="email" placeholder="Email" ref={emailRef} required />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} required />

                <CustomButton label="Acessar" />
            </form>


            <Link to={'/'}>Não tem cadastro? Clique aqui!</Link>
        </div>
    )
}