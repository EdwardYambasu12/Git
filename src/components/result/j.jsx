import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import "./matches.css";
import Line from "../../line.js";

const fetchImage = async (url) => {
  try {
    const response = await axios.get('http://localhost:5000/proxy', {
      params: {
        url,
        w: '48',
        q: '75',
      },
      responseType: 'arraybuffer',
    });

    const base64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    return `data:${response.headers['content-type']};base64,${base64}`;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

const View_uP = ({ data }) => {
  const [images, setImages] = useState([]);
  const [teamLogos, setTeamLogos] = useState([]);
  const cache = new Map();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagePromises = data.map(async (item) => {
          const img_c = item.ccode.toLowerCase();
          const url = `https://images.fotmob.com/image_resources/logo/teamlogo/${img_c}.png`;

          if (cache.has(url)) {
            return { ...item, imageUrl: cache.get(url) };
          }

          const imageUrl = await fetchImage(url);
          cache.set(url, imageUrl);

          return {
            ...item,
            imageUrl,
          };
        });

        const imagesResult = await Promise.all(imagePromises);
        setImages(imagesResult);

        const teamLogoPromises = data.flatMap(item =>
          item.matches.map(async (match) => {
            const { home, away } = match;

            const fetchLogo = async (teamId) => {
              const url = `https://images.fotmob.com/image_resources/logo/teamlogo/${teamId}_xsmall.png`;
              if (cache.has(url)) {
                return cache.get(url);
              }

              const logo = await fetchImage(url);
              cache.set(url, logo);
              return logo;
            };

            const team_home_logo = await fetchLogo(home.id);
            const team_away_logo = await fetchLogo(away.id);

            return {
              ...match,
              team_home_logo,
              team_away_logo,
            };
          })
        );

        const teamLogosResult = await Promise.all(teamLogoPromises);
        setTeamLogos(teamLogosResult.flat());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <div style={{ marginTop: '2%', borderRadius: '15%', width: '100%' }}>
      {images.map((item, index) => (
        <Accordion key={index} defaultExpanded sx={{ borderRadius: '15px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <div className="league_description" style={{ display: 'flex', alignItems: 'center' }}>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={`${item.name} logo`} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
              ) : (
                <span>No Image</span>
              )}
              <h6 id="break-down1">{item.name || 'League Name'}</h6>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {item.matches && item.matches.length > 0 ? item.matches.map((match, matchIndex) => {
              const homeLogo = teamLogos.find(logo => logo.match_id === match.match_id)?.team_home_logo;
              const awayLogo = teamLogos.find(logo => logo.match_id === match.match_id)?.team_away_logo;
              const filterer = teamLogos.filter(d=> d.id === match.id)

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
                      live = <BookmarkBorderIcon className = "text-dark" />
                    }

                    if(match.status.started == true && match.status.finished == false){
                      status = <div style = {{display : "flex", width : "100%", justifyContent : "spaceBetween"}}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>
                        live =  <h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "black", borderRadius : "50%", background : "#EEEEEE"}}>timeString1</h6>
                    
                    }

                    if(match.status.finished == true){
                        status = <div style = {{display : "flex", width : "100%", justifyContent : "spaceBetween"}}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>
                      live =  <h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "black", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>
                    
                    }


                

                    return(
                    <div key={matchIndex} style={{ display: "flex", marginTop: "3%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50px", alignItems: "center" }}>
                        <div style = {{width : "5%"}} >{live} </div> 
                        <Link href={`result/${match.match_id}`} style={{ display: "flex", textDecoration: "none", justifyContent: "space-between", width: "90%" }}>
                          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                            <h6 className="text-dark" style={{ fontSize: "0.8em" }}>{match.home.name}</h6>
                            <img src={filterer[0].team_home_logo || 'path_to_default_home_logo'} alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                          </div>
                          <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign : "center", display: "flex", color: "black" }}>
                            {/* Live status or commentary icon */}
                         <strong> {status}</strong>

                          </div>
                          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                            <img src={filterer[0].team_away_logo || 'path_to_default_away_logo'} alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
                            <h6 className="text-dark" style={{ fontSize: "0.8em" }}>{match.away.name}</h6>

                          </div>
                        </Link>
                      </div>
                      <div></div>
                    </div>
                    )
                  }) : <p>No matches available</p>}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const All_Matches = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const Data_to_use = async () => {
      try {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const response = await fetch('https://ipapi.co/json/');
        const lenovo = await response.json();
        const userCode = lenovo.country_code;

        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formatted_date = `${year}${month}${day}`;

        const raw_data = await axios.get(`${Line}/match`, {
          params: {
            timeZone: userTimeZone,
            code: userCode,
            date: formatted_date,
          },
        });

        const data = raw_data.data;
        setLeagues(data.leagues);
      } catch (e) {
        console.log(e);
      }
    };

    Data_to_use();
  }, []);

  return (
    <div style={{ background: "#EEEEEE" }}>
      {leagues.length > 0 ? <View_uP data={leagues} /> :  <Box style={{ display: 'flex', width : "100%", justifyContent : "center",  }}>
      <CircularProgress sx= {{backgroundColor : "white", borderRadius : "50%"}} />
    </Box>
 }
    </div> 
  );
};

export default All_Matches;

















