import {
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { style } from "@mui/system";
import React from "react";
import { TextFieldContainer } from "../../../../shared/styles/TextFiledContainer";

interface ModalTaskProps {
  open: boolean;
  handleClose: () => void;
}

const ModalTask: React.FC<ModalTaskProps> = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{
          width: 600,
        }}
      >
        {"Add new Task"}
      </DialogTitle>
      <DialogContent>
        <TextFieldContainer>
          <TextField
            fullWidth
            type="text"
            variant="outlined"
            label="Task Title"
          />
        </TextFieldContainer>
        <TextFieldContainer>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            variant="outlined"
            label="Task Title"
          />
        </TextFieldContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalTask;
