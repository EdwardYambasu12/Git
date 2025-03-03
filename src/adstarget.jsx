import { useEffect } from "react";

const AdsTargetsAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//adstargets.com/myAdstargets/display/items.php?28694&22558&336&280&4&0&4";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.getElementById("adm-container-28694").appendChild(script);
  }, []);

  return <div id="adm-container-28694"></div>;
};

export default AdsTargetsAd;
