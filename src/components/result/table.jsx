
import React, { useState, useEffect, } from 'react';
import axios from 'axios'; // Assuming you are using Axios for AJAX requests
import api from "../nav/details.js"
import {Link, useLocation, useNavigate} from "react-router-dom"

const StandingsTable = (props) => {
	const main_data = props.props
	const league_id = main_data.league_id
	const [holder,setHolder] = useState()
	const [header, setHeader] = useState()
	const [live, setLive] = useState()
	const [molder, setMolder] = useState()
	const [center_mid, setCenter_mid] = useState()
	const [value, setValue] = useState('Long')
	const navigate = useNavigate()
	
	
	let d = new Date()

	var today_date = d.toISOString().split('T')[0]
	console.log(today_date)


	const yesterday_setup = new Date(d)
	yesterday_setup.setDate(d.getDate()-160) 
	var starter = yesterday_setup.toISOString().split("T")[0]

	const tom = new Date(d)
	tom.setDate(d.getDate()+15) 
	var tome = tom.toISOString().split("T")[0]

	const [commencement, setCommencement] = useState("all")


	function theFunc(event){
				
				setValue(event.target.value)
				console.log(event.target.value)
				
	}

	
	async function redirector(item){

		const fyer = await JSON.stringify(item)


		
		sessionStorage.setItem("fyer", fyer)
		  sessionStorage.setItem("parse", fyer)
		console.log(item, "main")
			
			 navigate("/match_small/result/"+item.match_id, {state : item })
        window.location.reload()
	}

	
useEffect(() => {


    const fetchStandings = async () => {

	   
        try {


                const fyer = await sessionStorage.getItem("parse")
                const parser = await JSON.parse(fyer)

           
			

			 const response2 = await axios.get("https://apiv3.apifootball.com/?action=get_standings&league_id="+parser.league_id+"&APIkey="+api)
            const data = response2.data

			console.log(data, "data for case study")
			//Setting Table Header


			const fetcher = await axios.get("https://apiv3.apifootball.com/?action=get_events&from="+starter+"&to="+tome+"&withPlayerStats=1&league_id="+league_id+"&APIkey="+api)
					const idea = fetcher.data



			
	if (parser.match_live === "1"){
		setLive("🔴live")
	}


			setHeader(
				<div style = {{width : "100%", display : "flex",  alighnItems : "center"}}>
				
				<img src = {parser.league_logo === "" ? require("../images/no-img.png") : parser.league_logo } style = {{width : "30px", height : "30px"}}></img>
				<h6  style = {{textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}} className = "text-dark" >{parser.league_name}</h6>
				
				</div>
			)



			
			
			////////////////////////////////////////////\\\\

			// Sample array of objects

			////////////////////////////////////////////////////
			console.log(main_data.stage_name)


			if (main_data.stage_name === "Final" || main_data.stage_name === "Round of 16" || main_data.stage_name  === "Quarter-finals" || main_data.stage_name === "Semi-finals" ){
				
				console.log("final stages")
				
				var final16
				var final8
				var final4
				var final2
				const objects = data

						// Define a function to group objects by a specific property
						function groupObjectsByProperty(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjects = groupObjectsByProperty(data, 'league_round');

						// Convert the grouped objects into an array of arrays
						const groupedArrays = Object.values(groupedObjects);

						// Print the grouped arrays
						groupedArrays.forEach((arr, i) => {
							console.log(`Group ${i + 1}:`, arr);
							arr.map((it)=>{
								console.log(it.league_round)
							})
						});


				async function loader(){
					const fetcher = await axios.get("https://apiv3.apifootball.com/?action=get_events&from="+starter+"&to="+tome+"&league_id="+league_id+"&APIkey="+api)
					const idea = fetcher.data
					console.log(idea, "information")
					console.log("Garri Mayonaise")

					function what_we_know(item){
						console.log(item)
						setCenter_mid(<div  style = {{position : "fixed", top : "30%", bottom : "30%", height : "auto", background : "#EEEEEE", borderRadius : "20px", width : "98%", marginLeft : "1%", marginRight : "1%" }}>
									<div className = "container">
									<h6 className = "text-dark text-center">Two-legged tie</h6>
									<p>{item.second.match_date}</p>


									{/* First*/}
									<div style = {{display : "flex", width : "100%", justifyContent : "center"}} onClick = {()=> redirector(item.second)}>

									<div style = {{display : "flex", justifyContent : "center" }}>
										
									<div style = {{display : "flex", width : "40%", display : "flex", alignItems : "center", }}><h6 className = "text-secondary" style ={{textOverflow : "ellipsis", whiteSpace : "nowrap", overflow : "hidden"}}>{item.second.match_hometeam_name}</h6><img src = {item.second.team_home_badge} style = {{width : "30px", height : "30px"}}></img></div>
									<div style = {{width : "20%", justifyContent : "space-around", display : "flex"}}><h6>{item.second.match_hometeam_score}</h6>-<h6>{item.second.match_awayteam_score}</h6></div>
									<div style = {{display : "flex", width : "40%", display : "flex", alignItems : "center", }}><img src = {item.second.team_away_badge} style = {{width : "30px", height : "30px"}}></img><h6 className = "text-secondary" style ={{textOverflow : "ellipsis", whiteSpace : "nowrap", overflow : "hidden"}}>{item.second.match_awayteam_name}</h6></div>
									</div>
									<div></div>

									</div>





									<hr></hr>
									{/* Second*/}

									<p>{item.first.match_date}</p>

									<div style = {{display : "flex", width : "100%", justifyContent : "center"}} onClick = {()=>{redirector(item.second)}}>

									<div style = {{display : "flex", justifyContent : "center" }}>
										
									<div style = {{display : "flex", width : "40%", display : "flex", alignItems : "center", }}><h6 className = "text-secondary" style ={{textOverflow : "ellipsis", whiteSpace : "nowrap", overflow : "hidden"}}>{item.first.match_hometeam_name}</h6><img src = {item.first.team_home_badge} style = {{width : "30px", height : "30px"}}></img></div>
									<div style = {{width : "20%", justifyContent : "space-around", display : "flex"}}><h6>{item.first.match_hometeam_score}</h6>-<h6>{item.first.match_awayteam_score}</h6></div>
									<div style = {{display : "flex", width : "40%", display : "flex", alignItems : "center", }}><img src = {item.first.team_away_badge} style = {{width : "30px", height : "30px"}}></img><h6 className = "text-secondary" style ={{textOverflow : "ellipsis", whiteSpace : "nowrap", overflow : "hidden"}}>{item.first.match_awayteam_name}</h6></div>
									</div>
									<div></div>

									</div>




									

									<div style = {{position : "absolute", bottom : "0%", width : "100%"}}><h6 className = "text-danger" style = {{textAlign : "center"}} onClick = {()=>{setCenter_mid("")}}>close</h6></div>

									</div>
						</div>)
					}


					var r16 = []
					var b8 = []
					var m4 = []
					var f2 = []

					var a  = []
					var b = []
					var c = []
					var d = []

					var aa = []
					var bb = []
					var cc = []
					var dd = []


		
					idea.map((item)=>{
							if(item.match_round === "Final"){
								f2.push(item)
							}
							else if(item.match_round === "Semi-finals"){
								m4.push(item)
							}
							else if(item.match_round === "Quarter-finals"){
								b8.push(item)
							}
							else if(item.match_round === "Round of 16"){
								r16.push(item)
							}


						})


					////////////////////////////////////////////////////////////////////////


// Define a function to group objects by a specific property
						function groupObjectsByPropertyd(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjectsd = groupObjectsByPropertyd(data, 'league_round');

						// Convert the grouped objects into an array of arrays
						const groupedArraysd = Object.values(groupedObjectsd);

						// Print the grouped arrays
						






			

						b8.map((item)=>{
							const filterer = b8.filter((it)=> it.match_hometeam_id === item.match_awayteam_id )

							
								b.push({first : filterer[0], second : item})
							

							
							
							



							
						})

						if(b.length === 8){
						const b_finale = b.slice(0, b.length/2)
						console.log(b_finale)

						final8 = b_finale.map((item)=>{

							console.log(item)

							const first = item.first
							const second = item.second

							var home_score = Number(first.match_hometeam_score)+Number(second.match_awayteam_score)
							var away_score = Number(first.match_awayteam_score)+Number(second.match_hometeam_score)

							return(
										<div style = {{display : "flex", width : "23%", background : "white", borderRadius : "10px", justifyContent : "space-between"}} onClick = {()=>what_we_know({first, second})}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													<h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{home_score}</h6>
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													<h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{away_score}</h6>
											</div>
										
										</div>

										)

						})


					}


					else if(b.length <= 4){

						final8 = b.map((item)=>{

							console.log(item)

							
							const first = item.second


							var home_score = Number(first.match_hometeam_score)
							var away_score = Number(first.match_awayteam_score)

							var quarter

							if (item.second.match_hometeam_ft_score === ""){

								quarter = item.second.match_date
							}

							else{
								quarter =  
											<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
										<h6>{home_score}</h6>
										<h6 >{away_score} </h6>
										

										</div>
							}
							


							return(
								<div style = {{width : "23%", background : "white", borderRadius : "10px", }} onClick = {()=> redirector(first)}>
										
										<div style = {{display : "flex", width : "100%", background : "white", borderRadius : "10px", justifyContent : "space-between"}} onClick = {()=> redirector(first)}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													
													
											</div>
										
										</div>
											{quarter}
										</div>
									)
						})


					}

						r16.map((item)=>{
							const filterer = r16.filter((it)=> it.match_hometeam_id === item.match_awayteam_id )

							//console.log(filter[0], item)

							a.push({first : filterer[0], second : item})
							return(<></>)


						})
						console.log(a, "r16")
						
						if (a.length === 16){
						const a_finale = a.slice(0, a.length/2)
						console.log(a_finale)

						final16 = a_finale.map((item)=>{

							console.log(item)

							const first = item.first
							const second = item.second

							var home_score = Number(first.match_hometeam_score)+Number(second.match_awayteam_score)
							var away_score = Number(first.match_awayteam_score)+Number(second.match_hometeam_score)

							return(

								<div style = {{display : "flex", width : "23%", background : "white", borderRadius : "10px", justifyContent : "space-between"}} onClick = {()=>what_we_know({first, second})}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													<h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{home_score}</h6>
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													<h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{away_score}</h6>
											</div>
										
										</div>
									)
						})
					
					}




					else if(a.length <= 8){


						final16 = a.map((item)=>{

							console.log(item)

					
							
							const first = item.second

							var home_score = Number(first.match_hometeam_score)
							var away_score = Number(first.match_awayteam_score)

									var quarter

							if (item.second.match_hometeam_ft_score === ""){

								quarter = item.second.match_date
							}

							else{
								quarter =  
										<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
										<h6>{home_score}</h6>
										<h6 >{away_score} </h6>
										

										</div>
							}


							return(
								<div style = {{width : "23%", background : "white", borderRadius : "10px", }} onClick = {()=> redirector(first)}>
										
										<div style = {{display : "flex", width : "100%", background : "white", borderRadius : "10px", justifyContent : "space-between"}} onClick = {()=> redirector(first)}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													
													
											</div>
										
										</div>
											{quarter}
										</div>
									)
						})


					}





						m4.map((item)=>{
							const filterer = m4.filter((it)=> it.match_hometeam_id === item.match_awayteam_id )

							//console.log(filter[0], item)

							c.push({first : filterer[0], second : item})
							return(<></>)


						})

						if (c.length === 4){
						const c_finale = c.slice(0, c.length/2)
						console.log(c_finale)

						final4 = c_finale.map((item)=>{

							console.log(item)

							const first = item.first
							const second = item.second

							var home_score = Number(first.match_hometeam_score)+Number(second.match_awayteam_score)
							var away_score = Number(first.match_awayteam_score)+Number(second.match_hometeam_score)

							return(

										<div style = {{display : "flex", width : "23%", background : "white", borderRadius : "10px", justifyContent : "space-between"}} onClick = {()=>what_we_know({first, second})}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													<h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{home_score}</h6>
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													<h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{away_score}</h6>
											</div>
										
										</div>
									)
						})
					}
						else if(c.length <= 2){


						final4 = c.map((item)=>{

							console.log(item)

							
							const first = item.second

							var home_score = Number(first.match_hometeam_score)
							var away_score = Number(first.match_awayteam_score)

							var quarter

							if (item.second.match_hometeam_ft_score === ""){

								quarter = item.second.match_date
							}

							else{
								quarter =  
											<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
										<h6>{home_score}</h6>
										<h6 >{away_score} </h6>
										

										</div>
							}
							


							return(
								<div style = {{width : "23%", background : "white", borderRadius : "10px", }} onClick = {()=> redirector(first)}>
										
										<div style = {{display : "flex", width : "100%", background : "white", borderRadius : "10px", justifyContent : "space-between"}} onClick = {()=> redirector(first)}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													
													
											</div>
										
										</div>
											{quarter}
										</div>
									)
						})


					

						}


						f2.map((item)=>{
							const filterer = f2.filter((it)=> it.match_hometeam_id === item.match_awayteam_id )

							//console.log(filter[0], item)
							d.push({first : filterer[0], second : item})

							return(<></>)


						})

						const d_finale = d
						console.log(d_finale)

						final2 = d_finale.map((item)=>{

							console.log(item)

							
							const first = item.second

							var home_score = Number(first.match_hometeam_score)
							var away_score = Number(first.match_awayteam_score)

							return(

										<div style = {{display : "flex", width : "23%", background : "white", borderRadius : "10px", justifyContent : "space-between"}}>
										
											<div><img src = {first.team_home_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{first.match_hometeam_name[0]} { first.match_hometeam_name[1]} { first.match_hometeam_name[2]  }</h6> 
													<h6 style = {{textDecoration : home_score > away_score ? "bold" : "line-through",}}>{home_score}</h6>
											</div>
											<div><img src = {first.team_away_badge} style = {{width : "30px", height : "30px"}}></img> <h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{first.match_awayteam_name[0]} { first.match_awayteam_name[1]} { first.match_awayteam_name[2]  }</h6>
													<h6 style = {{textDecoration : away_score > home_score ? "bold" : "line-through",}}>{away_score}</h6>
											</div>
										
										</div>
									)
						})

							setMolder(<div>
					
									<h6>Round of 16</h6>
									<div style = {{width : "100%", justifyContent : "space-between", display : "flex", flexFlow : "row wrap", gap : "10px"}}>{final16}</div>

									<hr></hr>

									<h6>Quater Finals</h6>
									<div style = {{width : "100%", justifyContent : "space-between", display : "flex", flexFlow : "row wrap", gap : "10px"}}>{final8}</div>

									<hr></hr>

									<h6>Semi Finals</h6>
									<div style = {{width : "100%", justifyContent : "space-between", display : "flex", flexFlow : "row wrap", gap : "10px"}}>{final4}</div>

									<hr></hr>

									<h6>Finals</h6>
									<div style = {{width : "100%", justifyContent : "space-between", display : "flex", flexFlow : "row wrap", gap : "10px"}}>{final2} <h2 className = "text-warning ">WINNERS</h2></div>

									






				 </div>)


				}
				loader()	

				

				
			

			}
			
			


			
		

			else if(main_data.stage_name === "Regular Season"){

			


			// Define a function to group objects by a specific property
						function groupObjectsByPropertyd(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjectsd = groupObjectsByPropertyd(data, 'league_round');

						// Convert the grouped objects into an array of arrays
						const groupedArraysd = Object.values(groupedObjectsd);

						// Print the grouped arrays
						







			//-------------------------------------------------------------------------------------------------------


							
							var domain = []
							var coloration = ["green", "darkgreen", "blue", "lightblue", "red", "orange", "cyan", "midnightblue", "black", ]



										function groupObjectsByProperty(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjects = groupObjectsByProperty(data, 'overall_promotion');

						// Convert the grouped objects into an array of arrays
						const groupedArrays = Object.values(groupedObjects);

						// Print the grouped arrays
						groupedArrays.forEach((arr, i) => {
							console.log(`Group ${i + 1}:`, arr);
							domain.push({type : arr[0].overall_promotion, arra : arr, color : arr[0].overall_promotion === "" ? "white" : coloration[i + 1 - 1]})

							arr.map((it)=>{
								console.log(it.overall_promotion)
							})
						});

						









						//////////////////////////////////////////////LONG FORM////////////////////////////////////////


								var state = 0

								
								data.sort((a,b)=>{
									return b.overall_league_PTS - a.overall_league_PTS 
								})


									

									var leag = data.map((item)=>{
											var status  
											state+=1

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					

					////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, textDecoration : "bold", height :"50px", fontSize :'0.7em', fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}
							

				////////////////////////////////////HOME ////////////////////////////////////////////////////////////////////////

				if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}
						


				///////////////////////////////////AWAY //////////////////////////////////////////////////////////////



				if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}
								})

								var tab = <table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "30%"}}>Team</td>
													<td style = {{width : "10%"}}>Pld</td>
													<td style = {{width : "10%"}}>W</td>
													<td style = {{width : "10%"}}>D</td>
													<td style = {{width : "10%"}}>L</td>
													<td style = {{width : "10%"}}>GD</td>
													<td style = {{width : "10%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
													{leag}
												</tbody>

										</table>

									

									const objects = data



									//---------------------------------------------


									var gem = groupedArraysd.map((arr, i) => {
									

									
									var state = 0
									return(
									<>

									<div><h5 style = {{ fontFamily : "monospace"}}>{arr[0].league_round}</h5></div>

									<table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "30%"}}>Team</td>
													<td style = {{width : "10%"}}>Pld</td>
													<td style = {{width : "10%"}}>W</td>
													<td style = {{width : "10%"}}>D</td>
													<td style = {{width : "10%"}}>L</td>
													<td style = {{width : "10%"}}>GD</td>
													<td style = {{width : "10%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
												{
													arr.map((item)=>{
															
																		
																		var status  
											state = state+1
											console.log(stated)

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					
														////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}
							

				////////////////////////////////////HOME ////////////////////////////////////////////////////////////////////////

				if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px",fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}
						


				///////////////////////////////////AWAY //////////////////////////////////////////////////////////////



				if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}


															
										})

										}
												</tbody>

										</table>
										</>
										
										)

										
							
									
							console.log(`Group ${i + 1}:`, arr);
							arr.map((it)=>{
								console.log(it.league_round)
							})
						});



						///////////////////////////////////////////SMALLER SIZE ////////////////////////////////////////////

						var sm_size = groupedArraysd.map((arr, i) => {
									

									
									var stated = 0
									return(
									<>

									<div><h5 style = {{ fontFamily : "monospace"}}>{arr[0].league_round}</h5></div>

									<table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "55%"}}>Team</td>
													<td style = {{width : "10%"}}>Pld</td>
													<td style = {{width : "10%"}}>GD</td>
													<td style = {{width : "10%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
												{
													arr.map((item)=>{
															
																		
																		var status  
											stated = stated+1
											console.log(stated)

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }



											 ////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "10%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "10%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "10%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////HOME////////////////////////////////////////////////
									if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "10%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "10%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "10%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////AWAY////////////////////////////////////////////////
									if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge} style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "10%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "10%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "10%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}


					
									


															
										})

										}
												</tbody>

										</table>
										</>
										
										)

										
							
									
							console.log(`Group ${i + 1}:`, arr);
							arr.map((it)=>{
								console.log(it.league_round)
							})
						});

						
								var stated = 0

								
								data.sort((a,b)=>{
									return b.overall_league_PTS - a.overall_league_PTS 
								})


									

									var leagd = data.map((item)=>{
											var status  
											stated+=1

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					
									 ////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "10%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "10%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "10%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////HOME////////////////////////////////////////////////
									if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "10%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "10%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "10%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////AWAY////////////////////////////////////////////////
									if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge} style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "10%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "10%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "10%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}

 
								})



						var sm_tab = <table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "55%"}}>Team</td>
													<td style = {{width : "10%"}}>Pld</td>
													<td style = {{width : "10%"}}>GD</td>
													<td style = {{width : "10%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
													{leagd}
												</tbody>

										</table>



						var traning = domain.map((item)=>{
							
							return(
								<div style = {{display : "flex", width : "90%", marginLeft : "auto", marginRight: "auto", justifyContent :"space-between"}}><p style = {{height : "10px", width : "10px", background: item.color}}></p> <small>{item.type}</small></div>
							)
						
						})


				if(value === "Long" ){
					setHolder(
					
							<>
							
								{gem}
								<br></br>
								<h5>Overall Table</h5>
								{tab}
								<hr></hr>
								{traning}
							</>
					
					)
					}

					else if(value === "Short"){
							
							setHolder(
					
							<>
							
								{sm_size}
								<br></br>
								<h5>Overall Table</h5>
								{sm_tab}
								<hr></hr>
								{traning}
							</>
					
					)

					}



					


			}


			else if(main_data.stage_name === "Group Stage"){

							var star
							var domain = []
							var coloration = ["green", "darkgreen", "blue", "lightblue", "red", "orange", "cyan", "midnightblue", "black", ]
							

							function groupObjectsByProperty(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjects = groupObjectsByProperty(data, 'overall_promotion');

						// Convert the grouped objects into an array of arrays
						const groupedArrays = Object.values(groupedObjects);

						// Print the grouped arrays
						groupedArrays.forEach((arr, i) => {
							console.log(`Group ${i + 1}:`, arr);
							domain.push({type : arr[0].overall_promotion, arra : arr, color : arr[0].overall_promotion === "" ? "white" : coloration[i + 1 - 1]})

							arr.map((it)=>{
								console.log(it.overall_promotion)
							})
						});

						





					
					const objects = data

						// Define a function to group objects by a specific property
								function groupObjectsByPropertyd(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjectsd = groupObjectsByPropertyd(data, 'league_round');

						// Convert the grouped objects into an array of arrays
						const groupedArraysd = Object.values(groupedObjectsd);

						// Print the grouped arrays
						const gem = groupedArraysd.forEach((arr, i) => {

						const fil = data.filter((item)=> item.team_id === main_data.match_hometeam_id)
						console.log(fil)
						
						if(fil[0].league_round === arr[0].league_round){
						console.log("find", arr)
						var stated = 0
								
								star = arr


								

								
								
										
							















						}

							console.log(`Group ${i + 1}:`, arr);
							arr.map((it)=>{
								console.log(it.league_round)
							})
						});



						var state = 0

								
								star.sort((a,b)=>{
									return b.overall_league_PTS - a.overall_league_PTS
								})


									

									var leag = star.map((item)=>{
											var status  
											state+=1

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					

					////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, textDecoration : "bold", height :"50px", fontSize :'0.7em', fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}
							

				////////////////////////////////////HOME ////////////////////////////////////////////////////////////////////////

				if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}
						


				///////////////////////////////////AWAY //////////////////////////////////////////////////////////////



				if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}
								})

								var tab = <table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "30%"}}>Team</td>
													<td style = {{width : "10%"}}>Pld</td>
													<td style = {{width : "10%"}}>W</td>
													<td style = {{width : "10%"}}>D</td>
													<td style = {{width : "10%"}}>L</td>
													<td style = {{width : "10%"}}>GD</td>
													<td style = {{width : "10%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
													{leag}
												</tbody>

										</table>











								
								console.log(star, "star")


								
								var stated = 0

								
								star.sort((a,b)=>{
									return b.overall_league_PTS - a.overall_league_PTS 
								})


									

									var lea = star.map((item)=>{

											console.log("star")
											var status  
											stated+=1

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					
									 ////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10x%", background : useable.color}}>{stated}</td>
														<td style = {{width : "40%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "13%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "13%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "13%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////HOME////////////////////////////////////////////////
									if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "40%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "13%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "13%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "13%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////AWAY////////////////////////////////////////////////
									if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "40%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge} style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "13%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "13%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "13%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}

 
								})



						var sm_tabt = <table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "40%"}}>Team</td>
													<td style = {{width : "13%"}}>Pld</td>
													<td style = {{width : "13%"}}>GD</td>
													<td style = {{width : "13%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
													{lea}
												</tbody>

										</table>



						var traning = domain.map((item)=>{
							
							return(
								<div style = {{display : "flex", width : "90%", marginLeft : "auto", marginRight: "auto", justifyContent :"space-between"}}><p style = {{height : "10px", width : "10px", background: item.color}}></p> <small>{item.type}</small></div>
							)
						
						})
						setHolder(
					
							<>
							
								{gem}
								<br></br>
								<h5>{star[0].league_round}</h5>
								{tab}
								<hr></hr>
								{traning}
							</>
					
					)

					setHolder(
					
							<>
							
								{sm_tab}
								<br></br>
								<h5>{star[0].league_round}</h5>
								{sm_tabt}
								<hr></hr>
								{traning}
							</>
					
					)

			
				if(value === "Long" ){
			
					setHolder(
					
							<>
							
								{gem}
								<br></br>
								<h5>{star[0].league_round}</h5>
								{tab}
								<hr></hr>
								{traning}
							</>
					
					)
					}

					else if(value === "Short"){
							
							setHolder(
					
							<>
							
								{sm_tab}
								<br></br>
								<h5>{star[0].league_round}</h5>
								{sm_tabt}
								<hr></hr>
								{traning}
							</>
					
					)

					}




				
					
			}


						else if(main_data.stage_name === "Current"){

							var star
							var domain = []
							var coloration = ["green", "darkgreen", "blue", "lightblue", "red", "orange", "cyan", "midnightblue", "black", ]
							

							function groupObjectsByProperty(objects, property) {
							return objects.reduce((groups, obj) => {
								const key = obj[property];
								if (!groups[key]) {
									groups[key] = [];
								}
								groups[key].push(obj);
								return groups;
							}, {});
						}

						// Group objects by the 'category' property
						const groupedObjects = groupObjectsByProperty(data, 'overall_promotion');

						// Convert the grouped objects into an array of arrays
						const groupedArrays = Object.values(groupedObjects);

						// Print the grouped arrays
						groupedArrays.forEach((arr, i) => {
							console.log(`Group ${i + 1}:`, arr);
							domain.push({type : arr[0].overall_promotion, arra : arr, color : arr[0].overall_promotion === "" ? "white" : coloration[i + 1 - 1]})

							arr.map((it)=>{
								console.log(it.overall_promotion)
							})
						});

						


							var state = 0

								
								data.sort((a,b)=>{
									return b.overall_league_PTS - a.overall_league_PTS
								})


									

									var leag = data.map((item)=>{
											var status  
											state+=1

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					

					////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, textDecoration : "bold", height :"50px", fontSize :'0.7em', fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}
							

				////////////////////////////////////HOME ////////////////////////////////////////////////////////////////////////

				if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}
						


				///////////////////////////////////AWAY //////////////////////////////////////////////////////////////



				if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "7%", background : useable.color}}>{state}</td>
														<td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_W}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_D}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_L}</td>
														<td style = {{width : "7%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "7%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}
								})

								var tab = <table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "30%"}}>Team</td>
													<td style = {{width : "10%"}}>Pld</td>
													<td style = {{width : "10%"}}>W</td>
													<td style = {{width : "10%"}}>D</td>
													<td style = {{width : "10%"}}>L</td>
													<td style = {{width : "10%"}}>GD</td>
													<td style = {{width : "10%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
													{leag}
												</tbody>

										</table>











								
								console.log(star, "star")


								
								var stated = 0

								
								data.sort((a,b)=>{
									return b.overall_league_PTS - a.overall_league_PTS 
								})


									

									var lea = data.map((item)=>{

											console.log("star")
											var status  
											stated+=1

											var filterer = domain.filter((it)=> it.type === item.overall_promotion  )
											

											const useable = filterer[0]

											 var background_ = ""


											 if(item.team_id === main_data.match_awayteam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }

											 if(item.team_id === main_data.match_hometeam_id ){
												console.log("found", item)
												background_ = "#EEEEEE"
											 }
					
									 ////////////////////////////////////////////OVERALL////////////////////////////////////////////////
									if(commencement === "all"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10x%", background : useable.color}}>{stated}</td>
														<td style = {{width : "40%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "13%", background : "inherit",}}>{item.overall_league_payed}</td>
														<td style = {{width : "13%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
														<td style = {{width : "13%", background : "inherit",}}>{item.overall_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////HOME////////////////////////////////////////////////
									if(commencement === "home"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "40%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "13%", background : "inherit",}}>{item.home_league_payed}</td>
														<td style = {{width : "13%", background : "inherit",}}>{Number(item.home_league_GF) - Number(item.home_league_GA)}</td>
														<td style = {{width : "13%", background : "inherit",}}>{item.home_league_PTS}</td>
												</tr>
										)
										}

													 ////////////////////////////////////////////AWAY////////////////////////////////////////////////
									if(commencement === "away"){
									return(

												<tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : background_, height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
														<td style = {{width : "10%", background : useable.color}}>{stated}</td>
														<td style = {{width : "40%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge} style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
														<td style = {{width : "13%", background : "inherit",}}>{item.away_league_payed}</td>
														<td style = {{width : "13%", background : "inherit",}}>{Number(item.away_league_GF) - Number(item.away_league_GA)}</td>
														<td style = {{width : "13%", background : "inherit",}}>{item.away_league_PTS}</td>
												</tr>
										)
										}

 
								})



						var sm_tabt = <table>
												<thead>
												<tr style = {{width : "100%"}}>
													<td style = {{width : "10%"}}>#</td>
													<td style = {{width : "40%"}}>Team</td>
													<td style = {{width : "13%"}}>Pld</td>
													<td style = {{width : "13%"}}>GD</td>
													<td style = {{width : "13%"}}>PTS</td>
													</tr>
												</thead>

												<tbody>
													{lea}
												</tbody>

										</table>



						var traning = domain.map((item)=>{
							
							return(
								<div style = {{display : "flex", width : "90%", marginLeft : "auto", marginRight: "auto", justifyContent :"space-between"}}><p style = {{height : "10px", width : "10px", background: item.color}}></p> <small>{item.type}</small></div>
							)
						
						})
						setHolder(
					
							<>
							
								{gem}
								<br></br>
								
								{tab}
								<hr></hr>
								{traning}
							</>
					
					)

					setHolder(
					
							<>
							
								{sm_tab}
								<br></br>
								
								{sm_tabt}
								<hr></hr>
								{traning}
							</>
					
					)

			
				if(value === "Long" ){
			
					setHolder(
					
							<>
							
								{gem}
								<br></br>
								
								{tab}
								<hr></hr>
								{traning}
							</>
					
					)
					}

					else if(value === "Short"){
							
							setHolder(
					
							<>
							
								{sm_tab}
								<br></br>
								{sm_tabt}
								<hr></hr>
								{traning}
							</>
					
					)

					}

						


							//LEAGUES STRAIGHT
						}



							console.log(commencement, "This is the requested type")

} catch (error) {
    console.error('Error fetching standings:', error);
}
};

fetchStandings();
}, [commencement, value]);

  
    return (
			<div style = {{background : "#EEEEEE"}}>

				<div style = {{width : "100%", background : "#EEEEEE", display : "flex", justifyContent : "space-between"}}>
							<div>
										
										<button class = "btn btn-light" onClick = {()=>{setCommencement("all")}}>overAll</button>
										<button class = "btn btn-light" onClick = {()=>{setCommencement("home")}}>Home</button>
										<button class = "btn btn-light" onClick = {()=>{setCommencement("away")}}> Away </button>

							</div>
										<select onChange = {theFunc} class = "form-control" style = {{width : "30%"}}>
												
												<option >Long</option>
												<option>Short</option>
												
										</select>
							</div>
							

							<div style = {{borderRadius : "15px", background : "white", marginTop : "5%"}}>
							<p className = "text-danger">{live}</p>
							<br></br>

				{header}


		
				{holder}

				</div>

				{molder}

				<div >
					{center_mid}
				</div>
			</div>
			
	    );
   };

export default StandingsTable;



