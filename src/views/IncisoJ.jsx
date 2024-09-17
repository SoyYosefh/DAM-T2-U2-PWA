import useUsuarios from '../hooks/useUsuarios'; // Importa el hook personalizado useUsuarios

// Vista para el Inciso J - Custom Hook useUsuarios
function IncisoJ() {
    // Usa el hook personalizado para obtener la lista de usuarios
    const usuarios = useUsuarios();

    // Renderiza la vista con la lista de usuarios
    return (
        <div>
            <h2>Lista de Usuarios (usando custom hook)</h2> {/* Título de la lista */}
            <ul>
                {/* Mapea sobre el estado de usuarios para renderizar cada nombre */}
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li> // Renderiza cada usuario en un <li>
                ))}
            </ul>
        </div>
    );
}

export default IncisoJ; // Exporta el componente IncisoJ para su uso en otras partes de la aplicación
