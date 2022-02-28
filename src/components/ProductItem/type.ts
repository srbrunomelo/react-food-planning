export type ProductItemType = {
  product: Product
}

export type Product = {
  id: string
  name: string
  photo: string
  value: string
  category_id?: number
}