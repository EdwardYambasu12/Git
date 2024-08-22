import React from "react"
import {Link} from "react-router-dom"
export default function Mini_Nav(){

		return(
					<div>
		
				<nav className = "top_nav">

					<div className = "brand">
						<img className = "brand_image" src = {require("../images/sportsup.png")}></img>
						
					</div>

					<div className = "icons">
							<Link  to={"/"}>return back </Link>
					</div>

				</nav>
					</div>
			)

}

