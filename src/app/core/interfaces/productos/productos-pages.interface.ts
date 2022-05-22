import { Producto } from '../';

export interface ProductosPages {
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
