import React, { useContext } from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { Authcontext } from "../../context/AuthProvider";

const Taskwork = ({ data, setUserData: setLoggedInUserData }) => {
    const [userData, setUserData] = useContext(Authcontext);
    const tasks = data?.tasks || [];

    const updateTaskState = (taskToUpdate, newFlags) => {
        // 1. Update the tasks list for the current employee
        const updatedTasks = tasks.map(t => {
            if (t.taskTitle === taskToUpdate.taskTitle && t.taskDate === taskToUpdate.taskDate) {
                return { ...t, ...newFlags };
            }
            return t;
        });

        // 2. Update context for all employees
        const updatedEmployees = userData.employees.map(emp => {
            if (emp.id === data.id) {
                return { ...emp, tasks: updatedTasks };
            }
            return emp;
        });

        const updatedUserData = { ...userData, employees: updatedEmployees };
        setUserData(updatedUserData);

        // 3. Save all employees list to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // 4. Update the current logged in employee state and local storage
        const updatedEmployee = updatedEmployees.find(emp => emp.id === data.id);
        setLoggedInUserData(updatedEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: updatedEmployee }));
    };

    const handleAccept = (task) => {
        updateTaskState(task, { newTask: false, active: true, completed: false, failed: false });
    };

    const handleComplete = (task) => {
        updateTaskState(task, { newTask: false, active: false, completed: true, failed: false });
    };

    const handleFail = (task) => {
        updateTaskState(task, { newTask: false, active: false, completed: false, failed: true });
    };

    return (
        <div style={{
            height: "350px",
            width: "100%",
            boxSizing: "border-box",
            margin: "15px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "flex-start",
            gap: "15px",
            overflowX: "auto",
            padding: "10px"
        }}>
            {tasks.map((task, idx) => {
                if (task.newTask) {
                    return <NewTask key={idx} data={task} handleAccept={handleAccept} />;
                }
                if (task.active) {
                    return <AcceptTask key={idx} data={task} handleComplete={handleComplete} handleFail={handleFail} />;
                }
                if (task.completed) {
                    return <CompleteTask key={idx} data={task} />;
                }
                if (task.failed) {
                    return <FailedTask key={idx} data={task} />;
                }
                return null;
            })}
        </div>
    );
};

export default Taskwork;