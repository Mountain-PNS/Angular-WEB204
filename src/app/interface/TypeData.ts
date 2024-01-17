export interface ProductType {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [
      string
    ]
}
export interface TypeMenu {
  id: number,
  title : string,
  url: string,
  parent : number
}