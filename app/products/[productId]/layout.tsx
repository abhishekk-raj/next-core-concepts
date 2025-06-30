function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

const ProductDetailLayout = ({children}: {children: React.ReactNode}) => {
    const random = getRandomInt(2);
    if(random === 1) {
        throw new Error("Error loading product");
    }

    return (
        <div className="flex flex-col">
            {children}
            <h2> Featured products </h2>
        </div>
    )
}

export default ProductDetailLayout;
