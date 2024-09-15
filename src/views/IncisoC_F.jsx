import { useState } from "react";

// Custom Hook para el contador
const useCounter = (inicial = 0) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => setContador(contador + 1);
    return [contador, incrementar];
};

// Vista para el Inciso C-F - Objetos literales, useState, useCounter
function IncisoC_F() {
    const [contador, incrementar] = useCounter(5);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default IncisoC_F;