export interface ProductosByIdNegocioResponse {
  ok?:        boolean;
  productos?: Productos;
}

export interface Productos {
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
  dislikes?:        any[];
  _id?:             string;
  negocio?:         string;
  nombre?:          string;
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
  numeroDislikes?:  number;
}

export interface Categoria {
  _id?:    string;
  nombre?: string;
}
