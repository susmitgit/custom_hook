import React, { useContext } from "react";
import { notesContext } from "./";
const Note = (props) => {
  const { title, id, body } = props;
  // console.log(title, id, body, "@@@->");
  const val = useContext(notesContext);
  return (
    <div>
      <span></span>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
export default Note;
