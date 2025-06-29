import Link from "next/link";

const Products = () => {
    const productId = 100;

    return (
        <div>
            <h1> Product List </h1>
            <h4> <Link href={'products/1'}>Product 1</Link> </h4>
            <h4> <Link href={'products/2'}>Product 2</Link> </h4>
            <h4> <Link href={'products/3'}>Product 3</Link> </h4>
            <h4> <Link href={'products/4'}>Product 4</Link> </h4>
            <h4> <Link href={`products/${productId}`}>Product {productId}</Link> </h4>
        </div>
    )
}

export default Products;
