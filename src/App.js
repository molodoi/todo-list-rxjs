import TaskForm from "./components/TaskForm";
import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";

import "./app.css";

function App() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-slate-50">
            <div className="p-6 w-full lg:w-3/4 lg:max-w-lg">
                <TasksHeader />
                <TasksList />
                <TaskForm />
            </div>
        </div>
    );
}

export default App;