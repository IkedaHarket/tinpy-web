import { Errors, Usuario } from '../';

export interface AuthResponse {
  ok?:     boolean;
  errors?: Errors;
  msg?:    string;
  usuario?: Usuario;
  token?:   string;
}
