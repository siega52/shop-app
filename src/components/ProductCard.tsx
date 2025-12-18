import type { Product } from '../types/product';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price.toLocaleString()} ₽</p>
        <span className="product-category">{product.category}</span>
      </div>
    </div>
  );
};