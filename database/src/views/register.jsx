
import '../views/register.css'
import { Input ,Button} from 'antd';
const Register = () =>{
    return (
        <>
            <div className="main">
                <div className='left'> 
                    <div className='top'>
                        <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='First Name'
                        ></Input>
                         <Input
                            style={{height: '70PX', width:'80%'}}
                            placeholder='Last Name'
                        ></Input>
                    </div>
                    <div className='bottom'>
                        <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Phone Number'
                        ></Input>
                        <div
                            style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}
                        >     
                            <Input
                            style={{marginLeft:'7vh',width:'37%',height: '70PX'}}
                                placeholder='Gender'
                            ></Input>
                            <Input
                             style={{marginRight:'7vh',width:'37%', height: '70PX'}}
                             placeholder='Age'
                            ></Input>
                        </div>

                    </div>
                </div>
                <div className='right'>
                    <div>
                         <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Email'
                        ></Input>
                         <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Password'
                        ></Input>
                         <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Confirm Password'
                        ></Input>
                    </div>
                    <div 
                        style={{display:'flex', alignItems:'center', justifyContent:'end', paddingRight:'8vh'}}
                    >
                        <Button
                        style={{backgroundColor:'#60B564', color:'white', width:'150px', height:'70px', fontSize:'20px'}}
                        >Register</Button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Register