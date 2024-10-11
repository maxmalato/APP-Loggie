import { useEffect, useState } from "react"
import api from "../../services/api"

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
        <div className="flex flex-col">
            <h2 className="text-2xl text-center">Lista de Usuários</h2>
            <ul className="flex flex-wrap gap-6 justify-center	">
                {users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id} className="bg-white rounded-lg p-3 flex flex-col">
                            <p>ID: {user.id}</p>
                            <p>Nome: {user.name}</p>
                            <p>E-mail: {user.email}</p>
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