/* eslint-disable react/prop-types */ 
import { useState, useEffect } from 'react'; // Importa los hooks useState y useEffect de React
import axios from 'axios'; // Importa la librería axios para hacer solicitudes HTTP

function IncisoI({ datos }) { // E) Hook - useState, useEffect
    // Estado para almacenar los datos de la API
    const [data, setData] = useState([]);
    // Estado para la página actual en la paginación
    const [currentPage, setCurrentPage] = useState(1);
    // Estado para definir cuántos ítems se muestran por página
    const [itemsPerPage, setItemsPerPage] = useState(4);

    // E) Hook - useEffect
    // Realiza una solicitud HTTP para obtener datos cuando el componente se monta
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data); // Actualiza el estado con los datos recibidos
                console.log(response.data); // Muestra los datos en la consola
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Maneja errores en la solicitud
            });
    }, []); // Dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

    // Calcula el índice del primer y último ítem para la página actual
    const indexOfLastItem = currentPage * itemsPerPage; // Índice del último ítem en la página actual
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice del primer ítem en la página actual
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); // Datos de la página actual

    // Función para cambiar la página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Genera números de página basados en la longitud de los datos y ítems por página
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i); // Agrega cada número de página a la lista
    }

    // Renderiza la vista con la tabla de datos y botones de paginación
    return (
        <div>
            <h2>Inciso I - Paginación de Tabla</h2> {/* Título de la sección */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={number === currentPage ? 'active' : ''} // Resalta el botón de la página actual
                    >
                        {number} {/* Muestra el número de página */}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default IncisoI; // Exporta el componente IncisoI para su uso en otras partes de la aplicación
