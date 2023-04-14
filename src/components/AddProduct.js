import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
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
            id: Date.now(),
            title: title,
            price: price,
            img: img,
            rating: rating,
            description: description,
        }))

        navigate("/")
        setTimeout(() => {
            toast.success("Addedd Successfully")
        }, 500);
    }

    return (
        <fieldset>
            <legend style={styles.legendFont}>Add a Product</legend>
            <div className='formStyle'  >
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Product Name...' value={title} />
                <input onChange={(e) => setPrice(e.target.value)} placeholder='Enter Price...' type="number" value={price} />
                <input onChange={(e) => setImg(e.target.value)} placeholder='Enter image url' value={img} />
                <input onChange={(e) => setRating(e.target.value)} placeholder='Enter Rating Out of 5...' value={rating} />
                <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Enter product Description...' value={description} />
                <button onClick={handleAddProduct} >Add</button>
            </div>
            For Image : https://picsum.photos/600
            <Toaster/>
        </fieldset>
    )
}

const styles = {
    legendFont: {
        textAlign: "center",
        fontSize: '1.5rem',
        fontWeight: '600',
    }
}

export default AddProduct