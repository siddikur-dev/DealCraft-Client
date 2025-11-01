import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product=useLoaderData()
    console.log(product);
    return (
        <div>
            s
        </div>
    );
};

export default ProductDetails;