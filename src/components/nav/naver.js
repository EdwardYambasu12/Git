import React, {useState, useRef, useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


import './nav.css';


import SearchIcon from '@mui/icons-material/Search';


const suggestions = [
  'LoneStar FC',
  'Monrovia Club Breweries',
  'Watanga FC',
  'Invincible Eleven',
  'Nimba United',
];

const SearchBar = ({ onSearch, act }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    if (onSearch) onSearch(suggestion);
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-wrapper">
      <form className="search-bar" onSubmit={handleSubmit}>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
        />

      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestion-list">
          {filteredSuggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}


      <button className="live-button" onClick = {act}>
      <span className="pulse-dot" />
      LIVE
    </button>
    </div>
  );
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












const TabBar = ({onOk}) => {
  const [activeDate, setActiveDate] = useState(new Date().toDateString());
  const todayRef = useRef(null); // ref to scroll Today into view

  const getDateArray = () => {
    const dates = [];
    const today = new Date();

    for (let i = -5; i <= 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
    });
  };

  const isToday = (date) => {
    return date.toDateString() === new Date().toDateString();
  };

  // Scroll to "Today" on first load
  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  return (
    <div className="tabbar-container">
      <div className="tabbar-scroll">
        {getDateArray().map((date) => {
          const isActive = date.toDateString() === activeDate;
          const isDateToday = isToday(date);
            console.log("testing dates", date)
          return (
            <button
              key={date}
              onClick={() => {setActiveDate(date.toDateString()); onOk(date)}}
              ref={isDateToday ? todayRef : null}
              className={`tab-item ${isActive ? 'active' : ''}`}
            >
              {isDateToday ? 'Today' : formatDate(date)}
            </button>
          );
        })}
      </div>
    </div>
  );
};


const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'News', path: '/news' },
  { label: 'Leagues', path: '/leagues' },
  { label: 'Favorites', path: '/faves' },
  { label: 'Privacy and Policy', path: '/privacy-policy' },
];







function DrawerAppBar({window, onAction, live}) {
 
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedDate, setDate] = useState(null);


const  onSite = (data)=>{
  onAction(data)
}
const lite = ()=>{
  console.log("liting lite")
  live()
}
console.log(selectedDate, "This is the selected date")


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography
      variant="h6"
      component="div"
      sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
    >
      <span style={{ color: 'midnightblue' }}>Lone</span>
      <span style={{ color: 'gold' }}>Score</span>
    </Typography>
      <Divider />
<List>
  {navItems.map((item) => (
    <ListItem key={item.label} disablePadding>
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{ textAlign: 'center' }}
      >
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  ))}
</List>


    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background : "white" }}>
      <CssBaseline />
  <AppBar component="nav" sx={{ backgroundColor: 'white', color: 'black' }}>
<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
  {/* Left: Menu and Nav Items */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
 <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
  {navItems.map((item) => (
    <Button
      key={item.label}
      component={Link}
      to={item.path}
      sx={{ color: 'black' }}
    >
      {item.label}  
    </Button>
  ))}
</Box>

  </Box>

  {/* Center: LoneScore */}
  <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
    <Typography
      variant="h6"
      component="div"
      sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
    >
      <span style={{ color: 'midnightblue' }}>Lone</span>
      <span style={{ color: 'gold' }}>Score</span>
    </Typography>
  </Box>

  {/* Right: Notification Icon */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ position: 'relative', zIndex: 9999 }}>
  <Datepicker
    selected={selectedDate}
    onChange={(date) => onAction(date)}
    customInput={<Custom_input />}
    popperPlacement="bottom-end"
    popperModifiers={[
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ]}
  />
</div>

  </Box>
</Toolbar>
<TabBar onOk = {onSite}/>
<SearchBar act = {lite}/>

</AppBar>



      <nav >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            background : "white",
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>


     
    </Box>
  );
}



export default DrawerAppBar;
