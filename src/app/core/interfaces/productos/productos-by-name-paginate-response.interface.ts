export interface ProductsByNamePaginateResponse {
    productos?: Productos;
}

export interface Productos {
    docs?:          Producto[];
    totalDocs?:     number;
    limit?:         number;
    totalPages?:    number;
    page?:          number;
    pagingCounter?: number;
    hasPrevPage?:   boolean;
    hasNextPage?:   boolean;
    prevPage?:      number;
    nextPage?:      number;
}

export interface Producto {
    dislikes?:        any[];
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
