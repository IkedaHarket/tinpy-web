import { Direccion,TipoNegocio,Usuario,Estrella } from "../";

export interface Negocio {
  _id?:         string;
  usuario?:     Usuario;
  tipoNegocio?: TipoNegocio;
  img?:         string;
  nombre?:      string;
  estrellas?:   Estrella[];
  direccion?:   Direccion;
  estado?:      boolean;
  comentarios?: any[];
  horario?:     string;
  verificado?:  boolean;
  redes?:       any[];
  telefono?:    string;
  correo?:      string;
  descripcion?: string;
  createdAt?:   Date;
  updatedAt?:   Date;
  __v?:         number;
}
