import React from "react";
import Card from "./Card";
import "./expense-list.css";

const ExpenseList = () => {
  const list = [
    {
      title: "Made a purchase",
      logo: "bla bla bla",
      createdAt: Date.now(),
      amount: 1234,
    },
    {
      title: "Made a purchase",
      logo: "bla bla bla",
      createdAt: Date.now(),
      amount: 1234,
    },
  ];
  return (
    <div>
      {list.length ? (
        list.map((item) => (
          <div>
            <Card item={item} />
          </div>
        ))
      ) : (
        <div>Yo</div>
      )}
    </div>
  );
};

export default ExpenseList;
