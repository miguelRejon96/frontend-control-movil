type User = {
  email: string;
  estatus: string;
  nombre_completo: string;
  rol: string;
};

type JsonData = {
  user: User;
  iat: number;
  exp: number;
};
