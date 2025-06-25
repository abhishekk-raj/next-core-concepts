"use client";

import { useParams } from "next/navigation";

const NotFound = () => {
    const {productId, reviewId} = useParams();

    return <h1>Review {reviewId} not found for Product {productId}</h1>
}

export default NotFound;
