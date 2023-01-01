import React from "react";
import { PageContainer } from "../../../shared/styles/page/page.styles";
import Navbar from "../component/navbar";
import SearchBar from "../component/searchBar";
import TasksComponent from "../component/tasksComponent";

const TaskPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <SearchBar />
      <TasksComponent />
    </PageContainer>
  );
};

export default TaskPage;
