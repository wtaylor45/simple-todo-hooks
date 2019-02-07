import React, { useState } from 'react';
import { ItemContainer } from './ItemContainer';
import { List } from '../presentational/List';

export const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, currentTask]);
    }

    const handleInput = (e) => {
        setCurrentTask(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInput} />
                <button type="submit">Submit me</button>
            </form>
            <List>{tasks.map((task, i) => <ItemContainer key={i}>{task}</ItemContainer>)}</List>
        </div>
    )
};
