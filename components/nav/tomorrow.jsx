import React, {useState, useEffect} from "react"
import "./matches.css"
import {Link} from "react-router-dom"
import api from "./details.js"
import axios from "axios"



export default function All_Matches(){
let d = new Date()


const today_date = d.toISOString().split('T')[0]
console.log(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+1)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]
console.log(tomorrow_date)

const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-1)
const yesterday = yesterday_setup.toISOString().split("T")[0]
console.log(yesterday)


//Time Zone
function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

console.log(getTimeZone())

	var arrs = []
	const [response, setResponse] = useState()
	const [main_state, setMain] = useState()
	const [trans, setTrans] = useState([])
	var route = []
	var [test_tail, setTesttail] = useState([])
	var league_route = []
	var league_route1 = []
	var route1 = []
	var [pray, setPray] = useState([])
    const leagues_ids =  [347, 207,152, 175,207, 300, 146, 332, 278, 28, 3, 4, 377, 683, 1, 17, 302, 168]
	const api_key = api
	const [main_matches, setMain_matches] = useState()


			var groupBy = function(xs, key) {
		    return xs.reduce(function(rv, x) {
		        (rv[x[key]] = rv[x[key]] || []).push(x);
		        return rv;
		    }, {});
		};
		function sortByKeyAsc(array, key) {
		    return array.sort(function(a, b) {
		        var x = a[key];
		        var y = b[key];
		        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		    });
		}

			function sortByKey(array, key) {
				    return array.sort(function(a, b) {
				        var x = a[key];
				        var y = b[key];
				        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
				    });
				}
		
		
useEffect(()=>{
			axios.get("https://apiv3.apifootball.com/?action=get_events&from="+tomorrow_date+"&to="+tomorrow_date+"&timezone="+getTimeZone()+"&APIkey="+api_key)
			.then(res=>{
								
						var important = []
						var data = res.data
			 			console.log(res)
                        leagues_ids.forEach((element)=>{
                            var filter = data.filter((item)=> item.league_id== element)
                            console.log(filter)
                            filter.map((item)=>{
                                 important.push(item)
                            })
                           

                        })
                        console.log(important, "filter")
                       	setResponse(important)

                       	var sorted1 = sortByKey(important, 'key');
										        var sorted_array1 = sortByKeyAsc(sorted1, "match_time");
										        var groubedByTeam1 = groupBy(sorted_array1, 'country_name');

										        console.log(groubedByTeam1)
										        const orderedLeagues1 = {};
										        Object.keys(groubedByTeam1).sort().forEach(function(key) {
										            orderedLeagues1[key] = groubedByTeam1[key];
										
										            route1.push({name : key, list : groubedByTeam1[key]})

										        });
										     
										        	setResponse(route)
										        	route1.map(
										        			(item)=>{
										        				var m = item.list
										        				var so =  groupBy(m, 'league_name');
										        				console.log(so, item.name)
										     		 Object.keys(so).sort().forEach(function(key) {
										            orderedLeagues1[key] = groubedByTeam1[key];
										
										           league_route1.push({country : item.name,  league_name : key , list  : so[key] })

										        });

										        			})
										        			console.log(league_route)
						setMain_matches(league_route1.map((item)=>{
			        		const details = item.list
			        		var state 
			        		const badge = details[0].country_logo
			        		if (badge === ""){
			        			state = require("../images/main_logo.png")
			        		}
			        		else{
			        			state = badge
			        		}

			        		return(
			        			<div>
										       <div className = "league_description">
												<img alt = "l" src = {state} id = "logo"></img>
												<h6>{item.country} -- {item.league_name}</h6>
											


													</div>			        			
				<div>{details.map((det)=>{
									var status
									var live
									var win_style1
									var win_style2
									if (det.match_status === "Finished"){
										status = "FT"
									}
									else if(det.match_status === "After ET"){
										status = "AEt"
									}
									else if(det.match_status == "Half-Time"){
										status = "HT"
									}
									else if (det.match_status == "Extra-Time"){
										status  = "ET"
									}
									else if (det.match_live == 1){
										status = det.match_status
									}

									if(det.match_live == 1){
										live = <h6 className = "live">Live</h6>
									}
									else{
										live = <span className = "text-danger">{det.match_time}</span>
									}


									if(Number(det.match_hometeam_score )>Number( det.match_awayteam_score)){
										win_style1 = {color : "black", textDecoration : "bold"}
										win_style1= {color : "#28231D"}


									}

									else if( Number(det.match_awayteam_score) > Number(det.match_hometeam_score)){
										win_style2 = {color : "black", textDecoration : "bold", }
										win_style1= {color : "#28231D"}
									}
									else{
										win_style1 ={color : "#28231D"}
										win_style2={color : "#28231D"}
									}

			        						return(
												<div className = "matches">
														<div className = "team_and_badge">


														{/* HOME TEAM BADGE AND NAME */}
															<span className = "team_and_badge_a">
															<div id = "flexing">
																<img alt = "ht" loading = "lazy" src = {det.team_home_badge} id = "logo_id"></img>
																<p className = "home_team_title" style = {win_style1}>{det.match_hometeam_name}</p>

															</div>	
																<div className = "away_score">{det.match_hometeam_score}</div>
															</span>
															{/* AWAY TEAM BADGE AND NAME */}
															<span className = "team_and_badge_b">
															<div id = "flexing">
																<img alt = "at" loading = "lazy" src = {det.team_away_badge} id = "logo_id"></img>
																<p className = "home_team_title" style = {win_style2}>{det.match_awayteam_name}</p>
															</div>	
																<div className = "home_score">{det.match_awayteam_score}</div>

															</span>

														</div>
														<div className = "end">
														{/*TIME OR STATUS */}
														<div><span className = "time_span">{status}<span className = "live_dot">'</span></span></div>


												
														{/* LIVE */}
														<div>{live}</div>
														</div>
													</div>

			        							)
			        				})}</div>
			        			</div>	
			        			)
			        	})

)
						/////////////////////////////////////////////////////////////////////
						setResponse(res.data)
						console.log(res.data, "data")	
	        			var sorted = sortByKey(res.data, 'key');
										        var sorted_array = sortByKeyAsc(sorted, "match_time");
										        var groubedByTeam = groupBy(sorted_array, 'country_name');

										        console.log(groubedByTeam)
										        const orderedLeagues = {};
										        Object.keys(groubedByTeam).sort().forEach(function(key) {
										            orderedLeagues[key] = groubedByTeam[key];
										
										            route.push({name : key, list : groubedByTeam[key]})

										        });
										     
										        	setResponse(route)
										        	route.map(
										        			(item)=>{
										        				var m = item.list
										        				var so =  groupBy(m, 'league_name');
										        				console.log(so, item.name)
										     		 Object.keys(so).sort().forEach(function(key) {
										            orderedLeagues[key] = groubedByTeam[key];
										
										           league_route.push({country : item.name,  league_name : key , list  : so[key] })

										        });

										        			})
										        			console.log(league_route)
										        	setTesttail(league_route.map((item)=>{
			        		const details = item.list
			        		var state 
			        		const badge = details[0].country_logo
			        		if (badge === ""){
			        			state = require("../images/main_logo.png")
			        		}
			        		else{
			        			state = badge
			        		}

			        		return(
			        			<div>
										       <div className = "league_description">
												<img alt = "l" src = {state} id = "logo"></img>
												<h6>{item.country} -- {item.league_name}</h6>
											


													</div>			        			
				<div>{details.map((det)=>{
									var status
									var live
									var win_style1
									var win_style2
									if (det.match_status === "Finished"){
										status = "FT"
									}
									else if(det.match_status === "After ET"){
										status = "AEt"
									}
									else if(det.match_status == "Half-Time"){
										status = "HT"
									}
									else if (det.match_status == "Extra-Time"){
										status  = "ET"
									}
									else if (det.match_live == 1){
										status = det.match_status
									}

									if(det.match_live == 1){
										live = <span className = "live">live</span>
									}
									else{
										live = <span className = "text-danger">{det.match_time}</span>
									}


									if(Number(det.match_hometeam_score )>Number( det.match_awayteam_score)){
										win_style1 = {color : "black", textDecoration : "bold"}
										win_style1= {color : "#28231D"}


									}

									else if( Number(det.match_awayteam_score) > Number(det.match_hometeam_score)){
										win_style2 = {color : "black", textDecoration : "bold", }
										win_style1= {color : "#28231D"}
									}
									else{
										win_style1 ={color : "#28231D"}
										win_style2={color : "#28231D"}
									}

			        						return(
												<div className = "matches">
														<div className = "team_and_badge">


														{/* HOME TEAM BADGE AND NAME */}
															<span className = "team_and_badge_a">
															<div id = "flexing">
																<img alt = "ht" loading = "lazy" src = {det.team_home_badge} id = "logo_id"></img>
																<p className = "home_team_title" style = {win_style1}>{det.match_hometeam_name}</p>

															</div>	
																<div className = "away_score">{det.match_hometeam_score}</div>
															</span>
															{/* AWAY TEAM BADGE AND NAME */}
															<span className = "team_and_badge_b">
															<div id = "flexing">
																<img alt = "at" loading = "lazy" src = {det.team_away_badge} id = "logo_id"></img>
																<p className = "home_team_title" style = {win_style2}>{det.match_awayteam_name}</p>
															</div>	
																<div className = "home_score">{det.match_awayteam_score}</div>

															</span>

														</div>
														<div className = "end">
														{/*TIME OR STATUS */}
														<div><span className = "time_span">{status}<span className = "live_dot">'</span></span></div>


												
														{/* LIVE */}
														<div>{live}</div>
														</div>
													</div>

			        							)
			        				})}</div>
			        			</div>	
			        			)
			        	})
			        )

										        	})


			.catch(err=>{console.log((err))})

	

	}, [])									    






	return(

	<div>
			        	
{main_matches}

{test_tail}

	
	</div>
		)
}