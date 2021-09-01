import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { StatusBar, useWindowDimensions } from 'react-native';
import { theme } from './theme';
import Input from '@/components/Input';
import Task from '@/components/Task';
import List from '@/components/List';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${props => props.theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

function App() {
  const { width } = useWindowDimensions();
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask('');
  };

  const handleTextChange = text => setNewTask(text);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={handleTextChange}
          onSubmitEditing={addTask}
        />
        <List width={width}>
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          {/* <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" />
          <Task text="TODO Item" /> */}
        </List>
      </Container>
    </ThemeProvider>
  );
}

export default App;
