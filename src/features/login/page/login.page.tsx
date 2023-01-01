import TextField from "@mui/material/TextField";
import React from "react";
import { PageContainer } from "../../../shared/styles/page/page.styles";
import { TextFieldContainer } from "../../../shared/styles/TextFiledContainer";
import { FormContainer } from "../../register/styles/register-container/form.container.styles";
import { RegisterContainer } from "../../register/styles/register-container/register.container.styles";
import { AuthTitle } from "../../register/styles/register-container/register.title.styles";
import LoginComponent from "../components/LoginComponent";

const LoginPage = () => {
  return (
    <PageContainer display="flex" justifyContent="center" alignItems="center">
      <LoginComponent />
    </PageContainer>
  );
};

export default LoginPage;
