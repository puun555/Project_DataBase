import '../views/login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import Column from 'antd/es/table/Column';
const Login =()=>{
    
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const onFinish = (values) => {
        if(email == localStorage.getItem("Email") && password == localStorage.getItem("Password")){
            navigate("/home")
            alert("Welcome to Gearity Airline")
            
        }else{
            onFinishFailed();
        }
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <>
            <div className='login'>
                <div className="login-card">
                    <Form 
                        name="basic"
                        labelCol={{
                        span: 8,
                        }}
                        wrapperCol={{
                        span: 16,
                        }}
                        style={{
                        maxWidth: 900,
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        }}
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                        label="Email"
                        name="username"
                        onChange={(event) => setEmail(event.target.value)}
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Email!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>

        
                        <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Button type="primary" htmlType="submit"
                        >
                            Login
                        </Button>
                        
                        </Form.Item>
                        <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Button type="primary" htmlType="submit"  onClick={()=>navigate(
                            '/register'
                        )}
                    >
                        Regsiter
                    </Button>
                        
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Login