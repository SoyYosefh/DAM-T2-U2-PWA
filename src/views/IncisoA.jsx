// Vista para el Inciso A - Práctica con JavaScript
function IncisoA() {
	// Definición de un objeto usuario con las propiedades nombre, edad y un método mostrarInfo
	const usuario = {
		nombre: 'Chistian', // Nombre del usuario
		edad: 25, // Edad del usuario
		mostrarInfo: function () { // Método que retorna la información del usuario en una cadena
			return `Usuario: ${this.nombre}, Edad: ${this.edad}`;
		}
	};

	// Renderiza el componente con la información del usuario en un encabezado
	return (
		<div>
			<h1>{usuario.mostrarInfo()}</h1> {/* Llama al método mostrarInfo y muestra el resultado */}
		</div>
	);
}

export default IncisoA; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
