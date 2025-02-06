export default function ProductCard({ product }) {
return (
    <div className="products">
    <div className="product-card" key={product.id}>
        <img src={`${product.photo}`} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
    </div>
    </div>
);
}
