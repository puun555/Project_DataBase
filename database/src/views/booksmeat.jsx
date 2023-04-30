import '../views/booksmeat.css'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import Navbar from '../views/navbar';
const {Meta} = Card
const Meat = ()=>{
    const navigate = useNavigate()
    const meal_list = [
        {
            id:"1",
            title:"ไก่ต้ม",
            img: "https://images.deliveryhero.io/image/fd-th/LH/dt5h-hero.jpg"
        },
        {
            id:"2",
            title:"ปลาทอด",
            img: "https://www.praram9kaiyangrestaurant.com/wp-content/uploads/2020/11/571cf206d6cc8.jpg"
        },
        {
            id:"3",
            title:"กะเพราหมูสับ",
            img: "https://i.pinimg.com/originals/df/f9/30/dff930b4519724241c42286477d2e61d.jpg"
        },
        {
            id:"4",
            title:"กะเพราหมูสับ",
            img: "https://i.pinimg.com/originals/df/f9/30/dff930b4519724241c42286477d2e61d.jpg"
        },
       
    ]
    return (
        <>
            <Navbar></Navbar>
            <div className="selectSeat-header">
                <div className="selectSeat-header-left" onClick={()=>navigate('/selectseat')}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"} alt="." style={{width:'2vw',height: '2vw',left:"2vw"}}
                    ></img>
                    <h3>Edit Seat</h3>
                </div>
            </div>
            <div className="containerT">
               <div className="meal_header">
                    <div className="listCard">
                        <div className="title">
                            HOT DEALS
                        </div>
                        <div className="grid-column">
                            {
                                meal_list.map((e)=>(
                                    <Card className="card"
                                        onClick={()=>navigate('/summary')}
                                        hoverable
                                    cover={<img alt="example" src={e.img} style={{height:200, width: 230, margin:10}} />}
                                    >   
                                        <Meta title={e.title} description="www.instagram.com" />
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="listCard">
                        <div className="title">
                            ALL FOOD
                        </div>
                        <div className="grid-column">
                            {
                                meal_list.map((e)=>(
                                    <Card
                                        onClick={()=>navigate('/summary')}
                                        hoverable
                                        style={{
                                        width: 250,
                                        height: 300,
                                        margin: '2vh',
                            
                                        }}
                                    cover={<img alt="example" src={e.img} style={{height:200, width: 230, margin:10}} />}
                                    >   
                                        <Meta title={e.title} description="www.instagram.com" />
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}
export default Meat