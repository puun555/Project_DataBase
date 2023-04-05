import '../views/booksmeat.css'
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const {Meta} = Card
const Meat = ()=>{
    const navigate = useNavigate()
    return (
        <>
            <div className="containerT">
               <div className="hotdeal">
                    <div className="title">
                        HOT DEALS
                    </div>
                    <div className="listCard">
                        <Card
                            onClick={()=>navigate('/summary')}
                            hoverable
                            style={{
                            width: 250,
                            height: 300,
                            margin: '2vh',
                
                            }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{height:200, width: 230, margin:10}} />}
                        >   
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
               </div>
               <div className="allfood">
                    <div className="title">
                        ALL FOOD
                    </div>
                    <div className="listCard">
                        <Card
                            onClick={()=>navigate('/summary')}
                            hoverable
                            style={{
                            width: 250,
                            height: 300,
                            margin: '2vh',
                
                            }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{height:200, width: 230, margin:10}} />}
                        >   
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
               </div>
            </div>
        </>
    )
}
export default Meat