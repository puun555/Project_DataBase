import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button,
    FormControl
} from '@mui/material';
import Face3Icon from '@mui/icons-material/Face3';

import './LoginPage.css'
export default function LoginPage  () {
    const [register, setRegister] = useState(true)
    const Register = ()=>{
        setRegister(!register)
    }

    return(
        <>
            <div
                className='box'
            >
                {register && 
                 <Grid
                    sx={{marginTop: '6vh'}}
                    container
                    spacing={4 }
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <div>
                        <img src="https://media.discordapp.net/attachments/1088439911444643931/1088494506661400667/logo_gear_airline-02.png?width=363&height=363"></img>
                    </div>
                    <Grid item xs={4}>
                        
                        <TextField 
                            size='Normal'
                            sx={{width: '400px',
                                borderRadius:'50px'
                            }}
                            label="Email"
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField 
                            size='Normal'
                            sx={{width: '400px'}}
                            label="Password" 
                            type={'password'}
                        ></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <Button 
                            fullWidth 
                            sx={{color: 'black',
                                width: '100px',
                                borderRadius:'20px',
                                marginRight:'20px'
                            }}
                            variant="outlined"
                        > Login </Button>
                        <Button
                            onClick={()=>Register()}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid> 
                }  
                {!register && 
                    <Grid
                    sx={{marginTop: '10vh'}}
                    container
                    spacing={2 }
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                    >
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap' }}
                        >
                            <div>
                                <TextField
                                    label="first name"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '40ch' }}

                                />
                                <TextField
                                    label="last name"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '40ch' }}
                                />
                            </div>
                        </Box>
                        <FormControl>
                            <TextField
                                    label="Email"
                                    id="outlined-start-adornment"
                                    sx={{ mt: 1, width: '82ch' }}
                                />
                        </FormControl>
                        <div>
                            <TextField
                                    label="Phone"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '40ch' }}
                                />
                             <TextField
                                    label="Gender"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '22ch' }}
                                />
                             <TextField
                                    label="Age"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '16ch' }}
                                />
                        </div>
                        <Box
                            sx={{ display: 'flex', flexWrap: 'wrap' }}
                        >
                            <div>
                                <TextField
                                    label="password"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '40ch' }}

                                />
                                <TextField
                                    label="confirm password"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '40ch' }}
                                />
                            </div>
                        </Box>
                        <Grid item xs={4}>
                        <Button 
                            fullWidth 
                            sx={{color: 'black',
                                width: '20vh',
                                borderRadius:'20px',
                                marginRight:'20px'
                            }}
                            variant="outlined"
                            onClick={()=>Register()}
                        > Already Have Account </Button>
                        <Button
                        >
                            Register
                        </Button>
                    </Grid>


                    </Grid>
                }
             </div>
        </>
    )
}



