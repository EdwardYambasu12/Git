import React, {useState, useEffect} from "react"
import "./nav.css"
import All_Matches from "./all_matches"
import Tomorrow from "./tomorrow"
import Yesterday from "./yesterday"
import Live from "./live"
import api from "./details.js"
import {Link, useNavigate} from "react-router-dom"

import axios from "axios"
import Calendar from "./calendar"
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

import useWebSocket from "./socket.js"
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import FeedIcon from '@mui/icons-material/Feed';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Line from "../../line.js"
import StadiumIcon from '@mui/icons-material/Stadium';

function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Favorites');
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation id = "shadowd" sx={{boxShadow : ` 0 10px 10px rgba(1, 23, 44, 0.1)`, position: 'fixed', bottom: "0%", width : "100%", }} value={value} onChange={handleChange}>
     <BottomNavigationAction
        label="Matches"
        value="matches"
        onClick={()=>{navigate("/")}}
        icon={<SportsIcon />}
      />
      <BottomNavigationAction
        label="News"
        value="News"
         onClick={()=>{navigate("/news")}}
        icon={<FeedIcon />}
      />
      <BottomNavigationAction
        label="Leagues"
        value="Leagues"
         onClick={()=>{navigate("/leagues")}}
        icon={<EmojiEventsIcon />}
      />
      <BottomNavigationAction onClick={()=>{navigate("/faves")}} label="Favorites" value="Favorites" icon={<BookmarkAddIcon />} />
    </BottomNavigation>
  );
}


function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Search</MenuItem>
        <MenuItem onClick={handleClose}>Leagues</MenuItem>
        <MenuItem onClick={handleClose}>News</MenuItem>
        <MenuItem onClick={handleClose}>Login/Signup</MenuItem>
        <MenuItem onClick={handleClose}>Documentation</MenuItem>
       
      </Menu>
    </div>
  );
}




const Following = ()=>{

  const [sender, setSender] = useState()

  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem("follow_match"))

  useEffect(()=>{
              if(data != null){

                if(data.length < 1){
                  setSender(<h6 className = "text-center">Non of your favorites is playing today</h6>)
                }
               else{   setSender(
                      <div>
                             {data.map((match, matchIndex) => {
                
            const dateTimeString = match.status.utcTime;
            const dateObject = new Date(dateTimeString);
            const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const isPinned = ""

            let status;
            let live;

            if (!match.status.started) {
              status = timeString;
            
            } else if (match.status.started && !match.status.finished) {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>;
              live = <h6 style={{ width: "20px", fontSize: "0.7em", display: "flex", justifyContent: "center", height: "20px", alignItems: "center", color: "white", borderRadius: "50%", background: "red" }}>{match.status.liveTime.short}</h6>;
            } else {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>;
              live = <h6 style={{ width: "20px", height: "20px", textAlign: "center", alignItems: "center", color: "black", borderRadius: "50%", background: "#EEEEEE" }}>FT</h6>;
            }

            return (


              <div key={matchIndex} style={{ display: "flex", marginTop: "1.5%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50px", alignItems: "center" }}>
                  <div style={{ width: "5%" }}>{live}</div>
                  <Link  to={`/result/${match.id}`}  state = {match} style={{ display: "flex", textDecoration: "none", justifyContent: "space-between", width: "90%" }}>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                      <h6 className="text-dark" style={{ fontSize: "0.7em" }}>{match.home.name}</h6>
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_xsmall.png`} loading="lazy" alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                     {match.status.numberOfHomeRedCards > 0 ? <div style = {{fontSize : "0.5em", transform : `translateY(-100%)`}}>🟥</div> : ""}
                    </div>
                    <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "black" }}>
                      <strong>{status}</strong>
                    </div>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                       {match.status.numberOfAwayRedCards > 0 ? <div style = {{fontSize : "0.5em", transform : `translateY(-100%)`}}>🟥</div> : ""}
                     
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_xsmall.png`} loading="lazy" alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
                      <h6 className="text-dark" style={{ fontSize: "0.7em" }}>{match.away.name}</h6>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
                      </div>
                    )
                }
              }
  }, [])


  return(

        <>
              {sender}
        </>
    )
}






export default function Favorites(){

const [status, setStatus] = useState()


const navigate = useNavigate()
const [statement, setStatement] = useState()

const [players, setPlayers] = useState(<Skeleton variant="rectangular" style = {{width : "100%", height : "150px",  borderRadius : "15%"}} />)
const [team, setTeam] = useState(<Skeleton variant="rectangular" style = {{width : "100%", height : "150px", borderRadius : "15%"}}/>)
      const [follow, setFollow] = useState();

const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


const [user_data, setuserData] = useState()



async function poster(id){
      const raw_data = await localStorage.getItem("data")
  const data = JSON.parse(raw_data)



  var _id = data._id


  await fetch(Link+"/pinned_matches",
   {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body : new URLSearchParams({userId : _id, pinned : id.match_id  })
})
  .catch(err=>{console.log((err))})
}

useEffect(()=>{

      async function dom(){



        const liner = await localStorage.getItem("data")

       const parser =  await JSON.parse(liner)
        console.log(parser)




        const multi = await axios.get(Line+"/users")

        if (parser != null){
        
       const auth = multi.data.filter((item)=> item.email == parser.email )


       if (auth.length > 0){

        setTeam(
              auth[0].favorite_team.map((it)=>{

                const item = JSON.parse(it)
                  return(
                         <div onClick = {()=>{const home = JSON.stringify(item.team_key); sessionStorage.setItem("team", home);  navigate("/team/"+item.id)}} style = {{background : item.color, height : "160px", marginTop : "5%", borderRadius : "10px"}}>
                        <br></br>
                        <div className = "container" >

                          <img style = {{height : "40px", width : "40px", borderRadius : "50%"}} src = {"https://images.fotmob.com/image_resources/logo/teamlogo/"+item.id+"_xsmall.png"}></img>
                          <br></br> 
                          <br></br>
                          <h4 className = "text-light" style = {{whiteSpace: "nowrap", overflow : "hidden", color : "white", textOverflow: "ellipsis"}}>{item.name}</h4>
                          <br></br>
                        </div>
                        </div>
                    )
              })

              )

         
    
    

          setPlayers(
              auth[0].favorite_player.map((it)=>{

                const item = JSON.parse(it)
                return(
                    <div onClick = {()=>{const home = JSON.stringify(item.player_key); sessionStorage.setItem("player", home);  navigate("/player/"+item.id)}} style = {{background : "white", height : "160px", marginTop : "5%", borderRadius : "10px"}}>
                        <br></br>
                        <div className = "container" >

                          <img style = {{height : "40px", width : "40px", borderRadius : "50%"}} src={`https://images.fotmob.com/image_resources/playerimages/${item.id}.png`} ></img>
                          <h4 style = {{whiteSpace: "nowrap", overflow : "hidden", textOverflow: "ellipsis"}} className = "text-dark">{item.name}</h4>
                      
                          <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}><p>⚽:{item.goals} </p> <p>🎯:{item.assist} </p> <p>🚩:{item.apps} </p></div>

                          <h6 className = "text-success">{item.player_type}</h6>
                          </div>
                        </div>
                  )
              })

              )
              



        if(auth[0].favorite_team.length <1 && auth[0].favorite_player.length<1){
          setStatement(<h6 className = "text-center">Use search menu to search and follow your favorites</h6>)
        }
       }


       else{
            setStatement(
                 <h6 className = "text-center"> Signin or Login to add Favorites</h6>
              )
       }





}

}
dom()

}, [])



	return(
			<body style = {{background : "#EEEEEE", height : window.innerHeight}}>
      <nav style = {{background : "white"}}>
      <h3>Following</h3>
 <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Matches" >

        </Tab>
        <Tab value="two" label="Teams" />
        <Tab value="three" label="players" />
      </Tabs>
    </Box>
    </nav>
				<br></br>
					<br></br>
				
				<br></br>
      <Box sx={{ padding: 1 }}>
        {value === "one" && <Typography><Following/></Typography>}
        {value === "two" && <Typography>{team}</Typography>}
        {value === "three" && <Typography>{players}</Typography>}
      </Box>
        <div>{statement}</div>
				<div className = "state" style = {{width : "100%", justifyContent : "space-between", display : "flex"}}>
				
          <div style = {{width : "45%"}}></div>

          <div style = {{width : "45%"}}></div>
					
</div>

		<LabelBottomNavigation/>

		


			</body>
		)

}