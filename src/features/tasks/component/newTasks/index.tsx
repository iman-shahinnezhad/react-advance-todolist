import React from "react";
import { TaskItemContainer, TasksContainer } from "../../styles/tasks";
import TaskItem from "../taskItem/taskItem";

const NewTasks = () => {
  return (
    <TasksContainer>
      <TaskItemContainer>
        <TaskItem />
      </TaskItemContainer>
      <TaskItemContainer>
        <TaskItem />
      </TaskItemContainer>
    </TasksContainer>
  );
};

export default NewTasks;
