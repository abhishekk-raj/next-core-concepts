import { notFound, redirect } from "next/navigation";

const ReviewDetail = async ({params}: {params: Promise<{productId: string; reviewId: string}>}) => {
    const {productId, reviewId} = await params;

    if(parseInt(reviewId) > 1000) {
        // notFound();
        redirect('/products');
    }
    return <h1>Review {reviewId} for Product {[productId]}</h1>
}

export default ReviewDetail;
