import { useReducer } from "react";

// Estado inicial y función reductora
const initialState = { contador: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 };
        case 'decrementar':
            return { contador: state.contador - 1 };
        default:
            return state;
    }
};

// Vista para el Inciso G - useReducer
function IncisoG() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Contador: {state.contador}</p>
            <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
            <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
        </div>
    );
}

export default IncisoG;