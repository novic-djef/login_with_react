/* eslint-disable jsx-a11y/alt-text */
import { CheckCircleIcon } from '@heroicons/react/20/solid'


export default function Mail() {
   
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

  <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-3 items-center"> 
     
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="font-bold text-md  text-green-900">Code de verification</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>Nous vous avons envoyer le code de verification par mail au <strong>exemple@yahoo.com</strong>.</p>
            <p>Nous vous prions de bien vouloir verifier votre messagerie electrinique.</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
             
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-blue-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Je n'est pas recu de code!!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://th.bing.com/th/id/R.ae8c5f11815b8a30671b2b510d61e766?rik=1C8eU11HJWMkBw&pid=ImgRaw&r=0" />
    </div>
  </div>


      
</section>
  )
}
