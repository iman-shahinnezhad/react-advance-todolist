import { Box, Grid } from "@mui/material";
import { HeaderTaskCol } from "../../styles/tasks";
import WorkingTasks from "../workingTasks";

const WorkingTaskComponent = () => {
  return (
    <Grid xs={4}>
      <Box>
        <HeaderTaskCol>Working</HeaderTaskCol>
        <WorkingTasks />
      </Box>
    </Grid>
  );
};

export default WorkingTaskComponent;
