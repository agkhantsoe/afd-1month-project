import React from 'react';

const ViewBudget = (props) => {
	return (
    <>
      <span>$ {props.budget}</span>
      <button
        type="button"
        className="ml-2 hover:text-teal-400 text-xl"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
