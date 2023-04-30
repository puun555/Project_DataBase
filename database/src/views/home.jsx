
import '../views/home.css'
import {Image ,Select, Divider, Button} from 'antd'
import { useNavigate } from 'react-router-dom'
import Navbar from '../views/navbar';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../views/Datacontext';
import axios from 'axios';

import useSelection from 'antd/es/table/hooks/useSelection';
const Data = ["BFV", "BKK", "BTZ","CEI","CJM","CNX","DMK","HDY","HGN","HHQ","HKT","KBV","KKC","KOP","LOE","LPT","MAQ","NAK",
            "NAW","NNT","NST","PHS","PRH","ROI","SNO","TDX","THS","TST","UBP","UNN","URT","USM","UTH","UTP"]
const Home = () =>{

    const [flight, setFlight] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5500/flight").then(res=>setFlight(res.data)).catch(err=>console.log(err))
    },[])
    console.log(flight)
    const [from, setFrom] = useState("")
    const [go , setGo] = useState("")

    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem("signUp")
        navigate('/login')
    }
    const deleteAccount = () =>{
        localStorage.clear()
        navigate('/login')
    }
    const handleChangeFrom = (value)=> {
        setFrom(value)
    }
    const handleChangeTo = (value)=>{
        setGo(value)
    }

    const filterFlight = flight.filter(f=>{
       if(f.departure_airport == from){
            return f
       }
    })
    if( filterFlight.length > 0){
        localStorage.setItem("flights", JSON.stringify(filterFlight))
    }
    else{
        localStorage.setItem("flights", JSON.stringify(flight))
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
                        <div>
                        </div>
                    
                            <div className='go'>
                                <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                                    <Select 
                                        style={{ width: 600  ,fontWeight: 'bold', margin:'1vh'}}
                                        size='large'
                                        placeholder="From"
                                        onChange={handleChangeFrom}
                                        options={Data.map(name=>({
                                            lable: "สนามบิน",
                                            value: name
                                        }))}
                                    ></Select>
                                    <Select 
                                        style={{ width: 400  ,fontWeight: 'bold'}}
                                        size='small'
                                        placeholder="Go"
                                        onChange={handleChangeTo}
                                        options={Data.map(name=>({
                                            lable: "สนามบิน",
                                            value: name
                                        }))}
                                    ></Select>
                                </div>
                            </div>
                        <div className='back'>
                            <div style={{display:'flex', alignItems:'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                                <Select 
                                    style={{ width: 600  ,fontWeight: 'bold', margin:'1vh'}}
                                    size='large'
                                    placeholder="To"
                                    options={Data.map(name=>({
                                        lable: "สนามบิน",
                                        value: name
                                    }))}
                                ></Select>
                                    <Select 
                                    style={{ width: 400  ,fontWeight: 'bold'}}
                                    size='small'
                                    placeholder="Back"
                                    options={Data.map(name=>({
                                        lable: "สนามบิน",
                                        value: name
                                    }))}
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