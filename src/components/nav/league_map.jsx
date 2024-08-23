import React, {useState, useEffect} from "react"
import "./nav.css"
import All_Matches from "./all_matches"
import Tomorrow from "./tomorrow"
import Yesterday from "./yesterday"
import Live from "./live"
import api from "./details.js"
import {Link, useNavigate} from "react-router-dom"
import Favorites from "./favorites"
import axios from "axios"
import Calendar from "./calendar"
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


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

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Line from "../../line.js"
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


function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Leagues');
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{  position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>
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
    </BottomNavigation>  );
}











export default function League_Map(){

const [status, setStatus] = useState()

const navigate = useNavigate()
const [value, setValue] = React.useState(6);
const [statement, setStatement] = useState()
const [all, setAll] = useState(<Skeleton variant="rectangular" width={210} height={60} />)
const [top, setTop] = useState()

const [follow, setFollow] = useState();



const [user_data, setuserData] = useState()


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
else if(data == null){

alert("please login")
}
}

useEffect(()=>{

    async function tolerate(){
      const raw_data = await sessionStorage.getItem("league_data")
      const data = await JSON.parse(raw_data)



    


       
     


if (data != null){
    let important  = []

    

        const liner = await localStorage.getItem("data")
    const parser =  await JSON.parse(liner)
        const multi = await axios.get(Line+"/users")

       
        
       const auth = multi.data.filter((item)=> item.email == parser.email_reader )

       console.log(auth)

       

        if (auth.length > 0){
                  auth[0].favorite_league.forEach((element)=>{
                    const polay = data.find((id)=>id.league_id ===  element.league_id)
                    important.push(polay)

                  })



                  console.log(important)
                  setTop(

      important.map((item)=>{
            
        return(
            <div onClick = {()=>{navigate("leauges_mall");const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
              <div style = {{width : "10%", height : "100%"}}><img src = {item.league_logo} style = {{width : "25px", height : "20px", borderRadius : "50%",}}></img></div>
              <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.league_name}</h6> </div>
            </div>
      )



              })


      )
                 }


    else{
      alert("please login or Signup")
      setTop(
            <>Login Or Signup to follow leagues</>
        )
    }

console.log(auth)
    

setAll(
      data.map((item)=>{
                        var status = <p className = "text-dark" onClick = {()=>{poster(item); status = followed; }}>follow</p> 
                      const followed = <p onClick = {()=>{ status = notfollowed; posterd(item); }}>following</p>
                      const notfollowed = <p className = "text-dark" onClick = {()=>{poster(item); status = followed}}>follow</p> 

                        if(auth.length > 0){

                      const checker = auth[0].favorite_league.filter((it)=> it.league_id ===  item.league_id)
                   
                      if(checker.length > 0){
                        status = <p onClick = {()=>{ status = notfollowed; posterd(item);  }} >following</p>
                           console.log(checker)
                      }

                      else{

                        status = <p className = "text-dark" onClick = {()=>{poster(item); status = followed; }}>follow</p> 
                      }

                    }
        return(


          <div  style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}>
            <div onClick = {()=>{navigate("leauges_mall");const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
              <div style = {{width : "10%", height : "100%"}}><img src = {item.league_logo} style = {{width : "25px", height : "20px", borderRadius : "50%",}}></img></div>
              <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.league_name}</h6> 
            </div>
</div>
            <button className = "btn" style = {{background : "#EEEEEE", height : "30px", alignItems : "center"}}><strong>{status}</strong></button>

            </div>
          )
      })
      )

      console.log(data)

    }
  
}
    tolerate()

}, [])
  



	return(
			<body style = {{background : "#EEEEEE", height : window.innerHeight}}>
	
				<nav className = " fixed-top" style = {{marginBottom : "0.5%"}}>
				
					<div className="top_nav">
					<div className = "brand">
						<img className = "brand_image" src = {require("../images/sportsup.png")}></img>
						
					</div>

			<div className = "icons">
					
					
						
			</div>

			    </div>
  



				</nav>
				<br></br>
					<br></br>
				<br></br>
		
				<div className = "state" >
        <div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px", background : "white"}}>
            <strong style = {{textDecoration : "bold"}}>Following</strong>
            
            {top}

          </div>
				

   				
<br></br>
   						<div style = {{width : "98%", marginLeft : "1%", marginRight : "1%", borderRadius : "10px", background : "white"}}>
   					<strong style = {{textDecoration : "bold"}}>All Competitions</strong>
   					
   					{all}

   				</div>
			{statement}
					
</div>
		<LabelBottomNavigation/>

		


			</body>
		)

}