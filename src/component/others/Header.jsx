 import React from "react";
 const Header=(props)=>{
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        props.changeUser('');
    }

    return(
        <div style={{
            display:"flex",
            width:"100%",
            boxSizing: "border-box"
        }}>
            <div style={{
          padding: "15px",
          width: "100%",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"flex-start"
        }}>
            <div>
                <p style={{margin:"0"}}>Hello,</p>
                <h2 style={{margin:"0"}}>{props.data?.firstName || 'Admin'} 👋</h2>
            </div>
            <button onClick={logOutUser} className="btn-logout">
                Log out
            </button>
        </div>
            

        </div>
    )
}
export default Header;