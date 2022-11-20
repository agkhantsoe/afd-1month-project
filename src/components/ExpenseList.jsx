import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span>Search</span>
          <input
            type="text"
            placeholder="Type to search..."
            className="input input-bordered"
            onChange={handleChange}
          />
        </label>
      </div>

      

      <div className="overflow-x-auto mt-3">
        <table className="table w-full">
          <thead>
            <tr className="stats shadow w-full flex justify-between">
              <th className="stat w-2/3">
                <div className="stat-value text-3xl">Name</div>
              </th>
              <th className="stat w-1/3">
                <div className="stat-value text-3xl">Cost</div>
              </th>
            </tr>
          </thead>
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
