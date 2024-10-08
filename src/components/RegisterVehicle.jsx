import {useState} from 'react';
import {clienteAxios} from '../config/axios';

const RegisterVehicle = () => {
    const [formData, setFormData] = useState({placa: '', color: '', modelo: '', chasis: ''});
    const [responseMessage, setResponseMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setResponseMessage('');

        try {
            const response = await clienteAxios.post('api/vehiculos/registrar', formData);
            setResponseMessage(response.data.message);
            setFormData({placa: '', color: '', modelo: '', chasis: ''});
        } catch (error) {
            setErrors(error.response?.data?.errors || {});
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registrar Vehículo</h2>
            {responseMessage && <p className="mb-4 text-green-600 font-semibold">{responseMessage}</p>}

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
                    <label className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.color ? 'border-red-500' : ''}`}
                    />
                    {errors.color && <p className="text-red-500 text-xs italic mt-2">{errors.color[0]}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Modelo:</label>
                    <input
                        type="number"
                        name="modelo"
                        value={formData.modelo}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.modelo ? 'border-red-500' : ''}`}
                    />
                    {errors.modelo && <p className="text-red-500 text-xs italic mt-2">{errors.modelo[0]}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Chasis:</label>
                    <input
                        type="text"
                        name="chasis"
                        value={formData.chasis}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.chasis ? 'border-red-500' : ''}`}
                    />
                    {errors.chasis && <p className="text-red-500 text-xs italic mt-2">{errors.chasis[0]}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default RegisterVehicle;
