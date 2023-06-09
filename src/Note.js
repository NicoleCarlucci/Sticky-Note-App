import React from "react";

const Note = (props) => {
  const clickDelete = () => {
    props.removeNote(props.note.id);
  };

  const updateTitle = (event) => {
    const updatedValue = event.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };

  const updateDescription = (event) => {
    const updatedValue = event.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;
