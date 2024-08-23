import React, {useState, useEffect} from "react"
import "./nav.css"
import All_Matches from "./all_matches"
import Tomorrow from "./tomorrow"
import Yesterday from "./yesterday"
import Live from "./live"
import api from "./details.js"
import League_Map from "./league_map.jsx"
import {Link, useNavigate} from "react-router-dom"
import Favorites from "./favorites"
import axios from "axios"
import Calendar from "./calendar"
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Line from "../../line.js"
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
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  height : window.innerHeight - 100,
  transform: 'translate(-50%, -50%)',
  width : "100%",
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
};


function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tack, setTack] = React.useState()
  const [tack1, setTack1] = React.useState()
  const [tack2, setTack2] = React.useState()
  const navigate = useNavigate()
   const [opend, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClosed = () => setOpen(false);
  const [alpha, setAlpha] = useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


useEffect(()=>{




		async function reload(){
				const fetcher = await sessionStorage.getItem("league_data")
					const parser = await JSON.parse(fetcher)


					const matched = await parser.filter((element)=> element.league_name.match(alpha))


					/*
								
										const first = axios.get(Line+"/players_data")

										const player_data = first.data


										const second = axios.get(Line+"/teams_data")
										const teams_data = second.data



					*/



					setTack(
									matched.map((item)=>{
													return(
																	<div onClick = {()=>{navigate("leauges_mall");const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
              <div style = {{width : "10%", height : "100%"}}><img src = {item.league_logo} style = {{width : "25px", height : "20px", borderRadius : "50%",}}></img></div>
              <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.league_name}</h6> </div>
            </div>
														)
									}
						))

					

		}

		reload()

},[alpha])


  return (
    <div>





 <div>
      
      <Modal
        open={opend}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        <ArrowBackIcon onClick={()=> navigate("/")}/>

           <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          sx = {{width : "90%"}}
          onChange = {(val)=>{
          				setAlpha(val.target.value)
          }}
        />
        <div style = {{height : window.innerHeight-200, overflowX : "hidden", overflowY : "auto"}}>{tack}</div>
      

        </Box>
      </Modal>
    </div>







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
        <MenuItem onClick={handleOpen}>Search</MenuItem>
        <MenuItem onClick={()=>{handleClose(); navigate("/leagues")}}>Leagues</MenuItem>
        <MenuItem onClick={()=>{handleClose(); navigate("/news")}}>News</MenuItem>
        <MenuItem onClick={()=>{handleClose(); navigate("/register")}}>Login/Signup</MenuItem>
        <MenuItem onClick={()=>{handleClose(); navigate("/search")}}>Documentation</MenuItem>
       
      </Menu>
    </div>
  );
}


function LabelBottomNavigation() {
  const [value, setValue] = React.useState('matches');
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
    </BottomNavigation>
  );
}




  
const Drawer = ({ isOpen, closeDrawer }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <h2>Drawer Content</h2>
        <p>This is the content inside the drawer.</p>
      </div>
      <button className="close-button" onClick={closeDrawer}>Close Drawer</button>
    </div>
  );
};


function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};





function Custom_input({value, onClick}){

    
  return(
    <>
  
 <button className = "btn btn-light" onClick ={onClick}><CalendarMonthIcon/></button>
    
    </>
  )
}

function Custom_input1({value, onClick}){

    
  return(
    <>
  

   	<button className = "btn btn-light" onClick ={onClick}><CalendarMonthIcon/></button>
    </>
  )
}
export default function Nav(){


  const [value, setValue] = React.useState(6);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };


  


	const [selectedDate, setDate] = useState(null);
	const [list, setListd] = useState()
	const navigate = useNavigate()
		const [listm, setListm] = useState()
	var dated = []
	var mated = []

	for(let i=0; i<5; i++){
		const d = new Date()
		
		d.setDate(d.getDate()+i)
		const yesterday = d.toISOString().split("T")[0]

		dated.push(yesterday)
}

	for(let i=0; i<5; i++){
		const d = new Date()
		
		d.setDate(d.getDate()-i)
		const yesterday = d.toISOString().split("T")[0]

		mated.push(yesterday)



	}


const [side_news, setSidenews] = useState()
	useEffect(()=>{



		axios.get(Line+"/sportsup_news")
		.then((res)=>{

			setSidenews(
					res.data.map((make)=>{

						return(
							<Link to = {"/news/"+make._id}>
									          <img src = {make.cover_photo} style = {{ width : "30%", height : 70, borderRadius : "0%"}}></img>
                      <h6 style = {{width : "70%"}}>{make.title}</h6>
						</Link>
							)
					})
					)
		})
		
		const g = sessionStorage.getItem("date")



		if (selectedDate === null){
			setStatement(<All_Matches/>)
		}
		else if(selectedDate != g){
			setStatement("")

			if(true){
					const date = new Date(selectedDate)

	    const select = date.toISOString().split('T')[0]
	   

		setStatement(<Calendar date = {select}/>
			
			)
		sessionStorage.setItem("date",date)
			}
		}
		else{
	
	}
			
	}, [selectedDate])

	const [leagues, setLeagues] = useState()
	const [tab_state, setTabstate] = useState(3)
	const [statement, setStatement] = useState(<All_Matches/>)
	const [toggle, setToggle] = useState("")
	const [situp, setSitup] = useState(1)


	
			

		//REMOVING TOGGLE BAR
	function toggle_remove(){
		setToggle(
			""
			)

	}


//////////////
	///////////////
		////////////////LEAGUE SETUP FOR LARGER DEVICES/////////////

	useEffect(()=>{

		async function job(){

			     const liner = await localStorage.getItem("data")

       const parserd =  await JSON.parse(liner)

        if(parserd === null){

        		navigate("/register")

        }
        
			}
			job()
				setListd(
			dated.map((item)=>{
				return(
					  <LinkTab label={item}  onClick = {()=> setStatement(<Calendar date = {item}/>)} />
					)
			})
		)

				mated.reverse()
			setListm(
			mated.map((item)=>{
				return(
					  <LinkTab label = {item}  onClick = {()=>setStatement(<Calendar date = {item}/>)} />
					)
			})
		)
			async function dom (){

				try{
			const data = await axios.get("https://apiv3.apifootball.com/?action=get_leagues&APIkey="+api_key)
			
				const la = data.data
				const parser = JSON.stringify(la)
				sessionStorage.setItem("league_data", parser)
				setLeagues(
				la.map((item)=>{
					return(
 							 <button  onClick = {()=>{navigate("leauges_mall");const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} className="btn  btn-outline-dark "  style={{width : '100%'}}>{item.league_name}</button>
						)
			
			
		})
				)
			}

			catch(e){
				console.log(e)
			}
			}

		dom()
	},[])
	const api_key = api
	/*
async function fetcher(){


	axios.get("")
	try{

			//const api = await fetch("https://apiv3.apifootball.com/?action=get_leagues&APIkey="+api_key)
			//const json = await api.json()

			

	}
	catch(err){
		console.log(err)
	}

}
*/
//fetcher()

/////////////////////////////
////////////////
///////////
	//SETTING TOGGLE BAR

	function toggle_add(id){
		if (id == 1){
			setSitup(0)
		setToggle(
				<div id = "toggle_bar" style = {{ height : window.innerHeight, }} className = "text-dark">
						
						<h3>More Contents</h3>
						<hr></hr>
						<Link className = "text-dark" to = {"/minor"} type="submit" id = "submit_linked" >
							<h3>⚽</h3><h5>Leagues</h5>
						</Link>

<br></br>

						<Link className = "text-dark" to = {"/news"} type="submit" id = "submit_linked" >
						<img id = "icon" src = {require("../images/today.png")}></img><h5>News</h5>
						</Link>
<br></br>
						
						<Link className = "text-dark" to = {"/search"} type="submit" id = "submit_linked" >
						<img id = "icon" src = {require("../images/search.png")}></img><h5>Search</h5>
						</Link>

					
<br></br>
						<Link to = {"/login"} className = "text-dark" type="submit" id = "submit_linked" >
						<img id = "icon" src = {require("../images/login.jpg")}></img><h5>Login/SignUp</h5>
						</Link>

<br></br>
						<Link className = "text-dark" to = {"/login"} type="submit" id = "submit_linked" >
								<h5>About | Contact | Advertise</h5>
						</Link>

						
				</div>

			)}

		else{
			setToggle("")
			setSitup(1)
		}
	}


	function tab_change(id){
		setTabstate(id)


		if (id === 2){
			setStatement(<All_Matches/>)
		}

		else if (id === 3){
			setStatement(<Tomorrow/>)
		}
		else if (id === 5){
			setStatement(<Live/>)
		}
		else if (id === 1){
			setStatement(<Yesterday/>)
		}
		else if (id === 1){
			setStatement(<Favorites/>)
		}
		else if (id === 6){
			setStatement(<Calendar/>)
		}

	}

	return(
			<body style = {{background : "#EEEEEE"}}>
			{/* Header for device over 750px in width */}
			<header id = "larger_screens">
				<nav className = "top_nav fixed-top">

					<div className = "brand">
						<img className = "brand_image" src = {require("../images/sportsup.png")}></img>
						
					</div>

					<div className = "icons">
						<Datepicker selected={selectedDate} onChange = {date=> setDate(date)} customInput = {<Custom_input/>}/>
						<Link to = {"/news"} id = "nav-link" className = "btn btn-secondary"><img id = "icon" src = {require("../images/today.png")}></img><h6>News</h6></Link>

						
						
					
						<Link to = {"/login"} id = "nav-link" className = "btn btn-secondary"><img id = "icon" src = {require("../images/login.jpg")}></img><h6>Login or SignUp</h6></Link>
					</div>

				</nav>
			
				<div className = "mid_tab"style = {{marginTop : "60px"}}>
				{listm}
						<Link to={"/faves"} onClick = {()=> tab_change(1)} className = "text-dark" style = {{textDecoration : "none", display : "flex"}}><h6>💝</h6><h6>Favorites</h6></Link>
						<button onClick = {()=> tab_change(2)} className = {tab_state === 2 ? "active" : "inactive"}><img id = "icon" src = {require("../images/yesterday.png")}></img><h6>Yesterday</h6></button>
						<button onClick = {()=> tab_change(3)} className = {tab_state === 3 ? "active" : "inactive"}><img id = "icon" src = {require("../images/today.png")}></img><h6>All Matches</h6></button>
						<button onClick = {()=> tab_change(4)} className = {tab_state === 4 ? "active" : "inactive"}><img id = "icon" src = {require("../images/tomorrow.png")}></img><h6>Tomorrow</h6></button>
						<button onClick = {()=> tab_change(5)} className = {tab_state === 5 ? "active" : "inactive"}><h6>🔴</h6><h6>Live Matches</h6></button>
						{list}
						
				</div>
		

			</header>

						{/* Header for device less than 750px in width */}
			<header id = "smaller_screen">
				<nav className = " fixed-top" style = {{marginBottom : "0.5%"}}>
				
					<div className="top_nav">
					<div className = "brand">
						<img className = "brand_image" src = {require("../images/sportsup.png")}></img>
					
					</div>

			<div className = "icons">
					
						
						<button className = "btn btn-warning" onClick = {()=>{setStatement(<Live/>)}}><AccessTimeFilledIcon/></button>
						
					<Datepicker selected={selectedDate} onChange = {date=> setDate(date)} customInput = {<Custom_input/>}/>
						<PositionedMenu/>
			</div>

			    </div>
  
<Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"
      	sx = {{background : "white", }}

      	className = "mid_tab"
      	id = "idl"
      >
      
       {listm}
        <LinkTab label="Yesterday" onClick = {()=>{tab_change(1)}} />
          <LinkTab label="Today" onClick = {()=>{tab_change(2)}}/>
            <LinkTab label="Tomorrow" onClick = {()=>{tab_change(3)}}/>
            {list}
     

      </Tabs>


				</nav>
				<br></br>
					<br></br>
				<br></br>
				<br></br>
				<br></br>
				<div className = "state" >
				<Drawer/>
   
			{statement}
					
</div>
		<LabelBottomNavigation/>

			</header>	
		

			{/*----------------------------------------------------------------- */}



<div className = "larger_device">
	<div id  = "row">

			<div id = "league_list">
				<div id = "large_league_list">
					<h2>LEAGUES</h2>
					<hr></hr>
					<div style = {{height : window.innerHeight-100, overflowY : "auto", overflowX : "hidden"}}>
						{leagues}
					</div>
				</div>

			</div>

			<div className = "live_score">{statement}</div>
			
			<div className = "ads_news">
				
				<div style = {{height : window.innerHeight-100, overflowY : "auto", overflowX : "hidden"}}>


				{side_news}
					

				</div>

			</div>


	</div>		
</div>

{toggle}
 
           

			</body>
		)
}