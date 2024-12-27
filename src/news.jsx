import React, {useState, useEffect} from "react"
import "./components/nav/nav.css"

import {Link, useNavigate} from "react-router-dom"

import axios from "axios"

import Box from '@mui/material/Box';

import link from "./line.js"

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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

 import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { Tabs, Tab,  CircularProgress, Skeleton  } from '@mui/material';
import AdSenseFluidAd from "./components/nav/adsense_fluid.jsx";

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
  const [value, setValue] = React.useState('News');
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





// Helper function to calculate time differences
const calculateTimeDifference = (pastTimeString) => {
    const pastDate = new Date(pastTimeString);
    const now = new Date();
    const diffInMs = now - pastDate;
    
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);

    return {
        seconds: diffInSeconds,
        minutes: diffInMinutes,
        hours: diffInHours,
    };
};

// TimeDifference Component
const TimeDifference = ({ pastTimeString }) => {
    const [timeDifference, setTimeDifference] = useState(() => calculateTimeDifference(pastTimeString));

    useEffect(() => {
        // Update the time difference every second
        const intervalId = setInterval(() => {
            setTimeDifference(calculateTimeDifference(pastTimeString));
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [pastTimeString]);

    if(timeDifference.seconds < 60){
      return(
            <p>now</p>
        )
    }

    if( timeDifference.hours == 0 && timeDifference.minutes > 0){
      return(
            <p>{timeDifference.minutes} minutes ago</p>
        )
    }

    if( timeDifference.hours > 0){
      return(
            <p>{timeDifference.hours} hours ago</p>
        )
    }



};




  
export default function News(){
const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
const [status, setStatus] = useState()


const [statement, setStatement] = useState()

const [page_value, setPage_value] = useState(1)
const [latest, setLatest]= useState(
<div>

    <Skeleton variant="rectangular" width={"100%"} height={160} />

    <br></br>

    <Skeleton className = "container" variant="rectangular" width={"100%"} height={window.innerHeight-160} />

    </div>
  )


  useEffect(()=>{

    
            axios.get(link+"/sportsup_news",

                {params : {
                  page : page_value,
                }}
              )
            .then((res)=>{
              console.log(res)
            const handlePageChange = (event, page) => {
            // `page` is the clicked page number
            setPage_value(page);
                      window.scrollTo({
                  top: 0, // Vertical position in pixels
                  left: 0, // Horizontal position in pixels
                  behavior: 'smooth' // Smooth scrolling
              });
      
            // Call your function with the clicked page number
          };

              const data = res.data

              console.log(data,"news data")

                
                setLatest(
                      <div className = "row">

                          {data.map((item)=>{

                            var url 
                              if(item.sourceStr === "FotMob" || item.sourceStr === "90min"){

                               const baseUrl = "https://www.fotmob.com";
                                const itemPageUrl = item.page.url; // Assuming item.page.url is a variable with the dynamic path

                                url = `${baseUrl}${itemPageUrl}`;
                                console.log(url)
                                  return(


                                  <Link onClick  = {()=>{

                                window.open(url, '_blank', 'noopener,noreferrer');
 
                                  }} state = {{l : url, m : 1}}   className = "col-md-4" style = {{textDecoration : "none", color : "black",  borderRadius: "10px", marginTop : "5%"}}>
                                        <div style = {{width : "100%", display : "flex", justifyContent : "center"}}><img src = {item.imageUrl} style = {{width : "100%", borderRadius : 0, height : "230px"}}></img></div>
                                      <div style = {{width : "100%", display : "flex", justifyContent : "center", marginTop : "3%"}}>  <h6 className = "text-center" style = {{width : "80%"}}>{item.title}</h6></div>
                                       <div style = {{width : "100%", display : "flex", justifyContent : "center", marginTop : "3%"}}> <div style = {{width : "80%", display : "flex"}}>

                                        <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                                        <div style = {{display : "flex", width : "50%"}}><img style = {{width : "25px", height : "25px"}} src = {item.sourceIconUrl}></img> <p>{item.sourceStr}</p></div> 
                                        </div>
                                       <div className = "text-secondary" style = {{width : "50%"}}><TimeDifference pastTimeString={item.gmtTime} />
                                       </div></div></div>
                                  </Link>
                              )
                              }
                              else{
                                url = item.page.url
                            return(
                                  <Link onClick  = {()=>{

                                window.open(url, '_blank', 'noopener,noreferrer');
 
                                  }}  state = {{l : url, m : 0}}  className = "col-md-4"  style = {{textDecoration : "none", color : "black", background : "white", borderRadius: "10px", marginTop : "5%"}}>
                                        <div style = {{width : "100%", display : "flex", justifyContent : "center"}}><img src = {item.imageUrl} style = {{width : "80%", borderRadius : 0, height : "160px"}}></img></div>
                                       <div style = {{width : "100%", display : "flex", justifyContent : "center", marginTop : "3%"}}>  <h6 className = "text-center" style = {{width : "80%"}}>{item.title}</h6></div>
                                       <div style = {{width : "100%", display : "flex", justifyContent : "center", marginTop : "3%"}}> <div style = {{width : "80%", display : "flex"}}>

                                        <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                                        <div style = {{display : "flex", width : "50%"}}><img style = {{width : "25px", height : "25px"}} src = {item.sourceIconUrl}></img> <p>{item.sourceStr}</p></div> 
                                        </div>
                                       <div className = "text-secondary" style = {{width : "50%"}}><TimeDifference pastTimeString={item.gmtTime} />
                                       </div></div></div>
                                  </Link>
                              )
                          }
                          })}

                         <Pagination 
      count={10} 
      onChange={handlePageChange} // Use `onChange` instead of `onClick`
      color="primary" 
    />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <hr></hr>
                      </div>
                          
                  )




           })

          },[page_value])

    return(

      <div>
      <nav className = " fixed-top" style = {{marginBottom : "0.5%"}}>
        
          <div style = {{background : "white", height : "60px"}}>
          <div >
          <h1> Sportsup News</h1>
     
          
            
          </div>

      <div className = "icons">
          
          
            
      </div>

          </div>
  



        </nav>
          <div className = "container" >

          <br></br>
          <br></br>
          <br></br>
              
           
            {latest}
  
          </div>
          <LabelBottomNavigation/>
      </div>
    )
}