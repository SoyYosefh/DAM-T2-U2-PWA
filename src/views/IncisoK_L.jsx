
import useFormulario from '../hooks/useFormulario';

// Vista para el Inciso K-L - Formularios y Custom Hook
function IncisoK_L() {
    const [form, actualizarFormulario] = useFormulario({
        nombre: '',
        email: ''
    });

    const manejarSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${form.nombre}, Email: ${form.email}`);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Formulario</h2>
            <form onSubmit={manejarSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="nombre" style={styles.label}>Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={actualizarFormulario}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={actualizarFormulario}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Enviar</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '0.5rem',
        color: '#333',
    },
    input: {
        padding: '0.5rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#fff', // Fondo blanco para el input
        boxSizing: 'border-box',
    },
    button: {
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#6200ea',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};

export default IncisoK_L;