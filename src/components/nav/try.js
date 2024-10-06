import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "./details.js";
import Line from "../../line.js";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import HeadphonesIcon from '@mui/icons-material/Headphones';

// Helper functions
const getTimeZone = () => {
  const offset = new Date().getTimezoneOffset();
  const o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
};

const sortByKeyAsc = (array, key) => array.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)));
const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = rv[x[key]] || []).push(x);
  return rv;
}, {});

const MatchStatus = ({ status }) => {
  const statusMap = {
    Finished: { label: 'FT', color: '#EEEEEE' },
    "After Pen.": { label: 'Pn', color: 'black' },
    "After ET": { label: 'AeT', color: '#EEEEEE' },
    "Half Time": { label: 'HT', color: '#EEEEEE' },
    "Extra Time": { label: 'ET', color: '#EEEEEE' },
    Postponed: { label: 'PP', color: 'black' },
    Penalty: { label: 'Pn', color: 'black' },
    "": { label: '', color: 'black' }
  };

  const { label, color } = statusMap[status] || { label: status, color: 'red' };
  return <h6 style={{ width: '20px', height: '20px', textAlign: 'center', borderRadius: '50%', background: color }}>{label}</h6>;
};

const MatchDetails = ({ match, onClick, isPinned, onPinToggle }) => {
  const reddishHome = match.cards.filter(card => card.home_fault === "" && card.card === "red card");
  const reddishAway = match.cards.filter(card => card.away_fault === "" && card.card === "red card");
  const radarHome = reddishHome.map((_, index) => <span key={`home-${index}`} style={{ height: "8px", width: "6px", background: "red" }} />);
  const radarAway = reddishAway.map((_, index) => <span key={`away-${index}`} style={{ height: "8px", width: "4px", background: "red" }} />);

  const live = match.match_live === "1" ? <><h6>{match.match_hometeam_score}</h6>-<h6>{match.match_awayteam_score}</h6></> : <span className="text-dark">{match.match_time}</span>;

  return (
    <div style={{ display: 'flex', marginTop: "3%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '50px', alignItems: 'center' }}>
        <MatchStatus status={match.match_status} />
        <Link to={`result/${match.match_id}`} style={{ display: 'flex', textDecoration: 'none', width: '90%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', width: '33%', justifyContent: 'space-between', alignItems: 'center' }}>
            <h6 style={{ fontSize: '0.8em' }}>{match.match_hometeam_name}</h6>
            {radarHome}
            <img src={match.team_home_badge} alt={`${match.match_hometeam_name} badge`} style={{ width: '20px', height: '20px' }} />
          </div>
          <div style={{ width: '20%', display: 'flex', justifyContent: 'space-around', color: 'black' }}>
            {live}
          </div>
          <div style={{ display: 'flex', width: '33%', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={match.team_away_badge} alt={`${match.match_awayteam_name} badge`} style={{ width: '20px', height: '20px' }} />
            {radarAway}
            <h6 style={{ fontSize: '0.8em' }}>{match.match_awayteam_name}</h6>
          </div>
        </Link>
        <button onClick={() => onPinToggle(match)} style={{ background: 'none', border: 'none' }}>
          {isPinned ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
        </button>
      </div>
    </div>
  );
};

export default function All_Matches() {
  const [matches, setMatches] = useState([]);
  const [pinnedMatches, setPinnedMatches] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today_date = new Date().toISOString().split('T')[0];
        const timezone = getTimeZone();
        const api_key = api;

        const res = await axios.get(`https://apiv3.apifootball.com/?action=get_events&withPlayerStats=1&from=${today_date}&to=${today_date}&timezone=${timezone}&APIkey=${api_key}`);
        const data = res.data;

        // Update state with fetched data
        setMatches(data);
        setLoading(false);

        // Load pinned matches from local storage
        const storedPins = JSON.parse(localStorage.getItem('pinnedMatches')) || [];
        setPinnedMatches(new Set(storedPins));
      } catch (error) {
        console.error("Error fetching match data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePinToggle = (match) => {
    setPinnedMatches(prev => {
      const newSet = new Set(prev);
      if (newSet.has(match.match_id)) {
        newSet.delete(match.match_id);
      } else {
        newSet.add(match.match_id);
      }
      // Update local storage
      localStorage.setItem('pinnedMatches', JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  };

  return (
    <div>
      {loading ? (
        <Box style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <CircularProgress sx={{ backgroundColor: 'white', borderRadius: '50%' }} />
        </Box>
      ) : (
        matches.map(match => (
          <MatchDetails
            key={match.match_id}
            match={match}
            onPinToggle={handlePinToggle}
            isPinned={pinnedMatches.has(match.match_id)}
          />
        ))
      )}
    </div>
  );
}
