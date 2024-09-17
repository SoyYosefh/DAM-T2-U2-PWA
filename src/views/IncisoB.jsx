import Saludo from '../components/Saludo'; // Importa el componente Saludo desde la carpeta de componentes

// Vista para el Inciso B - Componentes JavaScript
function IncisoB() {
	// Renderiza el componente Saludo pasando la propiedad 'nombre' con el valor 'Jose Ramon'
	return (
		<div>
			<Saludo nombre="Jose Ramon" /> {/* Componente Saludo que recibe 'nombre' como prop */}
		</div>
	);
}

export default IncisoB; // Exporta el componente IncisoB para su uso en otras partes de la aplicación
