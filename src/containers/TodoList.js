import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import { List } from '../presentational/List';
import { TextField } from '../presentational/TextField';
import { Button } from '../presentational/Button';

export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentTask){
            setTasks([...tasks, currentTask]);
            setCurrentTask({});
            document.getElementById('current-task').value = '';
        } 
    }

    const itemClickHandler = (id) => {
        let newTasks = tasks.filter(task => task.id !== id);
        setTimeout(() => setTasks(newTasks), 1000);
    }

    const handleInput = (e) => { 
        setCurrentTask({text: e.target.value, id: Date.now()});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="current-task" onChange={handleInput} />
                <Button type="submit">Submit me</Button>
            </form>
            <List>{tasks.map((task, i) => <TodoItem key={task.id} id={task.id} onClick={itemClickHandler}>{task.text}</TodoItem>)}</List>
        </div>
    )
};
