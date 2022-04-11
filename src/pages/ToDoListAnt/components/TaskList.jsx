import React from 'react'
import Item from './Item';

function TaskList({taskList, handleEditTask, handleDeleteTask}) {
    return taskList.map((taskItem, taskIndex) => {
        return (
          <Item
            key={`${taskIndex}-${taskItem.task}`}
            index={taskIndex}
            task={taskItem.task}
            description={taskItem.description}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        )
      })
}

export default TaskList