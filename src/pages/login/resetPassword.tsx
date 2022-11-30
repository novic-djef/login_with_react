/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form" 

export default function RestPassword(){
    const {handleSubmit, register, formState : {errors}} = useForm()
    function onSubmit (data){
     console.log(data)
    }
    return(
<>

<section className="bg-gray-50 min-h-screen flex items-center justify-center">

  <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-3 items-center"> 
    <div className="md:w-1/2 px-8 md:px-12">
      <h2 className="font-bold text-2xl text-[#002D74]">modification</h2>
      <p className="text-xs mt-4 text-[#002D74]">Entrez les paramettres de difications... </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input className="p-2 rounded-xl border" type="number" name="telephone" placeholder=" votre numero de telephone" {...register('telephone', {required: true})}/>
          {errors.email && <p className="font-bold text-sm text-[#ff2e2e] size-2" >le numero de telephone est obligatoire</p>}
        <input className="p-2 rounded-xl border" type="email" name="email" placeholder="votre Email" {...register('email', {required: true})}/>
          {errors.email && <p className="font-bold text-sm text-[#ff2e2e] size-2" >l'adress mail est obligatoire</p>}
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="nouveau mot de passe" {...register('password', {required: true, minLength: 8})}/>
          {errors.email && <p className="font-bold text-sm text-[#ff2e2e] size-2" >le mot de passe est obligatoire avec 8 caracteres</p>}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="confirmer le nouveau mot de passe" {...register('password', {required: true, minLength: 8})}/>
          {errors.email && <p className="font-bold text-sm text-[#ff2e2e] size-2" >le mot de passe est obligatoire avec 8 caracteres</p>}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button className="bg-[#046db5] rounded-xl text-white py-2 hover:scale-105 duration-300"><Link to="/alert">Modifier</Link>  </button>
      </form>
  

      <div className="mt-3 text-xs flex justify-between items-center text-[#00a8de]">
        <p> vous avez deja un compte?</p>
        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" > <Link to="/register">s'inscrire</Link></button>
      </div>
    </div>


    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://blog.gameball.co/wp-content/uploads/2020/12/gameball-cashback-01-1536x1025.png" />
    </div>
  </div>





  
</section>

</>

    )
}