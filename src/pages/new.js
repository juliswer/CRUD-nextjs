import React from "react";
import Layout from "../components/Layout";

const TaskFormPage = () => {
  return (
    <Layout>
      <h1>Add a Task</h1>
      <input type="text" placeholder="Write a title" className="bg-gray-400 focus:text-gray-100 focus:outline-none" />
      <textarea rows="2" placeholder="Write a description"></textarea>
    </Layout>
  );
};

export default TaskFormPage;
