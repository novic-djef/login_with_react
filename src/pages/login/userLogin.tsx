import Index from './index'
import Register from './Register'
import ResetPassword from './resetPassword'
import {Routes, Route} from 'react-router-dom'
import Alert from './alert'
import App from '../../App'
export default function UserLogin() {
    return(
        <>
        
       
        <Routes>
        
                <Route path='/' element={<Index  />} />
            
                <Route path='Register' element={<Register />} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="alert" element={<Alert />} />
                <Route path="app" element={<App />} />
        </Routes>
       
        </>
    )
}