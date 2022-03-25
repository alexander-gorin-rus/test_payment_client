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

    // as we store card expiry date not in a date format, 
    // but as numbers, we need to correctly format these numbers
    // so they might look like date types.

    // first of all, let's slice first two digits  
    let wrongExpDateMonth = ExpDate.slice(0,2);

    // second, slice the other two ones
    let wrongExpDateYear = ExpDate.slice(2,5);

    // and here we can manipulate with these results
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