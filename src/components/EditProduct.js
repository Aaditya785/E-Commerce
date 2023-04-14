import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../redux/reducer";

const EditProduct = () => {

    const {editId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state)

    console.log("Instide the edit pR", state.ecomm.data);

    let item = state.ecomm.data.find((c) => c.id === +editId)
  console.log("Item's",item);


const [title, setTitle] = useState(item?.title);
const [price, setPrice] = useState(item?.price);
const [img, setImg] = useState(item?.img);
const [rating, setRating] = useState(item?.rating);
const [description, setDescription] = useState(item?.description);


    const handleSubmit = (e)=>{
        e.stopPropagation();
        const finalData = {
            id: editId,
            title: title,
            price: price,
            img: img,
            rating: rating,
            description: description
        };

        dispatch(editProduct(finalData));

        setTimeout(() => {
            toast.success("Your Cart Updated Successfully!...")
        }, 500);

        navigate("/")
    }



    return (
        <>
            <div >
                    <fieldset>
                        <div className='formStyle'  >
                            <input value={title} placeholder='Enter Product Name...' onChange={(e) => setTitle(e.target.value)} />
                            <input value={price} placeholder='Enter Price...'  onChange={(e) => setPrice(e.target.value)} />
                            <input value={img} placeholder='Enter image url' onChange={(e) => setImg(e.target.value)} />
                            <input value={rating} placeholder='Enter Rating Out of 5...' onChange={(e) => setRating(e.target.value)} />
                            <textarea value={description} placeholder='Enter product Description...' onChange={(e) => setDescription(e.target.value)} rows="5" />
                        </div>
                        <div>
                            <button onClick={handleSubmit} >Update</button>
                            <button onClick={()=>{navigate("/")}} >Cancel</button>
                        </div>
                    </fieldset>
                    <Toaster/>
            </div>
        </>
    )
}

export default EditProduct;