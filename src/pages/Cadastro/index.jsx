import { Link } from "react-router-dom"
import { useRef } from "react"

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import Header from "../../components/Header"
import AlertPassword from "../../components/alertPassword"

export default function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (passwordRef !== confirmPasswordRef) {
            
        }

        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        console.log(confirmPasswordRef.current.value)
    }


    return (
        <div className="flex flex-col items-center">
            <Header label="Cadastro" />

            <form className="flex flex-col gap-4 w-72" onSubmit={handleSubmit}>
                <CustomInput type="text" placeholder="Nome" ref={nameRef} />
                <CustomInput type="email" placeholder="Email" ref={emailRef} />
                <CustomInput type="password" placeholder="Senha" ref={passwordRef} />
                <CustomInput type="password" placeholder="Repita sua senha" ref={confirmPasswordRef} />

                <CustomButton label="Cadastrar" />
            </form>

            <AlertPassword />

            <Link to={'/login'}>Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}