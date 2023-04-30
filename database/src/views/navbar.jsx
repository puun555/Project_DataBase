import '../views/navbar.css'
import {Image ,Select, Divider, Button} from 'antd'
import { useNavigate } from 'react-router-dom'


const navbar = () =>{
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem("signUp")
        navigate('/login')
    }
    const deleteAccount = () =>{
    localStorage.clear()
    navigate('/login')
    }
    return(
        <>
            <div className="navbar">
                <img className="navbar-logo" src="https://cdn.discordapp.com/attachments/1088439911444643931/1088494506661400667/logo_gear_airline-02.png"></img>
                <div className="box-left">
                    <h3 onClick={logout}>LOGOUT</h3>
                    <h3 onClick={deleteAccount}>DELETE ACCOUNT</h3>
                </div>
                
            </div>
        </>
    )
}
export default navbar