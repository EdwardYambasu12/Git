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

    const player_id = sessionStorage.getItem("player")
    const id = JSON.stringify(player_id)
    
    console.log(id, "team id")
 

    const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_players&player_id="+player_id+"&APIkey="+api)
    const data = raw_data.data[0]
    const parser = JSON.stringify(data)



    const item = data

   async function poster(id){
      const raw_data = await localStorage.getItem("data")
  const data = JSON.parse(raw_data)

 

     const multi = await axios.get(Line+"/users")

     if (data != null){
        
       const auth = multi.data.filter((item)=> item.email == data.email_reader )

       var _id = auth[0]._id
        console.log(auth)

 const stringer = JSON.stringify(id)
  await fetch(Line+"/favorite_player",
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
 
 
 const stringer = JSON.stringify(id)
  await fetch(Line+"/favorite_player_remove",
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

       const parserd =  await JSON.parse(liner)
        console.log(parserd)




        const multi = await axios.get(Line+"/users")

        if(parser != null){

         const auth = multi.data.filter((item)=> item.email == parserd.email_reader )


  var status 
                      const followed = <p onClick = {()=>{ status = notfollowed; posterd(item); }}>following</p>
                      const notfollowed = <p className = "text-dark" onClick = {()=>{poster(item); status = followed}}>follow</p> 



                      const checker = auth[0].favorite_player.filter((it)=> it.player_key ===  item.player_key)
                   
                      if(checker.length > 0){
                        status = <p onClick = {()=>{ status = notfollowed; posterd(item);  }} >following</p>
                           console.log(checker)
                      }

                      else{

                        status = <p className = "text-dark" onClick = {()=>{poster(item); status = followed;}}>follow</p> 
                      }


    sessionStorage.setItem("player_state", parser)

    console.log(data)

 

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

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h2>{data.player_name}</h2><h6 className = "text-warning" onClick = {()=>{const home = JSON.stringify(data.team_key); sessionStorage.setItem("team", home);  navigate("/team")}}>{data.team_name}</h6> <p style = {{color: "midnightblue"}}>#{data.player_number}</p></div>
                            
                        </div>
                     
                        </div>
                  
       


      
     
   
     
 
                        <div>

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Overview" />
       
        
        </Tabs>
        </ThemeProvider>
        </div>


      
     
   
     
 </div>




   <div id = "love" style = {{ background : "#EEEEEE"}}>
   <br></br>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        		
			<Overview/>
         



        

        </Typography>

      
      
      </SwipeableViews>
    </div>




        </div>        )


   }
 }
   fetcher()

}, [value, playerRating, injuryList])
    return(
        <body style = {{background : "#EEEEEE", height : window.innerHeight}}>
            
            {ret}
        </body>
    )
    
}


function Overview(){

	const [ret, setRet] = useState()
	const [stats, setStats] = useState()



		useEffect(()=>{

			async function dom(){
					const mint = await sessionStorage.getItem("player_state")
					const parser = JSON.parse(mint)


					const data = parser

					setRet(
							<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px",  background: "white"}}>
									<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
										<p>Date of Birth : {data.player_birthdate}</p>
										<p>Age : {data.player_age}</p>
										<p>Country : {data.player_country}</p>
									</div>
									<br></br>

										<div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
										<p>Player Position : {data.player_type}</p>
										
										<p style = {{background : "midnightblue", color : "white", borderRadius : "10px"}}>Player Rating : {data.player_rating}</p>
									</div>
									<div style = {{display : "flex", justifyContent : "center", width : "100%"}}>
										<p className = "text-danger">Injury Status : {data.player_injured}</p>
										
										</div>
								</div>
						)

					setStats(
						<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px",  background: "white"}}>
									<h6 className = "text-center">Player Seasonal Stats</h6>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Minutes Played</h6>
										<h6>{data.player_minutes} mins</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Goals Scored</h6>
										<h6>{data.player_goals}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Assists</h6>
										<h6>{data.player_assists}</h6>
									</div>


									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Yellow Cards</h6>
										<h6 className = "text-warning">{data.player_yellow_cards}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Red Cards</h6>
										<h6 className = "text-danger">{data.player_red_cards}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Matches Played</h6>
										<h6>{data.player_match_played}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Player Dispossed</h6>
										<h6>{data.player_dispossesed}</h6>
									</div>

										<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Total Attempted Dribble </h6>
										<h6>{data.player_dribble_attempts}</h6>
									</div>


									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Successful Dribbles</h6>
										<h6>{data.player_dribble_succ}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Player Saves</h6>
										<h6>{data.player_saves}</h6>
									</div>

								

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Player Goal conceded</h6>
										<h6>{data.player_goals_conceded}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Player Total Duels</h6>
										<h6>{data.player_duels_total}</h6>
									</div>

									<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "2%"}}>
										<h6>Player Duels Won</h6>
										<h6>{data.player_duels_won}</h6>
									</div>



						</div>
						)


			}

			dom()

		}, [])

	return(
			<>{ret}<br></br>{stats}</>
		)
}


