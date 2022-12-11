export interface Horario {
  ok?:               string;
  _id?:              string;
  negocio?:          string;
  lunes_inicio?:     string;
  lunes_cierre?:     string;
  martes_inicio?:    string;
  martes_cierre?:    string;
  miercoles_inicio?: string;
  miercoles_cierre?: string;
  jueves_inicio?:    string;
  jueves_cierre?:    string;
  viernes_inicio?:    string;
  viernes_cierre?:    string;
  sabado_inicio?:    string;
  sabado_cierre?:    string;
  domingo_inicio?:   string;
  domingo_cierre?:   string;
  createdAt?:        Date;
  updatedAt?:        Date;
  __v?:              number;
}
export interface RespHorario {
  ok?:       boolean;
  msg?:      string;
  horarios?: Horario;
}

