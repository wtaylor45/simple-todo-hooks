import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    border-radius: 5px;
    background: #008aee;
    width: 40vw;
    padding: 12px;
    margin: 12px;
    word-wrap: break-word;
    text-align: center;
    animation: slide-in .5s ease-in-out;
    transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);

    &.done {
        margin: 0;
        padding: 0;
        font-size: 0;
    }

    @keyframes slide-in {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }
        15% {
            opacity: 1;
            transform: translateX(20px);
        }
        40% {
            opacity: 1;
            transform: translateX(-10px)

        }
        80% {
            opacity: 1;
            transform: translateX(5px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }


`

export const Item = ({onClick, isDone, children}) => 
    <Li onClick={onClick} className={isDone ? 'done' : 'show'}>{children}</Li>
