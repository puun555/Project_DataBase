import { useNavigate } from "react-router-dom"
import { Button } from "antd"
const SelectSeat = ()=>{
    const navigate = useNavigate()
    return(
        <>
            <Button
                onClick={()=>navigate(
                    '/meat'
                )}
            >Select Seat</Button>
        </>
    )
}

export default SelectSeat