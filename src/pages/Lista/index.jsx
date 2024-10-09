import { useEffect } from "react"
import api from "../../services/api"

function ListaUsuario() {
    useEffect(() => {
        async function loadUsers() {
            const users = await api.get('/listUsers')

            console.log(users)
        }

        loadUsers()
    }, [])

    return (
        <div>
            <h2>Listar Usuários</h2>
        </div>
    )
}

export default ListaUsuario