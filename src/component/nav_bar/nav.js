import React, {useState, useEffect} from "react";
import "./nav.css"

function Nav(){
    var width : window.innerWidth
    const [breaking, setBreaking] = useState()
    function intro(value){
        const array = [8,2,32,43, 3,3,3,3,2,4,3,2,43,42,4,3,54,34,3,4,]
        const value_mix = array.filter((item)=> item == value)

        setBreaking(
                value_mix.map((item)=>{
                    return(
                        <button className = "btn btn-light bg-light" style = {{width : "90%", marginLeft : "5%"}}>{item}</button>
                        )
                })
            )
    }
function button_changer(){
    setSlot(<input type="text" onChange={(val)=> intro(val.target.value)} placeholder="search : Team League and Tournament" className="form-control" id = "large"></input> )
}
    const [slot, setSlot] = useState(window.innerWidth > 750 ?  <input type="text" placeholder="search : Team Player e.t.c" className="form-control" id = "large"></input> :                   <button className = "btn btn-outline-dark" id = "small" onClick = {()=>{

                    }} onClick={()=> button_changer()}>🔎</button>)

    
    return(
        <>

            <nav className="navbar " id="main_nav">
                <div className="title">
                <img alt="logo" src={require("../images/main_logo.png")} style={{height : "50px", width : "50px", borderRadius : "50%"}}></img>
                <h3>SportsUp</h3>
                
                </div>
                <div className="mid">
               
            {slot}
          
                </div>



            </nav>
            <div style = {{position :"fixed", width : '100%', backgroundColor : "midnightblue"}}>{breaking}</div>
        </>
    )
}
export default Nav