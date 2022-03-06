import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { categories } from "../../constants/add-expense";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";

const AddForm = () => {
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value);

    if (isNaN(value)) {
      setAmount("");
      return;
    }
    setAmount(value);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
    console.log(category);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      console.log(`Not data`);
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    console.log(`Yes`);
  };
  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          placeholder="Give a name to expenditure"
          value={title}
          onChange={(e) => {
            handleTitle(e);
          }}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          type="text"
          placeholder="Enter amount here"
          value={amount}
          className="amount-input"
          onChange={(e) => {
            handleAmount(e);
          }}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => {
              setCategoryOpen(!categoryOpen);
            }}
          >
            <label>{category ? category.title : "Category"}</label>
            <i>
              <ArrowDropDownIcon />
            </i>
            {categoryOpen && (
              <div className="category-container">
                {cat.map((category) => (
                  <div
                    className="category-item"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <span>{category.icon}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i>
            <SendIcon />
          </i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
