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

import {generateToken} from "../../Notification/firebase.js"
import Line from "../../line.js"
import CookieConsentPopup from "../../pop.js"
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
import { Search } from "@mui/icons-material"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  bgcolor: 'background.paper',
borderRadius : "10px",
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

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
useEffect(()=>{




		async function reload(){
			try{
				const fetcher = await sessionStorage.getItem("league_data")
					const parser = await JSON.parse(fetcher)
					


			


					const searcher_raw = await axios.get(Line+"/search", {
						params : {
							term : alpha
						}
					})
					const searcher = searcher_raw.data
					console.log(searcher, "search_return")



					setTack(
									searcher[0].suggestions.map((item)=>{

										var stat 
                    

										if(item.type == "player"){
											var stat = <div onClick = {()=>{navigate("player/"+item.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
										              <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.name}</h6> <img src = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"} style = {{width : "30px", height : "30px"}}></img> </div>
										            </div>
										}

										else if(item.type == "team"){
											var stat = <div onClick = {()=>{navigate("team/"+item.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
										              <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.name}</h6> <img src = {"https://images.fotmob.com/image_resources/logo/teamlogo/"+item.id+"_xsmall.png"} style = {{width : "30px", height : "30px"}}></img> </div>
										            </div>
										}

										else if(item.type == "league"){
											var stat = <div onClick = {()=>{navigate("leauges/"+item.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
										              <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.name}</h6> <img src = {"https://images.fotmob.com/image_resources/logo/leaguelogo/"+item.id+".png"} style = {{width : "30px", height : "30px"}}></img> </div>
										            </div>
										}

													return(
																<div>{stat}</div>			
														)
									}
						)


									)
			}
catch(e){
	console.log(e)
}
					

		}

		reload()

},[alpha])
useEffect(() => {
  // Listen for the 'beforeinstallprompt' event
  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault(); // Prevent automatic prompt
    setInstallPrompt(event); // Save the event for later use
    setIsInstallable(true); // Enable the install button
  };

  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  // Cleanup event listener on unmount
  return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
}, []);
const [installPrompt, setInstallPrompt] = useState(null);
const [isInstallable, setIsInstallable] = useState(false);
// Function to trigger the installation prompt
const handleInstallClick = async () => {
  if (installPrompt) {
    installPrompt.prompt(); // Show the installation prompt
    const choiceResult = await installPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA installed');
    } else {
      console.log('PWA installation dismissed');
    }
    setInstallPrompt(null); // Clear the prompt after use
  }
};

const handleInstall = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA installed successfully!');
      } else {
        console.log('PWA installation dismissed.');
      }
      setDeferredPrompt(null);
      setShowInstallButton(false);
    });
  }
};
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

        <ArrowBackIcon onClick={()=> navigate(window.location.reload())}/>

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
      
        {isInstallable && (
        <button className="btn btn-warning" onClick={handleInstallClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Install App
        </button>
      )}

      <MenuItem onClick={()=>{navigate("/privacy-policy")}}>privacy-policy</MenuItem>
  
       
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

  const [cookie_jar, setCookie] = useState()

  console.log(localStorage.getItem("cookie"))

  useEffect(()=>{

    const term =   localStorage.getItem("cookie")
          if(term === "accepted"){
            setCookie("")
          }

          else if(term === "rejected"){
            setCookie("")
          }

          else if(term === null){
            setCookie(<CookieConsentPopup/>)
          }

  }, [cookie_jar])



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
			try{
				const fetcher = await sessionStorage.getItem("league_data")
					const parser = await JSON.parse(fetcher)
					


			


					const searcher_raw = await axios.get(Line+"/search", {
						params : {
							term : alpha
						}
					})
					const searcher = searcher_raw.data
					console.log(searcher, "search_return")



					setTack(
									searcher[0].suggestions.map((item)=>{

										var stat 

                    if(item.type == "player"){
                      var stat = <div onClick = {()=>{navigate("player/"+item.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                  <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.name}</h6> <img src = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"} style = {{width : "30px", height : "30px"}}></img> </div>
                                </div>
                    }

                    else if(item.type == "team"){
                      var stat = <div onClick = {()=>{navigate("team/"+item.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                  <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.name}</h6> <img src = {"https://images.fotmob.com/image_resources/logo/teamlogo/"+item.id+"_xsmall.png"} style = {{width : "30px", height : "30px"}}></img> </div>
                                </div>
                    }

                    else if(item.type == "league"){
                      var stat = <div onClick = {()=>{navigate("leauges/"+item.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} style = {{display : "flex", width : "100%", marginTop : "3%", height : "50px",  justifyContent : "space-between", alignItems : "center",}}>
                                  <div style = {{width : "90%", height : "100%", alignItems : "center", display : "flex", justifyContent : "space-between"}}><h6 >{item.name}</h6> <img src = {"https://images.fotmob.com/image_resources/logo/leaguelogo/"+item.id+".png"} style = {{width : "30px", height : "30px"}}></img> </div>
                                </div>
                    }


													return(
																<div>{stat}</div>			
														)
									}
						)


									)
			}
catch(e){
	console.log(e)
}
					

		}

		reload()

},[alpha])


 const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installed successfully!');
        } else {
          console.log('PWA installation dismissed.');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  function trapper(){
  setChoice()
}
const [choice, setChoice] = useState(
)


useEffect(()=>{
  setChoice(<div>{showInstallButton && (

       <div style = {{width : "100%", position : "fixed", bottom : "0%", justifyContent : "center", alignItems : "center", backgroundColor : "midnightblue"}}> 
       <h3 className = "text-light text-center">Sportsup App Available</h3>
       <hr/>
     
       <div style = {{width : "100%", justifyContent : "center", display : "flex"}}>

       <div style = {{justifyContent : "center", alignItems : "center", textAlign : "center"}}>
         <img style = {{width : "50px", height : "50px", textAlign : "center"}} src = "https://www.sportsupd.com/icon.jpg"/>
         <br/>
       <button className = "btn btn-warning" onClick={handleInstall}>DOWNLOAD SPORTSUP APP</button>
       <br/><br/>
        <button className = "btn btn-outline-light" onClick = {()=>{trapper()}}>Continue with the website</button>
        </div>
        </div>
        <br/>
        <br/>
       </div>
      )}</div>)
}, [deferredPrompt, showInstallButton])
    
  const [value, setValue] = React.useState(4);

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
					res.data.map((item)=>{
						 var url 
                              if(item.sourceStr === "FotMob" || item.sourceStr === "90min"){

                               const baseUrl = "https://www.fotmob.com";
                                const itemPageUrl = item.page.url; // Assuming item.page.url is a variable with the dynamic path

                                url = `${baseUrl}${itemPageUrl}`;
                                console.log(url)
                                  return(


                                  <Link onClick  = {()=>{

                                window.open(url, '_blank', 'noopener,noreferrer');
 
                                  }} state = {{l : url, m : 1}}  style = {{textDecoration : "none", color : "black", background : "white", borderRadius: "10px", marginTop : "5%"}}>
                                       <img src = {item.imageUrl} style = {{ width : "30%", height : 70, borderRadius : "0%"}}></img>
                    									  <h6 style = {{width : "70%"}}>{item.title}</h6>
                                  </Link>
                              )
                              }
                              else{
                                url = item.page.url
                            return(
                                  <Link onClick  = {()=>{

                                window.open(url, '_blank', 'noopener,noreferrer');
 
                                  }}  state = {{l : url, m : 0}}  style = {{textDecoration : "none", color : "black", background : "white", borderRadius: "10px", marginTop : "5%"}}>
                                       <img src = {item.imageUrl} style = {{ width : "30%", height : 70, borderRadius : "0%"}}></img>
                  									    <h6 style = {{width : "70%"}}>{item.title}</h6>
                                  </Link>
                              )
                          }

					
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
        if(parserd != null){

          
            const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);
    const { data: users } = await axios.get(`${Line}/users`);
    const user = users.find(user => user.email === done.email && user.password === done.password);
    console.log("requesting")
        if(user){

    const place = {
      id_: user._id,
      token: await generateToken(),
    };
}

else {

    const data = {

                     email: `user${Math.round(Math.random() * 10000000)}@sportsup.com`, // Generate a mock email
                     password: Math.random().toString(36).substring(2, 10), // Generate a random password
                     phone_string: await  generateToken(),
          }

          console.log(data)

          fetch(Line+"/register", {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body :new URLSearchParams(data)})

              const stringer = JSON.stringify(data)
             localStorage.setItem("data", stringer)

        

}
const token_read = sessionStorage.getItem("token_read")

if(user){
    const place = {
      id_: user._id,
      token: await generateToken(),
    };
if(token_read === null){
 await fetch(`${Line}/update_token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(place),
    });

 sessionStorage.setItem("token_read", "ok")
}
        }
      }

        if(parserd === null){

          

          const data = {

                     email: `user${Math.round(Math.random() * 10000000)}@sportsup.com`, // Generate a mock email
                     password: Math.random().toString(36).substring(2, 10), // Generate a random password
                     phone_string: await  generateToken(),
          }

          console.log(data)



        		 fetch(Line+"/register", {method : "POST", headers : {"content-type": "application/x-www-form-urlencoded"}, body :new URLSearchParams(data)})

              const stringer = JSON.stringify(data)
             localStorage.setItem("data", stringer)


        }
        
			}
			job()
				setListd(
			dated.slice(2,5).map((item)=>{
				return(
					  <LinkTab label={item}  onClick = {()=> setStatement(<Calendar date = {item}/>)} />
					)
			})
		)

				mated.reverse()
			setListm(
			mated.slice(0,3).map((item)=>{
				return(
					  <LinkTab label = {item}  onClick = {()=>setStatement(<Calendar date = {item}/>)} />
					)
			})
		)
			async function dom (){

				try{
			const data = await axios.get(Line+"/all_leagues")
			
				const la = data.data.international[0].leagues

					const linkd = await JSON.stringify(data.data)
					await sessionStorage.setItem("league_",linkd)

			
				

					var monk = []




			data.data.countries.map((item)=>{
							
							item.leagues.map((id)=>{

									monk.push(id)
							})
						
			})

				data.data.popular.map((item)=>{
							
							

									monk.push(item)
						
						
			})
				
			

				const parser = JSON.stringify(monk)
				sessionStorage.setItem("league_data", parser)

				setLeagues(
				monk.map((item)=>{
					return(
 							 <button  onClick = {()=>{navigate("leauges_mall");const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} className="btn  btn-outline-dark "  style={{width : '100%'}}>{item.name}</button>
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

			<div>






      <Modal
        open={opend}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

     

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







    			<header id = "larger_screens">
			<div className="container">
      <header className="lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-1 pt-1">
           
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="/faves">FAVOURITE</a></li>
              <li><a className="dropdown-item" href="#">PROFILE</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>

          <div className="col-4 text-center">
            <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">
              <img src={require("../images/sportsup.png")} alt="LOGO" width="200" height="50" />
            </a>
          </div>

          <div className="col-4 pt-1">
 
             
              <button className="btn btn-warning" onClick={handleOpen} >Search</button>
         
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">
            ⚽-SCORE <i className="fi fi-br-football"></i>
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="/news">
            📰-NEWS <i className="fi fi-br-newspaper"></i>
          </a>
          <a className="nav-item nav-link link-body-emphasis" href="/faves">
            ❤️-FAVOURITE <i className="fi fi-br-features"></i>
          </a>
          
        </nav>
      </div>

      <div className="nav-scroller py-1 mb-3 border-bottom border-top">
        <nav className="nav nav-underline justify-content-between">
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
      </div>
    </div>
			</header>

						{/* Header for device less than 750px in width */}
			<header id = "smaller_screen">
				<nav className = " fixed-top" style = {{marginBottom : "0.5%,", }}>
				
					<div className="top_nav">
					<div className = "brand">
          <h1 style = {{display : "none"}}> Sportsup</h1>
						<img  className = "brand_image" src = {require("../images/sportsup.png")}></img>
					
					</div>

			<div className = "icons">
					
						
						<button className = "btn btn-warning" onClick = {()=>{setStatement(<Live/>)}}><AccessTimeFilledIcon/></button>
						
					<Datepicker selected={selectedDate} onChange = {date=> setDate(date)} customInput = {<Custom_input/>}/>
          <button className="btn btn-light" onClick={handleOpen} ><Search/> </button>
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
				  <footer  >
      <div className="footer-content" >
        <p>© 2024 SportsUp. All rights reserved.</p>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
         <div className="footer-content">
                <h2>Follow Us</h2>
                <div className="social-media-links">
                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <img  style = {{height : "30px", width : "30px"}}  src="data:image/jpeg;base64,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" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <img  style = {{height : "30px", width : "30px"}}  src="data:image/jpeg;base64,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" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <img style = {{height : "30px", width : "30px"}} src="https://th.bing.com/th/id/OIP.if2ieS05NYxAYyY1alBpFwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
                        <img  style = {{height : "30px", width : "30px"}}  src="data:image/jpeg;base64,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" alt="LinkedIn" />
                    </a>
                </div>
            </div>
    </footer>	
</div>
<br></br>
<br></br>
<br></br>
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

			<div className = "live_score" style = {{height : window.innerHeight-100, overflowY : "auto", overflowX : "hidden"}}>{statement}
  <footer style = {{position : "absolute", bottom : "0%", left : "40%"}}>
      <div className="footer-content" >
        <p>© 2024 SportsUp. All rights reserved.</p>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
         <div className="footer-content">
                <h2>Follow Us</h2>
                <div className="social-media-links">
                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <img  style = {{height : "30px", width : "30px"}}  src="data:image/jpeg;base64,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" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <img  style = {{height : "30px", width : "30px"}}  src="data:image/jpeg;base64,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" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <img style = {{height : "30px", width : "30px"}} src="https://th.bing.com/th/id/OIP.if2ieS05NYxAYyY1alBpFwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer">
                        <img  style = {{height : "30px", width : "30px"}}  src="data:image/jpeg;base64,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" alt="LinkedIn" />
                    </a>
                </div>
            </div>
    </footer> 
      </div>
			
			<div className = "ads_news">
				
				<div style = {{height : window.innerHeight-100, overflowY : "auto", overflowX : "hidden"}}>


				{side_news}
					

				</div>

			</div>


	</div>		
</div>

{toggle}
 
           {cookie_jar}

            <div> {choice}</div>
			</body>
		)
}