import { ButtonComponent } from "../Buttons";
import {
  error,
  info,
  normal,
  position_alert,
  success,
  warning,
} from "./alerts-sonner";

function Notifications() {
  return (
    <div>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        Notificaciones
      </h1>
      <div className="flex space-x-3 my-3">
        <ButtonComponent
          label="Default"
          accion={() => normal(position_alert.topright, "Enviado")}
          type="dark"
        />
        <ButtonComponent
          label="Info"
          accion={() => info(position_alert.topright)}
          type="info"
        />
        <ButtonComponent
          label="Success"
          accion={() => success(position_alert.topright)}
          type="success"
        />
        <ButtonComponent
          label="Danger"
          accion={() => error(position_alert.topright)}
          type="danger"
        />
        <ButtonComponent
          label="Warning"
          accion={() => warning(position_alert.topright)}
          type="warning"
        />
      </div>
    </div>
  );
}

export default Notifications;
