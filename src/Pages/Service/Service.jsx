import React, { useEffect, useState } from 'react';
import ServiceCarts from './ServiceCarts';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])




    return (
        <>

            <div className='text-center  space-y-3 my-12'>
                <h1 className='text-2xl text-[#FF3811] font-bold'>Our services</h1>
                <h2 className='text-xl text-black font-bold '>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
                {
                    services.map(service => <ServiceCarts
                        key={service._id}
                        service={service}


                    />)
                }
            </div>

            <div className='text-center'>
                <button className="btn btn-outline btn-secondary my-12 ">More Products</button>
            </div>

        </>
    );
};

export default Service;