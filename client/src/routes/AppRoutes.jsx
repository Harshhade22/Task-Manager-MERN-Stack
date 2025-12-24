import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskList from "../components/TaskList";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateTask from "../pages/CreateTask";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" />
      <Route path="/register" element={<Register />} />
      <Route
        path="/create-task"
        element={
          <ProtectedRoute>
            <CreateTask />
          </ProtectedRoute>
        }
      />
      <Route
        path="/task-list"
        element={
          <ProtectedRoute>
            <TaskList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
