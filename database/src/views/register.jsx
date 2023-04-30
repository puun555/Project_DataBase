
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../views/register.css'
import { Input ,Button, Alert} from 'antd';
const Register = () =>{
    const navigate = useNavigate()
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phone,setPhone] = useState("");
    const [gender,setGender] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const localSignUp = localStorage.getItem("signUp");
    useEffect(()=>{
        if(localSignUp){
            navigate('/home')
        }
    })
    const handleClick = () => {
        if(firstName && lastName && phone && gender && age && email && password){
            localStorage.setItem("FirstName",firstName);
            localStorage.setItem("LastName",lastName);
            localStorage.setItem("Phone",phone);
            localStorage.setItem("Gender",gender);
            localStorage.setItem("Age",age);
            localStorage.setItem("Email",email);
            localStorage.setItem("Password",password);
            localStorage.setItem("signUp",email);
            alert("Account create Successfully");
            window.location.reload();
        }
    }
    return (
        <>
            <div className="main">
                <div className='left'> 
                    <div className='top'>
                        <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='First Name'
                            onChange={(event) => setFirstName(event.target.value)}
                        ></Input>
                         <Input
                            style={{height: '70PX', width:'80%'}}
                            placeholder='Last Name'
                            onChange={(event) => setLastName(event.target.value)}
                        ></Input>
                    </div>
                    <div className='bottom'>
                        <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Phone Number'
                            onChange={(event) => setPhone(event.target.value)}
                        ></Input>
                        <div
                            style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}
                        >     
                            <Input
                            style={{marginLeft:'7vh',width:'37%',height: '70PX'}}
                                placeholder='Gender'
                                onChange={(event) => setGender(event.target.value)}
                            ></Input>
                            <Input
                             style={{marginRight:'7vh',width:'37%', height: '70PX'}}
                             placeholder='Age'
                             onChange={(event) => setAge(event.target.value)}
                            ></Input>
                        </div>

                    </div>
                </div>
                <div className='right'>
                    <div>
                         <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Email'
                            onChange={(event) => setEmail(event.target.value)}
                            
                        ></Input>
                         <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                        ></Input>
                         <Input
                            style={{height: '70PX', width:'80%', margin:'5vh'}}
                            placeholder='Confirm Password'
                        ></Input>
                    </div>
                    <div 
                        style={{display:'flex', alignItems:'center', justifyContent:'end', paddingRight:'8vh'}}
                    >
                        <Button onClick={handleClick} style={{backgroundColor:'#60B564', color:'white', width:'150px', height:'70px', fontSize:'20px'}}
                        >Register</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register