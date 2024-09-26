import { Link } from "react-router-dom"

export default function Cadastro() {
    return (
        <div className="flex flex-col gap-6 items-center">
            <h2 className="font-bold text-2xl text-center">Cadastro do Usuário</h2>

            <form className="flex flex-col gap-4">
                <input className="p-3 border border-slate-700 rounded-full" type="text" placeholder="Nome" />
                <input className="p-3 border border-slate-700 rounded-full" type="email" placeholder="E-mail" />
                <input className="p-3 border border-slate-700 rounded-full" type="password" placeholder="Senha" />
                <input className="p-3 border border-slate-700 rounded-full" type="password" placeholder="Repita sua senha" />
                
                <button className="px-10 py-2 bg-slate-700 text-white rounded-full">Cadastrar</button>
            </form>

           <Link to={'/login'} className="">Já tem cadastro? Clique aqui!</Link>
        </div>
    )
}