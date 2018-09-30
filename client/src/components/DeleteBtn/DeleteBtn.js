import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span {...props} id = {props.id} className="btn btn-danger delete-btn">
    Delete
  </span>
);

export default DeleteBtn;
