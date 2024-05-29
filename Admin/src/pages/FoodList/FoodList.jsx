import { useEffect, useState } from "react";
import "./FoodList.css";
import axios from "axios";
import { toast } from "react-toastify";
const FoodList = ({ url }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/foodlist`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Food List</p>
      <div className="list-table flex-col">
        <div className="table-format title">
          <b>Image </b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="table-format">
              <img src={`${url}/image/` + item.image} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodList;
