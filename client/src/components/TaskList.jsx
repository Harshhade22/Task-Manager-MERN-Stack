import React, { useEffect, useState } from "react";
import { fetchTasks } from "../api/taskApi";
import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks()
      .then((res) => setTasks(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      {tasks?.map((task) => (
        <Card key={task._id} sx={{ mb: 2, width: "100%" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography>{task.title}</Typography>
              </Grid>
              <Grid item xs={4}>
                {task.completed === true ? (
                  <Tooltip title="Task Completed">
                    <Brightness1Icon
                      color="success"
                      fontSize="small"
                    ></Brightness1Icon>
                  </Tooltip>
                ) : (
                  <Tooltip title="Task Pending">
                    <Brightness1Icon
                      color="warning"
                      fontSize="small"
                    ></Brightness1Icon>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TaskList;
