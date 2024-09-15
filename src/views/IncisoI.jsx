/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

function IncisoI({ datos }) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    useEffect(() => {
        // Fetch data from an API or other source
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Calculate the index of the first and last items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generate page numbers based on the data length
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <h2>Inciso I - Paginación de Tabla</h2>
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
                        className={number === currentPage ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default IncisoI;