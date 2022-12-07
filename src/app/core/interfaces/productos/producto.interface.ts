import { Categoria,Negocio } from "../";

export interface Producto {
  dislikes?:        string[];
  _id?:             string;
  negocio?:         string | Negocio;
  nombre?:          string;
  numeroDislikes?:  number;
  precio?:          number;
  descripcion?:     string;
  numeroLikes?:     number;
  likes?:           string[];
  estado?:          boolean;
  imagenPrincipal?: string;
  categoria?:       Categoria;
  createdAt?:       Date;
  updatedAt?:       Date;
  __v?:             number;
}
