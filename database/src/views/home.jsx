
import '../views/home.css'
import {Image ,Select, Divider, Button} from 'antd'
import { useNavigate } from 'react-router-dom'

const Home = () =>{
    const navigate = useNavigate()
    return(
        <>
            <div className="container">
                <div className='homepage'>
                    <div className='image'>
                            <Image 
                                height={300} width={1580}
                                src="https://cdn.discordapp.com/attachments/1070387685920878633/1091441892295708782/4k-plane-in-the-air-3lk7s7rf7wzo8siq.png"
                            />
                    </div>
                    <div className='contents'>
                        <div className='go'>
                            <Divider
                            >
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
                            </Divider>
                        </div>
                        <div className='back'>
                        <Divider>
                                <Select 
                                    style={{ width: 600  ,fontWeight: 'bold', margin:'1vh'}}
                                    size='large'
                                    placeholder="To"
                                ></Select>
                                 <Select 
                                    style={{ width: 400  ,fontWeight: 'bold'}}
                                    size='small'
                                    placeholder="Black"
                                ></Select>
                            </Divider>
                        </div>
                        <div
                            style={{display:'flex', alignItems:'center', justifyContent: 'end', backgroundColor:'transparent'}}
                        >
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