import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div>
            <h2>Login do Usuário</h2>

            <form action="">
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Sua senha" />
            </form>

            <Link to={'/'}>Não tem cadastro? Clique aqui!</Link>

        </div>
    )
}