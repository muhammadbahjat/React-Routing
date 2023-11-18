import React from 'react';
import MakeOrder from './components/MakeOrder';
import MakePayment from './components/MakePayment';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div>
      <MakeOrder />
      <MakePayment />
      <footer class="container bg-dark text-white m-auto border-top border-danger border-5 my-2"></footer>
      
    </div>
  );
}

export default App;
