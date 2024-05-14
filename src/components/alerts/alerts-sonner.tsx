import { toast } from "sonner";

export enum position_alert {
  topleft = "top-left",
  topright = "top-right",
  bottomleft = "bottom-left",
  bottomright = "bottom-right",
}

export const normal = (
  position: position_alert,
  description: string = "Actualizaciones recientes"
) => {
  toast("Notificación", {
    description,
    position,
  });
};

export const info = (
  position: position_alert,
  description: string = "Email enviado correctamente"
) => {
  toast.info("Enviado", {
    description,
    position,
  });
};

export const error = (
  position: position_alert,
  description: string = "Por favor, inténtalo de nuevo o verifica los campos obligatorios."
) => {
  toast.error("Error", {
    description,
    position,
  });
};

export const success = (
  position: position_alert,
  description: string = "La operación se completo con éxito"
) => {
  toast.success("¡Éxito!", {
    description,
    position,
  });
};

export const warning = (
  position: position_alert,
  description: string = "Los campos indicados no coinciden"
) => {
  toast.warning("¡Advertencia!", {
    description,
    position,
  });
};
