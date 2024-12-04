import React, { useEffect } from "react";

const AdsenseAd = () => {
  useEffect(() => {
    // Dynamically add AdSense script
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-ad-client", "ca-pub-5765675396995319");
    document.body.appendChild(script);

    // Initialize ads after script loads
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense initialization error:", e);
      }
    };

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", minWidth: "250px", margin: "20px 0", display: "flex", justifyContent: "center" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
        data-ad-client="ca-pub-5765675396995319"
        data-ad-slot="9218351831"
      ></ins>
    </div>
  );
};

export default AdsenseAd;
