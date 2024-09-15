import useUsuarios from '../hooks/useUsuarios';

// Vista para el Inciso J - Custom Hook useUsuarios
function IncisoJ() {
    const usuarios = useUsuarios();
    return (
        <div>
            <h2>Lista de Usuarios (usando custom hook)</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default IncisoJ;