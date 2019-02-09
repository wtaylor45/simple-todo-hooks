import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import { List } from '../presentational/List';
import { TextField } from '../presentational/TextField';
import { Button } from '../presentational/Button';

export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentTask){
            setTasks([...tasks, currentTask]);
            setCurrentTask('');
            document.getElementById('current-task').value = '';
        } 
    }

    const handleInput = (e) => {
        setCurrentTask(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="current-task" onChange={handleInput} />
                <Button type="submit">Submit me</Button>
            </form>
            <List>{tasks.map((task, i) => <TodoItem key={i}>{task}</TodoItem>)}</List>
        </div>
    )
};
