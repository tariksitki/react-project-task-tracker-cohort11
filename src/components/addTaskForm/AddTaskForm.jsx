
import "./AddTaskForm.scss";

const AddTaskForm = () => {
  return (
      <form className="form">
        <div className="input-container">
          <label htmlFor="name">Task Name</label>
          <input
            type="text"
            placeholder="Enter Task Name"
            name="task"
            id="name"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            required
          />
        </div>

        <div>
            <button>SAVE</button>
        </div>
      </form>
  );
}

export default AddTaskForm