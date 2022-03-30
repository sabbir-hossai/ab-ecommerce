import React, { useEffect, useState } from 'react';
import SingelProduct from '../SingelProduct/SingelProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setProducts(data.slice(1, 7)))
        }, []
    );
    return (
        <div>
            <div class="container overflow-hidden">
                <h1 className='m-5'>Popular <span className='titleColor'>Products</span></h1>
                <div className="row row-cols-1 row-cols-lg-3 g-3">
                    {
                        products.map(product => <SingelProduct
                            key={product.id}
                            product={product}
                        ></SingelProduct>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default Products;