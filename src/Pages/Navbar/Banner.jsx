import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-[50px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className='text-white w-[500px] font-semibold space-y-7'>
                        <h2 className='text-[60px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] mr-5">Latest Project</button>
                        <button className="btn btn-outline text-white">Discover More</button>
                    </div>
                </div>

                //For slide changes :
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-10 ">
                    <a href="#slide6" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className='text-white w-[400px] font-semibold space-y-7'>
                        <h2 className='text-[60px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] mr-5">Latest Project</button>
                        <button className="btn btn-outline text-white">Discover More</button>
                    </div>
                </div>




                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-10 ">
                    <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className='text-white w-[400px] font-semibold space-y-7'>
                        <h2 className='text-[60px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] mr-5">Latest Project</button>
                        <button className="btn btn-outline text-white">Discover More</button>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-10 ">
                    <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className='text-white w-[400px] font-semibold space-y-7'>
                        <h2 className='text-[60px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] mr-5">Latest Project</button>
                        <button className="btn btn-outline text-white">Discover More</button>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-10 ">
                    <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className="absolute flex items-center pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className='text-white w-[400px] font-semibold space-y-7'>
                        <h2 className='text-[60px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] mr-5">Latest Project</button>
                        <button className="btn btn-outline text-white">Discover More</button>
                    </div>
                </div>
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-10 ">
                    <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div className="absolute flex items-center pl-[100px]  transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full ">
                    <div className='text-white w-[400px] font-semibold space-y-7'>
                        <h2 className='text-[60px]'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn bg-[#FF3811] mr-5">Latest Project</button>
                        <button className="btn btn-outline text-white ">Discover More</button>
                    </div>
                </div>
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-10 ">
                    <a href="#slide5" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;