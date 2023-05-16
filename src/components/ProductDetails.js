import {  useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import '../assets/ProductDetails.css'

export const ProductDetails = () => {
  const total = useSelector((state) => state);
  // const dispatch = useDispatch();
  const { id } = useParams();
  // Find the product with the given ID
  const product = total.ecomm.data.find((p) => p.id === Number(id));

  // If the product doesn't exist, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  // If the product exists, render its details
  const { title, description, img, price } = product;

 

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={img} alt={title} className="product-image" />
      </div>
      <div className="product-details-container">
        <h1 >{title}</h1>
        <div className="product-details">
          <p><b>ID:</b> {id}</p>
          <p><b>Price:</b> ${price}</p>
          <p><b>description:</b></p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
