import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import Header from "../../components/Header"

function ListaUsuario() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            // PEGAR O TOKEN
            const token = localStorage.getItem('token')

            // INSERIR O TOKEN
            const { data: { allUsers } } = await api.get('/listUsers', {
                headers: { Authorization: `Bearer ${token}` }
            })

            setUsers(allUsers)
        }

        loadUsers()
    }, [])

    return (
        <div className="p-3 flex flex-col items-center">
            <Link to={'/login'}>
                <button className="absolute left-10 top-20 lg:left-40 lg:top-20 bg-white p-2 rounded-lg hover:bg-slate-100 pointer">
                    Voltar
                </button>
            </Link>
            <Header label="Lista de Usuários" />
            <ul className="flex flex-wrap gap-4 justify-center 2xl:grid 2xl:grid-cols-4">
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} className="bg-white rounded-lg p-3 w-[340px]">
                            <p><span className="font-bold">ID:</span> {user.id}</p>
                            <p><span className="font-bold">Nome:</span> {user.name}</p>
                            <p><span className="font-bold">E-mail:</span> {user.email}</p>
                        </li>
                    ))
                ) : (
                    <p>
                        Nenhum usuário encontrado.
                    </p>
                )}
            </ul>
        </div>
    )
}

export default ListaUsuario