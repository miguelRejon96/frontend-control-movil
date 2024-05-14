import { FC, ReactNode } from "react";
import { TextTitle } from "./Text";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

type iProps = {
  titulo: string;
  children: ReactNode;
  action: () => void;
};

type iPropsForm = {
  titulo: string;
  children: ReactNode;
  subtitle: string;
  action: () => void;
  open?: boolean;
};
const DialogNormal: FC<iProps> = (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{props.titulo}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.titulo}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="">{props.children}</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DialogForm: FC<iPropsForm> = (props) => {
  return (
    <Dialog open={props.open}>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 hover:bg-gray-900/80">
          <Pencil2Icon className="mr-2 h-4 w-4" />
          {props.titulo}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>{props.titulo}</DialogTitle>
          <DialogDescription className=""> {props.subtitle}</DialogDescription>
        </DialogHeader>
        <div className="">{props.children}</div>
        <DialogFooter>
          <Button className="bg-gray-900 hover:bg-gray-900/80">
            <PaperPlaneIcon className="mr-2 h-4 w-4" />
            Guardar cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Dialogs = () => {
  const test = () => {
    console.log("test");
  };

  return (
    <div className="">
      <div className="my-5">
        <TextTitle text="Dialogs" />

        <DialogNormal titulo="Nuevo registro" action={() => test()}>
          <h1 className="font-semibold">Hola</h1>
        </DialogNormal>
        <DialogForm
          titulo="Dialog Form"
          subtitle="Subtitulo dentro del dialogo"
          action={() => test()}
        >
          <div className="flex  space-y-3">
            <label
              htmlFor="client"
              className=" text-gray-500 text-sm font-bold"
            >
              Cliente
            </label>
            <select
              id="client"
              className="border p-2 rounded-lg border-slate-200 bg-gray-50 text-sm dark:text-gray-900"
            >
              <option value="" disabled selected hidden>
                Selecciona el cliente
              </option>
              <option value="1">Cliente 1</option>
              <option value="2">Cliente 2</option>
            </select>
          </div>
        </DialogForm>
        <br />
      </div>
    </div>
  );
};

export { DialogNormal, Dialogs, DialogForm };
