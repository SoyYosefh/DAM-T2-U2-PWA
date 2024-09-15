
// Vista para el Inciso A - Práctica con JavaScript
function IncisoA() {
    const usuario = {
        nombre: 'Yosefh',
        edad: 25,
        mostrarInfo: function () {
            return `Usuario: ${this.nombre}, Edad: ${this.edad}`;
        }
    };
    return (
        <div>
            <h1>{usuario.mostrarInfo()}</h1>
        </div>
    );
}

export default IncisoA;