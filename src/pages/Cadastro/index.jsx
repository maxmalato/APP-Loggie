import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import api from "../../services/api.js"

// COMPONENTES
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import Header from "../../components/Header"
import MessageAccess from "../../components/MessageAccess"

export default function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    const validatePassword = (password) => {
        const minLength = 6
        return password.length >= minLength
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLocaleLowerCase())
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateEmail(emailRef.current.value)) {
            setMessage("Por favor, informe um e-mail válido.")
            setMessageType("error")
            return
        }

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setMessage("As senhas não iguais.")
            setMessageType("error")
            return
        }

        if (!validatePassword(passwordRef.current.value || confirmPasswordRef.current.value)) {
            setMessage("Precisa ter mais de seis dígitos.")
            setMessageType("error")
            return
        }

        try {
            await api.post('/register', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value
            })
            setMessage("Cadastrado com sucesso!")
            setMessageType("success")

        } catch (error) {
            setMessage("Erro de envio 422. Verifique com o suporte.")
            setMessageType("Error")
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header label="Cadastro" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                <CustomInput type="text" placeholder="Nome" ref={nameRef} required />
                <CustomInput type="text" placeholder="Email" ref={emailRef} required />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} required />
                <CustomInput type="password" placeholder="Repita sua senha" ref={confirmPasswordRef} required />

                <MessageAccess message={message} type={messageType} />

                <CustomButton label="Cadastrar" />
            </form>

            <Link to={'/login'}>Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}