import React, {useState, useEffect} from "react"
import "./components/nav/nav.css"


import "./news.css"

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




// Helper function to calculate relative time
function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + (interval === 1 ? " day ago" : " days ago");
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + (interval === 1 ? " hour ago" : " hours ago");
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
}

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch articles from the API when the component mounts
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://remember-1.onrender.com/sportsup_news');
                const data = await response.json();
                setArticles(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            {/* Loader */}
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {/* Header */}
            <header>
                <h1>SportsUp News</h1>
                <p>Discover the latest football news around the globe.</p>
            </header>

            {/* Main Content */}
            <div className="container">
                <div className="blogs">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <a
                                key={index}
                                href={article.page.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-card"
                            >
                                <img src={article.imageUrl} alt={article.title} />
                                <div className="content">
                                    <h2>{article.title}</h2>
                                    <p>{article.lead || 'Click to read more.'}</p>
                                    <div className="source">
                                        <img src={article.sourceIconUrl} alt={article.sourceStr} />
                                        <span>|</span>
                                        <span>{article.sourceStr}</span>
                                        <span>|</span>
                                        <p>{timeAgo(article.gmtTime)}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <p>No articles available.</p>
                    )}
                </div>
            </div>
                    <LabelBottomNavigation/>
            {/* Footer */}
            <footer>
                <p>&copy; 2025 SportsUp News</p>
            </footer>
        </div>
    );
};

export default News;
