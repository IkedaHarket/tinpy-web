import { Producto } from "./producto.interface";

export interface ProductPostResp {
    ok?:       boolean;
    msg?:      string;
    producto?: Producto;
}


