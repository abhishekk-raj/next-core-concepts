const ProductDetailLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col">
            {children}
            <h2> Featured products </h2>
        </div>
    )
}

export default ProductDetailLayout;
