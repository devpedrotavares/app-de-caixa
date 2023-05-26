import {useState} from 'react';

function Modal({setOpenModal, handleAddOrder, products}) {
    const [orderPairs, setOrderPairs] = useState([]);
  
    const handleAddOrderPair = (orderPair) => {
        setOrderPairs([...orderPairs, orderPair]);
    }
    
    const handleDeleteOrderPair = (productId) => {
        setOrderPairs(orderPairs.filter((each) => each.productId !== productId));
    }

    return (
    <div className="card" id="order-pairs">
        <h1>Criação de pedido</h1>
  
        <div className="titulo">
          <h2 className="quantity">Quantidade</h2>
          <h2 className="productId">ID Produto</h2>
        </div>

        <div className="products">
          {orderPairs.map((orderPair, index) => <OrderPair key={index} orderPair={orderPair} handleDeleteOrderPair={handleDeleteOrderPair}/>
          )}
        </div>

        <div className="products">
          <OrderPairInput products={products} handleAddOrderPair={handleAddOrderPair}/>
        </div>

        <button id='add-order-button' class="modal-button" onClick={() => handleAddOrder(orderPairs)}>Criar Pedido</button>
        <button className="cancel-button modal-button" onClick={() => setOpenModal(false)}>Cancelar</button>

      </div>
    );
}

function OrderPair({orderPair, handleDeleteOrderPair, key}) {

    return (
      <div className="product" key={key}>
              <p>{orderPair.quantity}</p>
              <p>{orderPair.productId}</p>

              <button onClick={() => handleDeleteOrderPair(orderPair.productId)} className="add-delete-button">-</button>
          </div>
    );
}

function OrderPairInput({products, handleAddOrderPair}){
    const [quantity, setQuantity] = useState(0);
    const [productId, setProductId] = useState(products[0]?.id);

    return(
        <div>
            <input value={quantity} type="number" onChange={(e) => setQuantity(e.target.value)}/>

            <select className="order-input" onChange={(e) => setProductId(e.target.value)}>
              {products.map(products => (<option value={products.id}> {products.name} </option>))}
            </select>

            <button onClick={() => handleAddOrderPair({"quantity":quantity, "productId":productId})} className="add-delete-button">+</button>
        </div>
    );
}

export default Modal;