import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "antd"
import '../views/selectSeat.css'
import Navbar from '../views/navbar';
const SelectSeat = ()=>{
    const navigate = useNavigate()
    const data_1 = [
        {
            id:"A1",
            cost:"20",
            isSelect:false
        },
        {
            id:"A2",
            cost:"20",
            isSelect:false
        },
        {
            id:"A3",
            cost:"20",
            isSelect:false
        },
        {
            id:"A4",
            cost:"20",
            isSelect:false
        },
        {
            id:"A5",
            cost:"20",
            isSelect:false
        },
        {
            id:"A6",
            cost:"20",
            isSelect:false
        }
    ]
    const data_2 = [
        {
            id:"B1",
            cost:"20",
            isSelect:false
        },
        {
            id:"B2",
            cost:"20",
            isSelect:false
        },
        {
            id:"B3",
            cost:"20",
            isSelect:false
        },
        {
            id:"B4",
            cost:"20",
            isSelect:false
        },
        {
            id:"B5",
            cost:"20",
            isSelect:false
        },
        {
            id:"B6",
            cost:"20",
            isSelect:false
        }
    ]
    const data_3 = [
        {
            id:"C1",
            cost:"20",
            isSelect:false
        },
        {
            id:"C2",
            cost:"20",
            isSelect:false
        },
        {
            id:"C3",
            cost:"20",
            isSelect:false
        },
        {
            id:"C4",
            cost:"20",
            isSelect:false
        },
        {
            id:"C5",
            cost:"20",
            isSelect:false
        },
        {
            id:"C6",
            cost:"20",
            isSelect:false
        }
    ]
    const data_4 = [
        {
            id:"D1",
            cost:"20",
            isSelect:false
        },
        {
            id:"D2",
            cost:"20",
            isSelect:false
        },
        {
            id:"D3",
            cost:"20",
            isSelect:false
        },
        {
            id:"D4",
            cost:"20",
            isSelect:false
        },
        {
            id:"D5",
            cost:"20",
            isSelect:false
        },
        {
            id:"D6",
            cost:"20",
            isSelect:false
        }
    ]
    const [update,setUpdate] = useState(false);
    const [seat_id,setSeat_id] = useState("");
    const [cost,setCost] = useState("");
        localStorage.getItem("ListItem_A", JSON.stringify(data_1))
        localStorage.getItem("ListItem_B", JSON.stringify(data_2))
        localStorage.getItem("ListItem_C", JSON.stringify(data_3))
        localStorage.getItem("ListItem_D", JSON.stringify(data_4))
    const handleClick = (e) =>{
        setUpdate(!update)
        setSeat_id(e.id)
        setCost(e.cost)
        localStorage.setItem("ListItem_A", JSON.stringify(data_1))
        localStorage.setItem("ListItem_B", JSON.stringify(data_2))
        localStorage.setItem("ListItem_C", JSON.stringify(data_3))
        localStorage.setItem("ListItem_D", JSON.stringify(data_4))
    }

    const listitem_A = data_1.map(
        (element) => {
            if(!element.isSelect){
                return (
                    <button className="square" onClick={()=>handleClick(element)}><label>${element.cost}</label></button>
                )  
            }
        }
    )
    const listitem_B = data_2.map(
        (element) => {
            if(!element.isSelect){
                return (
                    <button className="square" onClick={()=>handleClick(element)}><label>${element.cost}</label></button>
                )  
            }
        }
    )
    const listitem_C = data_3.map(
        (element) => {
            if(!element.isSelect){
                return (
                    <button className="square" onClick={()=>handleClick(element)}><label>${element.cost}</label></button>
                )  
            }
        }
    )
    const listitem_D = data_4.map(
        (element) => {
            if(!element.isSelect){
                return (
                    <button className="square" onClick={()=>handleClick(element)}><label>${element.cost}</label></button>
                )  
            }
        }
    )
    return(
        <>
        <Navbar></Navbar>
        <div className="selectSeat-container">
            <div className="selectSeat-header">
                <div className="selectSeat-header-left" onClick={()=>navigate('/passenger')}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"} alt="." style={{width:'2vw',height: '2vw',left:"2vw"}}
                    ></img>
                    <h3>Edit Profile</h3>
                </div>
            </div>
            <div className="selectSeat-body">
                <div className="selectSeat-selected">
                    <div className="selectSeat-selected-box">
                            <h2>Seat <label style={{color:"rgb(95, 95, 95)",fontWeight:"500"}}>{seat_id}</label></h2>
                            <h3 style={{fontWeight:""}}>{cost} Dollars</h3>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                    <div className="selectSeat-flightBook">
                        <div className="board-row header">
                            <span className="box header">A</span>
                            <span className="box header">B</span>
                            <span className="box header"> </span>
                            <span className="box header">C</span>
                            <span className="box header">D</span>
                        </div>
                        <div className="board-row">
                            <div className="board-column">
                                {listitem_A}
                            </div>
                            <div className="board-column">
                                {listitem_B}
                            </div>
                            <div className="board-column">
                                <p className="box">1</p>
                                <p className="box">2</p>
                                <p className="box">3</p>
                                <p className="box">4</p>
                                <p className="box">5</p>
                                <p className="box">6</p>
                            </div>
                            <div className="board-column">
                                {listitem_C}
                            </div>
                            <div className="board-column">
                                {listitem_D}
                            </div>
                        </div>
                    </div>
                    <Button style={{marginTop:'.5vw'}}onClick={()=>navigate('/meat')}>Select Seat</Button>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default SelectSeat