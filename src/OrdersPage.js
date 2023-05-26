import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import Product from './Product';
import Modal from './Modal/Modal'
import "./products.css";

function OrdersPage({setPage}) {
  const [orders, setOrders] = useState([{id:1,name:"order1"},{id:2,name:"order1"},{id:3,name:"order1"}]);
  const [products, setProducts] = useState([{id:1,name:"product1"},{id:2,name:"product2"},{id:3,name:"product3"}]);
  const [openModal, setOpenModal] = useState(false);

  const API_URL = "http://localhost:8000/orders/";
    
  async function doFetchOrders(){
      try{
        const response = await fetch(API_URL, {
          method: 'GET'
        })
        
        const body = await response.json();
        setOrders(body);

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }

    //code for testing
    const handleDeleteOrder = (id) => setOrders(orders.filter(order => order.id !== id));
    
    const handleAddOrder = (order) => setOrders([...orders, {...order}]);
    //until here (testing)

    /*
    useEffect(() => {
      doFetchOrders()
    }, []);

    async function handleDeleteOrder(id){
      try{
        const response = await fetch(API_URL + id, {
          method: 'DELETE'
        })

        if(response.ok){
          setProducts(products.filter(product => product.id !== id));
        }
        else{
          alert("Não foi possível deletar...");
        }

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }

    async function handleAddOrder(product){
      try{
        
        const response = await fetch(API_URL + "/products/", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": product.name,
          })
        })

        if(response.ok){
          const body = await response.json();
          setProducts([...products, {...product, "id": body.id}]);
        }
        else{
          alert("Não foi possível criar o animal...");
        }

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }
    */

  return (
    <div>
      <div className="card" id="products">

      {!openModal ? 
        (
        <>
          <h1>Pedidos</h1>
            <div className="titulo">
              <h2 className="name">Name</h2>
              <h2 className="description">Description</h2>
              <h2 className="price">Price</h2>
              <h2 className="category">Category</h2>
              <h2 className="image">Image</h2>
            </div>
            <div className="products">
              {orders.map((product, index) => <Order key={index} item={product} handleDeleteOrder={handleDeleteOrder}/>
              )}
            </div>

            <button onClick={() => setOpenModal(true)}>Criar Pedido</button>
          </>) : <Modal setOpenModal={setOpenModal} handleAddOrder={handleAddOrder} products={products}></Modal>
        }

      </div>

      <button onClick={() => setPage("MainPage")}>Voltar</button>
    </div>
    
  );
}

const Order = ({item, handleDeleteOrder, key}) => {

  return (
    <div className="product" key={key}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <img src={item.imgURL} alt={"order"}/>
            <button onClick={() => handleDeleteOrder(item.id)} className="add-delete-button">-</button>
        </div>
  );
}

export default OrdersPage;