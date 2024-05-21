
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

export type Device = {
  id: string;
  brand: string;
  model: string;
  serial_number: string;
  cellphone_carrier:string;
  cellphone_number: string;
  processor: string;
  ram_storage: string;
  storage: string;
  os: string;
  status: string
}

export type InputsNewDevice = {
  brand: string;
  model: string;
  serial_number: string;
  cellphone_carrier:string;
  cellphone_number: string;
  processor: string;
  ram_storage: string;
  storage: string;
  os: string;
  status: string
}


export type response = {
  data: string;
}

export type PaginationType = {
  items: Device[];
  totalPages: number;
}

