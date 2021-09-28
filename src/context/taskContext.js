import {createContext, useContext, useState} from 'react';

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([{id: '1', title: 'some title', description: 'some description'}])

    return <TaskContext.Provider value={{tasks}}>{children}</TaskContext.Provider>
}