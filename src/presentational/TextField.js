import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 40vw;
    height: 4vw;
    color: white;
    background: none;
    border: none;
    border-bottom: solid 2px #00abff; 
    font-size: calc(12px + 2vmin);
    margin: 12px;
    padding: 5px;
    transition: border .2s;

    &:focus {
        outline: none;
        border-bottom-width: 6px;
    }
`

export const TextField = ({ id, onChange }) =>
    <Input id={id} type="text" onChange={onChange} />
