import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpDateComponent from './ExpDateComponent';


const GetPayments = () => {
  const [data, setData] = useState([]);

  const getPayments = async () => {
    await axios.get('http://localhost:5000/api/v1/get-payments')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getPayments()
  },[])

  return (
    <>
        {data.map(item => (
          <div key={item._id} className="container">
              <div className="site-card-border-less-wrapper">
                <div className='card-header m-3'>Информация о платеже</div>
                  <h5 card-title>RequestId: {item._id}</h5>
                  <p className='card-text'>Количество: {item.amount}</p>
                  <div>Срок действия карты: <ExpDateComponent item={item} /></div>
              </div>
          </div>
      ))}
    </>
  )
}

export default GetPayments