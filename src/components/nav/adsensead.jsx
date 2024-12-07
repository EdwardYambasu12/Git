import React, { useEffect } from "react";

const AdSenseAd = () => {
  useEffect(() => {
    // Dynamically load AdSense script
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

    // Clean up script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5765675396995319"
        data-ad-slot="5013914339"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
