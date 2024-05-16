import { ButtonLarge } from "@/components/Buttons";
import { Input } from "@/components/ui/input";
import { Pencil2Icon } from "@radix-ui/react-icons";

export default function FormAddDevice() {
    return (
        <div>
            <form action="">
                <div className="w-full  gap-5 items-center space-y-4">
                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Marca
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Modelo
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Número de serie
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Operador Movil
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Número celular
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Procesador
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            RAM
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Almacenamiento
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            SO
                        </label>
                        <Input />
                    </div>

                    <div className="flex items-center space-x-3">
                        <label className="font-medium text-sm color w-[150px]" htmlFor="">
                            Estatus
                        </label>
                        <Input />
                    </div>
                    <ButtonLarge
                        label="Guardar"
                        type="dark"
                        accion={() => (console.log("hello"))}
                        icon={<Pencil2Icon />}
                    />
                </div>
            </form>
        </div>
    );
}
