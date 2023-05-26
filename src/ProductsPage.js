import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import ProductInput from './ProductInput';
import Product from './Product'
import "./products.css";

function ProductsPage({setPage}) {
  const [products, setProducts] = useState([{id:1,name:"product1"},{id:2,name:"product2"},{id:3,name:"product3"}]);

  const API_URL = "http://localhost:8000";
    
  async function doFetchProducts(){
      try{
        const response = await fetch(API_URL + "/products", {
          method: 'GET'
        })
        
        const body = await response.json();
        setProducts(body);

      } catch(error){
          alert("Um erro ocorreu...");
          console.log(error);
      }
    }

    //code for testing
    const handleDelete = (id) => setProducts(products.filter(product => product.id !== id));
    
    const handleAdd = (product) => setProducts([...products, {...product}]);
    //until here (testing)

    /*
    useEffect(() => {
      doFetchProducts()
    }, []);

    async function handleDelete(id){
      try{
        const response = await fetch(API_URL + "/products/" + id, {
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

    async function handleAdd(product){
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
    <>
      <div className="card" id="products">
      <h1>Produtos em estoque</h1>
        <div className="titulo">
          <h2 className="name">Name</h2>
          <h2 className="description">Description</h2>
          <h2 className="price">Price</h2>
          <h2 className="category">Category</h2>
          <h2 className="image">Image</h2>
        </div>
        <div className="products">
          {products.map((product, index) => <Product key={index} item={product} handleDelete={handleDelete}/>
          )}
        </div>
        <div className="products">
          <ProductInput handleAdd={handleAdd}/>
        </div>
      </div>

      <button onClick={() => setPage("MainPage")}>Voltar</button>
    </>
    
  );
}

export default ProductsPage;