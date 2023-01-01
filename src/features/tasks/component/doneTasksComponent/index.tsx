import { Box, Grid } from "@mui/material";
import React from "react";
import { HeaderTaskCol, TasksContainer } from "../../styles/tasks";

const DonTaskComponent = () => {
  return (
    <Grid xs={4}>
      <Box>
        <HeaderTaskCol>Done</HeaderTaskCol>
        <TasksContainer>Don Tasks</TasksContainer>
      </Box>
    </Grid>
  );
};

export default DonTaskComponent;
