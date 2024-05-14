import { FC } from "react";
import { colorClasses, colorClassesDark } from "../helpers/defaultColors";
import { TextTitle } from "./Text";

type iProps = {
  color: "dark" | "secondary" | "info" | "success" | "danger" | "warning";
  title: string;
  description: string;
};

const Alert: FC<iProps> = ({ color, title, description }) => {
  const bgColorClass = colorClasses[color] || colorClasses.red;
  const bgColorClassDark = colorClassesDark[color] || colorClassesDark.red;

  return (
    <div
      className={`mt-2 ${bgColorClass} text-sm text-white rounded-lg p-4 ${bgColorClassDark} `}
      role="alert"
    >
      <span className="font-bold">{title}</span> {description}
    </div>
  );
};

const Alerts = () => {
  return (
    <div>
      <TextTitle text="Alerts" />
      <Alert title="Titulo" description="Descripcion" color="dark" />
      <Alert title="Titulo" description="Descripcion" color="secondary" />
      <Alert title="Titulo" description="Descripcion" color="info" />
      <Alert title="Titulo" description="Descripcion" color="success" />
      <Alert title="Titulo" description="Descripcion" color="danger" />
      <Alert title="Titulo" description="Descripcion" color="warning" />
    </div>
  );
};

export { Alert, Alerts };
