import { create } from "lodash";
import React, { useState, createContext } from "react";
import { v4 } from "uuid";

const BoardContext = createContext(null);
const item = {
  id: v4(),
  name: "First task"
};
const item2 = {
  id: v4(),
  name: "Second task"
};
export function BoardProvider({ children }) {
  
  const [taskList, setTaskList] = useState({
    todo: {
      title: "To do",
      items: [item, item2]
    },
    inProgress: {
      title: "In Progress",
      items: []
    },
    done: {
      title: "Completed",
      items: []
    },
    notes: {
      title: "Notes",
      items: []
    }
  });

  const values = {
    taskList,
    setTaskList
  };

  return (
    <BoardContext.Provider value={values}>{children}</BoardContext.Provider>
  );
}

export default BoardContext;
