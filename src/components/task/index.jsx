import React from "react";
import { FlatList } from "react-native";
import TaskItem from "./item";
import { styles } from "./styles";

const TaskList = ({ tasks, onHandlerModal,onHandlerStatus}) => {

    const renderItem = ({ item }) => (
        <TaskItem 
            item={item}
            onHandlerModal={onHandlerModal}
            onHandlerStatus={onHandlerStatus}
        />
      )
    
    const keyExtractor = (item) => item.id;

    return (
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    )
}
export default TaskList;