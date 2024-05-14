import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { Toaster } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { usuarioValido } from "../api/auth";
import { useNavigate } from "react-router-dom";
function MainLayout() {
  const navigate = useNavigate();

  const { isLoading, data, isError } = useQuery({
    queryKey: ["usuario"],
    queryFn: usuarioValido,
    retry: 1,
    refetchOnWindowFocus: false,
  });
  if (isError) {
    navigate("/login");
  }
  if (data)
    return (
      <div className=" ">
        <Toaster richColors />

        <Header name={data.user.nombre_completo} email={data.user.email} />
        <Sidebar />

        {isLoading}
      </div>
    );
}

export default MainLayout;
