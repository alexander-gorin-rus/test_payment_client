// import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import axios from 'axios';
import { useForm } from 'react-hooks-form'
import React, { useState } from 'react';

const PaymentForm = () => {

    const {register, handleSubmit} = useForm()
    const [values, setValues] = useState({
        CardNumber: '',
        ExpDate: null,
        CVV: '',
        amount: 0
    });

    const {CardNumber, ExpDate, CVV, amount} = values;


    const onSubmit = async (e) => {
        e.preventDefault();
        alert(JSON.stringify(e))
        //await axios.post('http://localhost:5000/api/v1/create-payment')

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='CardNumber'>номер карты</label>
                    <input 
                        placeholder='0000 0000 0000 0000'
                        type='tel'
                    />
                </div>
                <input number value={amount}/>
                <button>Отправить</button>
            </form>
        </>
    //     <Row>
    //         <Col span={24}>
    //             <Form
    //                 name="basic"
    //                 labelCol={{
    //                     span: 8,
    //                 }}
    //                 wrapperCol={{
    //                     span: 16,
    //                 }}
    //                 initialValues={{
    //                     remember: true,
    //                 }}
    //                 onFinish={onFinish}
    //                 onFinishFailed={onFinishFailed}
    //                 autoComplete="off"
    //                 >
    //                 <Form.Item
    //                     label="Username"
    //                     name="username"
    //                     rules={[
    //                     {
    //                         required: true,
    //                         message: 'Пожалуйста, введите номер карты',
    //                     },
    //                     ]}
    //                 >
    //                     <Input />
    //                 </Form.Item>

    //                 <Form.Item
    //                     label="Password"
    //                     name="password"
    //                     rules={[
    //                     {
    //                         required: true,
    //                         message: 'Please input your password!',
    //                     },
    //                     ]}
    //                 >
    //                     <Input.Password />
    //                 </Form.Item>

    //                 <Form.Item
    //                     name="remember"
    //                     valuePropName="checked"
    //                     wrapperCol={{
    //                     offset: 8,
    //                     span: 16,
    //                     }}
    //                 >
    //                     <Checkbox>Remember me</Checkbox>
    //                 </Form.Item>

    //                     <Form.Item
    //                         wrapperCol={{
    //                         offset: 8,
    //                         span: 16,
    //                         }}
    //                     >
    //                         <Button type="primary" htmlType="submit">
    //                         Submit
    //                         </Button>
    //                     </Form.Item>
    //                 </Form>
    //         </Col>
    //   </Row>
    
    );
};

export default PaymentForm;