import axios from 'axios'

export const handlePayment = async (data) => {
    await axios.post('http://localhost:5000/api/v1/create-payment', data);
}