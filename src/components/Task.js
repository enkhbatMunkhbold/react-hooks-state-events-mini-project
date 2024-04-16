import React from "react";

function Task({id, category, text, onHandleDelete}) {
  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onHandleDelete}>X</button>
    </div>
  );
}

export default Task;
