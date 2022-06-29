import { Perfil } from './perfil.interface';

export interface PerfilResponse {
  ok ?: boolean,
  msg ?: string;
  perfil: Perfil
}

