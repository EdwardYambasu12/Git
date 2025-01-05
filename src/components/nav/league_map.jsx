import React, { useState, useEffect } from 'react';
import '../../App.css'; // Assuming you use the same CSS file
import '../../news.css'; 
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsIcon from '@mui/icons-material/Sports';
import FeedIcon from '@mui/icons-material/Feed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Box from '@mui/material/Box';
import { CircularProgress, Tabs, Tab } from '@mui/material';
import LabelBottomNavigation from './LabelBottomNavigation'; // Assuming it's your component

const League_Map = () => {
  const [leaguesData, setLeaguesData] = useState(null); // State for league data
  const [loading, setLoading] = useState(true); // Loading state
  const [followedLeagues, setFollowedLeagues] = useState([]); // Followed leagues state
  const [users, setUser] = useState(null); // User data state
  const [allLeagues, setAllLeagues] = useState([]); // All leagues state
  const Line = 'https://remember-1.onrender.com'; // Backend URL
  const navigate = useNavigate();
  const [main, setMain] = useState();

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        setLoading(true);

        // First, try to get leagues data from sessionStorage
        const raw_data = await sessionStorage.getItem("league_data");
        let leagues = JSON.parse(raw_data);

        if (!leagues) {
          // If no data is found in sessionStorage, fetch from API
          const response = await fetch(`${Line}/all_leagues`);
          if (response.ok) {
            leagues = await response.json();
            sessionStorage.setItem("league_data", JSON.stringify(leagues)); // Store data in sessionStorage
          } else {
            throw new Error('Failed to fetch leagues');
          }
        }

        // Now fetch user data from localStorage and the users API
        const user_data = JSON.parse(localStorage.getItem("data"));
        const usersResponse = await axios.get(`${Line}/users`);
        const user = usersResponse.data.find(u => u.email === user_data.email);

        if (user) {
          setFollowedLeagues(user.favorite_league.map(item => JSON.parse(item)));
          setUser(user); // Set the logged-in user data
        }

        setAllLeagues(leagues); // Set all leagues data
        setLeaguesData(leagues); // Set the leagues data to state

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  // Fetch tournaments data
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch('https://remember-1.onrender.com/all_leagues');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const datam = await response.json();
        console.log('API Response:', datam);
        setMain(
          <div>
            <section className="sectiond" id="popular-section">
              <h2>Top Leagues</h2>
              <div id="all-leagues">
                {datam.popular.map((league) => (
                  <div key={league.id} className="league">
                    <div onClick={() => { navigate("/leauges/" + league.id) }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`}
                        alt={league.name}
                      />
                      <span>{league.name}</span>
                    </div>
                    <button onClick={() => toggleFollowLeague(league.id, league.name)}>
                      {followedLeagues.find((l) => l.id === league.id) ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* All Leagues Section */}
            <section className="sectiond" id="all-leagues-section">
              <h2>All Leagues</h2>
              <div id="international-dropdown">
                {datam?.international?.flatMap((group) => group.leagues).map((league) => (
                  <div key={league.id} className="league">
                    <div onClick={() => { navigate("/leauges/" + league.id) }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`}
                        alt={league.name}
                      />
                      <span>{league.name}</span>
                    </div>
                    <button onClick={() => toggleFollowLeague(league.id, league.name)}>
                      {followedLeagues.find((l) => l.id === league.id) ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []); // Empty dependency array to fetch only once when the component mounts

  // Handle following/unfollowing leagues
  const toggleFollowLeague = async (leagueId, leagueName) => {
    if (!users) {
      console.error('User data is not available.');
      return; // Don't proceed if there is no user data
    }

    const isFollowing = followedLeagues.some((league) => league.id === leagueId);
    const updatedFollowedLeagues = isFollowing
      ? followedLeagues.filter((league) => league.id !== leagueId)
      : [...followedLeagues, allLeagues.find((league) => league.id === leagueId)];

    setFollowedLeagues(updatedFollowedLeagues);

    const monk = {
      id: leagueId,
      name: leagueName,
    };

    const league = JSON.stringify(monk);
    const place = {
      id_: users._id, // This line will fail if `users` is null
      league_id: league,
    };

    const url = isFollowing
      ? `${Line}/favorite_league_remove`
      : `${Line}/favorite_league`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(place),
      });

      if (!response.ok) {
        throw new Error('Failed to update favorite league');
      }
    } catch (error) {
      console.error('Error handling favorite league:', error);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <main>
      <header className="headerd">
        <h1>SportsUp Leagues</h1>
        <p>Discover the latest Leagues, Tournaments, and Competitions from around the globe.</p>
      </header>

      {/* Following Leagues Section */}
      <section className="sectiond" id="following-section">
        <h2>Your Following Leagues</h2>
        <div id="following-leagues">
          {followedLeagues.length > 0 ? (
            followedLeagues.map((league) => (
              <div key={league.id} className="league">
                <div onClick={() => { navigate("/leauges/" + league.id) }}>
                  <img
                    src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`}
                    alt={league.name}
                  />
                  <span>{league.name}</span>
                </div>
                <button onClick={() => toggleFollowLeague(league.id, league.name)}>
                  {followedLeagues.find((l) => l.id === league.id) ? 'Unfollow' : 'Follow'}
                </button>
              </div>
            ))
          ) : (
            <p>You are not following any leagues yet.</p>
          )}
        </div>
      </section>

      {main}

      <div id="error-message" className="error-message"></div>

      <LabelBottomNavigation />
    </main>
  );
};

export default League_Map;
