import '../views/booksflight.css'
import { Avatar, Button, Card, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
let count = 3;

import { useNavigate } from 'react-router-dom'
const DummyData = [
    {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5"
    },
    {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน C",
        "landingGo" : "สนามบิน D",
        "takeofBack" : "สนามบิน D",
        "landingBack" : "สนามบิน C",
        "HourGo" : "5",
        "HourBack" : "5"
    },
    {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน E",
        "landingGo" : "สนามบิน F",
        "takeofBack" : "สนามบิน F",
        "landingBack" : "สนามบิน E",
        "HourGo" : "5",
        "HourBack" : "5"
    },
    {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน AEQEQ",
        "landingGo" : "สนามบิน BEQWE",
        "takeofBack" : "สนามบิน BEQWEE",
        "landingBack" : "สนามบิน AEQEQ",
        "HourGo" : "5",
        "HourBack" : "5"
    }, {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5",
        loading: true,
    }
    , {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5",
        loading: true,
    }
    , {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5",
        loading: true,
    }
    , {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5",
        loading: true,
    }
    , {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5",
        loading: true,
    },
    {
        "FlightID" :"123132313",
        "DateGo" : "12/12/2013",
        "DataBack" : "13/12/2013",
        "takeofGo" : "สนามบิน A",
        "landingGo" : "สนามบิน B",
        "takeofBack" : "สนามบิน B",
        "landingBack" : "สนามบิน A",
        "HourGo" : "5",
        "HourBack" : "5",
        loading: true,
    }
]

const BooksFlight = () =>{
    const navigate = useNavigate()
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [initLoading1, setInitLoading1] = useState(true);
    const [loading1, setLoading1] = useState(false);
    const [data1, setData1] = useState([]);
    const [list1, setList1] = useState([]);
    useEffect(()=>{
        setInitLoading(false);
        setData1(DummyData.slice(0, count))
        setList1(DummyData.slice(0, count))
    },[])
    const onLoadMore = () => {
        setLoading(true);
        console.log("Before increment: count = " + count);
        if (DummyData.length >= count + 3) {
            count += 3;
            console.log("After increment: count = " + count);
            setData1(DummyData.slice(0, count))
            setList1(DummyData.slice(0,count))
        
        }else{
            count = DummyData.length
            console.log("After increment in Else: count = " + count);
            setData1(DummyData.slice(0, count))
            setList1(DummyData.slice(0,count))
        }
        console.log("Initial count: count = " + count);
        console.log("Initial length: length = " + data1.length, list1.length);
        setTimeout(()=>{
            DummyData.forEach(obj =>{
                obj.loading = false
            })
            setData1(DummyData.slice(0, count))
            setList1(DummyData.slice(0,count))
            setLoading(false)
        },1000)
        DummyData.forEach(obj =>{
            obj.loading = true
        })
       
    };
    const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
    return(
        <>
        <div className='showFlight'>
            <div className='titleFlight'>
                เลือกเที่ยวบิน
                CNX - BKKA | อาทิตย์, 2 เม.ย.
            </div>
           <List
           style={{margin:'1vh'}}
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={data1}
            renderItem={(item) => (
                <List.Item
                >
                {/* <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name?.last}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    /> */}
                    <Skeleton  title={false} loading={item.loading}    paragraph={{
                            rows: 4,
                        }}> 
                        <Card
                            style={{width:'auto'}}
                        >
                            <div className='flightId'>
                                Flight id: 
                            </div>
                            <div className='rowinsidecard'>
                                <div className='going'>
                                    Going :
                                </div>
                                <div className='date'>
                                    Date :
                                    <div className='insideDate'>
                                        dada
                                    </div>
                                </div>
                                <div className='takeoff'>
                                    Take off :
                                    <div  className='insideTakeoff'>
                                            dadadad
                                    </div>
                                </div>
                                <div className='landing'>
                                    Landing :
                                    <div  className='insideLanding'>
                                            dadadad
                                    </div>
                                </div>
                                <div className='flightHour'>
                                    Flight Hours :
                                    <div  className='insideFlightHour'>
                                    </div>
                                </div>
                            </div>
                            <div className='rowinsidecard'>
                                <div className='going'>
                                    Goingฺ back :
                                </div>
                                <div className='date'>
                                    Date :
                                    <div className='insideDate'>
                                        dada
                                    </div>
                                </div>
                                <div className='takeoff'>
                                    Take off :
                                    <div  className='insideTakeoff'>
                                            dadadad
                                    </div>
                                </div>
                                <div className='landing'>
                                    Landing :
                                    <div  className='insideLanding'>
                                            dadadad
                                    </div>
                                </div>
                                <div className='flightHour'>
                                    Flight Hours :
                                    <div  className='insideFlightHour'>
                                    </div>
                                </div>
                            </div>
                            <div className='button'>
                                <Button
                                    onClick={()=>navigate("/passenger")}
                                    style={{backgroundColor:'#60B564', color:'white'}}
                                >Order</Button>
                            </div>
                        </Card>
                 </Skeleton>              
                </List.Item>
            )}
            />
        </div>
        </>
    )
}
export default BooksFlight