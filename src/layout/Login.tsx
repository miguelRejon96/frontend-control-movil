import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../api/auth";
import { error, position_alert } from "../components/alerts/alerts-sonner";
import { Toaster } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    login(data)
      .then((e) => {
        localStorage.setItem("user", e.data);
        navigate("/home");
        navigate(0);
      })
      .catch(() => {
        error(position_alert.bottomright);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Toaster richColors closeButton />

      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('@/assets/img/fondo.jpg')]">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-70"></div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <img
                className="mb-14 ml-32"
                width={130}
                src="https://i.ibb.co/B6kH9sN/logo-cicsa.png"
              />
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Gruas Marinas
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Inicia sesión para acceder a tu cuenta
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Dirección de email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.email?.type === "required" && (
                      <p
                        role="alert"
                        className="text-red-500 text-xs my-2 mx-1"
                      >
                        Completa esta dato
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600 dark:text-gray-200">
                        Contraseña
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Olvidaste la contraseña?
                      </a>
                    </div>

                    <input
                      type="password"
                      {...register("password", { required: true })}
                      id="password"
                      placeholder="Tu contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.password?.type === "required" && (
                      <p
                        role="alert"
                        className="text-red-500 text-xs my-2 mx-1"
                      >
                        Completa esta dato
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className=" w-full px-4 py-2 tracking-wide  text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
                    >
                      {loading ? (
                        <span
                          className="animate-spin inline-block mx-3 size-3  border-[3px] border-current border-t-transparent text-white rounded-full"
                          role="status"
                          aria-label="loading"
                        ></span>
                      ) : (
                        ""
                      )}

                      {loading ? "Validando credenciales" : "Iniciar sesión"}
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  ¿Aún no tienes una cuenta? <br />
                  <a
                    href="#"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Solicitala al departamento de T.I
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
