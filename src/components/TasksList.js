import { useTasks } from "../store/rxjs";
import TaskItem from "./TaskItem";

const TasksList = () => {
    const tasks = useTasks();

    return (
        <div>
            {tasks.map((t) => (
                <TaskItem task={t} key={t.id} />
            ))}
        </div>
    );
};

export default TasksList;