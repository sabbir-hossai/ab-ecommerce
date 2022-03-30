import React from 'react';
import './Product.css';

const SingelProduct = (props) => {
    console.log(props.product)
    const { title, price, image, description } = props.product;
    return (
        <div>
            <div className="col  ">
                <div class="card">
                    <img className='productImg p-3 d-flex justify-content-center' src={image} alt="..." />

                    <div class="card-body">
                        <h5 class="card-title">{title.slice(0, 30)}</h5>
                        <p class=" text-aline-justify descriptionAline">{description.slice(20, 190)}</p>
                        <h5>{price}</h5>
                        <a className=" " href="../ProductDetails/ProductDetails.js"><button className='btn buttonColor'>Buy now</button></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingelProduct;