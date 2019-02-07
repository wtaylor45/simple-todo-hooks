import React, { Component } from 'react';
import { ItemContainer } from './containers/ItemContainer';
import styled from 'styled-components';
import { TodoList } from './containers/TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
  background-color: #444;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <TodoList />
      </Container>
    );
  }
}

export default App;
