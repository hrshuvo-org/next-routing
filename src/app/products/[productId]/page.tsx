export default function ProductDetails({params}: {
    productId: string
}) {
    return (
        <div>
            <h1>Product Details {params.productId}</h1>
        </div>

    )
}