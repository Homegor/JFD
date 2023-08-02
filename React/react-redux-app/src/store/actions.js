import * as actionsTypes from "./actionTypes";

export function taskComplete(id) {
  return {
    type: actionsTypes.taskUpdated,
    payload: { id, completed: true },
  };
}

export function titleChange(id) {
  return {
    type: actionsTypes.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
}

export function deleteButton(id) {
  return {
    type: actionsTypes.taskDelete,
    payload: { id },
  };
}
