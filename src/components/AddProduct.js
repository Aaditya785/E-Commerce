import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/AddProduct.css'
import { addProducts } from '../redux/reducer';

const AddProduct = () => {


    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');


    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log("You Clicke Me")

        dispatch(addProducts({
            title: title,
            price: price,
            img: img,
            rating: rating,
            description: description,
        }))


        navigate("/")
    }

    return (
        <fieldset>
            <legend>Add a Product</legend>
            <form className='formStyle' onSubmit={handleAddProduct} >
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Product Name...' value={title} />
                <input onChange={(e) => setPrice(e.target.value)} placeholder='Enter Price...' type="number" value={price} />
                <input onChange={(e) => setImg(e.target.value)} placeholder='Enter image url' value={img} />
                <input onChange={(e) => setRating(e.target.value)} placeholder='Enter Rating...' value={rating} />
                <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Enter product Description...' value={description} />
                <button>Add</button>
            </form>
        </fieldset>
    )


}

export default AddProduct