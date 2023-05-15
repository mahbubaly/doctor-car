import React from 'react';
import img from '../../assets/images/Features/quote 1.png'
import anwar from '../../assets/images/Features/anwar.jpg'
import monwar from '../../assets/images/Features/monwar.jpg'

const CustomerReview = () => {
    return (
        <>
            <div className='my-12 text-center space-y-3'>
                <h1 className='text-2xl text-[#FF3811] font-bold'>Testimonial</h1>
                <h2 className='text-2xl  font-bold'>What Customer Says</h2>

                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-24 '>
                <div>
                    <div className='flex justify-between p-3 space-y-3'>
                        <div className='flex'>
                            <img className='w-[60px] h-[60px] rounded-[60%] mr-4' src={anwar} alt="" />
                            <div>
                                <h1>Awlad Hossain </h1>
                                <p>Businessman</p>
                            </div>
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className='flex mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>

                    </div>
                </div>
                <div>
                    <div className='flex justify-between p-3 space-y-3'>
                        <div className='flex'>
                            <img className='w-[60px] h-[60px] rounded-[60%] mr-4' src={monwar} alt="" />
                            <div>
                                <h1>Awlad Hossain </h1>
                                <p>Businessman</p>
                            </div>
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className='flex mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="orange">
                            <path d="M12 2l2.689 8.242h8.692L15.434 14l2.947 8.758L12 17.716l-6.381 5.042 2.947-8.758L1.619 10.242h8.692z" />
                        </svg>

                    </div>
                </div>
            </div>


        </>
    );
};

export default CustomerReview;