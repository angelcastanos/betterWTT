
interface ProductBase {
    id: number;
    image: string;
    price: number;
    title: string;
}
export interface Product extends ProductBase {
    description: string;       
    stock: number;
}

export interface ProductCart extends ProductBase {
    quantity: number;
    uuid: string;
}


