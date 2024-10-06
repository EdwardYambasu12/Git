import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsIcon from '@mui/icons-material/Sports';
import FeedIcon from '@mui/icons-material/Feed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';




const styles = {
  iframeContainer: {
    width: "90%", // Desired width
    height: window.innerHeight, // Desired height
    clipPath: 'inset(80px 0px 80px 0px)', // Cropping values
    overflowY: 'hidden',
    position: 'relative',
    marginTop : "20%"
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default function Inner_News() {
  const [value, setValue] = useState('News');
  const navigate = useNavigate();
  const { state } = useLocation();
  const [news, setNews] = useState();
  console.log(state)
  useEffect(() => {
    if (state && state.l) {
      window.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth'
      });

      if (state.m === 1) {
        setNews(
          <div style={styles.iframeContainer}>
            <iframe
              src={state.l}
              style={styles.iframe}
              title="Clipped iFrame"
            />
          </div>
        );
      } else if (state.m === 0) {
        setNews(
         <div style={styles.iframeContainer}>
            <iframe
              src={state.l}
              style={styles.iframe}
              title="Clipped iFrame"
            />
          </div>
        );
      }
    }
  }, [state]);

  return (
    <div>
      <nav className="fixed-top" style={{ marginBottom: "0.5%" }}>
        <div className="top_nav">
          <div className="brand">
            <img
              className="brand_image"
              loading="lazy"
              src={require("./components/images/sportsup.png")}
              alt="Brand"
            />
          </div>
          <div className="icons"></div>
        </div>
      </nav>

      <div>
        {news}
      </div>

      <BottomNavigation
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="Matches"
          value="matches"
          onClick={() => navigate("/")}
          icon={<SportsIcon />}
        />
        <BottomNavigationAction
          label="News"
          value="News"
          onClick={() => navigate("/news")}
          icon={<FeedIcon />}
        />
        <BottomNavigationAction
          label="Leagues"
          value="Leagues"
          onClick={() => navigate("/leagues")}
          icon={<EmojiEventsIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="Favorites"
          onClick={() => navigate("/faves")}
          icon={<BookmarkAddIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
