// src/pages/index.jsx
import { useState, useEffect } from 'react';
import CheckboxFilter from '../components/CheckboxFilter';
import FilterSort from '../components/FilterSort';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (selectedCategories) => {
    if (selectedCategories.length === 0 || selectedCategories.includes('All')) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => selectedCategories.includes(product.category))
      );
    }
  };

  const sortProducts = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    setFilteredProducts(sorted);
  };

  return (
    <div className="container mx-auto p-4">
      <CheckboxFilter categories={categories} onSelectCategory={filterProducts} />
      <FilterSort sortProducts={sortProducts} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
