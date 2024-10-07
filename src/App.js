import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {React, useEffect} from "react"
import Home from "./components/home"
import {generateToken, messaging} from "./Notification/firebase.js"
import {onMessage} from "firebase/messaging";
import Result from "./components/result/result"
import Login from "./components/auth/login.jsx"
import Register from "./components/auth/signin.jsx"
import Search from "./components/nav/search.jsx"
import Player from "./player.jsx"
import Leagues from "./components/leagues/leagues.js"
import Teams from "./team.jsx"
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
import { Analytics } from '@vercel/analytics/react';
//import initOneSignal from "./onesignal-init.js"

import "./components/result/result.css"

function App(){


 useEffect(()=>{
  generateToken();
  onMessage(messaging, (payload)=>{
    console.log(payload)

    
  })
 })




  return(

      <div className = "app">
   <Analytics />
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/result/:id" element = {<Result/>}></Route>
          <Route path="match_small/result/:id" element = {<Result/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/search" element = {<Search/>}> </Route>
        <Route path = "/team/:id" element = {<Teams/>}></Route>
        <Route path = "/player/:id" element = {<Player/>}></Route>
        <Route path = "/leagues/leauges_mall" element = {<Leagues/>}></Route>
        <Route path = "/news/inw" element = {<Inner_News/>}></Route>
        <Route path = "/result/:id/leagues/leauges_mall" element = {<Leagues/>}></Route>
        <Route path = "/leauges/:id" element = {<Leagues/>}></Route>
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


  )
}

export default App