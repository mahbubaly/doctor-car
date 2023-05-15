import React, { useContext, useState } from 'react';
import logo from '../../assets/images/login/login.svg'
import google from '../../assets/icons/google.png'
import fb from '../../assets/icons/fb_icon_325x325.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';





const LogIn = () => {


    const [success, SetSuccess] = useState('');
    const [error, setError] = useState('');
    const { googleSignIn, createUser } = useContext(AuthContext)




    const handlerSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;

            })

    }

    const handlerGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                SetSuccess(
                    Swal.fire({
                        position: 'top-start',
                        icon: 'success',
                        title: 'Your sign successfully sign with google',
                        showConfirmButton: false,
                        timer: 1500,

                    }).then(() => {
                        window.location.href = ('/');

                    })



                );


            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content gap-7 flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img src={logo} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-3xl font-semibold text-center'>Log in!!</h1>
                        <form onSubmit={handlerSubmit} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value='Log in' />
                            </div>


                        </form>


                        <h4 className='mt-3'>Or sign In With</h4>

                        <div className='flex justify-center gap-5'>
                            <button onClick={handlerGoogle} className='btn btn-circle  bg-white border-none hover:bg-[#FF3811]'>
                                <img className='w-5 h-5 bg-white rounded-xl ' src={google} alt="" />

                            </button>
                            <button className='btn btn-circle  bg-white border-none hover:bg-[#FF3811]'>
                                <img className='w-6 h-6 bg-blue-700 rounded-xl ' src={fb} alt="" />

                            </button>

                        </div>
                        <h1 className='text-green-600 text-xl'>{success}</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;