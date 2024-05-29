import "./AddFood.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AddFood = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, SetData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetData((data) => ({ ...data, [name]: value }));
  };
  const onSubimtHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      SetData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="addfood">
      <form onSubmit={onSubimtHandler} className="flex-col">
        <div className="upload-image flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-name flex-col">
          <p>Product name</p>
          <input
            onChange={handleChange}
            value={data.name}
            type="text"
            name="name"
            placeholder="type here"
          />
        </div>
        <div className="add-description flex-col">
          <p> food description</p>
          <textarea
            onChange={handleChange}
            value={data.description}
            name="description"
            rows="6"
            placeholder="write content"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={handleChange} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={handleChange}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-button">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
