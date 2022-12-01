import React from "react";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";

const App = () => {
  return (
    <AppProvider>
      <div className=" w-1/2 mx-auto mt-7">
        <div className="stats shadow bg-primary text-primary-content w-full">
          <div className="stat">
            <div className="stat-title text-white ">Income </div>
            <div className="stat-value">
              <Budget />
            </div>
          </div>
        </div>
        <div className="stats bg-primary text-primary-content w-full mt-3 ">
          <div className="stat">
            <div className="stat-title text-white ">Current Balance</div>
            <div className="stat-value">
              <RemainingBudget />
            </div>
            <div className="stat-actions">
              <label htmlFor="my-modal-6" className="">
              </label>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title mb-4 text-white">Expenses</div>
            <div className="stat-value">
              <ExpenseTotal />
            </div>
            <div className="stat-actions">
              <label htmlFor="my-modal-6" className="btn btn-sm bg-slate-900">
                Add Expense
              </label>
            </div>
          </div>
        </div>

        <div className="card w-full bg-slate-300 text-primary-content">
          <div className="card-body ">
            <h3 className="mt-3 mb-3 text-3xl decoration-8 text-gray-800">
              Expense Histories
            </h3>

            <ExpenseList />
          </div>
        </div>

        <AddExpenseForm />
      </div>
    </AppProvider>
  );
};

export default App;
