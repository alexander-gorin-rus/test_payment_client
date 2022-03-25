import React, { useState  } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import { handlePayment } from '../functions/payments';

const PaymentForm = () => {

    const [values, setValues] = useState({
        CardHolderName: '',
        CardNumber: '',
        ExpDate: '',
        CVV: '',
        amount: 0
    });

    const {CardNumber, CardHolderName, ExpDate, CVV, amount} = values

    // const [number, setNumber] = useState("");
    // const [name, setName] = useState("");
    // const [expiry, setExpiry] = useState("");
    // const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handlePayment(values)
        console.log(values)
    }

  return (
    <div>
        <Cards 
            number={CardNumber}
            name={CardHolderName}
            expiry={ExpDate}
            cvc={CVV}
            focused={focus}
        />
        <form onSubmit={onSubmit}>
            <input 
                type='tel' 
                maxLength="16"
                name="CardNumber" 
                placeholder='Номер карты' 
                value={CardNumber} 
                onChange={onChange} 
                onFocus={e => setFocus(e.target.name)}    
            />
            <input 
                type='text' 
                name="CardHolderName" 
                placeholder='ФИО' 
                value={CardHolderName} 
                onChange={onChange} 
                onFocus={e => setFocus(e.target.name)}    
            />
            <input 
                type='text' 
                maxLength="4"
                name="ExpDate" 
                placeholder='MM/ГГ' 
                value={ExpDate} 
                onChange={onChange} 
                onFocus={e => setFocus(e.target.name)}    
            />
            <input 
                type='tel'
                maxLength="3" 
                name="CVV" 
                placeholder='cvc' 
                value={CVV} 
                onChange={onChange} 
                onFocus={e => setFocus(e.target.name)}  
            />
            <input 
                type='number' 
                name="amount"  
                value={amount} 
                onChange={onChange} 
                min='1' 
            />
            <button type='Submit'>Отправить</button>
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