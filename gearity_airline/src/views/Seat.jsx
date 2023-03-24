import { Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Button,
    FormControl,
    Paper,
    Stack
} from '@mui/material';
import './Seat.css'
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { height } from '@mui/system';
const Seat = ()=>{
    return(
        <div className="background3">
            <Paper>
                <div className='seats'>
                    <div className='rowA'>  
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                        <div></div>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                    </div>
                    <div className='rowA'>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                        <div></div>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                    </div>
                    <div className='rowA'>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                        <div></div>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>

                    </div>
                    <div className='rowA'>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                        <div></div>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                    </div>
                    <div className='rowA'>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                        <div></div>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                    </div>
                    <div className='rowFront'>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                        <div></div>
                        <EventSeatIcon className='seat'/>
                        <EventSeatIcon className='seat'/>
                    </div>
                </div>
            </Paper>

        </div>
    )
}
export default Seat