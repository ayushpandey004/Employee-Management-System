import Header from "../others/Header";
import TaskList from "../others/TaskList";
import Taskwork from "../Task/Taskwork";
const Employeedashboard=(props)=>{
    return(
        <div style={{
            backgroundColor:"black",
            color:"white",
            height:"100vh",
            width:"100%",
            boxSizing:"border-box",
            // overflow:"hidden",
            display:"flex",
            flexDirection:"column"
        }}>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
      <Taskwork data={props.data} setUserData={props.setUserData} />
    </div>
    )
}
export default Employeedashboard;
