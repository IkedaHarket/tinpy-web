export interface ProductosByNameRes {
  productos?: Producto[];
}

export interface Producto {
    _id?:             string;
    negocio?:         Negocio;
    nombre?:          string;
    precio?:          number;
    descripcion?:     string;
    numeroLikes?:     number;
    likes?:           any[];
    estado?:          boolean;
    imagenPrincipal?: string;
    categoria?:       Categoria;
    createdAt?:       Date;
    updatedAt?:       Date;
    __v?:             number;
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
    productos?:         any[];
    direccion?:         null;
    estado?:            boolean;
    verificado?:        boolean;
    comentarios?:       any[];
    horario?:           null;
    telefono?:          string;
    correo?:            string;
    descripcion?:       string;
    redes?:             null;
    createdAt?:         Date;
    updatedAt?:         Date;
    __v?:               number;
}

