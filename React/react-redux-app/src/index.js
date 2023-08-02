import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { initiateStore } from "./store/store";
import * as actions from "./store/actions";

const store = initiateStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(actions.taskComplete(taskId));
  };
  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChange(taskId));
  };
  const deleteButton = (taskId) => {
    store.dispatch(actions.deleteButton(taskId));
  };

  return (
    <>
      <h1>APP</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => completeTask(el.id)}>Completed</button>
            <button onClick={() => changeTitle(el.id)}>ChangeTitle</button>
            <button onClick={() => deleteButton(el.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
