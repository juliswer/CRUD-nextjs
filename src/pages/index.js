import React from 'react'
import {useTasks} from '../context/taskContext';
import {useContext} from 'react';

const Home = () => {

  const {tasks} = useTasks();

  console.log(tasks);

  return (
    <div>
      Hello world
    </div>
  )
}

export default Home
