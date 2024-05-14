import { FC } from "react";
import {
  colorClassesTop,
  colorClassesDarkBorderTop,
} from "../helpers/defaultColors";
import { TextTitle } from "./Text";

type iProps = {
  title: string;
  subtitle: string;
  color: "dark" | "secondary" | "info" | "success" | "danger" | "warning";
  accion: () => void;
};

type iCardImageProps = {
  title: string;
  subtitle: string;
  footer: string;
  image: string;
};

const Card: FC<iProps> = (props) => {
  const bgColorClass =
    colorClassesTop[props.color] || colorClassesTop.secondary;

  const bgColorClassDark =
    colorClassesDarkBorderTop[props.color] ||
    colorClassesDarkBorderTop.secondary;

  return (
    <div
      className={`border border-t-8 ${bgColorClass} ${bgColorClassDark} w-full flex flex-col    shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
    >
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-500 dark:text-white">
          {props.title}
        </h3>
        <p className="mt-1 text-gray-900 font-bold dark:text-white">
          {props.subtitle}
        </p>
        <button
          onClick={() => props.accion()}
          className="btn btn-sm btn-block  text-center my-1"
        >
          Detalles
        </button>
      </div>
    </div>
  );
};

const CardImage: FC<iCardImageProps> = (props) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
        <img
          className="size-full absolute top-0 start-0 object-cover"
          src={props.image}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {props.title}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.subtitle}
          </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {props.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const testFunction = () => {
    console.log("prueba");
  };

  return (
    <div>
      <TextTitle text="Cards" />

      <div className="flex space-x-3 my-3">
        <Card
          title="Usuarios registrados"
          subtitle="350,897"
          color="success"
          accion={() => testFunction()}
        />
        <Card
          title="Titulo"
          subtitle="Subtitulo"
          color="danger"
          accion={() => testFunction()}
        />
        <Card
          title="Titulo"
          subtitle="Subtitulo"
          color="dark"
          accion={() => testFunction()}
        />
        <Card
          title="Titulo"
          subtitle="Subtitulo"
          color="warning"
          accion={() => testFunction()}
        />
      </div>
      <div className="flex">
        <CardImage
          title="Titulo del Card"
          subtitle="Un texto de ejemplo rápido para desarrollar el título de la tarjeta "
          footer="Footer"
          image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        />
      </div>
    </div>
  );
};

export { Card, CardImage, Cards };
