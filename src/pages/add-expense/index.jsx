import React from "react";
import Topfold from "../../components/topfold";
import "./addExpense.css";
import AddForm from "../../components/add-form";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <Topfold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
