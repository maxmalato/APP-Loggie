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
            <Header label="Lista de Usuários" />
            <ul className="flex flex-wrap gap-4 justify-center drop-shadow-md 2xl:grid 2xl:grid-cols-4">
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} className="bg-white rounded-lg p-3 w-[340px] border-2 border-b-green-600">
                            <p><span className="font-bold">Id:</span> {user.id}</p>
                            <p className="my-2"><span className="font-bold">Nome:</span> {user.name}</p>
                            <p><span className="font-bold">E-mail:</span> {user.email}</p>
                        </li>
                    ))
                ) : (
                    <p>
                        Nenhum usuário encontrado.
                    </p>
                )}
            </ul>

            <button className="bg-gradient-to-r from-[#19fc56] to-[#5cfc88] p-2 rounded-lg mt-10 font-semibold w-28">
                <Link to={'/login'}>Voltar</Link>
            </button>
        </div>
    )
}

export default ListaUsuario