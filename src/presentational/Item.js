import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    border-radius: 5px;
    background: ${props => props.isDone ? 'gray': '#008aee'};
    text-decoration: ${props => props.isDone ? 'line-through': 'none'};
    text-align: center;
    padding: 12px;
    margin: 12px;
`

export const Item = ({onClick, isDone, children}) => 
    <Li onClick={onClick} isDone={isDone}>{children}</Li>
