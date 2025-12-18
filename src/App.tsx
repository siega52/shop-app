import { useState, useMemo } from 'react';
import { useProducts } from './hooks/useProducts';
import { SearchBar } from './components/SearchBar';
import { ProductList } from './components/ProductList';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import type { Product } from './types/product';
import './styles/App.css'; 

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading) return <div className="loading">Загрузка товаров...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <header>
        <h1>Магазин электроники</h1>
        <div className="line"></div>
        <SearchBar value={search} onChange={setSearch} />
      </header>

      <main>
        <ProductList
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Footer />
    </div>
  );
}

export default App;