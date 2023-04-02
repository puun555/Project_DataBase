import {  Button, Form, Input, InputNumber } from "antd"
import '../views/passengerInformation.css'
import { useNavigate } from "react-router-dom";
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const onFinish = (values) => {
    console.log(values);
  };  
const PassengerInformation = () =>{
    const navigate = useNavigate()
    return(
        <>
            <div className="containerP">
                <Form>
                    <div className="name">
                            <Input style={{
                                width: '70vh',
                                height:'70px',
                                borderRadius:'30px',
                                marginRight:'5vh',
                                fontSize:'30px'
                            }}
                            placeholder="First Name"
                            ></Input>
                            <Input style={{
                                width: '80vh',
                                height:'70px',
                                borderRadius:'30px',
                                fontSize:'30px'
                            }}
                            placeholder="LastName"
                            ></Input>
                    </div>
                    <div className="pass-bot">
                        <div
                            className="pass-left"
                        >
                            <Input style={{
                                marginTop:'10vh',
                                width: '80vh',
                                height:'70px',
                                borderRadius:'30px',
                                marginRight:'5vh',
                                fontSize:'30px'
                            }}
                            placeholder="Email"
                            ></Input>
                            <div 
                                style={{display:'flex', marginTop:'10vh'}}
                            >
                                <Input style={{
                                    width: '50vh',
                                    height:'70px',
                                    borderRadius:'30px',
                                    fontSize:'30px',
                                    marginRight:'5vh',
                                }}
                                placeholder="Age"
                                ></Input>
                                <Input style={{
                                    width: '50vh',
                                    height:'70px',
                                    borderRadius:'30px',
                                    fontSize:'30px'
                                }}
                                placeholder="Gender"
                                ></Input>
                            </div>

                        </div>
                        <div
                            className="pass-right"
                            
                        >
                            <Input style={{
                                    width: '60vh',
                                    height:'70px',
                                    borderRadius:'30px',
                                    fontSize:'30px',
                                    marginRight:'5vh',
                                }}
                                placeholder="Phone Number"
                                ></Input>
                            <div
                            className="btn"
                            >
                            <Button
                                onClick={()=>navigate('/selectseat')}
                                style={{
                                    width:'300px',
                                    height:'50px'
                                }}
                            >Submit</Button>
                             </div> 
                        </div>
                       
                    </div>
                    </Form>
            </div>
        </>
    )
}
export default PassengerInformation