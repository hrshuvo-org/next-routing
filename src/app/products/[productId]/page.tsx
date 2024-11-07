export default async function ProductDetails({params}: {
    productId: string
}) {
    const {productId} = await params
    return (
        <div>
            <h1>Product Details {productId}</h1>
        </div>

    )
}