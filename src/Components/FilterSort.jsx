import { useState } from 'react';

const FilterSort = ({ sortProducts }) => {
    const [sortOrder, setSortOrder] = useState('');

    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        sortProducts(order);
    };

    return (
        <div className="mb-4 flex justify-between">
            <h2 className="text-xl font-[poppins] font-semibold tracking-tight text-gray-900 dark:text-white">Products List</h2>
            <div className='flex space-x-2'>
            
            <select value={sortOrder} onChange={handleSortChange} className="p-2 border rounded-md font-[poppins]">
                <option value="" className='font-[poppins]'>Sort By</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            </div>
           
        </div>
    );
};

export default FilterSort;
