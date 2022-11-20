import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={onSubmit}>
            <div>
              <div className="form-control w-full max-w-xs">
                <label for="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required="required"
                  type="text"
                  className=" input input-bordered w-full max-w-xs"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label for="cost">
                  <span className="label-text">Cost</span>
                </label>
                <input
                  required="required"
                  type="number"
                  className=" input input-bordered w-full max-w-xs"
                  id="cost"
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                />
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6">
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddExpenseForm;
