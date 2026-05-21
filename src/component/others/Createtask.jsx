import React, { useContext, useState } from "react";
import Header from "./Header";
import { Authcontext } from "../../context/AuthProvider";

const Createtask = () => {
    const [userData, setUserData] = useContext(Authcontext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        const data = { ...userData };
        const employeeIndex = data.employees.findIndex((e) => e.firstName.toLowerCase() === asignTo.toLowerCase());
        
        if (employeeIndex !== -1) {
            data.employees[employeeIndex].tasks.push(newTask);
            setUserData(data);
            localStorage.setItem('employees', JSON.stringify(data.employees));
            
            setTaskTitle('');
            setTaskDescription('');
            setTaskDate('');
            setAsignTo('');
            setCategory('');
            alert('Task Created Successfully!');
        } else {
            alert('Employee not found!');
        }
    };

    return(
        <form onSubmit={submitHandler} style={{
            backgroundColor: "#070707",
            color: "#f8fafc",
            fontFamily: "Inter, system-ui, sans-serif",
            position:"static",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "24px"
            }}>
                <div style={{
                    width: "55%",
                    minWidth: "480px",
                    maxWidth: "720px"
                }}>
                    <div style={{
                        backgroundColor: "#0f1116",
                        borderRadius: "24px",
                        padding: "28px",
                        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45)",
                        border: "1px solid rgba(255,255,255,0.08)"
                    }}>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1.1fr 0.9fr",
                            gap: "24px"
                        }}>
                            <div style={{ display: "grid", gap: "20px" }}>
                                <label style={{ display: "grid", gap: "8px", color: "#d6d9e1" }}>
                                    <span style={{ fontSize: "0.95rem" }}>Task Title</span>
                                    <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} style={{
                                        // width: "100%",
                                        padding: "16px 18px",
                                        backgroundColor: "#101418",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: "16px",
                                        color: "#f8fafc"
                                    }} type="text" placeholder="Make a UI design" required />
                                </label>

                                <label style={{ display: "grid", gap: "8px", color: "#d6d9e1" }}>
                                    <span style={{ fontSize: "0.95rem" }}>Date</span>
                                    <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} style={{
                                        // width: "100%",
                                        padding: "16px 18px",
                                        backgroundColor: "#101418",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: "16px",
                                        color: "#f8fafc"
                                    }} type="date" required />
                                </label>

                                <label style={{ display: "grid", gap: "8px", color: "#d6d9e1" }}>
                                    <span style={{ fontSize: "0.95rem" }}>Asign to</span>
                                    <input value={asignTo} onChange={(e) => setAsignTo(e.target.value)} style={{
                                        // width: "100%",
                                        padding: "16px 18px",
                                        backgroundColor: "#101418",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: "16px",
                                        color: "#f8fafc"
                                    }} type="text" placeholder="employee name" required />
                                </label>

                                <label style={{ display: "grid", gap: "8px", color: "#d6d9e1" }}>
                                    <span style={{ fontSize: "0.95rem" }}>Category</span>
                                    <input value={category} onChange={(e) => setCategory(e.target.value)} style={{
                                        // width: "100%",
                                        padding: "16px 18px",
                                        backgroundColor: "#101418",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: "16px",
                                        color: "#f8fafc"
                                    }} type="text" placeholder="design, dev, etc" required />
                                </label>
                            </div>

                            <div style={{ display: "grid", gap: "20px" }}>
                                <label style={{ display: "grid", gap: "8px", color: "#d6d9e1" }}>
                                    <span style={{ fontSize: "0.95rem" }}>Description</span>
                                    <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} style={{
                                        // width: "100%",
                                        minHeight: "310px",
                                        padding: "16px 18px",
                                        backgroundColor: "#101418",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: "16px",
                                        color: "#f8fafc",
                                        resize: "vertical"
                                    }} placeholder="Detailed description of task" required></textarea>
                                </label>

                                <button style={{
                                    padding: "18px 24px",
                                    borderRadius: "16px",
                                    border: "none",
                                    backgroundColor: "#34b285",
                                    color: "white",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    marginTop: "auto"
                                }}>Create Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Createtask;