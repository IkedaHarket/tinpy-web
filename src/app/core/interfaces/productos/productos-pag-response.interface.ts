export interface ProductosPaginateRes {
  docs?:          Doc[];
  totalDocs?:     number;
  limit?:         number;
  totalPages?:    number;
  page?:          number;
  pagingCounter?: number;
  hasPrevPage?:   boolean;
  hasNextPage?:   boolean;
  prevPage?:      null;
  nextPage?:      null;
}

export interface Doc {
  _id?:             string;
  negocio?:         string;
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
