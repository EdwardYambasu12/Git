import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Line from "./line.js";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playerData, setPlayerData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlayerData = async () => {
    try {
      const response = await axios.get(`${Line}/player`, { params: { id } });
      setPlayerData(response.data);
    } catch (err) {
      setError("Error fetching player data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserFavorites = async () => {
    const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);
    const { data: users } = await axios.get(`${Line}/users`);
    if(raw != null){
    const user = users.find(user => user.email === done.email && user.password === done.password);

    if (user?.favorite_player.includes(id)) {
      setIsFollowing(true);
    }

    return(user)

  }
  };

  const toggleFollowPlayer = async () => {
    const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);

    	const monk = {
    		id : playerData.id,
    		name : playerData.name,
    		goals : playerData.careerHistory ? playerData.careerHistory.careerItems.senior.seasonEntries[0].goals : "",
    		apps :  playerData.careerHistory ?  playerData.careerHistory.careerItems.senior.seasonEntries[0].appearances: "",
    		assist :  playerData.careerHistory ?  playerData.careerHistory.careerItems.senior.seasonEntries[0].assists: "",
    	}

    	const player = JSON.stringify(monk)
    const user_id = await fetchUserFavorites()
    const place = {
      id_: user_id._id,
      player_id: player,
    };

    const url = isFollowing ? `${Line}/favorite_player_remove` : `${Line}/favorite_player`;
    
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(place),
    });
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    fetchPlayerData();
    fetchUserFavorites();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!playerData) return null;
var data = playerData
console.log(data)

 async function toller(){
   
    fetchUserFavorites();
          const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);
    const { data: users } = await axios.get(`${Line}/users`);

    if(raw != null){
    const user = users.find(user => user.email === done.email && user.password === done.password);
    console.log(users)
     const monk = {
    		id : playerData.id,
    		name : playerData.name,
    		goals : playerData.careerHistory ? playerData.careerHistory.careerItems.senior.seasonEntries[0].goals : "",
    		apps :  playerData.careerHistory ?  playerData.careerHistory.careerItems.senior.seasonEntries[0].appearances: "",
    		assist :  playerData.careerHistory ?  playerData.careerHistory.careerItems.senior.seasonEntries[0].assists: "",
    	}


      const league = JSON.stringify(monk)
    console.log(user)
    const filterer = user.favorite_player.filter(id=> id === league )
      console.log(filterer, user, monk)
    if(filterer.length > 0){
      console.log("following this league")
      setIsFollowing(true)
    }
  }
  }

  toller()
  return (
    <div>
      <div style={{ background: playerData.primaryTeam?.teamColors.color || "midnightblue" }}>
        <Box display="flex" justifyContent="space-between" p={2}>
          <ArrowBackIcon onClick={() => navigate(-1)} style={{ color : "white", cursor: 'pointer' }} />
          <Button style = {{background : "white", color : "blue"}} onClick={toggleFollowPlayer} variant={isFollowing ? "contained" : "outlined"}>
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </Box>
        <Box display="flex" alignItems="center" p={2}>
          <img src={`https://images.fotmob.com/image_resources/playerimages/${playerData.id}.png`} alt="Player" style={{ width: "70px", height: "70px" }} />
          <Box ml={2}>
            <Typography variant="h5" color="white">{playerData.name}</Typography>
            {playerData.primaryTeam && <Typography color="white">{playerData.primaryTeam.teamName}</Typography>}
          </Box>
        </Box>
      </div>

          <div className = "container"  style = {{borderRadius : "10px", background : "darkgray"}} >

                    <h5 className = "text-center text-light">Personal Information</h5>
                                 <div className = "row" style = {{justifyContent : "space-between"}}>
                  {data.playerInformation.map((item) => (
                    <div className = "col-md-4" key={item.key} style={{ flex: 0, width : "100%" }}>
                      <h6>{item.title}: {item.value.fallback}</h6>
                    </div>
                  ))}
                </div>

                </div>


        <Typography variant="h6">OnField Position</Typography>
        <Box position="relative" height="120px" bgcolor="#00A36C">

        {playerData.positionDescription.positions ? 

          playerData.positionDescription?.positions.map(item => item.pitchPositionData && (




          		
            <Box
              key={item.key}
              position="absolute"
              top={`${item.pitchPositionData.top * 100}%`}
              right={`${item.pitchPositionData.right * 100}%`}
              bgcolor="midnightblue"
              borderRadius="50%"
              width="10px"
              height="10px"
            />
          )
          )

          : ""}
        </Box>

        <Typography>Main Position: {playerData.positionDescription?.primaryPosition.label}</Typography>
        	{data.traits ?
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={90} data={playerData.traits.items}>
            <PolarGrid />
            <PolarAngleAxis dataKey="title" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            <Radar name="Player Stats" dataKey="value" stroke="#8884d8" fill={playerData.primaryTeam?.teamColors.color || "midnightblue"} fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
        : ""}

       <div style = {{color : "white", background : data.primaryTeam ? data.primaryTeam.teamColors.color : "midnightblue", }}>
          {data.mainLeague ? 
          <div>


          <h6 className = "text-center">Seasonal Stats  </h6>

          <div style = {{display : "flex"}}>
                <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${data.mainLeague.leagueId}.png`} style = {{background : "white", width : "50px", height : "50px"}}>

                </img>
                <h5>{data.mainLeague.leagueName}</h5>
          </div>

          <div>
            
             <div className = "row" style = {{justifyContent : "space-between"}}>
                  {data.mainLeague.stats.map((item) => (
                    <div className = "col-md-4" key={item.key} style={{ flex: 0, width : "100%" }}>
                      <h6>{item.title}: {item.value}</h6>
                    </div>
                  ))}
                </div>
          </div>

          </div>

          :  
          ""
        }
</div>

        {

      data.recentMatches ? 

      <div>
        
        <h6 className = "text-center">Recent Matches</h6>

        <div>
            {

                  data.recentMatches.slice(0,10).map((match)=>{

                       const url = match.matchPageUrl;

        // Create a URL object with a base URL for relative URLs
        const urlObject = new URL(url, 'http://example.com');

        // Extract and clean the fragment identifier
        const fragmentIdentifier = urlObject.hash.replace(/^#/, '');

  const dateTimeString = match.matchDate.utcTime;
                        const dateObject = new Date(dateTimeString);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


                    const timestamp = match.timeTS;
                const dateObject1 = new Date(timestamp);
                  const timeString1 = dateObject1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



                 var status  = status = <div style = {{display : "flex", color : "white", width : "100%", justifyContent : "spaceBetween"}}>{match.homeScore}-{match.awayScore}</div>
                    var live

               

            return(
                            <div    onClick={() => {navigate(`/result/${fragmentIdentifier}`); window.location.reload()}}  style={{ marginTop: "3%", width: "100%", height : "60px", alignItems : "center", justifyContent: "space-between", background: "darkgray", color : "white", borderRadius: "10px", textDecoration: "none" }}>
                                      <div  style={{ display: "flex", textDecoration: "none", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
            <h6 className="text-light" style={{ fontSize: "1em" }}>{match.teamName}</h6>
            <img  src={"https://images.fotmob.com/image_resources/logo/teamlogo/"+match.teamId+"_xsmall.png"} loading="lazy"  alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "whtie" }}>
            <strong className = "text-light ">{status}</strong>
          </div>
          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
            <img src={"https://images.fotmob.com/image_resources/logo/teamlogo/"+match.opponentTeamId+"_xsmall.png"} loading = "lazy"  alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
            <h6 className="text-light" style={{ fontSize: "1em" }}>{match.opponentTeamName}</h6>
          </div>
        </div>

        <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
          <h6 style = {{background : match.ratingProps.bgcolor, }}>{match.ratingProps.num}</h6>
          <h6 > goals : {match.goals} </h6>
          <h6 > assists : {match.assists} </h6>
          <h6> {match.yellowCards > 0 ? "🟨": ""}</h6>
          <h6> {match.redCards > 0 ? "🟥": ""}</h6>
          <h6 className = "text-dark" style = {{width : "20%",  textOverflow: "ellipsis", whiteSpace: "nowrap",  overflow: "hidden", }}>{match.leagueName}</h6>

        </div>
                            </div>
                )
                })
             

            }
        </div>


      </div>

      :

      ""
    }

    

        {playerData.careerHistory && (
          <Box>
            <Typography align="center">Player History</Typography>
            <table>
              <thead>
                <tr>
                  <th>Teams</th>
                  <th>Appearance</th>
                  <th>Goals</th>
                  <th>Assist</th>
                </tr>
              </thead>
              <tbody>
                {playerData.careerHistory.careerItems.senior.seasonEntries.map(item => (
                  <tr key={item.teamId}>
                    <td>
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.teamId}_xsmall.png`} alt={item.team} style={{ width: "20px", height: "20px" }} />
                      {item.team} ({item.seasonName})
                    </td>
                    <td>{item.appearances}</td>
                    <td>{item.goals}</td>
                    <td>{item.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        )}
    </div>

  );
};

export default Player;
