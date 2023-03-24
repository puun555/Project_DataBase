import Card from '@mui/material/Card';
import './FlightDetail.css'
import Grid from '@mui/material/Unstable_Grid2';

const FlightDetail = () =>{
    const test = [1,2,3,4 ,5,6,7,8,9,10,11,12]
    return(
        <div className="background">
            {test.map((item ,i)=>{
                return (
                    <div className='Flight-item' key={i}>
                        <div className='FlightId'>
                                <h3>Flight Id:</h3>
                        </div>
                        <div className='Going'>
                            <h3>Going</h3>
                        </div>
                        <div className='GoingBack'>
                            <h3>GoingBack</h3>
                        </div>
                        <div className='Order'>
                            <h3>Order</h3>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}
export default FlightDetail