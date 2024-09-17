import { useReducer } from "react"; // Importa el hook useReducer de React

// Estado inicial y función reductora
// G) useReducer
// Define el estado inicial del contador y la función reductora para manejar las acciones.
const initialState = { contador: 0 }; // Estado inicial del contador
const reducer = (state, action) => { // Función reductora que maneja las acciones
    switch (action.type) { // Dependiendo del tipo de acción, actualiza el estado
        case 'incrementar': // Acción para incrementar el contador
            return { contador: state.contador + 1 };
        case 'decrementar': // Acción para decrementar el contador
            return { contador: state.contador - 1 };
        default: // Si la acción no es reconocida, retorna el estado actual
            return state;
    }
};

// Vista para el Inciso G - useReducer
function IncisoG() {
    // Usa el hook useReducer con el reducer y el estado inicial
    const [state, dispatch] = useReducer(reducer, initialState);

    // Renderiza la vista con el valor del contador y botones para incrementar y decrementar
    return (
        <div>
            <p>Contador: {state.contador}</p> {/* Muestra el valor del contador */}
            <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button> {/* Botón para incrementar el contador */}
            <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button> {/* Botón para decrementar el contador */}
        </div>
    );
}

export default IncisoG; // Exporta el componente IncisoG para su uso en otras partes de la aplicación
