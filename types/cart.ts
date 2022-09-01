export type ProductCartData = {
    productId: number,
    quantity: number,
    options: number[],
    checkOutAttributes: {
        checkOutAttributeId: number,
        value: string
    }[]
}