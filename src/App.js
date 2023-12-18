import React from 'react';
import Navbar from './components/Navbar'; 
import Home from './pages/Home/home';
import Delivery from './pages/Delivery/Delivery';
import PaymentDet from './pages/Payment Details/PaymentDet';
import PaymentMethod from './pages/Payment Methods/PaymentMethods';
import OrderSummary from './pages/Summary/OrderSummary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment-details" element={<PaymentDet />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
