import React, { useState, useRef, useEffect, useMemo } from "react";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from "react-router-dom";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Line from "../../line.js";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Headphones, OndemandVideo } from "@mui/icons-material";
import AdSenseFluidAd from "./adsense_fluid.jsx";




const All_Matches = ({props, stat}) => {



  const [leagues, setLeagues] = useState([]);
  const [matchPinnedStatus, setMatchPinnedStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState()
  const [following, setFollowing] = useState()
  const navigate = useNavigate();
  const [audio, setAudio]= useState([])
  const [videoa, setVid] = useState([])
  const [much, setMuch] = useState()
   var rec_data = []

  var renderMatches
var recommendation



  useEffect(()=>{
      setFollowing(<div></div>)
  }, [props])

  const fetchData = async () => {
   
    try {
       const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const userCode = "INT"
      var formatted_date
      var notch_date = props.replace(/-/g, '')
    
      const date = new Date();
       var mate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
      props === "today" ? formatted_date = mate :formatted_date = notch_date 
    
      const raw_data = await axios.get(`${Line}/match`, {
        params: { timeZone: userTimeZone, code: userCode, date: formatted_date },
      });
      
      setLeagues(raw_data.data.leagues);

    const audio_data = await axios.get(`${Line}/audio_matches`)
    setAudio(audio_data.data)


    const vd =    await axios.get(Line+"/get_video_data")
    setVid(vd.data)

      const league = raw_data.data.leagues
      const raw = localStorage.getItem("data");
      const done = JSON.parse(raw);
      const { data: users } = await axios.get(`${Line}/users`);
      if(raw != null){
      const user = users.find(user => user.email === done.email && user.password === done.password);

      
    var pinner = []
  

    league.map((item)=>{
      item.matches.map((id)=>{
        pinner.push(id)
      })
    })


  var involved =  []

  pinner.map((item)=>{
   
   if(user != null){
    user.favorite_league.map((id)=>{

      league.map((i)=>{


         if(i.primaryId === JSON.parse(id).id){
           i.matches.map((ele)=>{

            if(involved.includes(ele)){
            
          } 
          else{
            involved.push(ele)
          }


           })
          }
         
        

      })

     

      
        
    })
    user.favorite_team.map((id)=>{
        if(item.home.id === JSON.parse(id).id){
          if(involved.includes(item)){
            
          } 
          else{
            involved.push(item)
          }
        }

        if(item.away.id === JSON.parse(id).id){
         if(involved.includes(item)){
            
          } 
          else{
            involved.push(item)
          }
        }


        
    })
  }
   })

    const we = JSON.stringify(involved)
    localStorage.setItem("follow_match", we)
   
        if(involved.length > 0){
  let inv = involved.length > 4 ? false : true;
  

}
    if(involved.length > 0){

      setAds(
        <AdSenseFluidAd/>
        )


    }
    }
    
    } catch (e) {
      console.log(e)
      console.error(e);
       setFollowing(<Alert severity="error">Fail to load data Try checking Network Connection</Alert>)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  setMuch(<Box style={{ display: 'flex', width: "100%", justifyContent: "center" }}>
    <CircularProgress sx={{ backgroundColor: "white", borderRadius: "50%" }} />
  </Box>)
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [props]);

  // Fetch user favorites as before
  const [userFavorites, setUserFavorites] = useState(null);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      const raw = localStorage.getItem("data");
      const done = JSON.parse(raw);
      const { data: users } = await axios.get(`${Line}/users`);

      if(raw != null){
      const user = users.find(user => user.email === done.email && user.password === done.password);
      setUserFavorites(user);
    }
    };

    fetchUserFavorites();

  }, []);

  useEffect(() => {
    if (userFavorites && leagues.length > 0) {
      const pinnedIds = userFavorites.pinned_matches.map(item => JSON.parse(item).id);
      const statusMap = {};
      leagues.forEach(item => {
        item.matches.forEach(match => {
          statusMap[match.id] = pinnedIds.includes(match.id);
        });
      });
      setMatchPinnedStatus(statusMap);
    }
  }, [leagues, userFavorites]);

useEffect(()=>{



  async function followed(){
      
  }

  followed()

  }, [])

  const togglePin = async (match) => {
    const isPinned = matchPinnedStatus[match.id] || false;
    const url = `${Line}/${isPinned ? "unpinned_matches" : "pinned_matches"}`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        id_: userFavorites._id,
        player_id: JSON.stringify(match),
      }),
    });

    setMatchPinnedStatus(prev => ({ ...prev, [match.id]: !isPinned }));
  };


 console.log(leagues)
  leagues.map((item)=>{
   
    if(item.primaryId === 10196 || item.primaryId === 10195 || item.primaryId === 138 ){

      rec_data.push(item)
    }
  })


/////////////////RECOMMENDATION/////////////////////

  recommendation =  useMemo(() => {
    return rec_data.map((item, index) => (


      <>
  
      <Accordion key={index} className= "opacity" defaultExpanded sx={{ borderRadius: '15px', cursor : "pointer", transition : `opacity 0.2s ease`, boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,  }}>
        <AccordionSummary className= "opacity" sx={{background : "white",    borderTopLeftRadius: '15px',    borderTopRightRadius: '15px', height : "20px", }} expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <div  className="league_description" onClick={() => { navigate("leauges/" + item.primaryId); sessionStorage.setItem("selected_league", JSON.stringify(item)); }} style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ width: "20px", height: "20px" }} src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${item.primaryId}.png`} alt="Sportsup"  
    
/>
            <h6 id="break-down1">{item.name || 'League Name'}</h6>
          </div>

        </AccordionSummary>
  <div style= {{width : "100%", background : "lightgrey", height : "1px"}}></div>
        <AccordionDetails>
          {item.matches.map((match, matchIndex) => {
            const dateTimeString = match.status.utcTime;
            const dateObject = new Date(dateTimeString);
            const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const isPinned = matchPinnedStatus[match.id] || false;


            let status;
            let live;

            var aud
           const aud_ids = []
            
          audio.map((item)=>{
              aud_ids.push(item.id)

              if(item.id == match.id ){
       
                 aud = <Headphones style = {{fontSize :  "0.6em"}}/>
              }
          })

          let nik = [] 

if(videoa.data){


     videoa.data.map((item) => {
            if (item.homeName === match.home.name) {
                nik.push(item);
            } else if (item.guestName === match.away.name) {
                nik.push(item);
            }
        });

  
}

            if (!match.status.started && !match.status.cancelled) {
              status = <small style = {{fontSize : "0.7em"}}>{timeString}</small>;
              live = <div onClick={() => togglePin(match)} style={{ cursor: 'pointer' }}>
                {isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </div>;
            } else if (match.status.started && !match.status.finished) {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>;
              live = <h6 style={{ width: "20px", fontSize: "0.7em", display: "flex", justifyContent: "center", height: "20px", alignItems: "center", color: "white", borderRadius: "50%", background: "red" }}>{match.status.liveTime.short}</h6>;
            }
            else if(match.status.cancelled == true){
              live = <h6 style={{ width: "20px", fontSize: "0.7em", display: "flex", justifyContent: "center", height: "20px", alignItems: "center", color: "white", borderRadius: "50%", background: "black" }}>pp</h6>
              status = <div style = {{textDecoration : "line-through"}}>{timeString}</div>;
            }
            else {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6> </div>;
              live = <h6 style={{ width: "20px", height: "20px", textAlign: "center", alignItems: "center", color: "black", borderRadius: "50%", background: "#EEEEEE" }}>FT</h6>;
            }

            return (
              <div key={matchIndex} style={{ display: "flex", marginTop: "0%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50px", alignItems: "center" }}>
                  <div style={{ width: "5%" }}>{live}</div>
                  <Link to={`result/${match.id}`} className= "opacity" state = {match} style={{ display: "flex",  cursor : "pointer", transition : `opacity 0.2s ease`, textDecoration: "none", justifyContent: "space-between", width: "90%" }}>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                      <h6 className="text-dark" style={{ fontSize: "0.7em" }}>{match.home.name}</h6>
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_xsmall.png`} loading="lazy" alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                       {match.status.numberOfHomeRedCards > 0 ? <div style = {{fontSize : "0.5em", transform : `translateY(-100%)`}}>🟥</div> : ""}
                    </div>
                    <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "black" }}>
                    <div>
                      {match.status.aggregatedStr ?  <small style = {{fontSize : "0.7em"}} className = "text-center text-secondary">({match.status.aggregatedStr})</small>: <></>}
                      <br/>
                      <strong>{status}</strong>
                     
                      </div>
                    
                       
                    </div>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                       {match.status.numberOfAwayRedCards > 0 ? <div style = {{fontSize : "0.5em", transform : `translateY(-100%)`}}>🟥</div> : ""}
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_xsmall.png`} loading="lazy" alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
                      <h6 className="text-dark" style={{ fontSize: "0.7em" }}>{match.away.name}</h6>
                       {aud}
                      
                      {nik.length > 0 ?   <OndemandVideo style = {{fontSize :  "0.6em"}}/> : <></>}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>


      </>
    )

); 
 }, [leagues, rec_data,  matchPinnedStatus, audio]);


 
   renderMatches = useMemo(() => {
    return leagues.map((item, index) => (


      <>
  
      <Accordion className= "opacity" key={index} defaultExpanded sx={{ borderRadius: '15px', boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,  }}>
        <AccordionSummary className= "opacity" sx={{background : "white",    borderTopLeftRadius: '15px',   cursor : "pointer", transition : `opacity 0.2s ease`,  borderTopRightRadius: '15px', height : "20px", }} expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <div  className="league_description" onClick={() => { navigate("leauges/" + item.primaryId); sessionStorage.setItem("selected_league", JSON.stringify(item)); }} style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ width: "20px", height: "20px" }} src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${item.primaryId}.png`} alt="Sportsup"  
    
/>
            <h6 id="break-down1">{item.name || 'League Name'}</h6>
          </div>

        </AccordionSummary>
  <div style= {{width : "100%", background : "lightgrey", height : "1px"}}></div>
        <AccordionDetails>
          {item.matches.map((match, matchIndex) => {
            const dateTimeString = match.status.utcTime;
            const dateObject = new Date(dateTimeString);
            const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const isPinned = matchPinnedStatus[match.id] || false;


            let status;
            let live;

            var aud
           const aud_ids = []
            
          audio.map((item)=>{
              aud_ids.push(item.id)

              if(item.id == match.id ){
       
                 aud = <Headphones style = {{fontSize :  "0.6em"}}/>
              }
          })

          let nik = [] 

if(videoa.data){


     videoa.data.map((item) => {
            if (item.homeName === match.home.name) {
                nik.push(item);
            } else if (item.guestName === match.away.name) {
                nik.push(item);
            }
        });

  
}

            if (!match.status.started && !match.status.cancelled) {
              status = <small style = {{fontSize : "0.7em"}}>{timeString}</small>;
              live = <div onClick={() => togglePin(match)} style={{ cursor: 'pointer' }}>
                {isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </div>;
            } else if (match.status.started && !match.status.finished) {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>;
              live = <h6 style={{ width: "20px", fontSize: "0.7em", display: "flex", justifyContent: "center", height: "20px", alignItems: "center", color: "white", borderRadius: "50%", background: "red" }}>{match.status.liveTime.short}</h6>;
            }
            else if(match.status.cancelled == true){
              live = <h6 style={{ width: "20px", fontSize: "0.7em", display: "flex", justifyContent: "center", height: "20px", alignItems: "center", color: "white", borderRadius: "50%", background: "black" }}>pp</h6>
              status = <div style = {{textDecoration : "line-through"}}>{timeString}</div>;
            }
            else {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6> </div>;
              live = <h6 style={{ width: "20px", height: "20px", textAlign: "center", alignItems: "center", color: "black", borderRadius: "50%", background: "#EEEEEE" }}>FT</h6>;
            }

            return (
              <div key={matchIndex} style={{ display: "flex", marginTop: "0%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50px", alignItems: "center" }}>
                  <div style={{ width: "5%" }}>{live}</div>
                  <Link to={`result/${match.id}`} className= "opacity" state = {match} style={{ display: "flex",  cursor : "pointer", transition : `opacity 0.2s ease`, textDecoration: "none", justifyContent: "space-between", width: "90%" }}>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                      <h6 className="text-dark" style={{ fontSize: "0.7em" }}>{match.home.name}</h6>
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_xsmall.png`} loading="lazy" alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                       {match.status.numberOfHomeRedCards > 0 ? <div style = {{fontSize : "0.5em", transform : `translateY(-100%)`}}>🟥</div> : ""}
                    </div>
                    <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "black" }}>
                    <div>
                      {match.status.aggregatedStr ?  <small style = {{fontSize : "0.7em"}} className = "text-center text-secondary">({match.status.aggregatedStr})</small>: <></>}
                      <br/>
                      <strong>{status}</strong>
                     
                      </div>
                    
                       
                    </div>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                       {match.status.numberOfAwayRedCards > 0 ? <div style = {{fontSize : "0.5em", transform : `translateY(-100%)`}}>🟥</div> : ""}
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_xsmall.png`} loading="lazy" alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
                      <h6 className="text-dark" style={{ fontSize: "0.7em" }}>{match.away.name}</h6>
                       {aud}
                      
                      {nik.length > 0 ?   <OndemandVideo style = {{fontSize :  "0.6em"}}/> : <></>}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>


      </>
    ));
  }, [leagues, matchPinnedStatus, audio]);

 

  useEffect(()=>{
          setFollowing()
          setMuch(
            <div className="container" style={{ background: "#EEEEEE" }}>
      {loading && leagues.length === 0 ? (  // Show spinner only if loading and no leagues are present
        <Box style={{ display: 'flex', background : "inherit", width: "100%", justifyContent: "center" }}>
          <CircularProgress sx={{ backgroundColor: "white", borderRadius: "50%" }} />
        </Box>
      ) : (

      <div>

       {rec_data.length > 0 ? <small className = "text-center text-secondary">Recommended for You</small>: <></>}
       {recommendation}
       { renderMatches}

        

        </div>
      )}
    </div>
          )
  }, [leagues,])

  return (
    <>
        {much}
    </>
  );
};

export default All_Matches;
