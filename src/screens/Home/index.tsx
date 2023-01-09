import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EmptyState } from "../../components/EmptyState";
import { Task } from "../../components/Task";
import { styles } from "./styles";
import { useState } from 'react'

import uuid from 'react-native-uuid'

import Icon from 'react-native-vector-icons/MaterialIcons'

export interface ITask {
  id: string
  text: string
  isFinished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [taskText, setTaskText] = useState('')

  function handleAddTask() {
    const newTask: ITask = {
      id: String(uuid.v4()),
      text: taskText,
      isFinished: false
    }

    setTasks(prevState => [...prevState, newTask])
    setTaskText('')
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  function handleTask(taskId: string) {
    const tasksClone = [...tasks];

    tasksClone.forEach(task => {
      if (task.id === taskId) {
        task.isFinished = !task.isFinished;
      }
    });

    setTasks(tasksClone);
  }

  const totalTasks = tasks.length
  const completedTasks = tasks.reduce((count, task) => {
    if (task.isFinished) {
      count++;
    }

    return count;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../image/logo.png')} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.searchInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity
          style={styles.buttonInput}
          onPress={handleAddTask}
          disabled={taskText === ''}
        >
          <Icon name="add-circle-outline" size={22} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.infoContent}>
          <Text style={[styles.infoText, styles.textBlue]}>Criadas</Text>
          <View style={styles.infoNumber}>
            <Text style={styles.infoNumberText}>
              {totalTasks}
            </Text>
          </View>
        </View>

        <View style={styles.infoContent}>
          <Text style={[styles.infoText, styles.textPurple]}>Concluídas</Text>
          <View style={styles.infoNumber}>
            <Text style={styles.infoNumberText}>
              {completedTasks}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task task={item} onDelete={handleDeleteTask} handleTask={handleTask} />
        )}
        style={styles.taskContainer}
        ListEmptyComponent={() => (
          <EmptyState />
        )}
      />
    </View>
  )
}