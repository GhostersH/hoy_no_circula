import { useState } from 'react';
import { clienteAxios } from '../config/axios';
import Swal from 'sweetalert2';

const CheckVehicle = () => {
    const [formData, setFormData] = useState({ placa: '', fecha: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        try {
            const response = await clienteAxios.post('api/vehiculos/puede-circular', formData);
            const { mensaje, vehiculo, puede_circular, hora_actual_servidor, fecha_ingresada } = response.data;

            Swal.fire({
                title: 'Resultado de Consulta',
                html: `
                    <p><strong>Mensaje:</strong> ${mensaje}</p>
                    <p><strong>Vehículo:</strong> ${vehiculo.placa}</p>
                    <p><strong>Puede Circular:</strong> ${puede_circular}</p>
                    <p><strong>Hora Actual del Servidor:</strong> ${hora_actual_servidor}</p>
                    <p><strong>Fecha Ingresada:</strong> ${fecha_ingresada}</p>
                `,
                icon: puede_circular === 'Sí' ? 'success' : 'error', // Cambiar a 'error' si no puede circular
                confirmButtonText: 'Aceptar'
            });
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Error al consultar el vehículo.';
            setErrors({ general: errorMessage });

            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 w-full content-center">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Consultar si el Vehículo Puede Circular</h2>
            {errors.general && <p className="text-red-500 mb-4">{errors.general}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Placa:</label>
                    <input
                        type="text"
                        name="placa"
                        value={formData.placa}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.placa ? 'border-red-500' : ''}`}
                    />
                    {errors.placa && <p className="text-red-500 text-xs italic mt-2">{errors.placa[0]}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Fecha y Hora:</label>
                    <input
                        type="datetime-local"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fecha ? 'border-red-500' : ''}`}
                    />
                    {errors.fecha && <p className="text-red-500 text-xs italic mt-2">{errors.fecha[0]}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Consultar
                </button>
            </form>
        </div>
    );
};

export default CheckVehicle;
