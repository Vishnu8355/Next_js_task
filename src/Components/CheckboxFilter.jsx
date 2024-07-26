// src/components/CheckboxFilter.jsx
import { useState } from 'react';

const CheckboxFilter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    const newSelectedCategory = category === selectedCategory ? 'All' : category;
    setSelectedCategory(newSelectedCategory);
    onSelectCategory(newSelectedCategory === 'All' ? [] : [newSelectedCategory]);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-[poppins] font-semibold tracking-tight text-gray-900 dark:text-white">Filter By Category</h2>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <label key={category} className={`p-2 mr-2 border rounded-md font-[poppins] ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
              className="mr-2 capitalize"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
