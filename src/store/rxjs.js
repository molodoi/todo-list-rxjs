import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const tasks = [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
];

export const tasks$ = new BehaviorSubject(tasks);

export const addTask = (text) => {
    tasks.push({
        id: Math.random() * 100,
        text,
        done: false
    });
    tasks$.next(tasks);
}

export const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if(task){
        task.done = !task.done;
        tasks$.next(tasks);
    }
}

export const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if(index !== -1){
        tasks.splice(index, 1);
        tasks$.next(tasks);
    }
}

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        tasks$.subscribe(tasks => setTasks([...tasks]));
    }, []);
    return tasks;
}