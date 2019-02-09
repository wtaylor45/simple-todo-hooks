import React from 'react';
import styled from 'styled-components';

const Btn  = styled.button`
    min-width: 10vw;
    min-height: 4vw;
    background: #00abff;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 12px;
    font-size: calc(8px + 1vmin);
`

export const Button = ({children, type, onClick}) =>
    <Btn type={type} onClick={onClick}>{children}</Btn>
