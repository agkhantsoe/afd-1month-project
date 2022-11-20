import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <div className="form-control">
        <div className="input-group">
          <input
            required="required"
            type="number"
            className="input input-bordered bg-transparent text-2xl "
            id="name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            type="button"
            class="ml-2 hover:text-teal-400 "
            onClick={() => props.handleSaveClick(value)}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBudget;
