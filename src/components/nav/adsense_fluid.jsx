import React, { useEffect } from "react";

const AdSenseFluidAd = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w+4e-db+86"
      data-ad-client="ca-pub-5765675396995319"
      data-ad-slot="3519029525"
    ></ins>
  );
};

export default AdSenseFluidAd;
