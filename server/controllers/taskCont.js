import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      user: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const getAllTask = await Task.find({ user: req.user._id });
    res.status(201).json(getAllTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Update Task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not Authorized" });
    }

    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete Task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not Authorized" });
    }

    await task.deleteOne();

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
