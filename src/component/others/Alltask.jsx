import React, { useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const Alltask = () => {
    const [userData] = useContext(Authcontext);

    return (
        <div style={{
            backgroundColor: "#070707",
            color: "white",
            padding: "16px",
            borderRadius: "24px",
            maxHeight: "60vh",
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box",
            border: "1px solid rgba(255,255,255,0.08)",
            marginTop: "16px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                backgroundColor: "#ea580c",
                borderRadius: "8px",
                marginBottom: "10px",
                fontWeight: "bold"
            }}>
                <h3 style={{ width: "20%" }}>Employee Name</h3>
                <h3 style={{ width: "20%" }}>New Task</h3>
                <h3 style={{ width: "20%" }}>Active Task</h3>
                <h3 style={{ width: "20%" }}>Completed</h3>
                <h3 style={{ width: "20%" }}>Failed</h3>
            </div>
            
            <div style={{ display: "grid", gap: "10px" }}>
                {userData?.employees.map((employee, idx) => {
                    const activeCount = employee.tasks.filter(t => t.active).length;
                    const newCount = employee.tasks.filter(t => t.newTask).length;
                    const completedCount = employee.tasks.filter(t => t.completed).length;
                    const failedCount = employee.tasks.filter(t => t.failed).length;

                    return (
                        <div key={idx} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "12px 16px",
                            backgroundColor: "transparent",
                            border: "1px solid #ea580c",
                            borderRadius: "8px"
                        }}>
                            <h3 style={{ width: "20%", color: "white" }}>{employee.firstName}</h3>
                            <h3 style={{ width: "20%", color: "#3b82f6" }}>{newCount}</h3>
                            <h3 style={{ width: "20%", color: "#eab308" }}>{activeCount}</h3>
                            <h3 style={{ width: "20%", color: "#22c55e" }}>{completedCount}</h3>
                            <h3 style={{ width: "20%", color: "#ef4444" }}>{failedCount}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Alltask;