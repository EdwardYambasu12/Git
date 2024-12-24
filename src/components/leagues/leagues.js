import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import Pagination from '@mui/material/Pagination';
import {
  Button, 
  CircularProgress, 
  Divider, 
  List, 
  ListItemButton, 
  ListItemText, 
  Box, 
  Skeleton, 
  Tabs, 
  Tab, 
  Typography, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Dialog, 
  Slide 
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Line from "../../line.js"; // Make sure this path is correct
import AdSenseAd from "../nav/adsensead.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    secondary: {
      main: '#f44336',
    },
  }
});


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


const Ayyah = ()=>{

  
    const [modem, setModem] = useState()
      const { id } = useParams();
  const [value, setValue] = useState(0);

  const [playerData, setPlayerData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const fetchPlayerData = async () => {
    try {
      const response = await axios.get(`${Line}/league`, { params: { id } });
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
     if(raw!= null){
    const user = users.find(user => user.email === done.email && user.password === done.password);

   

      const monk = {
        id : playerData.details.id,
        name : playerData.details.name,
              }

      const league = JSON.stringify(monk)
     

    if (user?.favorite_league.includes(league)) {
      setIsFollowing(true);
    }

    const filterer = user.favorite_league.filter(item=> item === league)



    return(user)

  }
  };

  const toggleFollowPlayer = async () => {
    const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);

      const monk = {
        id : playerData.details.id,
        name : playerData.details.name,
              }

      const league = JSON.stringify(monk)
    const user_id = await fetchUserFavorites()
    const place = {
      id_: user_id._id,
      league_id: league,
    };

    const url = isFollowing ? `${Line}/favorite_league_remove` : `${Line}/favorite_league`;
    
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(place),
    });
    console.log(place, "place")
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {

        fetchPlayerData();
   
  }, []);

  if (loading) return(<div>

    <Skeleton variant="rectangular" width={"100%"} height={160} />

    <br></br>

    <Skeleton className = "container" variant="rectangular" width={"100%"} height={window.innerHeight-160} />

    </div>);
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

  

      const monk = {
        id : playerData.details.id,
        name : playerData.details.name,
              }

      const league = JSON.stringify(monk)
    console.log(user)
    const filterer = user.favorite_league.filter(id=> id === league )
      
    if(filterer.length > 0){
      console.log("following this league")
      setIsFollowing(true)
    }

  }
  }

  toller()
   return(
                  <div style={{ height: "150px" }}>
                        <div style = {{ background: data.details.leagueColor,}} className =  "fixed-top">
                  <br></br>
            <div style={{ display: "flex", width: '100%', justifyContent: "space-between" }}>
              <ArrowBackIcon onClick={() => navigate(-1)} style={{ color : "white", cursor: 'pointer' }} />
              <Button style = {{background : "white", color : "blue"}} onClick={toggleFollowPlayer} variant={isFollowing ? "contained" : "outlined"}>
            {isFollowing ? "Following" : "Follow"}
          </Button>
            </div>
            <div style={{ display: "flex", width: '100%', justifyContent: "space-between" }}>
              <div style={{ display: "flex", width: "100%" }}>
                <img style={{ width: "50px", height: "50px", background : "white" }} src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${data.details.id}.png`} alt="League Logo" />
                <div>
                  <Typography variant="h5" color="white">{data.details.name}</Typography>
                  <Typography color="gold">{data.details.country}</Typography>
                </div>
              </div>
            </div>
            <ThemeProvider theme={theme}>
              <Tabs
                style={{ background: "inherit", borderWidth: "0px", boxShadow: "none", color: "white" }}
                value={value}
                TabIndicatorProps={{ style: { backgroundColor: 'gold', color: "white" } }}
                onChange={(event, newValue) => setValue(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="gold tabs example"
              >
                {data.tabs.map((item) => (
                  <Tab key={item} style={{ color: "white" }} label={item === "overview" ? "Info" : item} />
                ))}
              </Tabs>
            </ThemeProvider>


            </div>
            <div style = {{marginTop : 180}}  className = "container">
              <SwipeableViews index={value} onChangeIndex={(index) => setValue(index)}>
                {data.tabs.map((item, index) => (
                <div>
                  <Typography component="div" role="tabpanel" hidden={value !== index} key={item}>
                    {item === "overview" && <Info data={data} />}
                    {/* Add other cases for "table", "matches", "stats" here */}
                  </Typography>

                   <Typography component="div" role="tabpanel" hidden={value !== index} key={item}>
                    {item === "table" && <Table data={data} />}
                    {/* Add other cases for "table", "matches", "stats" here */}
                  </Typography>

                    <Typography component="div" role="tabpanel" hidden={value !== index} key={item}>
                    {item === "stats" && <Stats data={data} />}
                    {/* Add other cases for "table", "matches", "stats" here */}
                  </Typography>
                  <Typography component="div" role="tabpanel" hidden={value !== index} key={item}>
                    {item === "matches" && <Matches data={data} />}
                    {/* Add other cases for "table", "matches", "stats" here */}
                  </Typography>

                  <Typography component="div" role="tabpanel" hidden={value !== index} key={item}>
                    {item === "transfers" && <Transfers data={data} />}
                    {/* Add other cases for "table", "matches", "stats" here */}
                  </Typography>


                  </div>
                ))}
              </SwipeableViews>
            </div>
          </div>
            )

    

    
}
const Player = ({ player }) => {
  const { name, playerImage, horizontalLayout, verticalLayout, id, rating, teamId } = player;
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const monk =  sessionStorage.getItem("data_");
const parser = JSON.parse(monk);

  useEffect(() => {
    const fetchPlayerData = async () => {



        setData(
          <div onClick = {()=>{navigate("/player/"+id)}}
            style={{
              position: 'absolute',
              left: `${verticalLayout.x * 100}%`,
              top: `${verticalLayout.y * 100}%`,
              width: 50,
              height: 50,
              backgroundColor: 'white',
              backgroundImage: `url("https://images.fotmob.com/image_resources/playerimages/${id}.png")`,
              backgroundSize: 'cover',
              color: 'white',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              transform: 'translatex(-50%) translateY(-70%)',
              textAlign: 'center'
            }}
        
          >
            <div
              style={{
                color: 'white',
                height : 17,
                borderRadius: '5px',
                transform: 'translateY(-40%)',
                background: rating.bgcolor
              }}
            >
          <p>{rating.num}</p>
            </div>
            <div> <img
                      src={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}_xsmall.png`}
                                                                                                                             
                          style={{ width: "15px", height: "15px", borderRadius: "50%" }}
                      /></div>
            <div style={{ transform: 'translateY(170%)', textAlign: 'center' }}>
              <strong>{name.lastName}</strong>
            </div>
          </div>
        );
      }
  
    

    fetchPlayerData();
  }, [player.id, verticalLayout.x, verticalLayout.y]);

  return (
    <>
      {data}


    </>
  );
};


const Field = ({ players }) => {

     const fieldStyle = {
    position: 'relative',
    width: '100%', // Full width
    height: '70%', // Taller height for portrait mode
    backgroundColor: 'darkgray',
    borderTopRadius : "10px"
  };

return (
    <div style= {fieldStyle}>
      {players.map(player =>{

      return (
        <Player key={player.id} player={player} />
      )})}
    </div>
  );
    
};

////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////// T R A N S F E R S

const Transfers = ({data})=>{

        const [trans, setTrans]= useState()


        useEffect(()=>{

                                setTrans(
                                                data.transfers.data.map((item)=>{

                                                    console.log("data transfer", item)

                                                      const dateTimeString = item.transferDate;
                                                        const dateObject = new Date(dateTimeString);

                                                          // Format the date using toLocaleDateString for better readability
                                                                const date_value = dateObject.toLocaleDateString();
                                                                         return(
                                                                    <div>
                                                                                <div style = {{width : "100%", display : "flex", justifyContent : "center"}}>
                                                                                            <img style = {{width : "60px", height : "60px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.playerId+".png"}/>
                                                                                            
                                                                                </div>

                                                                                <h6 className = "text-center">{item.name}</h6>

                                                                                <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                                                                                            <div><h6>from : {item.fromClub}</h6></div>
                                                                                            <div><h6>to : {item.toClub} </h6></div>
                                                                                </div>
                                                                                <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                                                                                            <div><p>Fee : {item.fee!= null ? item.fee.vlaue : ""}</p></div>
                                                                                            <div><p> Date : {date_value} </p></div>
                                                                                </div>

                                                                    </div>
                                                        )
                                                })
                                    )
        }, [])

        return(
                        <div>
                                    {trans}
                        </div>
            )

}



///////////////////////////////////M A T C H E S


const Matches = ({data})=>{
    const navigate = useNavigate()
    const [ba, setBa] = useState()


const[page_value, setPage_value] = useState(1)




useEffect(()=>{

                async function wonder( ) {
                    // body...
            
                    console.log("base on research ")
                  const raw_data = await axios.get(Line+"/round",  {
                        params : {
                            season : data.details.latestSeason,
                            id : data.details.id

                        }
                        })
                     
                            if(raw_data.rounds){
                      
                                setPage_value(raw_data.data.rounds[0].roundId)
                             }
                        }

                        wonder()


}, [])
                        function groupObjectsByProperty(objects, property) {
                            return objects.reduce((groups, obj) => {
                                const key = obj[property];
                                if (!groups[key]) {
                                    groups[key] = [];
                                }
                                groups[key].push(obj);
                                return groups;
                            }, {});
                        }

                        // Group objects by the 'category' property
                        const groupedObjects = groupObjectsByProperty(data.matches.allMatches, 'round');

                        // Convert the grouped objects into an array of arrays
                        const groupedArrays = Object.values(groupedObjects);

                      console.log(groupedArrays)
                             useEffect(()=>{

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

            setBa(
        
                    <div>
          <Pagination 
      count={groupedArrays.length} 
      onChange={handlePageChange} // Use `onChange` instead of `onClick`
      color="primary" 
    />
        {groupedArrays[page_value-1].map((match, index)=>{




                    const dateTimeString = match.status.utcTime;
                        const dateObject = new Date(dateTimeString);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


                    const timestamp = match.timeTS;
                const dateObject1 = new Date(timestamp);
                  const timeString1 = dateObject1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



                 var status 
                    var live

                    if(match.status.started == false){
                      status = timeString
                  
                    }

                    if(match.status.started == true && match.status.finished == false){
                      status = <div style = {{display : "flex", width : "100%", color : "white", justifyContent : "spaceBetween"}}>{match.status.scoreStr}</div>
                        live =  <h6 style = {{width : "20px",fontSize : "0.7em", display : "flex", justifyContent : "center", height : "20px",  alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{match.status.liveTime.short}</h6>
                    
                    }

                    if(match.status.finished == true){
                        status = <div style = {{display : "flex", color : "white", width : "100%", justifyContent : "spaceBetween"}}>{match.status.scoreStr}</div>
                      live =  <h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "black", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>
                    
                    }

            return(
                            <div    onClick={() => {navigate(`/result/${match.id}`); window.location.reload()}}  style={{ display: "flex", marginTop: "3%", width: "100%", justifyContent: "space-between", background: data.details.leagueColor, color : "white", borderRadius: "10px", textDecoration: "none" }}>
                                      <div  style={{ display: "flex", textDecoration: "none", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
            <h6 className="text-light" style={{ fontSize: "1em" }}>{match.home.name}</h6>
            <img  src={"https://images.fotmob.com/image_resources/logo/teamlogo/"+match.home.id+"_xsmall.png"} loading="lazy"  alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "whtie" }}>
            <strong className = "text-light ">{status}</strong>
          </div>
          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
            <img src={"https://images.fotmob.com/image_resources/logo/teamlogo/"+match.away.id+"_xsmall.png"} loading = "lazy"  alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
            <h6 className="text-light" style={{ fontSize: "1em" }}>{match.away.name}</h6>
          </div>
        </div>
                            </div>
                )
        })}

    </div>



    )
    }, [page_value])
                              
                                     
                                 

    
                           return(
                                                    <div style = {{background : "white"}}>
                                                         {ba}

                                                    </div>
                                        )

}

///////////////////////////////////S T A T S

const Stats = ({data})=>{

    const [ret, setRet] = useState()
    const [value, setValue] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{

        if(data.stats.players != null && data.stats.teams != null){

                    setRet(
                                    <div>
                                                <div>
                                                      <ThemeProvider theme={theme}>
              <Tabs
                style={{ background: "inherit", borderWidth: "0px", boxShadow: "none", color: "white" }}
                value={value}
                TabIndicatorProps={{ style: { backgroundColor: 'gold', color: "white" } }}
                onChange={(event, newValue) => setValue(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="gold tabs example"
              >
            
                        <Tab label = "Players">Players</Tab>
                        <Tab label = "Teams">Teams</Tab>
                     
                    
              </Tabs>
            </ThemeProvider>


            </div>
           <SwipeableViews index={value} onChangeIndex={(index) => setValue(index)}>
      
          <Typography component="div" role="tabpanel" hidden={value !== 0}>
                        <div>
                                    {data.stats.players.map((item)=>{

                                        var header 

                                        if(item.header == "FotMob rating"){
                                            header = "sportsup rating"
                                        }

                                        else {
                                            header = item.header
                                        }

                                        return(
                                                        <div style = {{background : data.details.leagueColor, marginTop : "5%"}}>
                                                                            <h5 className = "text-center text-warning">{header}</h5>

                                                                            {
                                                                                item.topThree.map((id)=>{
                                                                                                return(
                                                                                                             <div>
                                                                                        <div onClick = {()=>{navigate("/player/"+id.id)}} style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
                                                                                        <div style = {{display : "flex"}}>
                                                                                                    <img src = {"https://images.fotmob.com/image_resources/playerimages/"+id.id+".png"} style = {{width : "50px", background : "white", height : "50px"}}></img>
                                                                                                    <div >
                                                                                                                <h6 className = "text-light">{id.name}</h6>
                                                                                                                <div style = {{display : "flex"}}>
                                                                                                                    <img
                                                                                                                      src={`https://images.fotmob.com/image_resources/logo/teamlogo/${id.teamId}_xsmall.png`}
                                                                                                                             
                                                                                                                       style={{ width: "15px", height: "15px", borderRadius: "50%" }}
                      />
                                                                                                                    <small className = "text-light">{id.teamName}</small>
                                                                                                                </div>
                                                                                                    </div>
                                                                                        </div>
                                                                                                    <h6 className = "text-light">{id.value}</h6>
                                                                                        </div>
                                                                                        <hr></hr>
                                                                            </div>

                                                                                                )
                                                                            })
                                                                        }
                                                        </div>
                                            )
                                    })}
                        </div>
          </Typography>

          <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {/* Content for the second panel */}
          <div>
                                    {data.stats.teams.map((item)=>{

                                            
                                            
                                        var header 

                                        if(item.header == "FotMob rating"){
                                            header = "sportsup rating"
                                        }

                                        else {
                                            header = item.header
                                        }

                                        return(
                                                        <div style = {{background : data.details.leagueColor, marginTop : "5%"}}>
                                                                            <h5 className = "text-center text-warning">{header}</h5>

                                                                            {
                                                                                item.topThree.map((id)=>{
                                                                                                return(
                                                                                                             <div>
                                                                                        <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}  onClick = {()=>{navigate("/team/"+id.id);const stringer = JSON.stringify(id); sessionStorage.setItem("selected_league", stringer)}}>
                                                                                        <div style = {{display : "flex"}}>

                                                                                                    <img src = {"https://images.fotmob.com/image_resources/logo/teamlogo/"+id.teamId+"_xsmall.png"} style = {{width : "50px", background : "white", height : "50px"}}></img>
                                                                                                    <div >
                                                                                                                <h6 className = "text-light">{id.name}</h6>
                                                                                                               
                                                                                                    </div>
                                                                                        </div>
                                                                                                    <h6 className = "text-light">{id.value}</h6>
                                                                                        </div>
                                                                                        <hr></hr>
                                                                            </div>

                                                                                                )
                                                                            })
                                                                        }
                                                        </div>
                                            )
                                    })}
                        </div>
          </Typography>

          <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {/* Content for the second panel */}
          </Typography>
 
      </SwipeableViews>
                            dp
                                    </div>
                        )
}
    }, [value])

    return(
                <div>
                            {ret}

                            Stats
                </div>
    )
}




/////////////////////////////////T A B L E

const Table = ({data})=>{


    const [composite_true, setCompositeTrue] = useState()
    const [composite_false, setCompositeFalse] = useState()
    const navigate = useNavigate()


    useEffect(()=>{

        if(data.overview.table.length>0){


                    ////////////////COMPOSITE TRUE



                   if(data.overview.table[0].data.composite === true){

                 setCompositeTrue(   data.overview.table[0].data.tables.map((item)=>{

                var tabber = item.table.all 

                var main_tabber = tabber

                    



                return(
                                <div key={item.leagueName} style={{ marginBottom: "20px" }}>
          <h2>{item.leagueName}</h2>
          <table>
            <thead>
              <tr style={{ width: "100%" }}>
                <td style={{ width: "10%" }}>#</td>
                <td style={{ width: "55%" }}>Team</td>
                <td style={{ width: "10%" }}>Pld</td>
                <td style={{ width: "10%" }}>GD</td>
                <td style={{ width: "10%" }}>PTS</td>
              </tr>
            </thead>

            <tbody>
                        {main_tabber.map((team, index)=>{

                            return(
                                                   <tr

                                                   onClick = {()=>{navigate("/team/"+team.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}}
                  key={team.id}
                  style={{ width: "100%", backgroung : "inherit", height: "50px", fontSize: '0.7em', fontWeight: "bold", alignItems: "center" }}
                >
                  <td style={{ width: "10%" }}>{index + 1}</td>
                  <td style={{ width: "55%" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.id}_xsmall.png`}
                        alt={team.name}
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{team.name}</div>
                    </div>
                  </td>
                   <td style = {{width : "10%", background : "inherit"}}>{Number(team.wins)+Number(team.draws)+Number(team.losses)}</td>
                  <td style={{ width: "10%" }}>{team.goalConDiff}</td>
                  <td style={{ width: "10%" }}>{team.pts}</td>
                </tr>
                            )

                        })}
            </tbody>

                

            </table>

            </div>
                    )
                    })

)
}

                    ///////////////COMPOSITE FALSE


                    if(data.overview.table[0].data.composite === false){


                        setCompositeFalse(
                                <div>

                                   { data.overview.table.map((item)=>{
                                         var tabber = item.data.table.all 

                var main_tabber = tabber

                return(
                                <div key={item.leagueName} style={{ marginBottom: "20px" }}>
          <h2>{item.leagueName}</h2>
          <table>
            <thead>
              <tr style={{ width: "100%" }}>
                <td style={{ width: "10%" }}>#</td>
                <td style={{ width: "55%" }}>Team</td>
                <td style={{ width: "10%" }}>Pld</td>
                <td style={{ width: "10%" }}>GD</td>
                <td style={{ width: "10%" }}>PTS</td>
              </tr>
            </thead>

            <tbody>
                        {main_tabber.map((team, index)=>{

                            return(
                                                   <tr

                                                   onClick = {()=>{navigate("/team/"+team.id);const stringer = JSON.stringify(team); sessionStorage.setItem("selected_league", stringer)}}
                  key={team.id}
                  style={{ width: "100%", backgroung : "inherit", height: "50px", fontSize: '0.7em', fontWeight: "bold", alignItems: "center" }}
                >
                  <td style={{ width: "10%" }}>{index + 1}</td>
                  <td style={{ width: "55%" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.id}_xsmall.png`}
                        alt={team.name}
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{team.name}</div>
                    </div>
                  </td>
                   <td style = {{width : "10%", background : "inherit"}}>{Number(team.wins)+Number(team.draws)+Number(team.losses)}</td>
                  <td style={{ width: "10%" }}>{team.goalConDiff}</td>
                  <td style={{ width: "10%" }}>{team.pts}</td>
                </tr>
                            )

                        })}
            </tbody>

                

            </table>

            </div>
                    )
                                    })
}
                                </div>
                            )
                    }


}
    }, [])

    return(
            <div>
                    {composite_true}
                    {composite_false}
            </div>
    )
}



//////////////////////////////// E  N D T A B L E //////////////////////////


        
const Info = ({ data }) => {


  console.log(data, "props");
  const [host, setHost] = useState()
  const [tabled, setTable]  = useState()
  const [topstats, setTopstats] = useState()
  const [towt, setTOWT] = useState()
  const navigate = useNavigate()
  const [news, setNews] = useState()

    useEffect(()=>{
        ////////////////////////////LEAGUE NEWS////////////////////////
                    axios.get(Line+"/league_news", {
                        params : {
                            id : data.details.id
                        }
                    
                    })

                    .then((res)=>{
                        console.log(res)

                          setNews(
                      <div className = "row">

                          { 
                          res.data.data ?
                          res.data.data.map((item)=>{

                            var url 
                              if(item.sourceStr === "FotMob" || item.sourceStr === "90min"){

                               const baseUrl = "https://www.fotmob.com";
                                const itemPageUrl = item.page.url; // Assuming item.page.url is a variable with the dynamic path

                                url = `${baseUrl}${itemPageUrl}`;
                                console.log(url)
                                  return(


                                  <Link onClick  = {()=>{

                                window.open(url, '_blank', 'noopener,noreferrer');
 
                                  }} state = {{l : url, m : 1}}   className = "col-md-4" style = {{textDecoration : "none", color : "black", background : "white", borderRadius: "10px", marginTop : "5%"}}>
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
                          })
                          :
                          ""
                        }

                
                      </div>

                      )
                          
                    })

        /////////////////////////TEAM OF THE WEEK/////////////////

            async function praise(){

               

                if(data.overview.hasTotw === true){

                     const raw = await axios.get(Line+"/round",  {
                        params : {
                            season : data.details.latestSeason,
                            id : data.details.id
                        }
                    })

                const round = raw.data
                console.log(round, "round")
               
                    axios.get(Line+"/totw", {
                        params : {
                            season : data.details.latestSeason,
                            id : data.details.id,
                            round : raw.data.rounds[0].roundId   
                        }
                    })
                    .then((res)=>{
                                    console.log(res, "team of the week")
                                      if(res.data.length > 0){
                                    setTOWT(
                                    <div className="container" style={{ width: '100vw', height: '100vh', borderRadius : "10px", background : "white" }}>
                                               <h6 className = "text-center text-dark">Team Of The Week</h6>
                                                <Field players={res.data} />

                                    </div>
                                    )
                                    }

                                    else{
                                        axios.get(Line+"/totw", {
                        params : {
                            season : data.details.latestSeason,
                            id : data.details.id,
                            round : raw.data.rounds[1].roundId   
                        }
                    })
                    .then((response)=>{
                         setTOWT(
                                    <div className="container" style={{ width: '100vw', height: '100vh', borderRadius : "10px", background : "white" }}>
                                               <h6 className = "text-center text-dark">Team Of The Week</h6>
                                                <Field players={response.data} />

                                    </div>
                                    )
                    })
                                    }
                    })
                }

            }

            praise()

            /////////////////Top Stats//////////////
                        
            if(data.overview.topPlayers.byAssists.players){


                        setTopstats(

                                    <div  style = {{ justifyContent : "space-between", width : "100%"}}>
                                                <div style = {{background : data.details.leagueColor, borderRadius : "10px"}}>
                                                            <h6 className = "text-center text-light"><strong>Top Rated</strong></h6>
                                                            
                                                            {data.overview.topPlayers.byRating.players ? data.overview.topPlayers.byRating.players.map((item)=>{

                                                                return(
                                                                            <div>
                                                                                        <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}} onClick = {()=>{navigate("/player/"+item.id)}}>
                                                                                        <div style = {{display : "flex"}}>
                                                                                                    <img src = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"} style = {{width : "50px", background : "white", height : "50px"}}></img>
                                                                                                    <div >
                                                                                                                <h6 className = "text-light">{item.name}</h6>
                                                                                                                <div style = {{display : "flex"}}>
                                                                                                                    <img
                                                                                                                      src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.teamId}_xsmall.png`}
                                                                                                                             
                                                                                                                       style={{ width: "15px", height: "15px", borderRadius: "50%" }}
                      />
                                                                                                                    <small className = "text-light">{item.teamName}</small>
                                                                                                                </div>
                                                                                                    </div>
                                                                                        </div>
                                                                                                    <h6 className = "text-light">{item.rating}</h6>
                                                                                        </div>
                                                                                        <hr></hr>
                                                                            </div>
                                                                )
                                                            }) :
                                                            ""
                                                            }
                                                </div>



                                                {/*Goals*/}

                                                 <div  style = {{background : data.details.leagueColor, borderRadius : "10px"}}>
                                                           
                                                            <h6 className = "text-center text-light"><strong>Highest Scorers</strong></h6>
                                                            {data.overview.topPlayers.byGoals.players ? data.overview.topPlayers.byGoals.players.map((item)=>{

                                                                return(
                                                                            <div>
                                                                                        <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}} onClick = {()=>{navigate("/player/"+item.id)}}>
                                                                                        <div style = {{display : "flex"}}>
                                                                                                    <img src = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"} style = {{width : "50px", background : "white", height : "50px"}}></img>
                                                                                                    <div >
                                                                                                                <h6 className = "text-light">{item.name}</h6>
                                                                                                                <div style = {{display : "flex"}}>
                                                                                                                    <img
                                                                                                                      src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.teamId}_xsmall.png`}
                                                                                                                             
                                                                                                                       style={{ width: "15px", height: "15px", borderRadius: "50%" }}
                      />
                                                                                                                    <small className = "text-light">{item.teamName}</small>
                                                                                                                </div>
                                                                                                    </div>
                                                                                        </div>
                                                                                                    <h6 className = "text-light">{item.goals}</h6>
                                                                                        </div>
                                                                                        <hr></hr>
                                                                            </div>
                                                                )
                                                            }) : ""}
                                                </div>


                                                  {/*Assist*/}

                                                 <div  style = {{background : data.details.leagueColor, borderRadius : "10px"}}>
                                                            <h6 className = "text-center text-light"><strong>Top Assists</strong></h6>
                                                            {data.overview.topPlayers.byAssists.players ? data.overview.topPlayers.byAssists.players.map((item)=>{

                                                                return(
                                                                            <div>
                                                                                        <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}} onClick = {()=>{navigate("/player/"+item.id)}}>
                                                                                        <div style = {{display : "flex"}}>
                                                                                                    <img src = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"} style = {{width : "50px", background : "white", height : "50px"}}></img>
                                                                                                    <div >
                                                                                                                <h6 className = "text-light">{item.name}</h6>
                                                                                                                <div style = {{display : "flex"}}>
                                                                                                                    <img
                                                                                                                      src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.teamId}_xsmall.png`}
                                                                                                                             
                                                                                                                       style={{ width: "15px", height: "15px", borderRadius: "50%" }}
                      />
                                                                                                                    <small className = "text-light">{item.teamName}</small>
                                                                                                                </div>
                                                                                                    </div>
                                                                                        </div>
                                                                                                    <h6 className = "text-light">{item.assists}</h6>
                                                                                        </div>
                                                                                        <hr></hr>
                                                                            </div>
                                                                )
                                                            }) : ""}
                                                </div>
                                    </div>
                        )
                    }
            //////////////////Table//////////////////
            if(data.overview.table != null){
        if(data.overview.table.length > 0){

            const table = data.overview.table

            setTable( table.map((item)=>{

                if(item.data.composite === false){
                var tabber = item.data.table.all 

                var main_tabber = tabber.slice(0,4)

                return(
                                <div key={item.leagueName} style={{ marginBottom: "20px" }}>
          <h2>{item.leagueName}</h2>
          <table>
            <thead>
              <tr style={{ width: "100%" }}>
                <td style={{ width: "10%" }}>#</td>
                <td style={{ width: "55%" }}>Team</td>
                <td style={{ width: "10%" }}>Pld</td>
                <td style={{ width: "10%" }}>GD</td>
                <td style={{ width: "10%" }}>PTS</td>
              </tr>
            </thead>

            <tbody>
                        {main_tabber.map((team, index)=>{

                            return(
                                                   <tr
                                                   onClick = {()=>{navigate("/team/"+team.id);const stringer = JSON.stringify(team); sessionStorage.setItem("selected_league", stringer)}}
                  key={team.id}
                  style={{ width: "100%", backgroung : "inherit", height: "50px", fontSize: '0.7em', fontWeight: "bold", alignItems: "center" }}
                >
                  <td style={{ width: "10%" }}>{index + 1}</td>
                  <td style={{ width: "55%" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.id}_xsmall.png`}
                        alt={team.name}
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{team.name}</div>
                    </div>
                  </td>
                   <td style = {{width : "10%", background : "inherit"}}>{Number(team.wins)+Number(team.draws)+Number(team.losses)}</td>
                  <td style={{ width: "10%" }}>{team.goalConDiff}</td>
                  <td style={{ width: "10%" }}>{team.pts}</td>
                </tr>
                            )

                        })}
            </tbody>

                

            </table>

            </div>
                    )

                }

              
            })

            )
        }

        }

    }, [])

  return(

  <div >
    <div style = {{background : "#EEEEEE", width : "100%", borderRadius : "10px"}}>

    {tabled}

    </div>
<AdSenseAd/>
    <div style = {{marginTop : "8%", height : "630px"}}>
        {towt}
    </div>


    <div >
                {topstats}
    </div>

        <div >
                {news}
    </div>
  </div>

  )
};
















const Leagues = () => {

    const {id} = useParams()

  const [ret, setRet] = useState(
    <div>
      <Skeleton variant="rectangular" width="100%" height={180} />
      <Skeleton variant="rectangular" width="100%" height={window.innerHeight - 180} />
    </div>
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetcher = async () => {
      try {
        

        setRet(
        <div >
                <Ayyah/>
        </div>
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        setRet(<div>Error fetching data</div>);
      }
    };

    fetcher();
  }, []);

  return (
    <div>
      {ret}
    </div>
  );
};

export default Leagues;
