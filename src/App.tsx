import { TextField } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./features/login/page/login.page";
import RegisterPage from "./features/register/page/register.page";
import TaskPage from "./features/tasks/page/tasks.page";
const CustomizeTextFiled = styled(TextField)`
  label {
    color: red;
    &:active {
      color: green;
    }
  }
`;

export default function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<TaskPage />} />
    </Routes>
  );
}
