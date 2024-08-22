import React, {useState} from "react"
import Mini_Nav from "./components/nav/mini-nav.jsx"
import {Link} from "react-router-dom"
export default function League(){

	const [player_id, setPlayer_id] = useState("not_following")
	const [tab_state, setTabstate] = useState(1)
	const [below, setBelow] = useState(<Next/>)
	const [player, setPlayer] = useState(
		player_id === "following" ? "following" : "unfollow"
		)

	function player_state(){

		if (player_id === "following"){

			setPlayer_id("not_following")
			setPlayer ("follow")
			alert("do you want to complete this action by unfollowing this player")

		}

		else{
			setPlayer_id("following")
			setPlayer ("unfollow")
		}
	}



	function tab_change(id){
		setTabstate(id)


		if (id === 1){
			setBelow(<Next/>)
		}

		else if (id === 4){
			setBelow(<Table/>)
		}
		else if (id === 3){
			setBelow(<Available_teams/>)
		}
		else if (id === 2){
			setBelow(<Previous_matches/>)
		}
		else if (id === 5){
			setBelow(<Top_scorer/>)
		}
		else if (id === 6){
			setBelow(<News/>)
		}

	}


	return(
			<body>
				<Mini_Nav/>
				<div className = "container">
					<h1 className = "text-center text-warning">League Information</h1>

					<div>
							 <div>
								 <div style = {{backgroundColor : "lightgrey"}}>

								  <span>Follow Team to Recieve Notification</span>
								  <button style = {{marginLeft : "1%"}} className = "btn btn-outline-info" onClick={()=>player_state()}>{player}</button>

								 </div>
							 	<div style = {{display : "flex"}}>	
							 	<img src = {require("./components/images/sportsup.png") }style = {{
							 		width : "70px",
							 		height : "70px"
							 	}}></img>
							 	<div>

							 		<h4>League Name</h4>
							 		<h6>Region : League region</h6>
		
							 		


							 	</div>
							 	<img></img>

							 	</div>

				<div className = "mid_tab_player" >
						<button onClick = {()=> tab_change(1)} className = {tab_state === 1 ? "active" : "inactive"}><h6 id = "spaning">Next Fixtures</h6></button>
						<button onClick = {()=> tab_change(2)} className = {tab_state === 2 ? "active" : "inactive"}><h6 id = "spaning">Previous Matches</h6></button>
						<button onClick = {()=> tab_change(3)} className = {tab_state === 3 ? "active" : "inactive"}><h6 id = "spaning">Teams</h6></button>
						<button onClick = {()=> tab_change(4)} className = {tab_state === 4 ? "active" : "inactive"}><h6 id = "spaning">Table</h6></button>
							<button onClick = {()=> tab_change(5)} className = {tab_state === 5 ? "active" : "inactive"}><h6 id = "spaning">Top Scorer</h6></button>
						<button onClick = {()=> tab_change(6)} className = {tab_state === 6 ? "active" : "inactive"}><h6 id = "spaning">News</h6></button>


				</div>

							 </div>


					</div>

				</div>

				<hr></hr>

				<div>
					{below}
				</div>
			</body>
		)

}


function Available_teams(){

	return(
			<div className = "container">
					<div className = "moment">
						<Link>Team Name</Link>
						<h6>TMN</h6>
					</div>
			</div>
		)

}


function Previous_matches(){


	return(
			<div>
				
			<Link className = "link" to = {"/result"} className = "items">


			{/* GROUP OF MATCHE */}
			<div className = "matches">
				<div className = "team_and_badge">


				{/* HOME TEAM BADGE AND NAME */}
					<span className = "team_and_badge_a">
					<div id = "flexing">
						<img alt = "home_team_badge" src = {require("./components/images/main_logo.png")} id = "logo_id"></img>
						<p className = "home_team_title">Home Team</p>

					</div>	
						<div className = "away_score">0</div>
					</span>
					{/* AWAY TEAM BADGE AND NAME */}
					<span className = "team_and_badge_b">
					<div id = "flexing">
						<img alt = "home_team_badge" src = {require("./components/images/main_logo.png")} id = "logo_id"></img>
						<p className = "home_team_title">Home Team</p>
					</div>	
						<div className = "home_score">0</div>

					</span>

				</div>
				<div className = "end">
				{/*TIME OR STATUS */}
				<div><span className = "time_span">85<span className = "live_dot">'</span></span></div>


		
				{/* LIVE */}
				<div><span className = "live">live</span></div>
				</div>
			</div>

</Link>
			</div>
		)
}


function Next(){


	return(
			<div>
				
			<Link className = "link" to = {"/result"} className = "items">


			{/* GROUP OF MATCHE */}
			<div className = "matches">
				<div className = "team_and_badge">


				{/* HOME TEAM BADGE AND NAME */}
					<span className = "team_and_badge_a">
					<div id = "flexing">
						<img alt = "home_team_badge" src = {require("./components/images/main_logo.png")} id = "logo_id"></img>
						<p className = "home_team_title">Home Team</p>

					</div>	
						<div className = "away_score">0</div>
					</span>
					{/* AWAY TEAM BADGE AND NAME */}
					<span className = "team_and_badge_b">
					<div id = "flexing">
						<img alt = "home_team_badge" src = {require("./components/images/main_logo.png")} id = "logo_id"></img>
						<p className = "home_team_title">Home Team</p>
					</div>	
						<div className = "home_score">0</div>

					</span>

				</div>
				<div className = "end">
				{/*TIME OR STATUS */}
				<div><span className = "time_span">85<span className = "live_dot">'</span></span></div>


		
				{/* LIVE */}
				<div><span className = "live">live</span></div>
				</div>
			</div>

</Link>
			</div>
		)
}


function News(){

	return(
			<h6 className = "text-center">No News relating to this player</h6>
		)
}
function Table(){
	return(
		<div>
			<h1 className = "text-center">League Table</h1>
		</div>
		)
}

function Top_scorer(){
	return(
		<div>
			<h1 className = "text-center">League Top Scorer</h1>
		</div>
		)
}