import React, { useEffect, useState } from "react";
import api from "./components/nav/details.js"
import axios from "axios"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Line from "./line.js"
 import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { Tabs, Tab, } from '@mui/material';
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
import { styled } from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom"

import Slide from '@mui/material/Slide';
import StadiumIcon from '@mui/icons-material/Stadium';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CircularProgress from '@mui/material/CircularProgress';

const Theme = createTheme({
  palette: {
    primary: {
      
      main: '#FFD700',
      
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
})

export default function Team(){


const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    var more
    const [ret, setRet] = useState(<Box style={{ display: 'flex', width : "100%", justifyContent : "center",  }}>
      <CircularProgress sx= {{backgroundColor : "white", borderRadius : "50%"}} />
    </Box>)
    const navigate = useNavigate()
    const [injuryList, setInjurylist] = useState()
    const [playerRating, setPlayer_rating] = useState()
    const [goals, setGoals] = useState()
    const [players, setPlayers] = useState()
useEffect(()=>{
   async function fetcher(){

    const team_id = sessionStorage.getItem("team")
    const id = JSON.stringify(team_id)
    
    console.log(id, "team id")
 

    const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_teams&team_id="+team_id+"&APIkey="+api)
    const data = raw_data.data[0]
    const parserd = JSON.stringify(data)
  
   sessionStorage.setItem("team_item", parserd)

  const item = data

   async function poster(id){
      const raw_data = await localStorage.getItem("data")
  const data = JSON.parse(raw_data)

  

 

     const multi = await axios.get(Line+"/users")
        
       const auth = multi.data.filter((item)=> item.email == data.email_reader )

       var _id = auth[0]._id
        console.log(auth)

 const stringer = JSON.stringify(id)
  await fetch(Line+"/favorite_team",
   {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body : new URLSearchParams({userId : _id, pinned : stringer  })
})
window.location.reload();

}

async function posterd(id){
      const raw_data = await localStorage.getItem("data")
  const data = JSON.parse(raw_data)

  

 

     const multi = await axios.get(Line+"/users")
        
       const auth = multi.data.filter((item)=> item.email == data.email_reader )

       var _id = auth[0]._id
        console.log(auth)
        alert("being pressed")

 
 const stringer = JSON.stringify(id)
  await fetch(Line+"/favorite_team_remove",
   {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body : new URLSearchParams({userId : _id, pinned : stringer  })
})
window.location.reload();

}

    console.log(data)

     const liner = await localStorage.getItem("data")

       const parser =  await JSON.parse(liner)
        console.log(parser)




        const multi = await axios.get(Line+"/users")

         const auth = multi.data.filter((item)=> item.email == parser.email_reader )


  var status 
                      const followed = <p onClick = {()=>{ status = notfollowed; posterd(item); }}>following</p>
                      const notfollowed = <p className = "text-dark" onClick = {()=>{poster(item); status = followed}}>follow</p> 



                      const checker = auth[0].favorite_team.filter((it)=> it.team_key ===  item.team_key)
                   
                      if(checker.length > 0){
                        status = <p onClick = {()=>{ status = notfollowed; posterd(item);  }} >following</p>
                           console.log(checker)
                      }

                      else{

                        status = <p className = "text-dark" onClick = {()=>{poster(item); status = followed;}}>follow</p> 
                      }

    setRet(
            <div >
        
        <div className = " navbar-nav nav fixed-top bg-light">           
         <div style = {{width : "100%", display : "flex", justifyContent : "space-between"}}>
            <Button onClick={()=>navigate("/leagues")} className = "text-dark" style = {{textAlign : "left"}} autoFocus color="inherit" >
              <ArrowBackIcon/>
            </Button>

          <strong>{status}</strong>
            </div>

             

                        <div style = {{display : "flex",alignItems : "center", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.team_badge} ></img></div>
                        <div><div><h2>{data.team_name}</h2><h6 className = "text-warning" >{data.team_country}</h6></div>
                            
                        </div>
                     
                        </div>
                  
       


      
     
   
     
 
                        <div>

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Overview" />
          <Tab label="Result" />
          <Tab label="Fixture" />
          <Tab label="Players" />
        </Tabs>
        </ThemeProvider>
        </div>


      
     
   
     
 </div>




   <div id = "love" style = {{ background : "#EEEEEE"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        		
			<Overview/>
         



        

        </Typography>

        <Typography component="div" role="tabpanel" hidden={value !== 1}>
          		<Results/>
                    </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
         		<Fixtures/>
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
         	<Players_/>
        </Typography>
       

      </SwipeableViews>
    </div>




        </div>        )


   }
   fetcher()

}, [value, playerRating, injuryList])
    return(
        <body style = {{background : "#EEEEEE", height : window.innerHeight}}>
            
            {ret}
        </body>
    )
    
}









function Fixtures(){

const [response, setResponse]= useState()
const [all, setAll] = useState()
const navigate = useNavigate()
var league_route = []
var route = []


    async function sed(item){
        const fyer = await JSON.stringify(item)


        sessionStorage.setItem("fyer", fyer)
          sessionStorage.setItem("parse", fyer)
        navigate("/match_small/result/"+item.match_id, {state : item })

}

function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

let d = new Date()
   



const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+60)
const month = tomorrow_setup.toISOString().split('T')[0]


const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate())
const today_date = yesterday_setup.toISOString().split("T")[0]


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
        
       async function dom(){

        try{
        const league = sessionStorage.getItem("team")
        
        const team_id = league
       
        console.log(team_id)
           const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_events&withPlayerStats=1&from="+today_date+"&to="+month+"&team_id="+team_id+"&APIkey="+api)
            const main_data = raw_data.data
           

       

           

var sorted = sortByKey(main_data, 'key');
                                                var sorted_array = sortByKeyAsc(sorted, "match_time");
                                                var groubedByTeam = groupBy(sorted_array, 'match_date');

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
                                                                var so =  groupBy(m, 'match_date');
                                                                console.log(so, item.name)
                                                     Object.keys(so).sort().forEach(function(key) {
                                                    orderedLeagues[key] = groubedByTeam[key];
                                        
                                                   league_route.push({country : item.name,  match_date : key , list  : so[key] })

                                                });

                                                            })
                                                            console.log(league_route)

                                                           
league_route.reverse()

setAll(



    league_route.map((item)=>{
                    const details = item.list
                    const declared_date = item.match_date
                            var state 
                            var active_digit = ""
                    
                            const badge = details[0].league_logo
                            if (badge === ""){
                                state = require("./components/images/no-img.png")
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

                              <div style = {{display: "flex", alignItems : "center", width : "90%"}}><img src = {state} id = "logod"></img><h6 id = "break-down1" >{declared_date}</h6></div>

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
                                        status =    <h6 className = "text-secondary"  style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>                                
                                        

                                    }
                                    else if(id.match_status === "After ET"){
                                        status =    <h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>AeT</h6>    
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }
                                    else if(id.match_status == "Half Time"){
                                        status =    <h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>HT</h6>                             
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }

                                    
                                    else if (id.match_status == "Extra Time"){
                                        status =    <h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>ET</h6> 
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }
                                    else if (id.match_status == "Postponed"){
                                        status =    <h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>PP</h6>   
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }
                                    else if (id.match_status == "After Pen."){
                                        status =    <h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>   
                                        live = <><h6>{id.match_hometeam_penalty_score}</h6>-<h6>{id.match_awayteam_penalty_score}</h6></>

                                    }
                                    else if (id.match_live == 1){
                                        status =    <h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{id.match_status}</h6>                          
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
                                    <Link onClick={()=>{sed(id)}}  style = {{display : "flex", textDecoration : "none", justifyContent : "space-between", width : "90%",}}>
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
                
)}

                    
                      


catch(e){
    console.log(e)
}
}
dom()

                                       
    }, [])


    return(
                <>
                            {all}
                </>
    )

}
























function Results(){

const [response, setResponse]= useState()
const [all, setAll] = useState()
const navigate = useNavigate()
var league_route = []
var route = []


    async function sed(item){
        const fyer = await JSON.stringify(item)


        sessionStorage.setItem("fyer", fyer)
          sessionStorage.setItem("parse", fyer)
        navigate("/match_small/result/"+item.match_id, {state : item })

}

function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

let d = new Date()
   



const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate())
const month = tomorrow_setup.toISOString().split('T')[0]


const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-120)
const today_date = yesterday_setup.toISOString().split("T")[0]


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
        
       async function dom(){

        try{
        const league = sessionStorage.getItem("team")
        
        const team_id = league
       
        console.log(team_id)
           const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_events&withPlayerStats=1&from="+today_date+"&to="+month+"&team_id="+team_id+"&APIkey="+api)
            const main_data = raw_data.data
           

       

           

var sorted = sortByKey(main_data, 'key');
                                                var sorted_array = sortByKeyAsc(sorted, "match_time");
                                                var groubedByTeam = groupBy(sorted_array, 'match_date');

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
                                                                var so =  groupBy(m, 'match_date');
                                                                console.log(so, item.name)
                                                     Object.keys(so).sort().forEach(function(key) {
                                                    orderedLeagues[key] = groubedByTeam[key];
                                        
                                                   league_route.push({country : item.name,  match_date : key , list  : so[key] })

                                                });

                                                            })
                                                            console.log(league_route)

                                                  league_route.reverse()       


setAll(



    league_route.map((item)=>{
                    const details = item.list
                    const declared_date = item.match_date
                            var state 
                            var active_digit = ""
                    
                            const badge = details[0].league_logo
                            if (badge === ""){
                                state = require("./components/images/no-img.png")
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

                              <div style = {{display: "flex", alignItems : "center", width : "90%"}}><img src = {state} id = "logod"></img><h6 id = "break-down1" >{declared_date}</h6></div>

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
                                        status =    <h6 className = "text-secondary"  style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>                                
                                        

                                    }
                                    else if(id.match_status === "After ET"){
                                        status =    <h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>AeT</h6>    
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }
                                    else if(id.match_status == "Half Time"){
                                        status =    <h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>HT</h6>                             
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }

                                    
                                    else if (id.match_status == "Extra Time"){
                                        status =    <h6 className = "text-secondary" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "#EEEEEE"}}>ET</h6> 
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }
                                    else if (id.match_status == "Postponed"){
                                        status =    <h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>PP</h6>   
                                        live = <><h6>{id.match_hometeam_score}</h6>-<h6>{id.match_awayteam_score}</h6></>

                                    }
                                    else if (id.match_status == "After Pen."){
                                        status =    <h6 className = "text-light" style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", borderRadius : "50%", background : "black"}}>Pn</h6>   
                                        live = <><h6>{id.match_hometeam_penalty_score}</h6>-<h6>{id.match_awayteam_penalty_score}</h6></>

                                    }
                                    else if (id.match_live == 1){
                                        status =    <h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{id.match_status}</h6>                          
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
                                    <Link onClick={()=>{sed(id)}}  style = {{display : "flex", textDecoration : "none", justifyContent : "space-between", width : "90%",}}>
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
                
)}

                    
                      


catch(e){
    console.log(e)
}
}
dom()

                                       
    }, [])


    return(
                <>
                            {all}
                </>
    )

}







function Overview(){

	 var more
    const [ret, setRet] = useState()
    const navigate = useNavigate()
    const [injuryList, setInjurylist] = useState()
    const [playerRating, setPlayer_rating] = useState()
    const [goals, setGoals] = useState()
    const [locate, setLocation] = useState()
     const [players, setPlayers] = useState()
	useEffect(()=>{
				async function dom(){
						const raw_data = await sessionStorage.getItem("team_item")
						const data = JSON.parse(raw_data)


							setLocation(
									<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", background : "white", borderRadius : "10px"}}>
        				<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
        				
        				<div><StadiumIcon/> : {data.venue.venue_name}</div>
        				<div><LocationCityIcon/>: {data.venue.venue_city}</div>


        				</div>
        				<br></br>

        				<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
        				
        				<div><ReduceCapacityIcon/> : {data.venue.venue_capacity}</div>
        				<div><LocationOnIcon/>: {data.venue.venue_address}</div>


        				</div>

        		</div>

								)

						 data.players.sort((a,b)=>{
            return Number(b.player_goals)-Number(a.player_goals);
        })

    const sliced_goals = data.players.slice(0,5)

        setGoals(
    		<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", background : "white", borderRadius : "10px"}}>

    			<h6 className = "text-center">Top Goal Scorers</h6>

    			{sliced_goals.map((item)=>{

    					return(
    							<div onClick = {()=>{const home = JSON.stringify(item.player_key); sessionStorage.setItem("player", home);  navigate("/player")}} style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}>
    										
    									<div style = {{display : "flex", width : "50%"}}>
    										<img src = {item.player_image} style = {{width : "60px", height : "60px", borderRadius : "50%"}}></img>
    										<div><p><strong>{item.player_name}</strong></p> <p className = "text-secondary">{item.player_type}</p></div>
    									</div>
    									<div>
    									<p style = {{color : "black"}}><strong>{item.player_goals}</strong></p>
    									</div>
    								</div>
    						)


    			})}
    		</div>
    	)












    data.players.sort((a,b)=>{
            return Number(b.player_rating)-Number(a.player_rating);
        })

    const players_sliced = data.players.slice(0,5)
    setPlayer_rating(
    		<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", background : "white", borderRadius : "10px"}}>

    			<h6 className = "text-center">Highest Rated Players</h6>

    			{players_sliced.map((item)=>{

    					return(
    							<div onClick = {()=>{const home = JSON.stringify(item.player_key); sessionStorage.setItem("player", home);  navigate("/player")}} style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
    										
    									<div style = {{display : "flex", width : "50%", alignItems:"center"}}>
    										<img src = {item.player_image} style = {{width : "60px", height : "60px", borderRadius : "50%"}}></img>
    										<div><p><strong>{item.player_name}</strong></p> <p className = "text-secondary">{item.player_type}</p></div>
    									</div>
    									<div>
    									<p style = {{color : "white", background : "midnightblue"}}><strong>{item.player_rating}</strong></p>
    									</div>
    								</div>
    						)


    			})}
    		</div>
    	)




    const injured_players = data.players.filter((item)=> item.player_injured === "Yes")

    if(injured_players.length > 0 ){
    	setInjurylist(
    			<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", background : "white", borderRadius : "10px"}}>

    			<h6 className = "text-center">Injured players</h6>
    			{
    				injured_players.map((item)=>{

    					return(

    								<div onClick = {()=>{const home = JSON.stringify(item.player_key); sessionStorage.setItem("player", home);  navigate("/player")}} style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
    										
    									<div style = {{display : "flex", width : "50%"}}>
    										<img src = {item.player_image} style = {{width : "60px", height : "60px", borderRadius : "50%"}}></img>
    										<div><p><strong>{item.player_name}</strong></p> <p className = "text-secondary">{item.player_type}</p></div>
    									</div>
    									<div>
    									<AssistWalkerIcon/>
    									</div>
    								</div>
    						)


    				})
    			}

    			</div>

    		)
    }



				}
				dom()
	}, [])

	return(
					<div>
        		{locate}

        		<br></br>


        		{goals}
        		<br></br>
        		{playerRating}
        		<br></br>
        		{injuryList}
        		

        		

        		</div>
		)
}


function Players_(){

 const [players, setPlayers] = useState()
 const navigate = useNavigate()
	useEffect(()=>{

				async function dom(){

						 const raw_data = await sessionStorage.getItem("team_item")
						 const data = await JSON.parse(raw_data)

						 setPlayers(
    data.players.map((item)=>{

    	return(
    			   <div onClick = {()=>{const home = JSON.stringify(item.player_key); sessionStorage.setItem("player", home);  navigate("/player")}} style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px", marginTop : "3%", background : "white"}}>
                                                    <div style = {{display : "flex", width : "100%",  height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                                    <div style = {{display : "flex", height : "60px", alignItems : "center"}}>
                                                    <img style = {{width : "60px", height : "60px", borderRadius : "50%"}} src = {item.player_image}></img>
                                                    <h6>{item.player_name}</h6>
                                                    </div>
                                                    <h6 style = {{background : "midnightblue", borderRadius : "10px", color : "white", }}>{item.player_rating}</h6>
                                                   
                                                    </div>
                                                    <hr></hr>


                                                    <div style = {{display : "flex", width : "100%",  height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                                       	 <h6><SportsSoccerIcon/>goals : {item.player_goals}</h6>
                                                        <p className = "text-secondary">assists : {item.player_assists}</p>
                                                        <p className = "text-secondary"> penalty: {item.player_pen_scored}</p>
                                                    </div>
                                                    <div style = {{display : "flex", width : "100%",  height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                                       	 <h6>red cards : {item.player_red_cards}</h6>
                                                        <p className = "text-secondary">yellow cards : {item.player_yellow_cards}</p>
                                                        <p className = "text-secondary"> played: {item.player_match_played}</p>
                                                    </div>

                                                    <div style = {{width : "100%", textAlign : "center"}}>{item.player_country}</div>
                                            </div>
    		)
    })
)

   

				}	

				dom()
	}, [])


	return(

				<div>
					
{players}

				</div>
		)
}