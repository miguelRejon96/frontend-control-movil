import { useState } from 'react';
import { listDevices } from '@/api/devices.api';
import { useQuery } from '@tanstack/react-query';
import { Table } from '@/components/Table';
import { Subtitle, TextTitle } from '@/components/Text';
import { EyeOpenIcon, MagnifyingGlassIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { DialogForm } from '@/components/Dialog';
import FormAddDevice from './components/FormAddDevice';
import { Device } from '@/types';

export default function DevicesContent() {

    const [openDialog, setOpenDialog] = useState(false)
    const [openDialogDevice, setOpenDialogDevice] = useState(false)

    //Consulta a API 
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['devices'],
        queryFn: listDevices
    })
    if (isError) {
        return <div>Error: {error.message}</div>
    }




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
                    <div className='col-start-3 row-end-2'>
                        <Button
                            onClick={() => setOpenDialog(true)}
                            className='float-end  bg-gray-900 hover:bg-gray-900/80'
                        >
                            <Pencil2Icon className='mr-2 h-4 w-4' />
                            Nuevo registro
                        </Button>
                        <DialogForm
                            open={openDialog}
                            setOpenDialog={setOpenDialog}
                            titulo='Nuevo equipo'
                            subtitle='Ingrese los campos del dispositivo'
                            children={
                                <FormAddDevice />
                            }
                        />
                    </div>
                </div>
                {isLoading ? (
                    <p>Cargando...</p>
                ) : (
                <div>
                    <Table
                        headers={['Marca', 'Modelo', 'No. Serie', 'No. Tel.', 'Status', ""]}
                    >
                        {data?.map((devices: Device) =>
                            <tr
                                key={data.id}
                                className="border-b border-dashed   hover:bg-gray-200 text-gray-900 hover:text-gray-600 dark:text-gray-900"
                            >
                                <td className="p-2 font-medium text-xs">{devices.brand}</td>
                                <td className="p-2 font-medium text-xs">{devices.model}</td>
                                <td className="p-2 font-medium text-xs">{devices.serial_number}</td>
                                <td className="p-2 font-medium text-xs">{devices.cellphone_number}</td>
                                <td className="p-2 items-center font-medium text-xs">
                                    {devices.status == "Activo" && (
                                        <p className="inline-flex items-center gap-x-1.5 line-clamp-1 py-1 px-3 rounded-sm text-xs bg-green-500 text-white dark:bg-white dark:text-neutral-800">
                                            Activo
                                        </p>
                                    )}
                                    {devices.status == "Baja" && (
                                        <p className="inline-flex items-center gap-x-1.5 line-clamp-1 py-1 px-3 rounded-sm text-xs bg-red-500 text-white dark:bg-white dark:text-neutral-800">
                                            Baja
                                        </p>
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="bg-red-800 text-white rounded-full p-2 z-99999"
                                    >
                                        <Pencil2Icon />
                                    </button>
                                    <button
                                        className='bg-red-800 text-white rounded-full p-2 z-99999'
                                        onClick = {() => setOpenDialog(true)}
                                    >
                                        <EyeOpenIcon />
                                    </button>
                                    <DialogForm
                                        open={openDialogDevice}
                                        setOpenDialog={setOpenDialogDevice}
                                        titulo="Nueva oportunidad"
                                        subtitle="Ingrese la oportunidad de negocio, todos los campos son obligarios"
                                        children={
                                            <FormAddDevice/>
                                        }
                                    />
                                </td>
                            </tr>
                        )}
                    </Table>
                </div>    
                )}
            </div>
        </>
    );
}
