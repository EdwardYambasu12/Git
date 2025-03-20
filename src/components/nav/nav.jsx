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
import { format, addDays } from "date-fns";
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
import { HailOutlined, Search } from "@mui/icons-material"


import AdSenseFluidAd from "./adsense_fluid.jsx"
import PWAWelcomingPopup from "../new_comers/first.js"


function LabelBottomNavigation() {
  const [value, setValue] = React.useState('matches');
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation id = "shadowd"  sx={{boxShadow : ` 0 10px 10px rgba(1, 23, 44, 0.1)`, position: 'fixed', bottom: "0%", width : "100%", }} value={value} onChange={handleChange}>
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
       <h3 className = "text-light text-center">LoneScore App Available</h3>
       <hr/>
     
       <div style = {{width : "100%", justifyContent : "center", display : "flex"}}>

       <div style = {{justifyContent : "center", alignItems : "center", textAlign : "center"}}>
         <img style = {{width : "50px", height : "50px", textAlign : "center"}} src = "https://www.lonescore.com/icon.jpg"/>
         <br/>
       <button className = "btn btn-warning" onClick={handleInstall}>DOWNLOAD LONESCORE APP</button>
       <br/><br/>
        <button className = "btn btn-outline-light" onClick = {()=>{trapper()}}>Continue with the website</button>
        </div>
        </div>
        <br/>
        <br/>
       </div>
      )}</div>)
}, [deferredPrompt, showInstallButton])
    
  const [value, setValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };


  const today = new Date();
  const dates = Array.from({ length: 11 }, (_, i) => addDays(today, i - 5));
  const [activeDate, setActiveDate] = useState(format(today, "yyyy-MM-dd"));
  const [mainContent, setMainContent] = useState(null);
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
const [lot_news, setLot]= useState()
const [vid, setVid] = useState()
	useEffect(()=>{


axios.get(Line+"/get_video_data")
    .then((res)=>{
      const stringer = JSON.stringify(res.data)
      sessionStorage.setItem("video", stringer)
      
    })

    axios.get("https://www.sofascore.com/api/v1/sport/0/event-count")
    .then((res)=>{
      console.log(res, "nav res sofa ,info")
    })
		axios.get(Line+"/sportsup_news")
		.then((res)=>{

      var url
      var num = Math.round(Math.random()*5)
      if(res.data[num].sourceStr === "FotMob" || res.data[num].sourceStrr === "90min"){
                              const baseUrl = "https://www.fotmob.com";
                                const itemPageUrl = res.data[num].page.url; // Assuming item.page.url is a variable with the dynamic path

                                url = `${baseUrl}${itemPageUrl}`;
      }
      else{
        url = res.data[num].page.url;
      }
      setLot(
        <Link onClick={()=>{window.open(url, "_blank", "noopener,noreferrer")}}  style = {{width : "100%", textDecoration : "none", marginTop: "3%", display : "flex", height : "50px", background : "white"}}>
          <img src = {res.data[num].imageUrl} style =  {{borderRadius : "0", width : "30%", height : "50px"}}></img>
          <p style = {{width : "70%", fontSize : "0.7em"}}><strong>{res.data[num].title}</strong></p>
        </Link>
      )
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
			setStatement(<All_Matches props= "today"/>)
		}
		else if(selectedDate != g){
			setStatement("")

			if(true){
					const date = new Date(selectedDate)

	    
	   
          const formattedDate = format(date, "yyyy-MM-dd");
		setStatement(<All_Matches stat = {vid} props = {formattedDate}/>
			
			)
		sessionStorage.setItem("date",date)
			}
		}
		else{
	
	}
			
	}, [selectedDate, vid])

	const [leagues, setLeagues] = useState()
	const [tab_state, setTabstate] = useState(4)
	const [statement, setStatement] = useState(<All_Matches props = "today"/>)
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
const [prime, setPrime] = useState()
	useEffect(()=>{

		async function job(){

			     const liner = await localStorage.getItem("data")

       const parserd =  await JSON.parse(liner)
        if(parserd != null){

          
            const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);
    const { data: users } = await axios.get(`${Line}/users`);
    const user = users.find(user => user.email === done.email && user.password === done.password);
    setPrime(<Making props = {user}/>)
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
				
			
        const parser1 = JSON.stringify(data.data)
				const parser = JSON.stringify(monk)
				sessionStorage.setItem("league_data", parser)
        sessionStorage.setItem("league_data1", parser1)

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


	function tab_change(id, date){
		setTabstate(id)
    const formattedDate = format(date, "yyyy-MM-dd");


			setStatement(<All_Matches props = {formattedDate}/>)



	
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
			<div >
  <header id="header">
      {/* Left - Logo */}
      <div className="logo">LoneScore</div>

      {/* Center - Search Bar */}
      <div className="search-bar">
  
        <input type="text" onClick={handleOpen} placeholder="Search" />
      </div>

      {/* Right - Links */}
      <nav>
        <a href="/news">News</a>
        <a href="/faves">Favorites</a>
      </nav>
    </header>
   
<br></br>
<br></br>
<br></br>
      <div className="nav-scroller container py-1 mb-3 border-bottom border-top">
        <nav className="nav nav-underline justify-content-between">
        <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"
      	sx = {{background : "white", }}

      	className = "mid_tab"
      	id = "idl"
      >
      
       
            {dates.map((date, index) => {
          const formattedDate = format(date, "yyyy-MM-dd");
          const isToday = formattedDate === format(today, "yyyy-MM-dd");
          const isActive = formattedDate === activeDate;
          const info = <div><div>
          {isToday ? "Today" : format(date, "EEE")}
        </div>
        <div>
          {format(date, "dd MMM")}
        </div></div>

          return (
     
              <LinkTab style ={{fontSize : "0.7em"}} label = {info}  onClick = {()=>{tab_change(index, date)}}>
              
            </LinkTab>
          );
        })}
     

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
          <h1 style = {{display : "none"}}> LoneScore</h1>
						<img  className = "brand_image" src = {require("../images/sportsup.png")}></img>
					
					</div>

			<div className = "icons">
					
						
						<button className = "btn btn-danger text-light" onClick = {()=>{setStatement(<Live/>)}}>Live</button>
						
					<Datepicker selected={selectedDate} onChange = {date=> setDate(date)} customInput = {<Custom_input/>}/>
          <button className="btn btn-light" onClick={handleOpen} ><Search/> </button>
						<PositionedMenu/>
			</div>

			    </div>
  
<Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"
      	sx = {{background : `radial-gradient(circle, #EEEEEE, #FFFFFF)`}}

      	className = "mid_tab"
      	id = "idl"
      >
      
       
            {dates.map((date, index) => {
          const formattedDate = format(date, "yyyy-MM-dd");
          const isToday = formattedDate === format(today, "yyyy-MM-dd");
          const isActive = formattedDate === activeDate;
          const info = <div><div>
          {isToday ? "Today" : format(date, "EEE")}
        </div>
        <div>
          {format(date, "dd MMM")}
        </div></div>

          return (
     
              <LinkTab style ={{fontSize : "0.6em"}} label = {info}  onClick = {()=>{tab_change(index, date)}}>
              
            </LinkTab>
          );
        })}
     

      </Tabs>


				</nav>
				<br></br>
					<br></br>
				<br></br>
				<br></br>
       
				<div className = "state" >
		
       
					
          
			<div style={{marginTop : "3%"}}>{statement}       <footer className="footer">
      <div className="circle left"></div> {/* Left Circle */}
      <div className="footer-content">
        <p>© Copyright 2025 LoneScore</p>
        <div className="links">
       
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <p>The use of automatic services (robots, crawlers, etc.) is not permitted.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>
      <div className="circle right"></div> {/* Right Circle */}
    </footer></div>
			
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
    <footer className="footer">
      <div className="circle left"></div> {/* Left Circle */}
      <div className="footer-content">
        <p>© Copyright 2025 LoneScore</p>
        <div className="links">
       
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <p>The use of automatic services (robots, crawlers, etc.) is not permitted.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>
      <div className="circle right"></div> {/* Right Circle */}
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


const Making = ({props})=>{

  var host = []
  const navigate = useNavigate()

  props.favorite_player.map((item)=>{
    host.push({data : item, title : "player"})
  })

  props.favorite_team.map((item)=>{
    host.push({data : item, title : "team"})
  })




  props.favorite_league.map((item)=>{
    host.push({data : item, title : "league"})
  })

  console.log(host, "every single data of the user")
  return(
    <div style = {{width : "100%", marginTop: "4%", height : "50px", alighnItems : "center",  justifyContent : "space-between", display : "flex", background : "white"}}>
    <div style = {{display : "flex", width : "80%", overflowX : "auto" }}>
        {host.map((item)=>{

          var house = JSON.parse(item.data)
          if(item.title == "player"){
            return(
              <div  onClick = {()=>{navigate("player/"+house.id)}} style = {{margin : "1%"}}>
                <img src = {"https://images.fotmob.com/image_resources/playerimages/"+house.id+".png"} style = {{width : "45px", height : "45px"}}></img> 
            
                
              </div>
            )
          }

         else if(item.title == "league"){
            return(
              <div style = {{margin : "1%"}}  onClick = {()=>{navigate("leauges/"+house.id)}}>
              
                <img src = {"https://images.fotmob.com/image_resources/logo/leaguelogo/"+house.id+".png"} style = {{width : "45px", height : "45px"}}></img>
              </div>
            )
          }

          else if(item.title == "team"){
            return(
              <div style = {{margin : "1%"}} onClick = {()=>{navigate("team/"+house.id)}}>
             <img src = {"https://images.fotmob.com/image_resources/logo/teamlogo/"+house.id+"_xsmall.png"} style = {{width : "45px", height : "45px"}}></img>
              </div>
            )
          }
        })}
    </div>

    <button style = {{borderRadius : "50%"}}  onClick={()=>{navigate("/follow_up")}}className = "btn btn-outline-warning">➕</button>
    </div>
  )
}

