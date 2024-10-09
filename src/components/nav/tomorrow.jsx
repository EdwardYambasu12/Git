import React, { useState, useEffect, useMemo } from "react";
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

const All_Matches = () => {
  const [leagues, setLeagues] = useState([]);
  const [matchPinnedStatus, setMatchPinnedStatus] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const userCode = "INT"

        


       const d = new Date(); // Or pass your specific date here
        const date = new Date(d); // Create a new Date object based on d
        date.setDate(date.getDate() + 1); // Add one day
        const formatted_date = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;

        const raw_data = await axios.get(`${Line}/match`, {
          params: { timeZone: userTimeZone, code: userCode, date: formatted_date },
        });

        setLeagues(raw_data.data.leagues);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const [userFavorites, setUserFavorites] = useState(null);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      const raw = localStorage.getItem("data");
      const done = JSON.parse(raw);
      const { data: users } = await axios.get(`${Line}/users`);
      const user = users.find(user => user.email === done.email && user.password === done.password);
      setUserFavorites(user);
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

  const renderMatches = useMemo(() => {
    return leagues.map((item, index) => (
      <Accordion key={index} defaultExpanded sx={{ borderRadius: '15px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <div className="league_description" onClick={() => { navigate("leauges/" + item.primaryId); sessionStorage.setItem("selected_league", JSON.stringify(item)); }} style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ width: "30px", height: "30px" }} src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${item.id}.png`} alt="League Logo" />
            <h6 id="break-down1">{item.name || 'League Name'}</h6>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {item.matches.map((match, matchIndex) => {
            const dateTimeString = match.status.utcTime;
            const dateObject = new Date(dateTimeString);
            const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const isPinned = matchPinnedStatus[match.id] || false;

            let status;
            let live;

            if (!match.status.started) {
              status = timeString;
              live = <div onClick={() => togglePin(match)} style={{ cursor: 'pointer' }}>
                {isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </div>;
            } else if (match.status.started && !match.status.finished) {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>;
              live = <h6 style={{ width: "20px", fontSize: "0.7em", display: "flex", justifyContent: "center", height: "20px", alignItems: "center", color: "white", borderRadius: "50%", background: "red" }}>{match.status.liveTime.short}</h6>;
            } else {
              status = <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>;
              live = <h6 style={{ width: "20px", height: "20px", textAlign: "center", alignItems: "center", color: "black", borderRadius: "50%", background: "#EEEEEE" }}>FT</h6>;
            }

            return (
              <div key={matchIndex} style={{ display: "flex", marginTop: "3%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50px", alignItems: "center" }}>
                  <div style={{ width: "5%" }}>{live}</div>
                  <Link to={`result/${match.id}`} style={{ display: "flex", textDecoration: "none", justifyContent: "space-between", width: "90%" }}>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                      <h6 className="text-dark" style={{ fontSize: "0.8em" }}>{match.home.name}</h6>
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_xsmall.png`} loading="lazy" alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                    </div>
                    <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "black" }}>
                      <strong>{status}</strong>
                    </div>
                    <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
                      <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_xsmall.png`} loading="lazy" alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
                      <h6 className="text-dark" style={{ fontSize: "0.8em" }}>{match.away.name}</h6>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    ));
  }, [leagues, matchPinnedStatus]);

  return (
    <div className="container">
      {leagues.length > 0 ? renderMatches : <Box style={{ display: 'flex', width : "100%", justifyContent : "center",  }}>
      <CircularProgress sx= {{backgroundColor : "white", borderRadius : "50%"}} />
    </Box>}
    </div>
  );
};

export default All_Matches;
