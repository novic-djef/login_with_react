import Index from './index'
import Register from './Register'
import ResetPassword from './resetPassword'
import {Routes, Route} from 'react-router-dom'
import Alert from './alert'
import App from '../../App'
import Reset from '../reset'
import Mail from './mail'
export default function UserLogin() {
    return(
        <>
        
        <h2 className="font-bold text-2xl flex justify-center text-[#002D74]">logo + Nom</h2>

        <Routes>
        
                <Route path='/' element={<Index  />} />
            
                <Route path='Register' element={<Register />} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="alert" element={<Alert />} />
                <Route path="reset" element={<Reset />} />
                <Route path="mail" element={<Mail />} />
                <Route path="app" element={<App />} />
        </Routes>
       
        </>
    )
}