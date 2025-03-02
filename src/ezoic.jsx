import { useEffect } from "react";

const EzoicAd = () => {
  useEffect(() => {
    if (window.ezstandalone) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone.showAds(101);
      });
    }
  }, []);

  return <div id="ezoic-pub-ad-placeholder-101"></div>;
};

export default EzoicAd;
