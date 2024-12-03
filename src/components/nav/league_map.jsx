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

const AdComponent = () => {
  const [adData, setAdData] = useState(null);
  const placementId = '3118'; // Your Mobfox placement ID

  useEffect(() => {
    const fetchAd = async () => {
      // Replace placeholders with actual values
      const adRequestUrl = `https://bes.mobfox.com/?c=n&m=tag&placementId=${placementId}&ip=YOUR_IP&ua=YOUR_UA&domain=YOUR_DOMAIN&page=YOUR_PAGE&secure=1&language=en-US&bidfloor=0.01&gdpr_consent=1&coppa=0&gpp=&gpp_sid=`;

      try {
        const response = await fetch(adRequestUrl);
        const data = await response.json();
        
        // Check if the ad data is valid
        if (data && data.adContent) {
          setAdData(data.adContent); // Assume adContent contains the ad HTML
        } else {
          console.error('No ad data returned');
        }
      } catch (error) {
        console.error('Error fetching ad:', error);
      }
    };

    fetchAd();
  }, [placementId]);

  return (
    <div>
     
    </div>
  );
};
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
    </BottomNavigation>
  );
}

export default function League_Map() {
  const [allLeagues, setAllLeagues] = useState([]);
  const [followedLeagues, setFollowedLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [users, setUser] = useState()

  useEffect(() => {
    const fetchLeagues = async () => {
      setLoading(true);
      const raw_data = await sessionStorage.getItem("league_data");
      const leagues = await JSON.parse(raw_data);

      if (leagues) {
        const user_data = JSON.parse(localStorage.getItem("data"));
        const response = await axios.get(`${Line}/users`);
        const user = response.data.find(u => u.email === user_data.email);

        if (user) {
          setFollowedLeagues(user.favorite_league.map(item => JSON.parse(item)));
          setUser(user)
        }
        setAllLeagues(leagues);
      } else {

      }

      setLoading(false);
    };

    fetchLeagues();
  }, []);

  const toggleFollowLeague = async(leagueId, leagueName) => {
    const isFollowing = followedLeagues.some(league => league.id === leagueId);
    const updatedFollowedLeagues = isFollowing
      ? followedLeagues.filter(league => league.id !== leagueId)
      : [...followedLeagues, allLeagues.find(league => league.id === leagueId)];

    setFollowedLeagues(updatedFollowedLeagues);


      if(isFollowing === false){

                const monk = {
        id : leagueId,
        name : leagueName,
              }

      const league = JSON.stringify(monk)
   
    const place = {
      id_: users._id,
      league_id: league,
    };

              console.log(users)

              await fetch(`${Line}/favorite_league`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(place),
    });
   
  };
      

if(isFollowing === true){

         const monk = {
        id : leagueId,
        name : leagueName,
              }

      const league = JSON.stringify(monk)
   
    const place = {
      id_: users._id,
      league_id: league,
    };

              console.log(users)

              await fetch(`${Line}/favorite_league_remove`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(place),
    });
    
  };

      
 
  };

  return (
    <div style={{ background: "#EEEEEE", height: "100vh" }}>
      <nav className="fixed-top">
        <div style = {{background : "white"}}>
          <div>
      
             <h1> Sportsup Leagues</h1>
          </div>
        </div>
      </nav>

      <br></br>
      <br></br>
      <div className="state">
        {loading ? (
          <p style = {{marginTop : "10%"}}><Box style={{ display: 'flex', width: "100%", justifyContent: "center" }}>
          <CircularProgress sx={{ backgroundColor: "white", borderRadius: "50%" }} />
        </Box></p>
        ) : (
          <>
            <div style={{ width: "98%", margin: "1%",  marginTop : "10%", borderRadius: "10px", background: "white" }}>
              <strong style={{ textDecoration: "bold" }}>Following</strong>
              {followedLeagues.map(league => (
                <div key={league.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3%" }}>
                  <div onClick={() => navigate("/leauges/"+league.id)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`} style={{ width: "25px", height: "20px", borderRadius: "50%" }} alt="League Logo" />
                    <h6>{league.name}</h6>
                  </div>
                  <button className = "btn btn-light" onClick={() => toggleFollowLeague(league.id, league.name)} style={{ background: "#EEEEEE", height: "30px" }}>
                    <strong>Unfollow</strong>
                  </button>
                </div>
              ))}
            </div>
         
            <div style={{ width: "98%", margin: "3%", borderRadius: "10px", background: "white" }}>
              <strong style={{ textDecoration: "bold" }}>All Competitions</strong>
              {allLeagues.map(league => (
                <div key={league.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3%" }}>
                  <div onClick={() => navigate("/leauges/"+league.id)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`} style={{ width: "25px", height: "20px", borderRadius: "50%" }} alt="League Logo" />
                    <h6>{league.name}</h6>
                  </div>
                  <button className = "btn btn-light" onClick={() => toggleFollowLeague(league.id, league.name)} style={{ background: "#EEEEEE", height: "30px" }}>
                    <strong>{followedLeagues.some(l => l.id === league.id) ? "Unfollow" : "Follow"}</strong>
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

     <LabelBottomNavigation/>

    </div>
  );
}
