import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import api from "../../services/api"

// COMPONENTES
import CustomButton from "../../components/CustomButton"
import CustomInput from "../../components/CustomInput"
import Header from "../../components/Header"
import MessageAccess from "../../components/MessageAccess"
import ValidatePassword from "../../components/ValidatePassword"
import ValidateEmail from "../../components/ValidateEmail"

export default function Login() {
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!ValidateEmail(emailRef.current.value)) {
            setMessage("Por favor, informe um e-mail válido.")
            setMessageType("error")
            return
        }

        if (!ValidatePassword(passwordRef.current.value)) {
            setMessage("Precisa ter mais de seis dígitos.")
            setMessageType("error")
            return
        }

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            localStorage.setItem('token', token.token)

            navigate('/listaUsuario')
        } catch (error) {
            if (error.status === 422) {
                setMessage("E-mail não encontrado.")
                setMessageType("error")
            } else if (error.status === 400) {
                setMessage("A senha está errada.")
                setMessageType("error")
            } else {
                setMessage("Erro no servidor. Tente mais tarde.")
                console.log(error)
            }
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header label="Entrar" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                <CustomInput type="email" placeholder="Email" ref={emailRef} required />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} required />

                <MessageAccess message={message} type={messageType} />

                <CustomButton label="Acessar" />
            </form>

            <Link to={'/'}>Não tem cadastro? Clique aqui!</Link>
        </div>
    )
}