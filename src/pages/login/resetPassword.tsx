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
            <div className="container mx-auto m-4">
               <div className="relative w-full">
                    <div className="w-full flex justify-between px-16 py-4">
                        <button className="w-8 h-8 bg-green-600 rounded-2xl text-white transition duration-300 hover:bg-green-600 disabled:bg-gray-400">1</button>
                        <button className="w-8 h-8 bg-gray-300 rounded-2xl text-white transition duration-300 hover:bg-green-600 disabled:bg-gray-400">2</button>
                        <button className="w-8 h-8 bg-gray-300 rounded-2xl text-white transition duration-300 hover:bg-green-600 disabled:bg-gray-400">3</button>
                    </div>
                    <div className="w-full px-16 -mt-9">
                        <div className="w-full h-[8px] bg-gray-300"></div>
                    </div>
                </div>
            </div>
      <h2 className="font-bold text-2xl text-[#002D74]">Reinitialiser votre mot de passe</h2>
      <p className="text-xs mt-4 text-[#002D74]">Entrez votre adresse Email, un message de confirmation vous sera envoyer dans quelque seconde... </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input className="p-2 rounded-xl border" type="email" name="email" placeholder="entrez votre Email" {...register('email', {required: true})}/>
          {errors.email && <p className="font-bold text-sm text-[#ff2e2e] size-2" >l'adress mail est obligatoire</p>}
    
        <button className="bg-[#046db5] rounded-xl text-white py-2 hover:scale-105 duration-300"><Link to="/mail">Envoyer</Link>  </button>
      </form>
  

      <div className="mt-3 text-xs flex justify-between items-center text-[#00a8de]">
        <p> vous avez deja un compte?</p>
        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" > <Link to="/register">s'inscrire</Link></button>
      </div>
    </div>


    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://i.pinimg.com/originals/12/c5/ec/12c5ec607557aae492476cf77abb2afd.jpg" />
    </div>
  </div>





  
</section>

</>

    )
}