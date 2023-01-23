import React from "react";
import { TouchableOpacity, Text, Button } from 'react-native'
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerModal,onHandlerStatus }) => {
    return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
      <TouchableOpacity onPress={() => {onHandlerStatus(item)}}>
        <Text style={[styles.statusItem,item.isCompleted ? styles.statusItemCompleted : styles.statusItemPending]}>
          {item.isCompleted ? 'Completed' : 'Pending'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
    )
}

export default TaskItem;