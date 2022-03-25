import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaymentForm from './components/PaymentForm';
import GetPayments from './components/GetPayments';
import 'antd/dist/antd.css';
import Header from './components/Header';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    
      <Router>
        <Fragment>
          <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/get-payments" component={GetPayments} />
          <Route exact path="/create-payment" component={PaymentForm} />
        </Switch>
        </Fragment>
      </Router>

  );
}

export default App;
