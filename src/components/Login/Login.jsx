import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import userCredentials from "./UserCredentials"
import {useNavigate} from "react-router-dom"

function Login() {


    const navigate = useNavigate();

    const checkingCredentials = (values) => {
            if(values.username === userCredentials.username && values.password === userCredentials.password)
                navigate('/home/filmovi')
            
        
    }

    return (
        <div className="container">

             <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     onFinish={(value) => checkingCredentials(value)}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
            
          },
        ]}
        className="user"
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
    
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Login
