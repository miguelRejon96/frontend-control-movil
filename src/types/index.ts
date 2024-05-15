type User = {
  email: string;
  estatus: string;
  nombre_completo: string;
  rol: string;
};

export type JsonData = {
  user: User;
  iat: number;
  exp: number;
};

export type NewDevice = {
  _id: string;
  brand: string;
  model: string;
  serial_number: string;
  cellphone_carrier:string;
  cellphone_number: number;
  processor: string;
  ram_storage: number;
  storage: number;
  os: string;
  status: string
}

export type response = {
  data: string;
}

export type PaginationType = {
  items: NewDevice[];
  totalPages: number;
}

