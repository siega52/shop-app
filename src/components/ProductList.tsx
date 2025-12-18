import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import '../styles/ProductList.css';

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductList = ({ products, onProductClick }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onProductClick} />
      ))}
    </div>
  );
};