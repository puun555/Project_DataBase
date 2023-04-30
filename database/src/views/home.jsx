
import '../views/home.css'
import {Image ,Select, Divider, Button} from 'antd'
import { useNavigate } from 'react-router-dom'
import Navbar from '../views/navbar';
const Home = () =>{
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
            <div className="container">
                <Navbar></Navbar>
                <div className='homepage'>
                    <div className='image'>
                        <Image 
                            height={"60vh"} width={"100%"}
                            src="https://cdn.discordapp.com/attachments/1070387685920878633/1091441892295708782/4k-plane-in-the-air-3lk7s7rf7wzo8siq.png"
                        />
                    </div>
                    <div className='contents'>
                            <div className='go'>
                                <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                                    <Select 
                                        style={{ width: 600  ,fontWeight: 'bold', margin:'1vh'}}
                                        size='large'
                                        placeholder="From"
                                    ></Select>
                                    <Select 
                                        style={{ width: 400  ,fontWeight: 'bold'}}
                                        size='small'
                                        placeholder="Go"
                                    ></Select>
                                </div>
                            </div>
                        <div className='back'>
                            <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                                <Select 
                                    style={{ width: 600  ,fontWeight: 'bold', margin:'1vh'}}
                                    size='large'
                                    placeholder="To"
                                ></Select>
                                    <Select 
                                    style={{ width: 400  ,fontWeight: 'bold'}}
                                    size='small'
                                    placeholder="Back"
                                ></Select>
                            </div>
                        </div>
                        <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                        
                            <Button 
                                onClick={()=>navigate('/booksflights')}
                                style={{backgroundColor:'transparent', color:'white' , width:'400px', height:'50px', fontWeight:'bold'}}
                                >
                                Search Flight
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home