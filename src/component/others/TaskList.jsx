import React from "react";

const TaskList = (props) => {
    const tasks = props.data?.tasks || [];
    const newCount = tasks.filter(t => t.newTask).length;
    const activeCount = tasks.filter(t => t.active).length;
    const completedCount = tasks.filter(t => t.completed).length;
    const failedCount = tasks.filter(t => t.failed).length;

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px",
            padding: "7px"
        }}>
            <div style={{
                backgroundColor: "#3b82f6",
                height: "140px",
                width: "27%",
                borderRadius: "16px",
                padding: "18px",
                color: "white",
            }}>
                <h2 style={{ margin: 0 }}>{newCount}</h2>
                <h3 style={{ margin: "10px 0 0" }}>New Task</h3>
            </div>
            <div style={{
                backgroundColor: "#eab308",
                height: "140px",
                width: "27%",
                borderRadius: "16px",
                padding: "18px",
                color: "white"
            }}>
                <h2 style={{ margin: 0 }}>{activeCount}</h2>
                <h3 style={{ margin: "10px 0 0" }}>Active Task</h3>
            </div>
            <div style={{
                backgroundColor: "#22c55e",
                height: "140px",
                width: "27%",
                borderRadius: "16px",
                padding: "18px",
                color: "white"
            }}>
                <h2 style={{ margin: 0 }}>{completedCount}</h2>
                <h3 style={{ margin: "10px 0 0" }}>Completed</h3>
            </div>
            <div style={{
                backgroundColor: "#ef4444",
                height: "140px",
                width: "27%",
                borderRadius: "16px",
                padding: "18px",
                color: "white"
            }}>
                <h2 style={{ margin: 0 }}>{failedCount}</h2>
                <h3 style={{ margin: "10px 0 0" }}>Failed</h3>
            </div>
        </div>
    )
}
export default TaskList;