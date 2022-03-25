import React, { useState  } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import { handlePayment } from '../functions/payments';
import { toast } from 'react-toastify';

const PaymentForm = () => {

    const [values, setValues] = useState({
        CardHolderName: '',
        CardNumber: '',
        ExpDate: '',
        CVV: '',
        focus: '',
        amount: 0
    });

    const {CardNumber, CardHolderName, ExpDate, CVV, amount, focus} = values;
   
    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'CVV') ? 'cvc' : e.target.name
        });
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const toastSuccess = () => {
        toast.success('Ваш платеж успешно проведен')
    }

    const monthExpDateError = () => {
        toast.error('Не верно введен месяц окончания действия карты')
    }

    const yearExpDateError = () => {
        toast.error('Не верно введен год окончания действия карты')
    }

    // 
    let wrongExpDateMonth = ExpDate.slice(0,2);
    let wrongExpDateYear = ExpDate.slice(2,5);
    console.log(wrongExpDateYear)

    const onSubmit = (e) => {
        e.preventDefault()
        if (wrongExpDateMonth > 12 || wrongExpDateMonth.toString() === '00') {
            monthExpDateError()
        } else if (wrongExpDateYear < 22) {
            yearExpDateError()
        } 
        else {
            handlePayment(values)
            toastSuccess()
        }
       
    }

    
    return (
        <div className='container m-4'>
            <Cards 
                number={CardNumber}
                name={CardHolderName}
                expiry={ExpDate}
                cvc={CVV}
                focused={focus}
            />
            <form onSubmit={onSubmit}>
            <label className="form-label mr-2">Номер карты</label>
                <input 
                    className="form-control m-2"
                    type='tel' 
                    maxLength="16"
                    name="CardNumber" 
                    value={CardNumber} 
                    onChange={onChange} 
                    onFocus={handleFocus} 
                />
                <label className="form-label mr-2">ФИО</label>
                <input 
                    className="form-control m-2"
                    type='text' 
                    name="CardHolderName" 
                    value={CardHolderName} 
                    onChange={onChange} 
                    onFocus={handleFocus}    
                />
                <label className="form-label mr-2">Срок действия карты</label>
                <input 
                    className="form-control m-2"
                    type='text' 
                    maxLength="4"
                    name="ExpDate" 
                    placeholder='MM/ГГ' 
                    value={ExpDate} 
                    onChange={onChange} 
                    onFocus={handleFocus}    
                />
                <label className="form-label mr-2">CVV</label>
                <input 
                    className="form-control m-2"
                    type='tel'
                    maxLength="3" 
                    name="CVV" 
                    value={CVV} 
                    onChange={onChange} 
                    onFocus={handleFocus}  
                />
                <label className="form-label mr-2">Количество</label>
                <input 
                    style={{width: '105px'}}
                    className="form-control m-2"
                    type='number' 
                    name="amount"  
                    value={amount} 
                    onChange={onChange} 
                    min='1' 
                />
                <button type='Submit' disabled={
                    !CardHolderName || 
                    !CVV || 
                    CVV.length < 3 || 
                    !ExpDate ||
                    ExpDate.length < 4 || 
                    !CardNumber || 
                    CardNumber.length < 16 || 
                    !amount
                    } 
                    className='btn btn-primary m-2'>Оплатить</button>
            </form>
        </div>
    )
}

export default PaymentForm


// import React from "react";
// import useForm from "./useForm";
// import { Button, Form, Alert, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// //import "./CreditCardForm.css";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";


// const PaymentForm = () => {
//   const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
//   return (
//     <div>
//       <div className="container">
//         <div className="box justify-content-center align-items-center">
//           <div className="formDiv">
//           <div className="creditCard">
//           <Cards
//             cvc={values.cardSecurityCode}
//             expiry={values.cardExpiration}
//             focused={values.focus}
//             name={values.cardName}
//             number={values.cardNumber}
//           />
//           </div>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group>
//               <Form.Control
//                 type="text"
//                 id="cardName"
//                 data-testid="cardName"
//                 name="cardName"
//                 placeholder="Cardholder Name"
//                 value={values.cardName}
//                 onChange={handleChange}
//                 onFocus={handleFocus}
//                 isValid={errors.cname}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 type="number"
//                 id="cardNumber"
//                 data-testid="cardNumber"
//                 name="cardNumber"
//                 placeholder="Card Number"
//                 value={values.cardNumber}
//                 onChange={handleChange}
//                 onFocus={handleFocus}
//                 isValid={errors.cnumber}
//               />
//             </Form.Group>
//             <Row>
//               <Col>
//                 <Form.Group>
//                   <Form.Control
//                     type="text"
//                     id="cardExpiration"
//                     data-testid="cardExpiration"
//                     name="cardExpiration"
//                     placeholder="Expiration Date"
//                     value={values.cardExpiration}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                     isValid={errors.cexp}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <Form.Group>
//                   <Form.Control
//                     type="number"
//                     id="cardSecurityCode"
//                     data-testid="cardSecurityCode"
//                     name="cardSecurityCode"
//                     placeholder="Security Code"
//                     value={values.cardSecurityCode}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                     isValid={errors.ccvv}
//                     maxLength="3"
//                   />
//                 </Form.Group>
//               </Col>
             
//             </Row>
//             <Button
//               size={"block"}
//               data-testid="validateButton"
//               id="validateButton"
//               type="submit"
//             >
//               Validate
//             </Button>
//           </Form>
//           </div>
//           <Alert
//             id="alertMessage"
//             data-testid="alertMessage"
//             variant={errors.variant}
//             show={errors.show}
//           >
//             {errors.message}
//           </Alert>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;