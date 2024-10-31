import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import api from "../../services/api.js"

// COMPONENTES
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import Header from "../../components/Header"
import MessageAccess from "../../components/MessageAccess"
import ValidateEmail from "../../components/ValidateEmail.jsx"
import ValidatePassword from "../../components/ValidatePassword.jsx"

export default function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const [isloading, setIsLoading] = useState(false)

    function clearInputs() {
        nameRef.current.value = ''
        emailRef.current.value = ''
        passwordRef.current.value = ''
        confirmPasswordRef.current.value = ''
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!ValidateEmail(emailRef.current.value)) {
            setMessage("Por favor, informe um e-mail válido.")
            setMessageType("error")
            return
        }

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setMessage("As senhas não iguais.")
            setMessageType("error")
            return
        }

        if (!ValidatePassword(passwordRef.current.value || confirmPasswordRef.current.value)) {
            setMessage("Precisa ter mais de seis dígitos.")
            setMessageType("error")
            return
        }

        try {
            setIsLoading(true)

            await api.post('/register', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value
            })
            setMessage("Cadastrado com sucesso!")
            setMessageType("success")

            clearInputs()

        } catch (error) {
            if (error.response.data.message) {
                setMessage("O e-mail já está em uso. Faça o Login.")
                setMessageType("error")
            } else {
                setMessage("Erro de envio 422. Verifique com o suporte.")
                setMessageType("Error")
                console.log(error)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header label="Cadastro de Usuário" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                <CustomInput type="text" placeholder="Nome" ref={nameRef} required />
                <CustomInput type="email" placeholder="Email" ref={emailRef} required />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} required />
                <CustomInput type="password" placeholder="Repita sua senha" ref={confirmPasswordRef} required />

                <MessageAccess message={message} type={messageType} />

                <CustomButton label="Cadastrar" isLoading={isloading} />
            </form>

            <Link to={'/login'}>Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}