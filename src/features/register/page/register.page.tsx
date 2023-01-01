import React from "react";
import { PageContainer } from "../../../shared/styles/page/page.styles";
import RegisterComponent from "../components/RegisterComponent";

const RegisterPage = () => {
  return (
    <PageContainer display="flex" justifyContent="center" alignItems="center">
      <RegisterComponent />
    </PageContainer>
  );
};

export default RegisterPage;
