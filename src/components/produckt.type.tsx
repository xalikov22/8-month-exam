export type productstype = {
    id: string,
    name: string,
    title: string,
    image: string,
    description: string,
    sale: string,


}


export type produckttype = {
    loading: boolean,
    products: productstype[],
    error: unknown,
    getproducts: () => void,


}