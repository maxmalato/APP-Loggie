import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import api from "../../services/api"

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import Header from "../../components/Header"
import MessageAccess from "../../components/MessageAccess"

export default function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("As senhas não iguais")
            setMessageType("error")
        }

        try {
            await api.post('/register', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            setMessage("Cadastro com sucesso")
            setMessageType("success")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header label="Cadastro" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                
                <CustomInput type="text" placeholder="Nome" ref={nameRef} required />
                <CustomInput type="email" placeholder="Email" ref={emailRef} required />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} value={password} onChange={(e) => setPassword(e.target.value)} required />
                <CustomInput type="password" placeholder="Repita sua senha" ref={confirmPasswordRef} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                <MessageAccess message={message} type={messageType} />

                <CustomButton label="Cadastrar" />
            </form>

            <Link to={'/login'}>Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}