import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
            <AppBar position="static">
               <div style={{display:'flex', justifyContent:'flex-end', height:'50px', alignItems: 'center', padding:'2vh'}}>
                    <AccountCircleIcon
                        style={{fontSize:60}}
                    ></AccountCircleIcon>
               </div>
            </AppBar>
        </>
    )
}
export default Navbar