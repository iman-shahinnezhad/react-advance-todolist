import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import DonTaskComponent from "../doneTasksComponent";
import NewTaskComponents from "../newTaskComponent";
import WorkingTaskComponent from "../workingTasksComponent";

const TasksComponent = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "30px",
      }}
    >
      <NewTaskComponents />
      <WorkingTaskComponent />
      <DonTaskComponent />
    </Grid>
  );
};

export default TasksComponent;
