import React, {useState, useEffect} from "react"
import "./matches.css"
import {Link, useNavigate} from "react-router-dom"
import api from "./details.js"
import axios from "axios"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioIcon from '@mui/icons-material/Radio';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CircularProgress from '@mui/material/CircularProgress';
import Line from "../../line.js"
 function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

export default function Calendar(props){

	const proposed = props.date
let d = new Date()
   const navigate = useNavigate()

const today_date = d.toISOString().split('T')[0]
//(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+1)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]
//(tomorrow_date)

const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-1)
const yesterday = yesterday_setup.toISOString().split("T")[0]










//Time Zone
function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

//(getTimeZone())

	var arrs = []
	const [response, setResponse] = useState()
	var [deme, setDem]= useState()
	const [main_state, setMain] = useState(    <Box sx={{ width: "100%",  }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>)
	const [trans, setTrans] = useState([])
	var route = []
	var [test_tail, setTesttail] = useState([])
	var league_route = []
	var league_route1 = []

	const [follow, setFollow] = useState()
	
	var route1 = []
	var [pray, setPray] = useState([])
    const leagues_ids =  [347, 207,152, 175, 300, 146, 332, 278, 28, 3, 4, 377, 683, 1, 17, 302, 168, 633, 354, 7098, 500  ]
	const api_key = api
	const [main_matches, setMain_matches] = useState(
	 <Box style={{ display: 'flex', width : "100%", justifyContent : "center",  }}>
      <CircularProgress sx= {{backgroundColor : "white", borderRadius : "50%"}} />
    </Box>
 

    )
	const [match_test, setMatch_test] = useState(
		)
	const [all_test, setAll] = useState()
	const [live, setLive] = useState()
/*
	function socketsLive(){

  var APIkey='your_account_APIkey';
  var socket  = new WebSocket('wss://wss.apifootball.com/livescore?Widgetkey='+APIkey+'&timezone=+03:00');
  
	//('Connecting...');	
	socket.onopen = function(e) {
		alert('Connected');
		//('Connected');
		//('Waiting data...');
	}		  
	socket.onmessage = function(e) {
		alert( e.data );
		if (e.data) {
			var data = JSON.parse(e.data);
			//(data);
		} else {
			//('No new data!');
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
		
		async function sed(item){
		const fyer = await JSON.stringify(item)


		sessionStorage.setItem("fyer", fyer)
		  sessionStorage.setItem("parse", fyer)

}


useEffect(()=>{
	function dem(){

	setDem(Math.random())
	
	setTimeout(dem, 60000)
}

dem()

}, [])

		
useEffect(()=>{

	async function eye(){

				const liner = await localStorage.getItem("data")

       const parser =  await JSON.parse(liner)

					const multi = await axios.get(Line+"/users")
        
      

			axios.get("https://apiv3.apifootball.com/?action=get_events&withPlayerStats=1&from="+proposed+"&to="+proposed+"&timezone="+getTimeZone()+"&APIkey="+api_key)
			.then(res=>{
				var data = res.data
				var important = []
								
								  if (parser != null){
    
			   const auth = multi.data.filter((item)=> item.email == parser.email_reader )
       //(auth, "auth")
						
						var followup_team = []
						var followup_league = []
						
if(auth.length > 0){
						auth[0].favorite_league.forEach((element)=>{
			 				var filter = data.filter((item)=> item.league_id ===  element.league_id)

			 				filter.map((item)=>{
			 					followup_league.push(item)
			 				})
			 			})

			 			auth[0].favorite_team.forEach((element)=>{
			 				var filter = data.filter((item)=> item.match_hometeam_id ===  element.team_key ||  item.match_awayteam_id === element.team_key)

			 				filter.map((item)=>{
			 					followup_team.push(item)
			 				})
			 			})


			 			
}

const mergedArray = [...followup_team, ...followup_league].filter((item, index, arr) => arr.indexOf(item) === index);
						//(mergedArray, "merging"); 
			 		




						setFollow(

<div style = {{marginTop : "2%", borderRadius : "15%", background : "white", width : "100%"}}>
													     <Accordion defaultExpanded sx = {{borderRadius : "15px"}}>
					        <AccordionSummary
					          expandIcon={<ExpandMoreIcon />}
					          aria-controls="panel1-content"
					          id="panel1-header"
					        >
					          <div className = "league_description">

					          <div style = {{display: "flex", alignItems : "center", width : "90%"}}><BookmarkBorderIcon/><h6 id = "break-down1" >Following</h6></div>

					          
					          </div>
					        </AccordionSummary>
					        <AccordionDetails>
					        	{mergedArray.map((id)=>{

					        		var reddish_home = []
			        		var reddish_away = []

					        		id.cards.map((it)=>{
					        			if(it.away_fault === ""){
			        					if(it.card === "red card"){
			        						reddish_home.push(it)
			        					}
			        				}
			        				if(it.home_fault === ""){
			        					if(it.card === "red card"){
			        						reddish_away.push(it)
			        					}
			        				}

					        		})
					        			
					        		var radar = reddish_home.map(()=>{
			        			return(<span style = {{height : "8px", width : "6px", background : "red"}} id = "spaning"></span>)
			        		})
			        		var radar1 = reddish_away.map(()=>{
			        			return(<span style = {{height : "8px", width : "4px", background : "red"}} id = "spaning"></span>)
			        		})
					        		var status
									var live
									var win_style1
									var win_style2
									if (id.match_status === "Finished"){
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>
										status =  	<h6 className = "text-secondary"  style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>								
										

									}
									else if (id.match_status == "After Pen."){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>	
										live = <><h6>{id.match_hometeam_penalty_score}</h6>-<h6>{id.match_awayteam_penalty_score}</h6></>

									}
									else if(id.match_status === "After ET"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>AeT</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if(id.match_status == "Half Time"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>HT</h6>								
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}

									
									else if (id.match_status == "Extra Time"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>ET</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if (id.match_status == "Postponed"){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>PP</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if (id.match_live == 1){
										status =  	<h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{id.match_status}</h6>							
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>


									}
									else if (id.match_status == "Penalty"){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if(id.match_status == ""){
											live = <span className = "text-dark">{id.match_time}</span>
											
											

												status = <BookmarkBorderIcon className = "text-dark" />	
										


									}
									var phone = <HeadphonesIcon sx = {{width : "15px", height : "10px"}}/> 

					        		return(

                            <div onClick={()=>{sed(id)}}   to = {"result/"+id.match_id} style = {{display : "flex", marginTop : "3%", width : "100%", justifyContent : "space-between", background : "white", borderRadius : "10px", textDecoration : "none"}} >

                                    <div style = {{display : "flex", justifyContent : "space-between", width : "100%", height : "50px", alignItems : "center", }}>
                                    <div style = {{width : "5%"}} >{status} </div>   
                                    <Link onClick={()=>{sed(id)}}   to = {"result/"+id.match_id} style = {{display : "flex", textDecoration : "none", justifyContent : "space-between", width : "90%",}}>
                                    <div style = {{display : "flex", width : "33%",justifyContent : "space-between", display : "flex", alignItems : "center", }}><h6 className = "text-dark" style ={{fontSize : "0.8em", }}>{id.match_hometeam_name}</h6>{radar}<img src = {id.team_home_badge} style = {{width : "20px", height : "20px"}}></img></div>
                                    <div className = "text-dark" style = {{width : "20%", justifyContent : "space-around", display : "flex", color : "black"}}>{live}{/*Space for match commentary icon*/}</div>
                                    <div style = {{display : "flex", width : "33%", justifyContent : "space-between", display : "flex", alignItems : "center", }}><img src = {id.team_away_badge} style = {{width : "20px", height : "20px"}}></img>{radar1}<h6 className = "text-dark" style ={{  fontSize : "0.8em",}}>{id.match_awayteam_name}</h6></div>
                                    </Link>
                                    </div>
                                    <div></div>

                                    </div>
					        			)
					        	})}
					        </AccordionDetails>
					      </Accordion>	
					      </div>
							)






if(mergedArray.length <1){
	setFollow(<h6 className = "text-dark text-center">Favorites not Playing </h6>)
}
}








			 			//(res)
                        leagues_ids.forEach((element)=>{
                            var filter = data.filter((item)=> item.league_id== element)
                            //(filter)
                            filter.map((item)=>{
                                 important.push(item)
                            })
                           

                        })
                        //(important, "filter")
                       	setResponse(important)

                       	var sorted1 = sortByKey(important, 'key');
										        var sorted_array1 = sortByKeyAsc(sorted1, "match_time");
										        var groubedByTeam1 = groupBy(sorted_array1, 'country_name');

										        //(groubedByTeam1)
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
										        				//(so, item.name)
										     		 Object.keys(so).sort().forEach(function(key) {
										            orderedLeagues1[key] = groubedByTeam1[key];
										
										           league_route1.push({country : item.name,  league_name : key , list  : so[key] })

										        });

										        			})
										        			//(league_route)
										        			

										        			if(league_route1.length > 0){
										        				setMatch_test(<div style = {{height : "22px", background : "#ECE5B6", display : "flex", justifyContent : "space-around"}}><label>Popular Competitions [A-Z]</label><h6>{league_route1.length}</h6></div>)
										        			}
						setMain_matches(league_route1.map((item)=>{
			        const details = item.list
			        		var state 
			        		var active_digit = ""
			        
			        		const badge = details[0].league_logo
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
			        		//(active_digit, item.league_name)
			        		return(
			        		<div style = {{marginTop : "2%", borderRadius : "10%", background : "white", width : "100%"}}>
													     <Accordion defaultExpanded >
					        <AccordionSummary
					          expandIcon={<ExpandMoreIcon />}
					          aria-controls="panel1-content"
					          id="panel1-header"
					        >
					          <div className = "league_description">

					          <div style = {{display: "flex", alignItems : "center", width : "90%"}}><img src = {state} id = "logod"></img><h6 id = "break-down1" onClick = {()=>{navigate("leagues/leauges_mall");const stringer = JSON.stringify(item.list[0]); sessionStorage.setItem("selected_league", stringer)}}>{item.league_name}</h6></div>

					          <div style = {{width : "10%", display : "flex", justifyContent : "space-between"}}><h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>{details.length}</h6><h6 style = {{color : "red"}}>{active_digit}</h6></div>

					          </div>
					        </AccordionSummary>
					        <AccordionDetails>
					        	{details.map((id)=>{

					        		var reddish_home = []
			        		var reddish_away = []

					        		id.cards.map((it)=>{
					        			if(it.away_fault === ""){
			        					if(it.card === "red card"){
			        						reddish_home.push(it)
			        					}
			        				}
			        				if(it.home_fault === ""){
			        					if(it.card === "red card"){
			        						reddish_away.push(it)
			        					}
			        				}

					        		})
					        			
					        		var radar = reddish_home.map(()=>{
			        			return(<span style = {{height : "8px", width : "6px", background : "red"}} id = "spaning"></span>)
			        		})
			        		var radar1 = reddish_away.map(()=>{
			        			return(<span style = {{height : "8px", width : "4px", background : "red"}} id = "spaning"></span>)
			        		})
					        		var status
									var live
									var win_style1
									var win_style2
									if (id.match_status === "Finished"){
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>
										status =  	<h6 className = "text-secondary"  style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>								
										

									}
									else if (id.match_status == "After Pen."){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>	
										live = <><h6>{id.match_hometeam_penalty_score}</h6>-<h6>{id.match_awayteam_penalty_score}</h6></>

									}
									else if(id.match_status === "After ET"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>AeT</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if(id.match_status == "Half Time"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>HT</h6>								
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}

									
									else if (id.match_status == "Extra Time"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>ET</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if (id.match_status == "Postponed"){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>PP</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if (id.match_live == 1){
										status =  	<h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{id.match_status}</h6>							
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>


									}
									else if (id.match_status == "Penalty"){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if(id.match_status == ""){
											live = <span className = "text-dark">{id.match_time}</span>
											
											

												status = <BookmarkBorderIcon className = "text-dark" />	
										


									}
									var phone = <HeadphonesIcon sx = {{width : "15px", height : "10px"}}/> 

					        		return(

                            <div onClick={()=>{sed(id)}}   to = {"result/"+id.match_id} style = {{display : "flex", marginTop : "3%", width : "100%", justifyContent : "space-between", background : "white", borderRadius : "10px", textDecoration : "none"}} >

                                    <div style = {{display : "flex", justifyContent : "space-between", width : "100%", height : "50px", alignItems : "center", }}>
                                    <div style = {{width : "5%"}} >{status} </div>   
                                    <Link onClick={()=>{sed(id)}}   to = {"result/"+id.match_id} style = {{display : "flex", textDecoration : "none", justifyContent : "space-between", width : "90%",}}>
                                    <div style = {{display : "flex", width : "33%",justifyContent : "space-between", display : "flex", alignItems : "center", }}><h6 className = "text-dark" style ={{fontSize : "0.8em", }}>{id.match_hometeam_name}</h6>{radar}<img src = {id.team_home_badge} style = {{width : "20px", height : "20px"}}></img></div>
                                    <div className = "text-dark" style = {{width : "20%", justifyContent : "space-around", display : "flex", color : "black"}}>{live}{/*Space for match commentary icon*/}</div>
                                    <div style = {{display : "flex", width : "33%", justifyContent : "space-between", display : "flex", alignItems : "center", }}><img src = {id.team_away_badge} style = {{width : "20px", height : "20px"}}></img>{radar1}<h6 className = "text-dark" style ={{  fontSize : "0.8em",}}>{id.match_awayteam_name}</h6></div>
                                    </Link>
                                    </div>
                                    <div></div>

                                    </div>
					        			)
					        	})}
					        </AccordionDetails>
					      </Accordion>	
					      </div>
						
			        			)
			        	})

)
						/////////////////////////////////////////////////////////////////////
						setResponse(res.data)
						//(res.data, "data")	
	        			var sorted = sortByKey(res.data, 'key');
										        var sorted_array = sortByKeyAsc(sorted, "match_time");
										        var groubedByTeam = groupBy(sorted_array, 'country_name');

										        //(groubedByTeam)
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
										        				//(so, item.name)
										     		 Object.keys(so).sort().forEach(function(key) {
										            orderedLeagues[key] = groubedByTeam[key];
										
										           league_route.push({country : item.name,  league_name : key , list  : so[key] })

										        });

										        			})
										        			//(league_route)

										        	
										        

										        			setAll(<div style = {{height : "22px", background : "#EEEEEE", display : "flex", justifyContent : "space-around"}}><label>Available Competitions [A-Z]</label><h6>{league_route.length}</h6></div>)
										        				var live_m = []
										        		setTesttail(league_route.map((item)=>{
			        		const details = item.list
			        		var state 
			        		var active_digit = ""
			        	
			        		if (details.match_live === "1"){

			        		}
			        		
			        		setLive(<div onClick ={ ()=>{
									//(item, "being selected")
									  navigate("/match_small", {state : live_m})
								}
								} style = {{height : "40px", background : "white", alignItems : "center", display : "flex", justifyContent : "space-between"}}><div style = {{display : "flex", alignItems : "center" }}><img src = {require("../images/live.jpg")} id = "logod"></img><h6 className = "text-danger">Live Matches </h6></div><h6 className = "text-danger" style = {{marginRight : "5%"}}>{live_m.length}</h6></div>)
			        		const badge = details[0].league_logo  
			        		if (badge === ""){
			        			state = require("../images/no-img.png")
			        		}
			        		else{
			        			state = badge
			        		}
			        		var number_system  = 0 
			        		var reddish_home = []
			        		var reddish_away = []
			        		details.map((item)=>{
			        	
			        			if(item.match_live === "1"){
			        				//(item.match_live)
			        				number_system += 1
			        				active_digit = number_system
			        				live_m.push(item)
			        		
			        	
			        			}
			        			else if(item.match_live === "0"){
			        				//(item.match_live)
			      
			        			}

			        			item.cards.map((it)=>{
			        			
			        			})
			        		})
			        		 
			        		//(active_digit, item.league_name)

			        		

			        		return(
			        			
											<div style = {{marginTop : "2%", borderRadius : "10px"}}>
													     <Accordion sx = {{borderRadius : "10px"}} defaultExpanded>
					        <AccordionSummary
						         expandIcon={<ExpandMoreIcon />}
						          aria-controls="panel1-content"
						          id="panel1-header"

						          sx = {{width : "100%", borderRadius : "10px" }}
					        >
					          <div className = "league_description">

					          <div style = {{display: "flex", alignItems : "center", width : "90%"}}><img src = {state} id = "logod"></img><h6 id = "break-down1" onClick = {()=>{navigate("/leagues/leauges_mall");const stringer = JSON.stringify(item.list[0]); sessionStorage.setItem("selected_league", stringer)}} >{item.league_name}</h6></div>

					          <div style = {{width : "10%", display : "flex", justifyContent : "space-between"}}><h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>{details.length}</h6><h6 style = {{color : "red"}}>{active_digit}</h6></div>

					          </div>
					        </AccordionSummary>
					        <AccordionDetails>
					        	{details.map((id)=>{

					        		var reddish_home = []
			        		var reddish_away = []

					        		id.cards.map((it)=>{
					        			if(it.away_fault === ""){
			        					if(it.card === "red card"){
			        						reddish_home.push(it)
			        					}
			        				}
			        				if(it.home_fault === ""){
			        					if(it.card === "red card"){
			        						reddish_away.push(it)
			        					}
			        				}

					        		})
					        			
					        		var radar = reddish_home.map(()=>{
			        			return(<span style = {{height : "8px", width : "6px", background : "red"}} id = "spaning"></span>)
			        		})
			        		var radar1 = reddish_away.map(()=>{
			        			return(<span style = {{height : "8px", width : "4px", background : "red"}} id = "spaning"></span>)
			        		})
					        		var status
									var live
									var win_style1
									var win_style2
									if (id.match_status === "Finished"){
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>
										status =  	<h6 className = "text-secondary"  style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>								
										

									}
									else if(id.match_status === "After ET"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>AeT</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if(id.match_status == "Half Time"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>HT</h6>								
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}

									
									else if (id.match_status == "Extra Time"){
										status =  	<h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>ET</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if (id.match_status == "Postponed"){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>PP</h6>	
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

									}
									else if (id.match_status == "After Pen."){
										status =  	<h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>	
										live = <><h6>{id.match_hometeam_penalty_score}</h6>-<h6>{id.match_awayteam_penalty_score}</h6></>

									}
									else if (id.match_live == 1){
										status =  	<h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{id.match_status}</h6>							
										live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>


									}

									else if(id.match_status == ""){
											status = <BookmarkBorderIcon className = "text-dark" onClick = {()=>{alert("take me home")}}/>	
											live = <span className = "text-dark">{id.match_time}</span>	
									}
									var phone = <HeadphonesIcon sx = {{width : "15px", height : "10px"}}/> 

					        		return(

                            <div onClick={()=>{sed(id)}}   to = {"result/"+id.match_id} style = {{display : "flex", marginTop : "3%", width : "100%", justifyContent : "space-between", background : "white", borderRadius : "10px", textDecoration : "none"}} >

                                    <div style = {{display : "flex", justifyContent : "space-between", width : "100%", height : "50px", alignItems : "center", }}>
                                    <div style = {{width : "5%"}}>{status} </div>   
                                    <Link onClick={()=>{sed(id)}}   to = {"result/"+id.match_id} style = {{display : "flex", textDecoration : "none", justifyContent : "space-between", width : "90%",}}>
                                    <div style = {{display : "flex", width : "33%",justifyContent : "space-between", display : "flex", alignItems : "center", }}><h6 className = "text-dark" style ={{fontSize : "0.8em", }}>{id.match_hometeam_name}</h6>{radar}<img src = {id.team_home_badge} style = {{width : "20px", height : "20px"}}></img></div>
                                    <div className = "text-dark" style = {{width : "20%", justifyContent : "space-around", display : "flex", color : "black"}}>{live}{/*Space for match commentary icon*/}</div>
                                    <div style = {{display : "flex", width : "33%", justifyContent : "space-between", display : "flex", alignItems : "center", }}><img src = {id.team_away_badge} style = {{width : "20px", height : "20px"}}></img>{radar1}<h6 className = "text-dark" style ={{  fontSize : "0.8em",}}>{id.match_awayteam_name}</h6></div>
                                    </Link>
                                    </div>
                                    <div></div>

                                    </div>
					        			)
					        	})}
					        </AccordionDetails>
					      </Accordion>		

					      </div>
				
			        			)
			        	})

)
										        	
										        	})


			.catch(err=>{console.log((err))})

			
}

eye()
	}, [deme])									    






	return(
<div className = "container" style = {{background : "#EEEEEE", height : window.innerHeight-120, overflowY : "auto", overflowX : "hidden" }}>	
		{follow}
		<br></br>
		{main_matches}
		<br></br>
		{test_tail}
</div>
		)
}