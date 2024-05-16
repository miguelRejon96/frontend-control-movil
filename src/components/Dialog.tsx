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

type iProps = {
  titulo: string;
  children: ReactNode;
  action: () => void;
};

type iPropsForm = {
  titulo: string;
  children: ReactNode;
  subtitle: string;
  action?: () => void;
  open?: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
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
    <Dialog open={props.open} onOpenChange={props.setOpenDialog}>
      <DialogContent
        className={"lg:max-w-screen-lg overflow-y-scroll max-h-screen"}
      >
        <DialogHeader>
          <DialogTitle>{props.titulo}</DialogTitle>
          <DialogDescription className=""> {props.subtitle}</DialogDescription>
        </DialogHeader>
        <div className="">{props.children}</div>
      </DialogContent>
    </Dialog>
  );
};

const DialogInfo: FC<iPropsForm> = (props) => {
  return (
    <Dialog open={props.open} onOpenChange={props.setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-2xl font-bold  text-gray-900 dark:text-gray-100">
              {props.titulo}
            </h2>
          </DialogTitle>
          <DialogDescription className=""> {props.subtitle}</DialogDescription>
        </DialogHeader>
        <div className="">{props.children}</div>
      </DialogContent>
    </Dialog>
  );
};

const Dialogs = () => {
  return (
    <div className="">
      <div className="my-5">
        <TextTitle text="Dialogs" />

        <br />
      </div>
    </div>
  );
};

export default Dialog;

export { DialogNormal, Dialogs, DialogForm, DialogInfo };