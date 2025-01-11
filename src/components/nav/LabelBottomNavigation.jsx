import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsIcon from '@mui/icons-material/Sports';
import FeedIcon from '@mui/icons-material/Feed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Line from "../../line.js";
import Box from '@mui/material/Box';
import { Tabs, Tab,  CircularProgress,  } from '@mui/material';
import AdSenseFluidAd from "./adsense_fluid.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PWAWelcomingPopup from "../new_comers/first.js"
import { Search } from "@mui/icons-material";



function LabelBottomNavigation({props}) {
  const [value, setValue] = React.useState("Matches");
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue({props});
    console.log(value)
  };

  return (
    <BottomNavigation id = "shadowd"  sx={{boxShadow : ` 0 10px 10px rgba(1, 23, 44, 0.1)`, position: 'fixed', bottom: "1%", width : "95%", left : "2.5%", right : "2.5%",  borderRadius : "7px"}} value={value} onChange={handleChange}>
     <BottomNavigationAction
        label="Matches"
        value="matches"
        onClick={()=>{navigate("/")}}
        icon={<SportsIcon />}
      />
      <BottomNavigationAction
        label="News"
        value= {props}
         onClick={()=>{navigate("/news")}}
        icon={<FeedIcon />}
      />
      <BottomNavigationAction
        label="Leagues"
        value={props}
         onClick={()=>{navigate("/leagues")}}
        icon={<EmojiEventsIcon />}
      />
      <BottomNavigationAction onClick={()=>{navigate("/faves")}} label="Favorites" value="Favorites" icon={<BookmarkAddIcon />} />
    </BottomNavigation>
  );
}
export default LabelBottomNavigation