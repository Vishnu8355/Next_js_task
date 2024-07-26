import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Model from '../../../Components/Model';


const ProductDetail = () => {
    const router = useRouter();
    const { category, id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const productData = await res.json();
                setProduct(productData);
            };
            fetchProduct();
        }
    }, [id]);

    if (!product) return null;

    return (
        <Model product={product} onClose={() => router.back()} />
    );
};

export default ProductDetail;
