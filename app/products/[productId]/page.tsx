const ProductDetails = async ({params}: {params: Promise<{productId: string}>}) => {
    const productId = (await params).productId;
    return (
        <div>
            <h1>Product Details {productId}</h1>
        </div>
    )
}

export default ProductDetails;
