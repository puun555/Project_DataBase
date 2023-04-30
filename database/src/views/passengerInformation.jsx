import {  Button, Form, Input, InputNumber } from "antd"
import '../views/passengerInformation.css'
import { useNavigate } from "react-router-dom";
import Navbar from '../views/navbar';
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
        <Navbar></Navbar>
        <div className="selectSeat-header" style={{background:'#FFABAB'}}>
                <div className="selectSeat-header-left"  onClick={()=>navigate('/booksflights')}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"} alt="." style={{width:'2vw',height: '2vw',left:"2vw"}}
                    ></img>
                    <h3>Edit Flights</h3>
                </div>
            </div>
            <div className="containerP">
                <Form className="form-s">
                    <div className="name">
                        <div className="box-item">
                            <h1>First Name</h1>
                            <Input style={{
                                width: '70vh',
                                height:'70px',
                                borderRadius:'30px',
                                marginRight:'5vh',
                                fontSize:'30px'
                            }}
                            placeholder="First Name"
                            ></Input>
                        </div>
                        <div className="box-item">
                            <h1>last Name</h1>
                            <Input style={{
                                width: '80vh',
                                height:'70px',
                                borderRadius:'30px',
                                fontSize:'30px'
                            }}
                            placeholder="LastName"
                            ></Input>
                            </div>
                        </div>
                    <div className="pass-bot">
                        <div
                            className="pass-left"
                        >
                            <div className="box-item">
                                <h1>Email</h1>
                                <Input style={{
                                    width: '80vh',
                                    height:'70px',
                                    borderRadius:'30px',
                                    marginRight:'5vh',
                                    fontSize:'30px'
                                 }}
                                placeholder="Email"
                                ></Input>
                            </div>
                            <div 
                                style={{display:'flex'}}
                            >
                                <div className="box-item">
                                    <h1>Age</h1>
                                    <Input style={{
                                        width: '50vh',
                                        height:'70px',
                                        borderRadius:'30px',
                                        fontSize:'30px',
                                        marginRight:'5vh',
                                    }}
                                    placeholder="Age"
                                    ></Input>
                                </div>
                                <div className="box-item">
                                    <h1>Gender</h1>
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

                        </div>
                        <div
                            className="pass-right"
                        >
                            <div className="box-item">
                                <h1>Phone Number</h1>
                                <Input style={{
                                    width: '60vh',
                                    height:'70px',
                                    borderRadius:'30px',
                                    fontSize:'30px',
                                    marginRight:'5vh',
                                }}
                                placeholder="Phone Number"
                                ></Input>
                                </div>
                            <div
                            className="btn"
                            >
                            <div className="box-item">
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
                    </div>
                    </Form>
            </div>
        </>
    )
}
export default PassengerInformation