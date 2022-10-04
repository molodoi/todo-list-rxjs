// import { useEffect, useState } from "react";
// import { map } from "rxjs";
import { useTasks } from "../store/rxjs";

const TasksHeader = () => {    
    // const [undoneTasks, setUndoneTasks] = useState(0);

    // useEffect(() => {
    //     tasks$
    //     .pipe(map((tasks) => tasks.filter((t) => t.done === false).length))
    //     .subscribe((length) => setUndoneTasks(length));
    // }, []);

    const tasks = useTasks();

    const undoneTasks = tasks.filter((t) => t.done === false).length;

    return (
        <header className="mb-4 font-bold text-center">
            <h1 className="rounded p-2 text-white bg-gray-500 mb-2">React Todo List</h1>
            {undoneTasks !== 0 ? 
                <p className="rounded p-2 text-white bg-orange-500">
                    Tâches à faire : <strong>{undoneTasks}</strong>
                </p>
            :
                <p className="rounded p-2 text-white bg-green-500">
                    <strong>{undoneTasks}</strong> tâches à faire!
                </p>            
            }
            
        </header>
    );
};

export default TasksHeader;