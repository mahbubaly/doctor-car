import React from 'react';
import features from '../../assets/images/Features/Group 71.svg'
import features2 from '../../assets/images/Features/clock.svg'
import features3 from '../../assets/images/Features/tele.svg'
import features4 from '../../assets/images/Features/Wrench.svg'
import features5 from '../../assets/images/Features/granti.svg'
import features6 from '../../assets/images/Features/delivery.svg'

const Features = () => {
    return (
        <>

            <div className='my-12 text-center space-y-3'>
                <h1 className='text-2xl text-[#FF3811] font-bold'>Core Features</h1>
                <h2 className='text-2xl  font-bold'>Why Choose Us</h2>

                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>

            <div className='flex gap-6 justify-center items-center text-black mt-12 mb-14'>
                    <div className=' border-2 p-5 rounded-md w-[170px] h-[156px]'>
                        <img className='h-[53px] w-[42px] mx-auto' src={features} alt="" />
                        <h1 className=' font-semibold text-center mt-1'>Expert Team</h1>
                    </div>
                    <div className=' border-2 p-5 rounded-md bg-[#FF3811] w-[170px] h-[156px]'>
                        <img className='h-[53px] w-[42px] mx-auto' src={features2} alt="" />
                        <h1 className=' font-semibold text-center mt-1'>Timely Delivery</h1>
                    </div>
                    <div className=' border-2 p-5 rounded-md w-[170px] h-[156px]'>
                        <img className='h-[53px] w-[42px] mx-auto' src={features3} alt="" />
                        <h1 className='text-lg font-semibold text-center mt-1'>24/7 Support</h1>
                    </div>
                    <div className=' border-2 p-5 rounded-md w-[170px] h-[156px]'>
                        <img className='h-[53px] w-[42px] mx-auto' src={features4} alt="" />
                        <h1 className='text-lg font-semibold text-center mt-1'>Best Equipment</h1>
                    </div>
                    <div className=' border-2 p-5 rounded-md w-[170px] h-[156px]'>
                        <img className='h-[53px] w-[42px] mx-auto' src={features5} alt="" />
                        <h1 className='text-lg font-semibold text-center mt-1'>100% Guranty</h1>
                    </div>
                    <div className=' border-2 p-5 rounded-md w-[170px] h-[156px]'>
                        <img className='h-[53px] w-[42px] mx-auto' src={features6} alt="" />
                        <h1 className='text-lg font-semibold text-center mt-1'>Timely Delivery</h1>
                    </div>
            </div>




        </>
    );
};

export default Features;