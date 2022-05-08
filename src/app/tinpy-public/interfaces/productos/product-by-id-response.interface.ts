export interface ProductByIDResponse {
  _id?:             string;
  negocio?:         Negocio;
  nombre?:          string;
  precio?:          number;
  descripcion?:     string;
  numeroLikes?:     number;
  likes?:           string[];
  numeroDislikes?:  number;
  dislikes?:        string[];
  estado?:          boolean;
  imagenPrincipal?: string;
  categoria?:       Categoria;
  createdAt?:       Date;
  updatedAt?:       Date;
  __v?:             number;
  ok?:              boolean;
  errors?:          Errors;
}

export interface Categoria {
  _id?:    string;
  nombre?: string;
}

export interface Negocio {
  _id?:               string;
  usuario?:           string;
  tipoNegocio?:       string;
  img?:               string;
  nombre?:            string;
  totalEstrellas?:    number;
  estrellas?:         any[];
  promedioEstrellas?: number;
  direccion?:         null;
  estado?:            boolean;
  verificado?:        boolean;
  telefono?:          string;
  correo?:            string;
  descripcion?:       string;
  createdAt?:         Date;
  updatedAt?:         Date;
  __v?:               number;
}
export interface Errors {
  errors?: Error[];
}

export interface Error {
  value?:    string;
  msg?:      string;
  param?:    string;
  location?: string;
}
