export interface NegocioByIDResponse {
  ok?:       boolean;
  negocios?: Negocios;
}

export interface Negocios {
  _id?:         string;
  usuario?:     Usuario;
  tipoNegocio?: TipoNegocio;
  img?:         string;
  nombre?:      string;
  estrellas?:   Estrella[];
  direccion?:   Direccion;
  estado?:      boolean;
  verificado?:  boolean;
  telefono?:    string;
  correo?:      string;
  descripcion?: string;
  createdAt?:   Date;
  updatedAt?:   Date;
  __v?:         number;
}

export interface Direccion {
  _id?:       string;
  comuna?:    string;
  region?:    string;
  direccion?: string;
  numero?:    string;
  lng?:       string;
  lat?:       string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?:       number;
}

export interface Estrella {
  _id?:             string;
  perfil?:          string;
  numeroEstrellas?: number;
  createdAt?:       Date;
  updatedAt?:       Date;
  __v?:             number;
}

export interface TipoNegocio {
  _id?:    string;
  nombre?: string;
}

export interface Usuario {
  correo?:     string;
  rol?:        string;
  verify?:     boolean;
  estado?:     boolean;
  googleAuth?: boolean;
  createdAt?:  Date;
  updatedAt?:  Date;
  uid?:        string;
}
