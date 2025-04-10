type ProductDimensions = {
    width: number,
    height: number,
    depth: number
}
type ProductReviews = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}
type ProductMeta = {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
}
type StatusStock = "In Stock" | "Low Stock"

export interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: Array<string>,
    brand: string,
    sku: string,
    weight: number,
    dimensions: ProductDimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: StatusStock,
    reviews: Array<ProductReviews>,
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: ProductMeta,
    images: Array<string>
    thumbnail: string
}
export interface ProductDataResponse {
    products: Array<Product>,
    total: number,
    skyp: number,
    limit: number
}