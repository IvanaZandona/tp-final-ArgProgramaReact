import '../components.css';
import React from 'react';

const TaskItem = ({ task }) => {

    return (
        <div className='containerListaTareasAgregadas'>
            <p> » {task.texto} </p>
        </div>
    );
}

export default TaskItem;
