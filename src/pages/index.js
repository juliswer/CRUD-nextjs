import React from 'react'
import {useTasks} from '../context/taskContext';
import {useContext} from 'react';
import Layout from '../components/Layout';

const Home = () => {

  const {tasks} = useTasks();

  console.log(tasks);

  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  )
}

export default Home
