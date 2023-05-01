import '../views/sumary.css'
import { Card , Button} from "antd"
import { useState } from 'react';
import Navbar from '../views/navbar';
import { useNavigate } from 'react-router-dom';
const Summary = ()=>{
    const navigate = useNavigate();
    const fligh_item = localStorage.getItem("selectedFlight");
    const meal_item = localStorage.getItem("Meal_ID");
    const total_item = localStorage.getItem("selectedFlight");
    const [flight,setFlight] = useState(JSON.parse(fligh_item).flight_number);
    const [meal,setmeal] = useState(JSON.parse(meal_item).title);
    const [total,setTotal] = useState(localStorage.getItem("selectedFlight"));
    return(
        <>
        <Navbar></Navbar>
        <div className="summary-container">
                <div className="summary-body">
                    <div className="summary-title">
                        <h1>Cart Summary</h1>
                    </div>
                    <div className="summary-box">
                        <label><strong>{flight}</strong></label>
                        <label>2000$</label>
                    </div>
                    <div className="summary-box">
                        <label><strong>{meal}</strong></label>
                        <label>50$</label>
                    </div>
                    <div className="summary-box">
                        <label><strong>Tax</strong></label>
                        <label>0%</label>
                    </div>
                    <div className="summary-box">
                        <label><strong>Grand Total</strong></label>
                        <label>2050$</label>
                    </div>
                    
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                            style={{width:"10vw",height:"10vw",marginTop:"3vw"}}
                        ></img>
                    
                        <button block style={{marginTop:"2vw"}} onClick={() => {alert("Enjoy your flight!"),navigate("/home")}}> 
                            PAY 
                        </button>
                </div>
            
        </div>
        </>
    )
}
export default Summary