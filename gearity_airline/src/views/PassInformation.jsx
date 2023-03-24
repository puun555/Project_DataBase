import './PassInformation.css'
import Paper from '@mui/material/Paper';
import { Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Button,
    FormControl
} from '@mui/material';

const PassInFormation = ()=>{
    return(
            <div className="background2">
                <div className='all'>
                    <Paper>
                        <div className='name'>
                            <TextField 
                                    size='Normal'
                                    sx={{width: '220px',
                                        borderRadius:'50px',
                                        marginRight:'2vh'
                                    }}
                                    label="First Name"
                                    helperText=""
                                ></TextField>
                            <TextField 
                                size='Normal'
                                sx={{width: '220px',
                                    borderRadius:'50px'
                                }}
                                label="Last Name"
                                helperText=""
                            ></TextField>
                        </div>
                        <div className='email'>
                            <TextField 
                                    size='Normal'
                                    sx={{width: '460px',
                                        borderRadius:'50px'
                                    }}
                                    label="Last Name"
                                    helperText=""
                                ></TextField>
                        </div>
                        <div className='agegender'>
                            <TextField 
                                    size='Normal'
                                    sx={{width: '150px',
                                        borderRadius:'50px',
                                        marginRight:'2vh'
                                    }}
                                    label="Age"
                                    helperText=""
                                ></TextField>
                            <TextField 
                                size='Normal'
                                sx={{width: '150px',
                                    borderRadius:'50px'
                                }}
                                label="Gender"
                                helperText=""
                            ></TextField>
                        </div>
                    </Paper>
                   
                </div>
            </div>
    )
}
export default PassInFormation