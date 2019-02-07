import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
    list-style: none;
    display: inline-flex;
    justify-content: center;
    flex-direction: column-reverse;
`

export const List = ({children}) => 
    <Container>
        {children}
    </Container>
