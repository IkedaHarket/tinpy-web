import { Errors, Negocio,Categoria } from '../';
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


