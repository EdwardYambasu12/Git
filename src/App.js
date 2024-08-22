import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {React, useEffect} from "react"
import Home from "./components/home"

import Result from "./components/result/result"
import Login from "./components/auth/login.jsx"
import Register from "./components/auth/signin.jsx"
import Search from "./components/nav/search.jsx"
import Player from "./player.jsx"
import Leagues from "./components/leagues/leagues.js"
import Team from "./team.jsx"
import News from "./news.jsx"
import Minor from "./components/nav/smaller_leagues.jsx"
import Match_small from "./components/nav/match_small.jsx"
import Trial from "./components/result/trial"
import api from "./details.js"
import League_Map from "./components/nav/league_map.jsx"
import Favorites from "./components/nav/favorites.jsx"
import Timer from "./timer.js"
import OneSignal from 'react-onesignal';
import ErrorBoundary from "./ed.jsx"
import Inner_News from "./inner_news.js"
//import initOneSignal from "./onesignal-init.js"

import "./components/result/result.css"

function App(){


 




  return(
<ErrorBoundary>
      <div className = "app">
   
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/result/:id" element = {<Result/>}></Route>
          <Route path="match_small/result/:id" element = {<Result/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/search" element = {<Search/>}> </Route>
        <Route path = "/team" element = {<Team/>}></Route>
        <Route path = "/player" element = {<Player/>}></Route>
        <Route path = "/leagues/leauges_mall" element = {<Leagues/>}></Route>
        <Route path = "/news/:id" element = {<Inner_News/>}></Route>
        <Route path = "/result/:id/leagues/leauges_mall" element = {<Leagues/>}></Route>
        <Route path = "/leauges_mall" element = {<Leagues/>}></Route>
        <Route path = "/leagues" element = {<League_Map/>}></Route>
        <Route path = "/news" element = {<News/>}></Route>
        <Route path = "/minor" element = {<Minor/>}></Route>
        <Route path = "/match_small" element = {<Match_small/>}></Route>
        <Route path = "/faves" element = {<Favorites/>}></Route>
        <Route path = "/trial" element = {<Trial/>}></Route>
        <Route path = "/timer" element = {<Timer/>}></Route>
      </Routes>
    </Router>
    </div>

</ErrorBoundary>
  )
}

window.addEventListener('unhandledrejection', function(event) {
  console.error(`Unhandled promise rejection: ${event.reason}`);
  // Optionally, send error details to an error tracking service
  event.preventDefault(); // Prevent the default handling of the promise rejection
});
export default App