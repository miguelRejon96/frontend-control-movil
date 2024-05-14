import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Employee {
    _id: number;
    name: string;
    position: string;
    departament: string;
}

const EmpleadosList: React.FC = () => {
    const [empleados, setEmpleados] = useState<Employee[]>([]);

    useEffect(() => {
        // Función para obtener los empleados desde la API
        const fetchEmpleados = async () => {
            try {
                const response = await axios.get<Employee[]>('http://localhost:3000/api/employee');
                setEmpleados(response.data);
            } catch (error) {
                console.error('Error al obtener los empleados:', error);
            }
        };

        fetchEmpleados();
    }, []);

    return (
        <div>
            <h1 >Lista de Empleados</h1>
            <ul>
                {empleados.map((employee) => (
                    <li key={employee._id}>
                        <h2>{employee.name}</h2>
                        <p>Puesto: {employee.position}</p>
                        <p>
                            Departamento: {employee.departament}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmpleadosList;
