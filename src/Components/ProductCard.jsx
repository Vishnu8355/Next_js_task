import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (


        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/product/${product.category}/${product.id}`} legacyBehavior>
                <a>
                    <img
                        className="p-8 rounded-t-lg h-48 w-full object-contain"
                        src={product.image} alt={product.title}
                    />
                </a>
            </Link>
            <div className="px-5 pb-5">
                <div className='flex justify-between items-center'>
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.title.slice(0, 25)}
                    </h5>
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                    {product.description.slice(0, 70)}...
                </p>
                <div className="flex items-center justify-between mt-2.5 mb-5">
                    <h5 className="text-sm capitalize font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.category}
                    </h5>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`w-4 h-4 ${index < product.rating.rate ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            ({product.rating.count})
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                    </span>
                    <Link href={`/product/${product.category}/${product.id}`} legacyBehavior>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Details
                        </a>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default ProductCard;
