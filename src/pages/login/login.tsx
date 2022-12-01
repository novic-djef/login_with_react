/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react'


export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 '>
        <div className='hidden sm:block bg-[#046db5]'>
        <div className="md:col-span-1">
              <div className="mt-4 flex items-center space-x-5 m-4 ">          
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <label className="block text-sm font-medium text-white">Logo+ Marque</label>
          </div>
        </div>

        <div className="md:col-span-1">
              <div className="mt-48 flex items-center space-x-5 m-16 ">          
               

              <div className="flex flex-shrink-0  p-4">
                <a href="#" className="group block w-full flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="https://th.bing.com/th/id/R.ae8c5f11815b8a30671b2b510d61e766?rik=1C8eU11HJWMkBw&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium   text-[#fff]">Mvemba Francis</p>
                      <p className="text-xs font-medium   text-[#dbdada]" >CTO, herman</p>
                    </div>
                  </div>
                  <div className="conatainer text-sm text-[#eeeeee] m-4">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum,  ?</p>
                  <p>Mollitia laborum vel optio laboriosam facere, facilis velit atque? Ullam, consequuntur </p>
                  <p>Lorem ipsum dolor, ! Distinctio consequuntur et corporis!</p>

                  </div>
                 
                </a>
              </div>
                
          </div>
          <div className="mt-12 flex justify-start pt-36 m-20">
          <p className="text-base text-[#eee] xl:text-center"> Copyrights &copy; 2022 Admin.</p>
        </div>
        </div>
       


        </div>
        
        <div className='bg-gray-100 flex flex-col-2 justify-center pt-16'>
            <form className='max-w-[400px] w-full mx-auto  p-4'>
              <h2 className='text-3xl font-bold  py-6'>Welcome back!</h2>
                <p>Please enter your credentials to sign in!</p>
               
                <div className='flex flex-col py-2'>
                    <label>Email</label>
                    <input className='border p-2' type="email"  placeholder='Entrer Votre Adress Email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" placeholder='*********' />
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remenber Me</p>
                    <p><a className="text-[#046db5]">Forgot Password?</a></p>
                </div>
                <button className='border w-full my-5 py-2 bg-[#046db5]  text-white'>Sign In</button>
                   <div className="flex justify-center ">
                   Don't have an account yet? <span className="text-[#046db5]"> Sign up </span>
                   </div>
            </form>
        </div>
        
    </div>

  )
}
