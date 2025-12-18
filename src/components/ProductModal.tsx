import { useEffect } from 'react';
import type { Product } from '../types/product';
import '../styles/ProductModal.css';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="modal-details">
          <h2>{product.title}</h2>
          <p className="modal-price">{product.price.toLocaleString()} ₽</p>
          <p className="modal-category">{product.category}</p>
          <p className="modal-description">{product.description}</p>
          <button className="buy-button">Купить</button>
        </div>
      </div>
    </div>
  );
};