import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';


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
    <div>
      {data.map(item => (
        <div key={item._id} className="site-card-border-less-wrapper">
        <Card title="Card data" bordered={false} style={{ width: 500 }}>
          <p>RequestId: {item._id}</p>
          <p>Amount: {item.amount}</p>
        </Card>
      </div>
      ))}
    </div>
  )
}

export default GetPayments