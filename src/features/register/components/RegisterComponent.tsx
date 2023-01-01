import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { TextFieldContainer } from "../../../shared/styles/TextFiledContainer";
import { FormContainer } from "../styles/register-container/form.container.styles";
import { RegisterContainer } from "../styles/register-container/register.container.styles";
import { AuthTitle } from "../styles/register-container/register.title.styles";
import SaveIcon from "@mui/icons-material/Save";

const RegisterComponent = () => {
  return (
    <RegisterContainer>
      <AuthTitle>Register</AuthTitle>
      <FormContainer>
        <TextFieldContainer>
          <TextField
            variant="outlined"
            required
            type="text"
            name="firstName"
            label="First Name"
            fullWidth
          />
        </TextFieldContainer>

        <TextFieldContainer>
          <TextField
            variant="outlined"
            required
            type="text"
            name="lastName"
            label="Last Name"
            fullWidth
          />
        </TextFieldContainer>

        <TextFieldContainer>
          <TextField
            variant="outlined"
            required
            type="email"
            name="Email"
            label="email"
            fullWidth
          />
        </TextFieldContainer>

        <TextFieldContainer>
          <TextField
            variant="outlined"
            required
            type="password"
            name="password"
            label="Password"
            fullWidth
          />
        </TextFieldContainer>

        <TextFieldContainer>
          <TextField
            variant="outlined"
            required
            type="password"
            name="confirmPassword"
            label="confirm Password"
            fullWidth
          />
        </TextFieldContainer>
        <LoadingButton
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          fullWidth
          size="large"
          color="success"
        >
          Save
        </LoadingButton>
      </FormContainer>
    </RegisterContainer>
  );
};

export default RegisterComponent;
