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

const AdComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tack, setTack] = React.useState()
  const [adData, setAdData] = useState(null);
  const placementId = '3118'; // Your Mobfox placement ID
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tack, setTack] = React.useState()
  const [adData, setAdData] = useState(null);
  const placementId = '3118'; // Your Mobfox placement ID

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
        <div style = {{background : "white", height : "60px"}}>
          <div>
      

             <h1>  Leagues</h1>
          </div>
        </div>
      </nav>

      <br></br>
      <br></br>

    <br></br>
      <div className="container">
        <div onClick={handleOpen} style = {{background : "white", display : "flex", justifyContent : "space-around", alignItems : "center", borderRadius : "10px"}}>
          <h6>SEARCH LEAGUES</h6>
      <button className="btn btn-warning"  ><Search/></button>
      </div>
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
        {loading ? (
          <p style = {{marginTop : "10%"}}><Box style={{ display: 'flex', width: "100%", justifyContent: "center" }}>
          <CircularProgress sx={{ backgroundColor: "white", borderRadius: "50%" }} />
        </Box></p>
        ) : (
          <>
            <div style={{ width: "100%",   marginTop : "10%", borderRadius: "10px", background: "white" }}>
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
            <AdSenseFluidAd/>
         
            <div style={{ width: "100%",  borderRadius: "10px", background: "white" }}>
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
