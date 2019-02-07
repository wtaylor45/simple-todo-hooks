import React, { useState } from 'react';
import { Item } from '../presentational/Item';

export const ItemContainer = ({children}) => {
    const [isDone, setDone] = useState(false);

    return (
        <Item isDone={isDone} onClick={() => setDone(!isDone)}>{children}</Item>
    );
};
