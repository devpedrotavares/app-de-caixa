import {useState} from 'react';

function ProductInput(props){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [imgURL, setImgURL] = useState("");

    return(
        <div className="product">
            <input className="product-input" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="product-input" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <input className="product-input" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input className="product-input" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input className="product-input" value={imgURL} onChange={(e) => setImgURL(e.target.value)}/>
            <button onClick={() => props.handleAdd({"name":name, "description":description, "price":price})} className="add-delete-button">+</button>
        </div>
    );
}

export default ProductInput;