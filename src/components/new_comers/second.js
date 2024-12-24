import React, { useState } from "react";
import link from "../../line";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FollowFavoritesPage = () => {
  const [selectedFavorites, setSelectedFavorites] = useState([]); // Tracks selected favorites
  const navigate = useNavigate()



  const Line = link
  // Sample data for leagues, teams, and players
  const favoriteLeagues = [
    { id: 87, name: "LaLiga" },
    { id: 55, name: "Serie A" },
    { id: 53, name: "Ligue 1" },
    { id: 54, name: "Bundesliga" },
    { id: 47, name: "Premier League" },
    { id: 42, name: "Champions League" },
  ];

  const favoriteTeams = [
    { id: 8633, name: "Real Madrid", color: "#085098" },
    { id: 8634, name: "Barcelona", color: "#971e48" },
    { id: 8455, name: "Chelsea", color: "#064b95" },
    { id: 9825, name: "Arsenal", color: "#bd0510" },
    { id: 10260, name: "Manchester United", color: "#C70101" },
    { id: 8456, name: "Manchester City", color: "#69A8D8" },
    { id: 8650, name: "Liverpool", color: "#911712" },
    { id: 9823, name: "Bayern München", color: "#C60428" },
    { id: 9789, name: "Borussia Dortmund", color: "#d8a000" },
    { id: 9875, name: "Napoli", color: "#12A0D7" },
    { id: 9885, name: "Juventus", color: "#000001" },
    { id: 5804, name: "Liberia", color: "#DC1A22" },
  ];

  const favoritePlayers = [
    { id: 846033, name: "Vinicius Junior", goals: 12, apps: 17, assist: 5 },
    { id: 675088, name: "Rodri", goals: 0, apps: 3, assist: 0 },
    { id: 30893, name: "Cristiano Ronaldo", goals: 10, apps: 15, assist: 3 },
    { id: 30981, name: "Lionel Messi", goals: 23, apps: 25, assist: 13 },
    { id: 701154, name: "Kylian Mbappé", goals: 8, apps: 16, assist: 2 },
    { id: 194165, name: "Harry Kane", goals: 17, apps: 16, assist: 7 },
    { id: 1467236, name: "Lamine Yamal", goals: 6, apps: 16, assist: 8 },
    { id: 93447, name: "Robert Lewandowski", goals: 19, apps: 17, assist: 2 },
    { id: 815006, name: "Phil Foden", goals: 3, apps: 14, assist: 2 },
    { id: 1096353, name: "Cole Palmer", goals: 7, apps: 13, assist: 5 },
    { id: 31097, name: "Luka Modric", goals: 0, apps: 17, assist: 3 },
  ];

  const fetchUserFavorites = async (id) => {
    const raw = localStorage.getItem("data");
    const done = JSON.parse(raw);
   
    const  users  = await axios.get(`${Line}/users`);
    console.log(users, "users")
    if(raw != null){
    const user = users.data.find(user => user.email === done.email && user.password === done.password);

  

    return(user)
  }
  };

  // Toggle selection logic
  const toggleSelection = async(item, category) => {
    console.log(item, category, "this is the item selected")
    setSelectedFavorites((prev) =>
      prev.some((fav) => fav.id === item.id)
        ? prev.filter((fav) => fav.id !== item.id)
        : [...prev, item]


    );
    console.log(selectedFavorites)


    if(category === "team"){

      const user_id = await fetchUserFavorites(item.id)

      const place = {
        id_: user_id._id,
        league_id: item,
      };
      const data = JSON.stringify(place)
      await fetch(`${Line}/favorite_team`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data),
      });
    }
    else if(category === "league"){
      const user_id = await fetchUserFavorites(item.id)

      const place = {
        id_: user_id._id,
        league_id: item,
      };

      const data = JSON.stringify(place)

      await fetch(`${Line}/favorite_league`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data),
      });
    }
  
    else {
      const user_id = await fetchUserFavorites(item.id)

      const place = {
        id_: user_id._id,
        league_id: item,
      };
      const data = JSON.stringify(place)
      await fetch(`${Line}/favorite_player`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data),
      });
    }

  };

  const isContinueDisabled = selectedFavorites.length === 0;

  const handleContinue = async() => {
      await localStorage.setItem("counter_part", "true")
  };

  return (

    <>
  

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Follow at Least One League, Team, or Player</h1>
      <p>Personalize your SportsUp experience by selecting favorites.</p>

      {/* Leagues */}
      <h2 style={{ marginTop: "20px" }}>Leagues</h2>
      <div style={gridStyle}>
        {favoriteLeagues.map((league) => (
          <ItemCard
            key={league.id}
            item={league}
            isSelected={selectedFavorites.some((fav) => fav.id === league.id)}
            onToggle={() => toggleSelection(league, "league")}
          />
        ))}
      </div>

      {/* Teams */}
      <h2 style={{ marginTop: "20px" }}>Teams</h2>
      <div style={gridStyle}>
        {favoriteTeams.map((team) => (
          <ItemCard
            key={team.id}
            item={team}
            isSelected={selectedFavorites.some((fav) => fav.id === team.id)}
            onToggle={() => toggleSelection(team, "team")}
          />
        ))}
      </div>

      {/* Players */}
      <h2 style={{ marginTop: "20px" }}>Players</h2>
      <div style={gridStyle}>
        {favoritePlayers.map((player) => (
          <ItemCard
            key={player.id}
            item={player}
            isSelected={selectedFavorites.some((fav) => fav.id === player.id)}
            onToggle={() => toggleSelection(player, "players")}
          />
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={()=>{localStorage.setItem("counter_part", "true"); navigate("/")}}
        disabled={isContinueDisabled}
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          backgroundColor: isContinueDisabled ? "#ccc" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: isContinueDisabled ? "not-allowed" : "pointer",
          fontSize: "1rem",
        }}
      >
        Continue
      </button>
    </div>
    
    </>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "10px",
  margin: "20px 0",
};

// Card Component
const ItemCard = ({ item, isSelected, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      style={{
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: isSelected ? "#007BFF" : "#fff",
        color: isSelected ? "#fff" : "#333",
        boxShadow: isSelected
          ? "0 4px 6px rgba(0, 123, 255, 0.3)"
          : "0 2px 4px rgba(0,0,0,0.1)",
        border: `2px solid ${isSelected ? "#007BFF" : "#ddd"}`,
      }}
    >
      <strong>{item.name}</strong>
    </div>
    
  );
};

export default FollowFavoritesPage;
