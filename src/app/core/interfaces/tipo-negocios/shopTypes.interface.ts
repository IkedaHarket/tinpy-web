export interface ShopTypesResponse {
    ok?:           boolean;
    tipoNegocios?: ShopType[];
}

export interface ShopType {
    _id?:       string;
    nombre?:    string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?:       number;
}
