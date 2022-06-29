import { Usuario } from "../";

export interface Perfil {
  _id?:         string;
  usuario?:     Usuario;
  nombre?:      string;
  img?:         string;
  estado?:      boolean;
  descripcion?: string;
  telefono?:    string;
  enlace?:      string;
  createdAt?:   Date;
  updatedAt?:   Date;
  __v?:         number;
}

