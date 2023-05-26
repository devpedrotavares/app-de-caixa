function Product(props) {

    return (
      <div className="product" key={props.key}>
              <p>{props.item.name}</p>
              <p>{props.item.description}</p>
              <p>{props.item.category}</p>
              <p>{props.item.price}</p>
              <img src={props.item.imgURL} alt={"product"}/>
              <button onClick={() => props.handleDelete(props.item.id)} className="add-delete-button">-</button>
          </div>
    );
}

export default Product;