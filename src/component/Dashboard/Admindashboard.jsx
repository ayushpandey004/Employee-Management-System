import React from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import Alltask from "../others/Alltask";
const Admindashboard=(props)=>{
    return(
        <div style={{
            minHeight: "100vh",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#070707",
            padding: "16px 24px"
        }}>
            <Header changeUser={props.changeUser} />
            <Createtask/>
            <Alltask/>
        </div>
    )
}
export default Admindashboard;