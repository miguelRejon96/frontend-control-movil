import { FC } from "react";
import { colorClasses, colorClassesHover } from "../helpers/defaultColors";
import { TextTitle } from "./Text";
import { usuarioValido } from "../api/auth";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";

type iProps = {
  accion: () => void;
  label: string;
  loading?: boolean;
  type: "dark" | "secondary" | "info" | "success" | "danger" | "warning";
};

type iPropsIcon = {
  accion: () => void;
  label: string;
  loading?: boolean;
  type: "dark" | "secondary" | "info" | "success" | "danger" | "warning";
  icon: JSX.Element;
};

const ButtonComponent: FC<iProps> = (props) => {
  const bgColorClass = colorClasses[props.type] || colorClasses.dark;
  const bgColorClassHover =
    colorClassesHover[props.type] || colorClassesHover.dark;

  return (
    <div>
      <Button
        className={`${bgColorClass} ${bgColorClassHover}`}
        onClick={props.accion}
      >
        {props.loading ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Cargando...
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">{props.label}</div>
          </>
        )}
      </Button>
    </div>
  );
};

const ButtonLarge: FC<iProps> = (props) => {
  const bgColorClass = colorClasses[props.type] || colorClasses.dark;
  const bgColorClassHover =
    colorClassesHover[props.type] || colorClassesHover.dark;
  return (
    <div>
      <Button
        className={`${bgColorClass} ${bgColorClassHover} w-full`}
        onClick={props.accion}
      >
        {props.loading ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Cargando...
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">{props.label}</div>
          </>
        )}
      </Button>
    </div>
  );
};

const ButtonIcon: FC<iPropsIcon> = (props) => {
  const bgColorClass = colorClasses[props.type] || colorClasses.dark;
  const bgColorClassHover =
    colorClassesHover[props.type] || colorClassesHover.dark;
  return (
    <div>
      <Button
        className={`${bgColorClass} ${bgColorClassHover} `}
        onClick={props.accion}
      >
        {props.loading ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Cargando...
          </>
        ) : (
          <>
            {props.icon}
            <div className="flex items-center gap-2">{props.label}</div>
          </>
        )}
      </Button>
    </div>
  );
};

const Buttons = () => {
  const testFunction = () => {
    usuarioValido()
      .then((e) => {
        console.log(e.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <TextTitle text="Botones reutilizables" />
      <div className="flex space-x-3 my-3">
        <ButtonComponent
          label="Success"
          accion={() => testFunction()}
          type="dark"
          loading={false}
        />
        <ButtonComponent
          label="Success"
          accion={() => testFunction()}
          type="secondary"
        />
        <ButtonComponent
          label="Success"
          accion={() => testFunction()}
          type="info"
        />
        <ButtonComponent
          label="Success"
          accion={() => testFunction()}
          type="success"
        />
        <ButtonComponent
          label="Success"
          accion={() => testFunction()}
          type="danger"
        />
        <ButtonComponent
          label="Success"
          accion={() => testFunction()}
          type="warning"
        />
      </div>
      <ButtonLarge
        label="Block button"
        accion={() => testFunction()}
        type="dark"
        loading={false}
      />
      <div className="mt-3">
        <ButtonIcon
          label="Button icon"
          accion={() => testFunction}
          type="dark"
          loading={false}
          icon={<BellIcon className="mr-2 h-4 w-4" />}
        />
      </div>
    </div>
  );
};

export { ButtonComponent, ButtonLarge, ButtonIcon, Buttons };
