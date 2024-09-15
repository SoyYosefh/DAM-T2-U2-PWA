import { useState } from 'react';

const useFormulario = (valoresIniciales) => {
    const [formulario, setFormulario] = useState(valoresIniciales);

    const actualizarFormulario = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    return [formulario, actualizarFormulario];
};

export default useFormulario;
