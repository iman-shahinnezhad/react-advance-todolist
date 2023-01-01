import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import React from "react";
import { TextFieldContainer } from "../../../shared/styles/TextFiledContainer";
import { FormContainer } from "../../register/styles/register-container/form.container.styles";
import { RegisterContainer } from "../../register/styles/register-container/register.container.styles";
import { AuthTitle } from "../../register/styles/register-container/register.title.styles";
import SaveIcon from "@mui/icons-material/Save";
const LoginComponent = () => {
  return (
    <RegisterContainer>
      <AuthTitle>Sign In</AuthTitle>
      <FormContainer>
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
        <LoadingButton
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          fullWidth
          size="large"
          color="success"
          type="submit"
        >
          Save
        </LoadingButton>
      </FormContainer>
    </RegisterContainer>
  );
};

export default LoginComponent;
