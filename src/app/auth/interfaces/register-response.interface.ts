export interface RegisterResponse {
  ok?:     boolean;
  errors?: Errors;
  msg?:    string;
  usuario?: Usuario;
  token?:   string;
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
