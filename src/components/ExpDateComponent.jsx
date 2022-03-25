import React from 'react'

const ExpDateComponent = ({item}) => {
    let expDateMonth = item.ExpDate.toString().slice(0, 2);
    let expDateYear = item.ExpDate.toString().slice(2, 5);
  return (
    <div>{expDateMonth}/{expDateYear}</div>
  )
}

export default ExpDateComponent