export default async function ReviewDetails({params}: {
    productId: string,
    reviewId:string
}) {
    const {productId, reviewId} = await params

    return (
        <div>
            <h1>review {reviewId} for product {productId}</h1>
        </div>

    )
}