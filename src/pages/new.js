import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import {useTasks} from '../context/taskContext';
import {useRouter} from 'next/router';

const TaskFormPage = () => {
  const [task, setTask] = useState({
      title: '',
      description: '',
  });

  const {createTask} = useTasks();

  const {push} = useRouter();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTask({... task, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description)
    push("/");
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Add a Task</h1>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Write a title"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
        />
        <textarea
          rows="2"
          onChange={handleChange}
          name="description"
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
        ></textarea>
        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={!task.title}
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
