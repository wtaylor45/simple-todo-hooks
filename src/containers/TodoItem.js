import React, { useState } from 'react';
import { Item } from '../presentational/Item';

export const TodoItem = ({children, onClick, id }) => {
    const [isDone, setDone] = useState(false);

    const clickHandler = (e) => {
        setDone(true);
        onClick(id);
    }

    return (
        <Item isDone={isDone} onClick={clickHandler}>{children}</Item>
    );
};
