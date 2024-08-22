import { useState } from "react";
import React  from "react";
import "./footer.css"
import { Link, redirect, useNavigate } from "react-router-dom";


function Footer(){
    const [selected, setSelected] = useState(
        <div className="share">
            <div>
            <h6 className="text-light" >©️Sports Up 2024</h6>
            </div>
            <div id = "objective">
                <button onClick={()=> button()} className="btn btn-outline-dark">
                    ➕
                </button>

            </div>
        </div>


    )

function cancel(){
    setSelected(
        <div className="share">
        <h6 className="text-light">©️ Sports Up 2024</h6>

        <div id = "objective">
            <button onClick={()=> button()} className="btn btn-outline-dark">
                ➕
            </button>

        </div>
    </div>
    )
}

function button(){
    setSelected(<>
        <p style={{textAlign: "right", cursor : "pointer"}} onClick={()=>{cancel()}}>➖</p>
        <Link id="smaller_button" className="btn btn-dark text-light" to={"/contact"}>Contact Us</Link>

        <Link id="smaller_button" className="btn btn-dark text-light" to={"/advertise"}>Advertise</Link>
  

        <Link id="smaller_button" className="btn btn-dark text-light" to={"/pinned"}>Pinned Matches📌</Link>
        

        <Link id="smaller_button" className="btn btn-dark text-light" to={"/login"}>Login</Link>
    

        <Link id="smaller_button" className="btn btn-dark text-light" to={"/register"}>Register</Link>

        <h6 className="text-light">©️ Sports Up 2024</h6>
    </>)
}



    return(
        <body>
            <nav id = "wider-screen"  className="navbar fixed-bottom bg-dark">

                <h6 className="text-light" >
                    ©️ Sport Up 2024
                </h6>

                <div id="objectives">

                    <Link id="txt" className="text-light" to={"/contact"} >Contact Us</Link>
                    <Link id="txt"  className="text-light" to={"/advertise"}>Advertise</Link>
                    <Link id="txt"  className="text-light" to={"/pinned"}>Pinned Matches</Link>
                    <Link id="txt"  className="text-light" to={"/login"}>Login</Link>
                    <Link id="txt"  className="text-light" to={"/register"}>Register</Link>
                </div>
            </nav>
            <nav id = "smaller-screen"  className="navbar fixed-bottom bg-dark">
                <div className="mini">
                    {selected}
                </div>
        </nav>
        </body>
    )
}
export default Footer