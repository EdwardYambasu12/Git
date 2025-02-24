import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PWAWelcomingPopup = () => {
  const navigate = useNavigate()
  const [isPWA, setIsPWA] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  

  const automain = localStorage.getItem("counter_part")

console.log(automain, "this is the counterpart")

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {
      automain === null ?  
      <>
      {isPWA && showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://source.unsplash.com/football')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          ></div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 10 }}>
            <h3 style={{  marginBottom: "10px" }}>
            Welcome to Lonescore: Your Ultimate Sports Companion
            </h3>
            <p style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            LoneScore is a comprehensive platform designed for sports enthusiasts who want to stay informed, connected, and engaged with their favorite sports, teams, leagues, and players. Whether you're a casual fan or a dedicated follower, SportsUp provides all the tools and content you need to elevate your sports experience. Here’s a deep dive into what SportsUp offers and how it can transform the way you interact with the sports world.
            </p>

            {/* Featured Image */}
           

            <button
              onClick={()=>{navigate("/follow_up")}}
              style={{
                marginTop: "20px",
                padding: "15px 30px",
                backgroundColor: "#007BFF",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
              }}
            >
              Let’s Go!
            </button>
          </div>
        </div>
      )}
</>
   :
   <></>
}
      
    </>

  );
};

export default PWAWelcomingPopup;
