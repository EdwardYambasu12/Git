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


 import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { Tabs, Tab, } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
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


const [latest, setLatest]= useState()
const [favorites, setFavorites] = useState()
const [transfers, setTransfers] = useState()
const [home, setHome] = useState()


useEffect(()=>{
  async function event(){

    setStatement(<div >
        
        <div>           
      
                  
       


      
     
   
     
 
                    

      
     
   
     
 </div>




   <div  style = {{ background : "#EEEEEE"}}>
   <br></br>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
            
            <Home_/>
     
         



        

        </Typography>

          <Typography component="div" role="tabpanel" hidden={value !== 1}>
            
     
         <Latest/>



        

        </Typography>


           <Typography component="div" role="tabpanel" hidden={value !== 2}>
            
     
         <Transer/>



        

        </Typography>
      
      
      </SwipeableViews>
    </div>




        </div>       
      )
  }

  event()
}, [ value])

  



	return(

			<body className = "container" style = {{background : "#EEEEEE"}}>
	
				<nav className = " fixed-top " style = {{ background : "white"}}>
				
					<div className="top_nav">
					 <div className = "brand">
            <img className = "brand_image" src = {require("./components/images/sportsup.png")}></img>
            <h2>News</h2>
          </div>

			<div className = "icons">
					
					
						
			</div>

			    </div>
          
              <div>

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Home" />
         <Tab label="Latest" />
          <Tab label="Transfers" />
           <Tab label="Favorites" />
        
        </Tabs>
        </ThemeProvider>
        </div>

      
           
          
				</nav>
       
        <br></br>

        <br></br>
        <br></br>
      <div > {statement}</div>



				<br></br>
        <br></br>
		<LabelBottomNavigation/>

		


			</body>
		)

}


function Home_(){





  const [trending, setTrending] = useState(<Skeleton variant="rectangular" width={"100%"} height={180} />)
  const [transfer, setTransfer] = useState(<Skeleton variant="rectangular" width={"100%"} height={100} />)
  const [rest, setRest] = useState(<Skeleton variant="rectangular" width={"100%"} height={90} />)
  const [all, setAll] = useState(<Skeleton variant="rectangular" width={"100%"} height={90} />)

  useEffect(()=>{
            axios.get(link+"/sportsup_news")
            .then((res)=>{
              console.log(res)

              const length = res.data.length -1
              const make =  res.data[length]


              setTrending( 
                <div style = {{background : "white", borderRadius : "10px", }}>
             
                  <Link to = {"/news/"+make._id} style = {{textDecoration : "none",  color : "black", background : "white"}}>
                      <img src = {make.cover_photo} style = {{height : "170px", width : "100%", borderRadius : "0%"}}></img>
                      <h5>{make.title}</h5>
                  </Link>
                  
                  </div>
                )

              const reverse = res.data.reverse()

              const slicer = reverse.slice(1,5)



              setRest(


                slicer.map((make)=>{

                  return(
                  <Link to = {"/news/"+make._id} style = {{marginTop : "2%", height : 70, borderRadius : "10px", alignItems : "center", textDecoration : "none", background : "white", color : "black", display : "flex", width : "100%",  }}>
                      <img src = {make.cover_photo} style = {{ width : "30%", height : 70, borderRadius : "0%"}}></img>
                      <h6 style = {{width : "70%"}}>{make.title}</h6>
                  </Link>
                  )

                  })
                )

              const notified = res.data.filter((item)=> item.notify === true)

              setSuggested(
                  notified.map(
                        (make)=>{
                              return(
                                     <div style = {{background : "white", borderRadius : "10px", }}>
                              
                                <Link to = {"/news/"+make._id} style = {{textDecoration : "none",  color : "black", background : "white"}}>
                                    <img src = {make.cover_photo} style = {{height : "150px", width : "100%", borderRadius : "0%"}}></img>
                                    <h5>{make.title}</h5>
                                </Link>
                                
                                </div>
                                )
                        }
                    )

                )
         

            const trans = res.data.filter((item)=> item.type === "Transfer")

            const down = trans.slice(0,8)

              setTransfer(
                  down.map(
                        (make)=>{
                              return(
                                    <Link to = {"/news/"+make._id} style = {{marginTop : "2%", height : 70, borderRadius : "10px", alignItems : "center", textDecoration : "none", background : "white", color : "black", display : "flex", width : "100%",  }}>
                      <img src = {make.cover_photo} style = {{ width : "30%", height : 70, borderRadius : "0%"}}></img>
                      <h6 style = {{width : "70%"}}>{make.title}</h6>
                  </Link>

                                )
                        }
                    )

                )
            



   

            setAll(
                  res.data.map((make)=>{
                      return(
                              <Link to = {"/news/"+make._id} style = {{marginTop : "2%", height : 70, borderRadius : "10px", alignItems : "center", textDecoration : "none", background : "white", color : "black", display : "flex", width : "100%",  }}>
                      <img src = {make.cover_photo} style = {{ width : "30%", height : 70, borderRadius : "0%"}}></img>
                      <h6 style = {{width : "70%"}}>{make.title}</h6>
                  </Link>
                        )
                  })
              )
})

  }, [])




  const [suggested, setSuggested] = useState(

    <div style = {{display : "flex", overflowX : "auto", overflowY : "hidden"}}><Skeleton variant="rectangular" width={"60%"} height={150} /> <Skeleton variant="rectangular" width={"60%"} height={150} /></div>)


   

return(<div style = {{background : "#EEEEEE"}}>
 
      {trending}

      <br></br>
      <p className = "text-secondary">for you</p>
      {rest}
      <p className = "text-secondary">suggested for you</p>
      {suggested}

      <p>transfers</p>

      {transfer}

      <p>Hot Picks</p>
      {all}

      </div>
  )

}


function Latest(){

  const [list, setList] = useState(<div><Skeleton variant="rectangular" width={"100%"} height={180} /> <br></br> <Skeleton variant="rectangular" width={"100%"} height={20} /> </div> )


  useEffect(()=>{
            axios.get(link+"/sportsup_news")
            .then((res)=>{


              setList(
                  res.data.reverse().map((make)=>{
                    return(
                          <div style = {{background : "white", borderRadius : "10px", }}>
             
                  <Link to = {"/news/"+make._id} style = {{textDecoration : "none",  color : "black", background : "white"}}>
                      <img src = {make.cover_photo} style = {{height : "170px", width : "100%", borderRadius : "0%"}}></img>
                      <h5>{make.title}</h5>
                  </Link>
                  
                  </div>
                      )
                  })
                )
            })


          },[])

  return(
          <>

          <p>Latest News</p>
          {list}

          <br></br>

          {list}

          </>
    )
}

function Transer(){

  const [list, setList] = useState(<div><Skeleton variant="rectangular" width={"100%"} height={180} /> <br></br> <Skeleton variant="rectangular" width={"100%"} height={20} /> </div> )


  useEffect(()=>{
            axios.get(link+"/sportsup_news")
            .then((res)=>{
              const trans = res.data.filter((item)=> item.type === "Transfer")

              setList(
                  trans.reverse().map((make)=>{
                    return(
                          <div style = {{background : "white", borderRadius : "10px", }}>
             
                  <Link to = {"/news/"+make._id} style = {{textDecoration : "none",  color : "black", background : "white"}}>
                      <img src = {make.cover_photo} style = {{height : "170px", width : "100%", borderRadius : "0%"}}></img>
                      <h5>{make.title}</h5>
                  </Link>
                  
                  </div>
                      )
                  })
                )
            })


          },[])

    return(
          <>

          <p>Transfer News</p>
          {list}

          <br></br>

          {list}

          </>
    )
}