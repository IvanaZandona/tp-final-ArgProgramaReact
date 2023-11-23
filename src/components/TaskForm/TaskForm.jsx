import '../components.css';
import React from 'react';
import TaskList from "../TaskList/TaskList";
import { useState, useEffect } from 'react';

const TaskForm = ({ }) => {

    const [tareas, setTareas] = useState([]);

    const [tareaSeleccionada, setTareaSeleccionada] = useState("");

    const handleAgregarTarea = (option) => {
        setTareas([...tareas, option]);
    }
    //Mostrar mensaje cuando se actualiza el estado de tareas
    useEffect(() => {
        console.log("Estado lista de tareas:", tareas);
    }, [tareas]);

    //Obtener el valor seleccionado
    const handleTareaSeleccionada = (event) => {
        setTareaSeleccionada(event.target.value);
    }
    //Mostrar mensaje cuando se actualiza el estado de tareaSeleccionada    
    useEffect(() => {
        return () => {
            console.log("Tarea seleccionada para borrar", tareaSeleccionada);
        }
    }, [tareaSeleccionada]);

    const borrar = () => {
        //Filtramos la tarea y sacamos la seleccionada
        setTareas(tareas.filter((tarea, index) => index !== parseInt(tareaSeleccionada)));
        setTareaSeleccionada("");
    }

    return (
        <div className='containerTaskForm'>

            <h1><em>Mis tareas</em></h1>
            <select id='selectTarea' onChange={handleTareaSeleccionada} value={tareaSeleccionada}>
                <option value="">Seleccionar tarea</option>
                {tareas.map((task, index) => (
                    <option key={index} value={index}>{task.texto}</option>
                ))}
            </select>

            <button onClick={borrar} className='button2'>Completa ⇨ borrar</button><br />

            <div className="containerTaskList">
                <TaskList agregarTarea={handleAgregarTarea} tareas={tareas} />
            </div>

        </div>
    );
}

export default TaskForm;
