import { insertDevice } from "@/api/devices.api";
import { ButtonLarge } from "@/components/Buttons";
import { Input } from "@/components/ui/input";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { InputsNewDevice } from "@/types";
import { useForm } from "react-hook-form";

export default function FormAddDevice() {

    const { register, handleSubmit } = useForm<InputsNewDevice>()

    const onSubmit = handleSubmit(async(data) => {
        try {
            const newDevice = await insertDevice(data);
            console.log('Dispositivo insertado:', newDevice)
        } catch (error) {
            console.log('Error:',error)
        }
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="w-full  gap-5 items-center space-y-4">
                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="brand">
                            Marca
                        </label>
                        <Input type="text"
                            {...register("brand")}
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="model">
                            Modelo
                        </label>
                        <Input
                            type="text"
                            {...register("model")}
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="serial_number">
                            Número de serie
                        </label>
                        <Input
                            type="text"
                            {...register("serial_number")}
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="cellphone_carrier">
                            Operador Movil
                        </label>
                        <Input
                            type="text"
                            {...register("cellphone_carrier")} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="cellphone_number">
                            Número celular
                        </label>
                        <Input
                            type="text"
                            {...register("cellphone_number")}
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="processor">
                            Procesador
                        </label>
                        <Input
                            type="text"
                            {...register("processor")}
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="ram_storage">
                            RAM
                        </label>
                        <Input
                            type="text"
                            {...register("ram_storage")} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="storage">
                            Almacenamiento
                        </label>
                        <Input
                            type="text"
                            {...register("storage")} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="os">
                            SO
                        </label>
                        <Input
                            type="text"
                            {...register("os")} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="status">
                            Estatus
                        </label>
                        <Input
                            type="text"
                            {...register("status")}
                        />
                    </div>
                    <ButtonLarge
                        label="Guardar"
                        type="dark"
                        accion={() => onSubmit}
                        icon={<Pencil2Icon />}
                    />
                </div>
            </form>
        </div>
    );
}
