import ProductCard from "./ProductCard";

const ProductList = ({ products, onBuyNow }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onBuyNow={onBuyNow} />
      ))}
    </div>
  );
};

export default ProductList;
