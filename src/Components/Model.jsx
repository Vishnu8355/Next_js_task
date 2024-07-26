import { useEffect } from 'react';

const Modal = ({ product, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p>{product.category}</p>
                <p>Product ID: {product.id}</p>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Close</button>
            </div>
        </div>
    );
};

export default Modal;
