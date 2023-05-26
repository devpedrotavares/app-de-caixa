import './App.css';
import {useState} from 'react';
import ProductsPage from './ProductsPage';
import OrdersPage from './OrdersPage';

function App() {
  const [page, setPage] = useState("MainPage");

  const pages = {
    "MainPage": <MainPage setPage={setPage}/>,
    "ProductsPage": <ProductsPage setPage={setPage}/>,
    "OrdersPage": <OrdersPage setPage={setPage}/>
  }

  return (
    <div className="App">
      {pages[page]}
    </div>
  );
}

function MainPage({setPage}) {

  return (<><h1>Supermarket</h1>
  <button onClick={() => setPage("ProductsPage")}>Produtos</button>
  <button onClick={() => setPage("OrdersPage")}>Pedidos</button></>);
}

export default App;
