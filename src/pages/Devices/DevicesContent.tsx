import { useState, useEffect } from 'react';
import { listDevices } from '@/api/devices.api';
import { Table } from '@/components/Table';
import { Subtitle, TextTitle } from '@/components/Text';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { NewDevice } from '@/types';

export default function DevicesContent() {
    const [devices, setDevices] = useState<NewDevice[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await listDevices(0); // Obtener datos de la primera página
                setDevices(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching devices:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="w-full flex items-center justify-between">
                <div>
                    <TextTitle text="Equipos celulares" />
                    <Subtitle text="Módulo para crear y listar equipo celulares" />
                </div>
            </div>
            <div className="sm:h-[50vh] lg:h-[63vh] 2xl:h-[69vh]  p-5 mt-7 bg-white rounded-lg">
                <div className="grid grid-cols-3 ">
                    <div className="relative">
                        <input
                            type="text"
                            className="py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                            placeholder="Buscar..."
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 ">
                            <MagnifyingGlassIcon className="flex-shrink-0 size-4 text-gray-500" />
                        </div>
                    </div>
                </div>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    <Table
                        headers={['Marca', 'Modelo', 'No. Serie', 'No. Tel.', 'Status']}
                        
                    >
                        {devices.map((device, index) => (
                            <tr key={index}
                            className="border-b border-dashed   hover:bg-gray-200 text-gray-900 hover:text-gray-600 dark:text-gray-900"
                            >
                                <td className="p-2 font-medium text-xs">{device.brand}</td>
                                <td className="p-2 font-medium text-xs">{device.model}</td>
                                <td className="p-2 font-medium text-xs">{device.serial_number}</td>
                                <td className="p-2 font-medium text-xs">{device.cellphone_number}</td>
                                <td className="p-2 font-medium text-xs">{device.status}</td>
                            </tr>
                        ))}
                    </Table>
                )}
            </div>
        </>
    );
}
