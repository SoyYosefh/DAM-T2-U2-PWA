import { useState } from "react"; // Importa el hook useState de React

// Custom Hook para el contador
// F) Custom Hook - useCounter
// Aquí se define un custom hook llamado useCounter que utiliza useState para manejar el valor de un contador.
const useCounter = (inicial = 0) => {
	// E) Hook - useState
	// El hook useState se utiliza para declarar un estado llamado 'contador'.
	const [contador, setContador] = useState(inicial);

	// D) Funciones de retorno y argumentos
	// La función incrementar es una función de retorno que incrementa el valor del contador.
	const incrementar = () => setContador(contador + 1);

	// Retorna un array con el valor actual del contador y la función incrementar.
	return [contador, incrementar];
};

// Vista para el Inciso C-F - Objetos literales, useState, useCounter
function IncisoC_F() {
	// F) Custom Hook - useCounter
	// Se utiliza el custom hook useCounter, que inicializa el contador con el valor 5.
	const [contador, incrementar] = useCounter(5);

	// Renderiza la vista con el valor del contador y un botón para incrementarlo.
	return (
		<div>
			{/* C) Objetos literales e interfaces */}
			{/* Aunque no haya interfaces explícitas, el estado del contador es un valor primitivo
                que en otros contextos podría representarse como parte de un objeto. */}
			<p>Contador: {contador}</p> {/* Muestra el valor del contador */}
			<button onClick={incrementar}>Incrementar</button> {/* Botón para incrementar el contador */}
		</div>
	);
}

export default IncisoC_F; // Exporta el componente IncisoC_F para su uso en otras partes de la aplicación
