import { Box, Button, Dialog, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import { HeaderTaskCol } from "../../styles/tasks";
import NewTasks from "../newTasks";
import AddIcon from "@mui/icons-material/Add";
import ModalTask from "../modal/ModalTask";

const NewTaskComponents = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Grid xs={4}>
      <Box>
        <HeaderTaskCol>
          <Button
            color="success"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Task
          </Button>
        </HeaderTaskCol>
        <NewTasks />
      </Box>
      {open && (
        <ModalTask
          open={open}
          handleClose={() => {
            setOpen(!open);
          }}
        />
      )}
    </Grid>
  );
};

export default NewTaskComponents;
