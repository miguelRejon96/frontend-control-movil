import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DashboardIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { useAuth } from "@/hooks/useAuth";
import { FC, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import Section from "./Section";

export default function Sidebar() {
  const { data: dataUsuario, isLoading: isLoadingUsuario } = useAuth();
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex ">
      <div
        className={`bg-gray-900 z-[50] h-screen  pt-8 ${
          expanded ? "w-72" : "w-[80px]"
        } fixed  border-transparent duration-300 `}
      >
        {expanded ? (
          <ArrowLeftIcon
            onClick={() => setExpanded((e) => !e)}
            className="bg-white  p-1.5 size-7 rounded-full absolute -right-3 top-8 cursor-pointer"
          />
        ) : (
          <ArrowRightIcon
            onClick={() => setExpanded((e) => !e)}
            className="bg-white  p-1.5 size-7 rounded-full absolute -right-3 top-8 cursor-pointer"
          />
        )}
        <div className=" text-center text-white items-center">
          <img
            src="https://i.ibb.co/xHDQgHS/logo-blanco.png"
            className={`w-[200px] ${!expanded && "hidden"} duration-300`}
            alt=""
          />
          <img
            src="https://i.ibb.co/rdgpYNh/logo-blanco-1.png"
            className={`w-[40px] ${expanded && "hidden"} mx-4 my-1`}
            alt=""
          />
        </div>
        <div className="my-10 px-2 2xl:h-[720px] 1xl:h-[740px] lg:h-[530px] sm:h-[900px]">
          <ul className="space-y-3.5 ">
            <SideBarItem url="home" text="Dashboard" expanded={expanded}>
              <DashboardIcon className="h-4 w-7" />
            </SideBarItem>
            <SideBarItem
              url="devices"
              text="Equipos"
              expanded={expanded}
            >
              <MobileIcon className="h-4 w-7" />
            </SideBarItem>
          </ul>
        </div>
        <div className="border-t-2 px-3 py-3 border-gray-500">
          {!isLoadingUsuario && (
            <div className="flex">
              <img
                className="w-10 h-10 rounded-md"
                src={`https://ui-avatars.com/api/?name=${dataUsuario.nombre_completo}&color=fff&background=9F0101`}
                alt=""
              />
              <div
                className={`flex justify-between ${
                  !expanded && "hidden"
                } items-center ml-3 w-52`}
              >
                <div className="leading-4">
                  <h4 className="font-bold text-white">
                    {dataUsuario.nombre_completo}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {dataUsuario.email}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`w-full  px-9 duration-300 ${
          expanded ? "w-full  px-9 ps-80" : "w-full  px-9 ps-32"
        }`}
      >
        <Section />
      </div>
    </div>
  );
}
type SideBarTypes = {
  url: string;
  children: ReactNode;
  text: string;
  expanded: boolean;
};

export const SideBarItem: FC<SideBarTypes> = (props) => {
  const active =
    "bg-gray-200 flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-600 dark:hover:text-slate-300 dark:bg-white";
  const inactive =
    " flex items-center hover:text-gray-900 gap-x-3.5 py-2 px-2.5 text-sm text-slate-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 ";

  return (
    <li>
      <NavLink
        to={`/${props.url}`}
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        {props.children}

        <span className={`${!props.expanded && "hidden"} transition-all`}>
          {props.text}
        </span>
      </NavLink>
    </li>
  );
};
