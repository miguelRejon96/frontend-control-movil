import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

type hProps = {
  name: string;
  email: string;
};

export const Header: FC<hProps> = () => {
  const { data: dataUsuario, isLoading: isLoadingUsuario } = useAuth();

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const truncateText = (str: string) => {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  };

  return (
    <div>
      {" "}
      <header className="fixed border-transparent top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-red-800 border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="hidden sm:block mx-10">
              <label className="sr-only">Buscar</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 hidden px-9 ps-11  w-full bg-transparent/20 border text-white border-transparent rounded-lg text-sm  dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Buscar..."
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              {!isLoadingUsuario ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="overflow-hidden border-transparent rounded-lg"
                    >
                      {dataUsuario ? (
                        <img
                          className="inline-bloc size-8 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${dataUsuario.nombre_completo}&background=fff`}
                          alt=""
                        />
                      ) : (
                        <img
                          className="inline-bloc size-8 rounded-full"
                          src={`https://ui-avatars.com/api/?name=`}
                          alt=""
                        />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {dataUsuario ? (
                        <div>
                          {truncateText(dataUsuario.nombre_completo)}
                          <span className="block text-xs font-normal text-gray-500">
                            {dataUsuario.email}
                          </span>
                        </div>
                      ) : (
                        "usuario"
                      )}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-xs">
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-xs">
                      Configuración
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-xs">
                      Cerrar sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
