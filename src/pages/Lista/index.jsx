import { useEffect, useState } from "react"
import api from "../../services/api"
import Logo from "../../assets/logo-loggie.png"

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
        <div className="px-2 flex flex-col items-center">
            <img src={Logo} className="size-40" />
            <h2 className="text-2xl font-semibold text-center mb-3">Lista de Usuários</h2>
            <ul className="flex flex-wrap gap-4 justify-center">
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} className="bg-white rounded-lg p-3 flex flex-col">
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