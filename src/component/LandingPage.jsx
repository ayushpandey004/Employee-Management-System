import React, { useState } from "react";

const LandingPage = ({ onGetStarted }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#070707",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "30px",
          backgroundColor: "#1c1c1c",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: isHovered ? "0 20px 40px rgba(234, 88, 12, 0.3), 0 0 30px rgba(234, 88, 12, 0.15)" : "0 4px 8px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease"
        }}>
        <h1 style={{
          fontSize: "26px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "white"
        }}>
          Employee Management System
        </h1>
        
        <p style={{
          color: "#9ca3af",
          lineHeight: "1.5",
          fontSize: "15px",
          marginBottom: "24px"
        }}>
          Welcome to the Employee Management System. Here you can create tasks, assign them to employees, and track work progress in real-time.
        </p>

        <button 
          onClick={onGetStarted} 
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#ea580c",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "24px"
          }}
        >
          Go to Login
        </button>

        <div style={{
          textAlign: "left",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "20px"
        }}>
          <h3 style={{
            fontSize: "15px",
            fontWeight: "600",
            marginBottom: "12px",
            color: "white",
            textAlign: "center"
          }}>
            Quick Login Credentials
          </h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px"
          }}>
            {/* Admin Credentials */}
            <div style={{
              backgroundColor: "black",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "12px"
            }}>
              <h4 style={{
                color: "#ea580c",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "6px"
              }}>
                Admin Role
              </h4>
              <p style={{ fontSize: "12px", color: "#9ca3af", margin: "2px 0" }}>
                Email: <span style={{ color: "white" }}>admin@company.com</span>
              </p>
              <p style={{ fontSize: "12px", color: "#9ca3af", margin: "2px 0" }}>
                Password: <span style={{ color: "white" }}>123</span>
              </p>
            </div>

            {/* Employee Credentials */}
            <div style={{
              backgroundColor: "black",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "12px"
            }}>
              <h4 style={{
                color: "#3b82f6",
                fontSize: "13px",
                fontWeight: "600",
                marginBottom: "6px"
              }}>
                Employee Role
              </h4>
              <p style={{ fontSize: "12px", color: "#9ca3af", margin: "2px 0" }}>
                Email: <span style={{ color: "white" }}>ayush@company.com</span>
              </p>
              <p style={{ fontSize: "12px", color: "#9ca3af", margin: "2px 0" }}>
                Password: <span style={{ color: "white" }}>123</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
