import React from 'react';
import img from '../../assets/images/services/Vector.png'


const ServiceCarts = ({ service }) => {
    console.log(service);
    const { title, _id, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions flex">
                    <p className='font-semibold'> Price: $ {price}</p>
                    <button className=" btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default ServiceCarts;