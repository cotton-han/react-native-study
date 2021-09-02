import React, { useState, useRef } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import Task from './components/Task';
import List from './components/List';
import { reverse } from './utils';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default function App() {
  const { width } = useWindowDimensions();

  const [isReady, setIsReady] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const nextId = useRef(5);

  const _saveTasks = async tasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {
      console.error(e);
    }
  };

  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(loadedTasks || '[]'));
  };

  const _addTask = () => {
    const newTasks = tasks.concat({
      id: nextId.current,
      text: newTask,
      completed: false,
    });
    nextId.current += 1;
    setNewTask('');
    _saveTasks(newTasks);
  };

  const _deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id);
    _saveTasks(newTasks);
  };

  const _toggleTask = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) task.completed = !task.completed;
      return task;
    });
    _saveTasks(newTasks);
  };

  const _updateTask = item => {
    const newTasks = tasks.map(task => {
      if (task.id === item.id) return item;
      return task;
    });
    _saveTasks(newTasks);
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={text => setNewTask(text)}
          onSubmitEditing={_addTask}
          onBlur={() => setNewTask('')}
        />
        <List width={width}>
          {reverse(tasks).map(task => (
            <Task
              item={task}
              key={task.id}
              deleteTask={_deleteTask}
              toggleTask={_toggleTask}
              updateTask={_updateTask}
            />
          ))}
        </List>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadTasks}
      onFinish={() => setIsReady(true)}
      onError={console.error}
    />
  );
}
