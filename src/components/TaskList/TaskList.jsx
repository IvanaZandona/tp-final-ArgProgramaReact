import '../components.css';
import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ agregarTarea, tareas }) => {

    const [tarea, setTarea] = useState("");

    const handleTarea = (e) => setTarea(e.target.value);

    const handleAgregarTarea = (e) => {
        e.preventDefault();
        //Para no poder agregar tareas vacias
        if (tarea.length > 0) {
            //Creo un objeto con el texto de la tarea 
            const tareaObjeto = { texto: tarea, completada: false }
            //Agrego el objeto a las tareas
            agregarTarea(tareaObjeto);
            setTarea("");
        }
    };

    return (
        <>
            <div className='containerTaskList'>
                {tareas.map((task, index) => (
                    <TaskItem key={index} task={task} />
                ))}
            </div>

            <div className="containerAgregarTarea">
                <input type="text" className='inputTarea' value={tarea} onChange={handleTarea} placeholder='Agrega una tarea' required /><br /><br />
                <button onClick={handleAgregarTarea} >Agregar nueva tarea</button><br /><br />
            </div>

        </>
    );
}

export default TaskList;
