import {useState} from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Playing',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Biking',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        }
    ]);

    // Delete task
    const deleteTask = id => {
        console.log("@delete", id);
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Toggle reminder
    const toggleReminder = id => {
        console.log("@toggleReminder", id);
        setTasks(tasks.map(task => {
            if (task.id === id) task.reminder = !task.reminder;
            return task;
        }));
    };

    return (
    <div className="container">
        <Header/>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks available'}
    </div>
  );
}

export default App;
