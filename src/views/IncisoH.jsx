import { useEffect, useState } from 'react';
import axios from 'axios';

function IncisoH() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsuarios(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default IncisoH;