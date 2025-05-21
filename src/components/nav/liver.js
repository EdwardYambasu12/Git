import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import "./matches.css";
import {Link, useNavigate} from "react-router-dom"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Line from "../../line.js";
const LiveHori = () => {
  const [leagues, setLeagues] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  const fetchLiveData = async () => {
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const userCode = "INT";

      const date = new Date();
      const formatted_date = date.toISOString().split("T")[0].replace(/-/g, '');

      const raw_data = await axios.get(`${Line}/match`, {
        params: {
          timeZone: userTimeZone,
          code: userCode,
          date: formatted_date,
        },
      });

      const data = raw_data.data;

      const liveMatches = data.leagues
        .map(league => {
          const live = league.matches.filter(match => match.status.liveTime);
          return live.length > 0 ? { ...league, live } : null;
        })
        .filter(Boolean); // Remove nulls

      setLeagues(liveMatches);
      console.log(liveMatches, "live_matches");

    } catch (error) {
      console.error("Error fetching live matches:", error);
      setLeagues([]);
    }
  };

  fetchLiveData(); // Fetch immediately on mount

  const intervalId = setInterval(fetchLiveData, 15000); // Fetch every 15 seconds

  // Cleanup the interval on unmount
  return () => clearInterval(intervalId);

}, []);

  if (leagues === null) {
    return (
      <Box style={{ display: 'flex', width: "100%", justifyContent: "center" }}>
        <CircularProgress sx={{ backgroundColor: "white", borderRadius: "50%" }} />
      </Box>
    );
  }
var needed = []



  if (leagues.length === 0) {
    return <Box>No live matches available.</Box>;
  }

  
  leagues.map((item)=>{
    item.live.map((it)=>{
      needed.push(it)
    })
  })
console.log(needed, "wanna know")
return (
  <Box className="container">
    <div
      style={{
        overflowY: "hidden",
        overflowX: "auto",
        height: "200px",
        display: "flex",
        marginLeft : "-5%",
        gap: "0.2rem",
        padding: "1.5rem",
      }}
    >
      {needed.map((item) => (
        <Link
          key={item.id}
          style={{
            minWidth: "320px",
            backgroundColor: "midnightblue",
            color: "white",
            display: "flex",
            textDecoration : "none",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
            borderRadius: "8px",
          }}
           to={`result/${item.id}`}
        >
          {/* Home Team */}
          <div style={{ textAlign: "center", width: "90px" }}>
            <img
              src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.home.id}_xsmall.png`}
              loading="lazy"
              alt="Home Team Logo"
              style={{ width: "70px", height: "70px" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", wordWrap: "break-word" }}>
              <strong>{item.home.name}</strong>
            </p>
          </div>

          {/* Score + Time */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <h4 style={{ margin: 0 }}>{item.status.scoreStr}</h4>
            {item.status.liveTime?.short && (
              <div
                style={{
                  backgroundColor: "white",
                  color: "red",
                  borderRadius: "20px",
                  padding: "0.25rem 0.5rem",
                  display: "inline-block",
                  marginTop: "0.25rem",
                  fontSize: "0.85rem",
                }}
              >
                <strong>{item.status.liveTime.short}</strong>
              </div>
            )}
          </div>

          {/* Away Team */}
          <div style={{ textAlign: "center", width: "90px" }}>
            <img
              src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.away.id}_xsmall.png`}
              loading="lazy"
              alt="Away Team Logo"
              style={{ width: "70px", height: "70px" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", wordWrap: "break-word" }}>
              <strong>{item.away.name}</strong>
            </p>
          </div>
        </Link>
      ))}
    </div>
  </Box>
);


};

export default LiveHori;
