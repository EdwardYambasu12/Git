import React, { useEffect, useState } from "react";
import api from "../nav/details.js"
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
import Line from "../../line.js"
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';

import Slide from '@mui/material/Slide';






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

export default function Leagues(){


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
useEffect(()=>{
   async function fetcher(){

    const league = sessionStorage.getItem("selected_league")
    const data = JSON.parse(league)
    console.log(data)


     const item = data
async function poster(id){
      const raw_data = await localStorage.getItem("data")
  const data = JSON.parse(raw_data)

  
if(data != null){
 

     const multi = await axios.get(Line+"/users")
        
       const auth = multi.data.filter((item)=> item.email == data.email_reader )

       var _id = auth[0]._id
        console.log(auth)


 console.log(Line+"/favorite_leagues")
 const stringer = JSON.stringify(id)
  await fetch(Line+"/favorite_leagues",
   {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body : new URLSearchParams({userId : _id, pinned : stringer  })
})



window.location.reload();
}

else if(data === null){

alert("please login")
}
}

async function posterd(id){
      const raw_data = await localStorage.getItem("data")
  const data = JSON.parse(raw_data)

  

 if(data != null){

     const multi = await axios.get(Line+"/users")
        
       const auth = multi.data.filter((item)=> item.email == data.email_reader )

       var _id = auth[0]._id
        console.log(auth)
       

 console.log(Line+"/favorite_leagues_remove")
 const stringer = JSON.stringify(id)
  await fetch(Line+"/favorite_leagues_remove",
   {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body : new URLSearchParams({userId : _id, pinned : stringer  })
})

window.location.reload();
}
else if(data === null){

alert("please login")
}
}

    console.log(data)

     const liner = await localStorage.getItem("data")

       const parser =  await JSON.parse(liner)
         console.log(parser)




        const multi = await axios.get(Line+"/users")

        if(parser != null){

         const auth = multi.data.filter((item)=> item.email == parser.email_reader )


    var status 
                      const followed = <p onClick = {()=>{ status = notfollowed; posterd(item); }}>following</p>
                      const notfollowed = <p className = "text-dark" onClick = {()=>{poster(item); status = followed}}>follow</p> 



                      const checker = auth[0].favorite_league.filter((it)=> it.league_id ===  item.league_id)
                   
                      if(checker.length > 0){
                        status = <p onClick = {()=>{ status = notfollowed; posterd(item);  }} >following</p>
                           console.log(checker)
                      }

                      else{

                        status = <p className = "text-dark" onClick = {()=>{poster(item); status = followed; }}>follow</p> 
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

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.league_logo} ></img></div>
                        <div><div><h2>{data.league_name}</h2><h6 className = "text-warning" >{data.country_name}</h6></div>
                            
                        </div>
                     
                        </div>
                  
       


      
     
   
     
 
                        <div>

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Fixtures" />
          <Tab label="Table" />
          <Tab label="Teams" />
          <Tab label="Top Scorer" />
        </Tabs>
        </ThemeProvider>
        </div>


      
     
   
     
 </div>




   <div id = "love" style = {{background : "#EEEEEE"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        
         
        <Fixtures/>

        </Typography>

        <Typography component="div" role="tabpanel" hidden={value !== 1}>
            <Table/>
                    </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
          <Teams/>
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
           <Top_Scorer/>
        </Typography>
       

      </SwipeableViews>
    </div>




        </div>        )


   }
}
   fetcher()

}, [value])
    return(
        <body style = {{background : "#EEEEEE"}}>
            
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
yesterday_setup.setDate(d.getDate()-15)
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
        const league = sessionStorage.getItem("selected_league")
        const datam = JSON.parse(league)
        const league_id = datam.league_id
        console.log(datam)
        console.log(league_id)
           const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_events&withPlayerStats=1&from="+today_date+"&to="+month+"&league_id="+league_id+"&APIkey="+api)
            const main_data = raw_data.data
           const filterer = main_data.filter((item)=> item.league_id === datam.league_id)

            const data = filterer
            console.log(data)
        
            if (data.length  < 1){
                setAll(<h6 className = "text-center text-secondary">Cannot determing Fixtures at this moment</h6>)
            }

            else{

var sorted = sortByKey(data, 'key');
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

                    
                      
}

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


function Table(){

    const [all, setAll] = useState()
    const navigate = useNavigate()

        useEffect(()=>{
            try{
            async function dom(){


             const league = sessionStorage.getItem("selected_league")
             const datam = JSON.parse(league)
                
                const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_standings&league_id="+datam.league_id+"&APIkey="+api)

                const data =  raw_data.data

                console.log(data)

                       
try{
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

                             

                                                    });
                                               


var gem = groupedArrays.map((arr, i) => {
                                    
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
                                                            
                                                                        
                                                                 
                    
                                                      
                                    return(

                                                <tr onClick = {()=>{const home = JSON.stringify(item.team_id); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{width : "100%", background : "inherit", height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
                                                        <td style = {{width : "7%", background : "inherit"}}>{item.overall_league_position}</td>
                                                        <td style = {{width : "30%", background : "inherit"}}>{item.team_name}</td>
                                                        <td style = {{width : "7%", background : "inherit",}}>{item.overall_league_payed}</td>
                                                        <td style = {{width : "7%", background : "inherit",}}>{item.overall_league_W}</td>
                                                        <td style = {{width : "7%", background : "inherit",}}>{item.overall_league_D}</td>
                                                        <td style = {{width : "7%", background : "inherit",}}>{item.overall_league_L}</td>
                                                        <td style = {{width : "7%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
                                                        <td style = {{width : "7%", background : "inherit",}}>{item.overall_league_PTS}</td>
                                                </tr>
                                        )
                                        
                        


                                                            
                                        })

                                        }
                                                </tbody>

                                        </table>
                                        </>
                                        
                                        )

                                    
          
            })

             }
                                                catch(e){
                                                    console.log(e)
                                                }

           setAll(gem)

        }
         dom()


     }

     catch(e){
                console.log("There was an Error Fetching Data")
                setAll(<h6 className = "text-secondary text-dark">There was an Error fetching Data</h6>)
        }
        }, [])

    return(

                <>{all}</>
    )
}





function Teams(){

    const [all, setAll] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
            async function dom(){

                    try{
                            console.log("more")
                            const league = sessionStorage.getItem("selected_league")
                            const datam = JSON.parse(league)
                            const league_id = datam.league_id


                            const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_teams&league_id="+league_id+"&APIkey="+api)
                            const data = raw_data.data
                            console.log(data)

                             setAll(

                            data.map((item)=>{
                                    return(
                                             <div onClick = {()=>{const home = JSON.stringify(item.team_key); sessionStorage.setItem("team", home);  navigate("/team")}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                  <div style = {{width : "10%", height : "100%"}}><img src = {item.team_badge} style = {{width : "25px", height : "20px", borderRadius : "50%",}}></img></div>
                                  <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.team_name}</h6> </div>
                                </div>
                                    )

                            })
                           
                               
                            )
                            
                    }

                    catch(e){

                        console.log(e)
                    }


            }
            dom()
    }, [])

    return(
        <>

        <div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px", background : "white"}}>
        {all}
        </div>
        </>
    )
}


function Top_Scorer(){
    const navigate = useNavigate()
    const [all, setAll] = useState()

    useEffect(()=>{

        async function dom (){

            try{

                            const league = sessionStorage.getItem("selected_league")
                            const datam = JSON.parse(league)
                            const league_id = datam.league_id
                            const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_topscorers&league_id="+league_id+"&APIkey="+api)
                            const data = raw_data.data
                            console.log(data, "this is the data needed")


                            setAll(
                                data.map((item)=>{

                                     return(
                                            <div onClick = {()=>{const home = JSON.stringify(item.player_key); sessionStorage.setItem("player", home);  navigate("/player")}} style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px", marginTop : "3%", background : "white"}}>
                                                    <div style = {{display : "flex", width : "100%",  height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                                    <h6>{item.player_name}</h6>
                                                    <h6>Goals : {item.goals}</h6>
                                                    </div>

                                                    <div style = {{display : "flex", width : "100%",  height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                                        <p className = "text-secondary">assists : {item.assists}</p>
                                                        <p className = "text-secondary">penalties : {item.penalty_goals}</p>
                                                    </div>

                                                    <div style = {{width : "100%", textAlign : "center"}}>{item.team_name}</div>
                                            </div>
                                     )
                                })
                            )
                    
            }
            catch(e){
                console.log(e)
            }

        }

        dom()

    }, [])

    return(
            <>{all}</>
    )
}