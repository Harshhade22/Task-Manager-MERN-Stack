import API from "./axios";

export const fetchTasks = () => API.get("/");
export const createTasks = (task) => API.post("/task/create", task);
export const updateTask = (id, task) => API.put(`/task/update/${id}`, task);
export const deleteTask = (id) => API.delete(`/task/delete/${id}`);
