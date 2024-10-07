import { Link } from "react-router-dom"
import { useRef, useState } from "react"

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

    const handleSubmit = (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setMessage("As senhas não iguais.")
            setMessageType("error")
        } else {
            setMessage("Cadastrado com sucesso!")
            setMessageType("success")
        }
    }

    return (
        <div className="flex flex-col items-center">
            <Header label="Cadastro" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>

                <CustomInput type="text" placeholder="Nome" ref={nameRef} required />
                <CustomInput type="email" placeholder="Email" ref={emailRef} required />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} required />
                <CustomInput type="password" placeholder="Repita sua senha" ref={confirmPasswordRef} required />

                <MessageAccess message={message} type={messageType} />

                <CustomButton label="Cadastrar" />
            </form>

            <Link to={'/login'}>Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}