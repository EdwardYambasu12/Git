import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/home";
import { generateToken, messaging } from "./Notification/firebase.js";
import { onMessage } from "firebase/messaging";
import Result from "./components/result/result";
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/signin.jsx";
import Search from "./components/nav/search.jsx";
import Player from "./player.jsx";
import Leagues from "./components/leagues/leagues.js";
import Teams from "./team.jsx";
import News from "./news.jsx";
import League_Map from "./components/nav/league_map.jsx";
import Favorites from "./components/nav/favorites.jsx";
import PrivacyPolicy from "./PrivacyPolicy";
import CookieConsentPopup from "./pop.js";
import { Analytics } from "@vercel/analytics/react";
import FollowPage from "./components/new_comers/second.js";
import "./components/result/result.css";

const useEzoicAds = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.ezstandalone) {
      window.ezstandalone.destroyPlaceholders();
      window.ezstandalone.showAds();
    }
  }, [location.pathname]);
};

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);

  return (
    <div className="app">
      <Analytics />
      <Router>
        <useEzoicAds />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookieConsentPopup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/team/:id" element={<Teams />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/leagues/mall" element={<Leagues />} />
          <Route path="/follow_up" element={<FollowPage />} />
          <Route path="/leagues/:id" element={<Leagues />} />
          <Route path="/leagues" element={<League_Map />} />
          <Route path="/news" element={<News />} />
          <Route path="/faves" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
