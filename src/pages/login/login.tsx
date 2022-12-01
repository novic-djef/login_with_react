/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react'


export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block bg-[#00a8de]'>
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
          <div className="mt-12  flex justify-center pt-96">
          <p className="text-base text-[#eee] xl:text-center"> copyrights &copy; 2022 Admin.</p>
        </div>
        </div>
       


        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>Connexion.</h2>
                <div className='flex flex-col py-2'>
                    <label>Email</label>
                    <input className='border p-2' type="email"  placeholder='entrer votre adress email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" placeholder='*********' />
                </div>
                <button className='border w-full my-5 py-2 bg-[#046db5] hover:bg-indigo-500 text-white'>Connexion</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Se souvenir de moi</p>
                    <p>Creer un compte?</p>
                </div>
            </form>
        </div>
    </div>
  )
}
