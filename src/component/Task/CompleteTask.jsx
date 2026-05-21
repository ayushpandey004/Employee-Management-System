import React from 'react';

const CompleteTask = ({ data }) => {
    return (
        <div style={{
            backgroundColor: "#22c55e",
            height: "100%",
            minWidth: "300px",
            borderRadius: "10px",
            position: "relative",
            padding: "15px",
            boxSizing: "border-box",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: "6px",
                        padding: "4px 10px",
                        margin: "0",
                        display: "inline-block",
                        fontSize: "14px"
                    }}>{data.category}</h3>
                    <h4 style={{ margin: 0, fontSize: "14px" }}>{data.taskDate}</h4>
                </div>
                <h2 style={{ marginTop: "20px", fontSize: "20px" }}>{data.taskTitle}</h2>
                <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5" }}>{data.taskDescription}</p>
            </div>
            <div style={{ marginTop: "15px" }}>
                <span style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600"
                }}>
                    ✓ Completed
                </span>
            </div>
        </div>
    );
};

export default CompleteTask;
