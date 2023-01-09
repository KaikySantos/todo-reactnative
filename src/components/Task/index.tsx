import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import IconEntypo from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
import { useState } from "react";

import { ITask } from "../../screens/Home";

interface TaskProps {
  task: ITask
  onDelete: (taskId: string) => void
  handleTask: (taskId: string) => void
}

export function Task({ task, onDelete, handleTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleTask(task.id)}>
          {!task.isFinished ? (
            <IconEntypo name="circle" size={20} color="#4EA8DE" />
          ) : (
            <IconAnt name="checkcircle" size={20} color="#4EA8DE" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, task.isFinished && styles.textFinished]}>
          {task.text}
        </Text>
      </View>
      <View style={styles.deleteContainer}>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <IconFeather name="trash-2" size={22} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  )
}