import { useState } from "react";
import { addTask } from "../store/rxjs";

const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 bg-white text-grey-darker"
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;