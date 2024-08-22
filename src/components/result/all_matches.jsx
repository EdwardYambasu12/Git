import React, {useState, useEffect} from "react"
import "./matches.css"
import {Link, useNavigate} from "react-router-dom"
import api from "./details.js"
import axios from "axios"



export default function All_Matches(props){
let d = new Date()
   const navigate = useNavigate()

const today_date = d.toISOString().split('T')[0]
console.log(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+1)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]
console.log(tomorrow_date)

const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-2)
const yesterday = yesterday_setup.toISOString().split("T")[0]




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
    const leagues_ids =  [347, 207,152, 175, 300, 146, 332, 278, 28, 3, 4, 377, 683, 1, 17, 302, 168, 633, 354, 7098  ]
	const api_key = api
	const [main_matches, setMain_matches] = useState()
	const [match_test, setMatch_test] = useState()
	const [all_test, setAll] = useState()
	const [live, setLive] = useState()
/*
	function socketsLive(){

  var APIkey='your_account_APIkey';
  var socket  = new WebSocket('wss://wss.apifootball.com/livescore?Widgetkey='+APIkey+'&timezone=+03:00');
  
	console.log('Connecting...');	
	socket.onopen = function(e) {
		alert('Connected');
		console.log('Connected');
		console.log('Waiting data...');
	}		  
	socket.onmessage = function(e) {
		alert( e.data );
		if (e.data) {
			var data = JSON.parse(e.data);
			console.log(data);
		} else {
			console.log('No new data!');
		}
	}
	socket.onclose = function(){
		socket = null;
		setTimeout(socketsLive, 5000);
	}

}
socketsLive();
*/



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
			axios.get("https://apiv3.apifootball.com/?action=get_events&from="+today_date+"&to="+today_date+"&timezone="+getTimeZone()+"&APIkey="+api_key)
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
										        			

										        			if(league_route1.length > 0){
										        				setMatch_test(<div style = {{height : "22px", background : "#ECE5B6", display : "flex", justifyContent : "space-around"}}><label>Popular Competitions [A-Z]</label><h6>{league_route1.length}</h6></div>)
										        			}
						setMain_matches(league_route1.map((item)=>{
			        const details = item.list
			        		var state 
			        		var active_digit = ""
			        
			        		const badge = details[0].country_logo
			        		if (badge === ""){
			        			state = require("../images/no-img.png")
			        		}
			        		else{
			        			state = badge
			        		}
			        		var number_system  = 0 
			        		details.map((item)=>{
			        	
			        			if(item.match_live === "1"){
			        				
			        				number_system += 1
			        				active_digit = number_system
			        	
			        			}
			        			else if(item.match_live === "0"){
			        
			        			}
			        		})
			        		console.log(active_digit, item.league_name)
			        		return(
			        			
								<div onClick ={ ()=>{
									console.log(item, "being selected")
									  navigate("/match_small", {state : item })
								}
								} style = {{width : "100%"}}>
										       <div className = "league_description1">
										       	<div style = {{display: "flex", alignItems : "center", width : "80%"}}>

										       	<img alt = "l" src = {state} id = "logod"></img>
												<div id = "text">	
													<h6 className="text-secondary">{item.country}</h6>
													<h6 className="text-dark">{item.league_name}</h6>
												
												</div>
												</div>
												<div style = {{display : "flex", width : "10%", justifyContent : "space-between"}}>
												<h6 id = "active_leagues">{active_digit}</h6>
												<h6>{details.length}</h6>
												</div>


												
											


													</div>			
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

										        	
										        

										        			setAll(<div style = {{height : "22px", background : "#EEEEEE", display : "flex", justifyContent : "space-around"}}><label>Available Competitions [A-Z]</label><h6>{league_route.length}</h6></div>)
										        				var live_m = []
										        		setTesttail(league_route.map((item)=>{
			        		const details = item.list
			        		var state 
			        		var active_digit = ""
			        	
			        		if (details.match_live === "1"){

			        		}
			        		
			        		setLive(<div onClick ={ ()=>{
									console.log(item, "being selected")
									  navigate("/match_small", {state : live_m})
								}
								} style = {{height : "40px", background : "white", alignItems : "center", display : "flex", justifyContent : "space-between"}}><div style = {{display : "flex", alignItems : "center" }}><img src = {require("../images/live.jpg")} id = "logod"></img><h6 className = "text-danger">Live Matches </h6></div><h6 className = "text-danger" style = {{marginRight : "5%"}}>{live_m.length}</h6></div>)
			        		const badge = details[0].country_logo
			        		if (badge === ""){
			        			state = require("../images/no-img.png")
			        		}
			        		else{
			        			state = badge
			        		}
			        		var number_system  = 0 
			        		details.map((item)=>{
			        	
			        			if(item.match_live === "1"){
			        				console.log(item.match_live)
			        				number_system += 1
			        				active_digit = number_system
			        				live_m.push(item)
			        		
			        	
			        			}
			        			else if(item.match_live === "0"){
			        				console.log(item.match_live)
			      
			        			}
			        		})
			        		console.log(active_digit, item.league_name)
			        		return(
			        			
								<div onClick ={ ()=>{
									console.log(item, "being selected")
										
									  navigate("/match_small", {state : item })
								}
								} style = {{width : "100%"}}>
										       <div className = "league_description1">
										       	<div style = {{display: "flex", alignItems : "center", width : "80%"}}>

										       	<img alt = "l" src = {state} id = "logod"></img>
												<div id = "text">	
													<h6 className="text-secondary">{item.country}</h6>
													<h6 className="text-dark">{item.league_name}</h6>
												
												</div>
												</div>
												<div style = {{display : "flex", width : "10%", justifyContent : "space-between"}}>
												<h6 id = "active_leagues">{active_digit}</h6>
												<h6>{details.length}</h6>
												</div>


												
											


													</div>			
													</div>        			
				
			        			)
			        	})

)
										        	})


			.catch(err=>{console.log((err))})

	

	}, [])									    






	return(
<div>	{live}
		{match_test}
		{main_matches}
		{all_test}
		{test_tail}
</div>
		)
}