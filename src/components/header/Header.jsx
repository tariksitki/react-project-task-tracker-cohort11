
import { useState } from "react";
import AddTaskForm from "../addTaskForm/AddTaskForm";
import "./Header.scss";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

  return (
    <section className="header-container">
      <div className="header-container-up">
        <h1>TASK TRACKER</h1>
        <button className="header-button" onClick={handleShow}>
          Close
        </button>
      </div>

      {show && <AddTaskForm />}
    </section>
  );
}

export default Header