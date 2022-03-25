import React, { useState  } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import { handlePayment } from '../functions/payments';
import { toast } from 'react-toastify';
import validateInfo from './validateInfo';

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
    const [errors, setErrors] = useState({})

    // const [number, setNumber] = useState("");
    // const [name, setName] = useState("");
    // const [expiry, setExpiry] = useState("");
    // const [cvc, setCvc] = useState("");
    //const [focus, setFocus] = useState("");

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'CVV') ? 'cvc' : e.target.name
        });
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handlePayment(values)
            .then(message => toast.success(message))
            .catch(error => toast.error(error))
        setErrors(validateInfo(values))
        setValues({
            CardHolderName: '',
            CardNumber: '',
            ExpDate: '',
            CVV: '',
            focus: '',
            amount: 0
        })
    }

    return (
        <div className='container-fluid m-4'>
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
                    isValid={errors.cnumber}   
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
                <button type='Submit' className='btn btn-primary m-2'>Отправить</button>
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
//                     name="cardType"
//                     id="cardType"
//                     data-testid="cardType"
//                     placeholder="Card Type"
//                     value={values.cardType}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                     isValid={errors.ctype}
//                   />
//                 </Form.Group>
//               </Col>
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
//                   />
//                 </Form.Group>
//               </Col>
//               <Col>
//                 <Form.Group>
//                   <Form.Control
//                     type="text"
//                     id="cardPostalCode"
//                     data-testid="cardPostalCode"
//                     name="cardPostalCode"
//                     placeholder="Postal Code"
//                     value={values.cardPostalCode}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                     isValid={errors.cpostal}
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