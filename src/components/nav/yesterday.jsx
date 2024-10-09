import React, {useState, useEffect} from "react"
import "./matches.css"
import {Link, useNavigate} from "react-router-dom"
import api from "./details.js"
import axios from "axios"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioIcon from '@mui/icons-material/Radio';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CircularProgress from '@mui/material/CircularProgress';
import Line from "../../line.js"
 function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

export default function Yesterday(props){


 const [leagues, setLeagues] = useState(<Box style={{ display: 'flex', width : "100%", justifyContent : "center",  }}>
      <CircularProgress sx= {{backgroundColor : "white", borderRadius : "50%"}} />
    </Box>
);


  useEffect(() => {
    const Data_to_use = async () => {
      try {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const userCode = "INT"

       const d = new Date(); // Or pass your specific date here
        const date = new Date(d); // Create a new Date object based on d
        date.setDate(date.getDate() - 1); // Add one day

        console.log(date); // For debugging purposes

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formatted_date = `${year}${month}${day}`;

     

        const raw_data = await axios.get(`${Line}/match`, {
          params: {
            timeZone: userTimeZone,
            code: userCode,
            date: formatted_date,
          },
        });

        const data = raw_data.data;

        console.log(data)
        setLeagues(




                <div style={{ marginTop: '2%', borderRadius: '15%', width: '100%' }}>
      {data.leagues.map((item, index) => (
        <Accordion key={index} defaultExpanded sx={{ borderRadius: '15px' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <div className="league_description" style={{ display: 'flex', alignItems: 'center' }}>
             
                <img src={"https://images.fotmob.com/image_resources/logo/leaguelogo/"+item.id+".png"} loading = "lazy" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
             
              <h6 id="break-down1">{item.name || 'League Name'}</h6>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {item.matches.map((match, matchIndex) => {






  



                    const dateTimeString = match.status.utcTime;
                        const dateObject = new Date(dateTimeString);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


                    const timestamp = match.timeTS;
                const dateObject1 = new Date(timestamp);
                  const timeString1 = dateObject1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



                    var status 
                    var live

                    if(match.status.started == false){
                      status = timeString
                      live = <BookmarkBorderIcon className = "text-dark" />
                    }

                    if(match.status.started == true && match.status.finished == false){
                      status = <div style = {{display : "flex", width : "100%", justifyContent : "spaceBetween"}}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>
                        live =  <h6 style = {{width : "20px",fontSize : "0.7em", display : "flex", justifyContent : "center", height : "20px",  alignItems : "center", color : "white", borderRadius : "50%", background : "red"}}>{match.status.liveTime.short}</h6>
                    
                    }

                    if(match.status.finished == true){
                        status = <div style = {{display : "flex", width : "100%", justifyContent : "spaceBetween"}}><h6>{match.home.score}</h6><h6>-</h6><h6>{match.away.score}</h6></div>
                      live =  <h6 style = {{width : "20px", height : "20px", textAlign : "center", alignItems : "center", color : "black", borderRadius : "50%", background : "#EEEEEE"}}>FT</h6>
                    
                    }

  return (
    <div key={matchIndex} style={{ display: "flex", marginTop: "3%", width: "100%", justifyContent: "space-between", background: "white", borderRadius: "10px", textDecoration: "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "50px", alignItems: "center" }}>
        <div style={{ width: "5%" }}>{live}</div>
        <Link to={`result/${match.id}`} style={{ display: "flex", textDecoration: "none", justifyContent: "space-between", width: "90%" }}>
          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
            <h6 className="text-dark" style={{ fontSize: "0.8em" }}>{match.home.name}</h6>
            <img  src={"https://images.fotmob.com/image_resources/logo/teamlogo/"+match.home.id+"_xsmall.png"} loading="lazy"  alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="text-dark" style={{ width: "20%", justifyContent: "center", textAlign: "center", display: "flex", color: "black" }}>
            <strong>{status}</strong>
          </div>
          <div style={{ display: "flex", width: "33%", justifyContent: "space-between", alignItems: "center" }}>
            <img src={"https://images.fotmob.com/image_resources/logo/teamlogo/"+match.away.id+"_xsmall.png"} loading = "lazy"  alt="Away Team Logo" style={{ width: "20px", height: "20px" }} />
            <h6 className="text-dark" style={{ fontSize: "0.8em" }}>{match.away.name}</h6>
          </div>
        </Link>
      </div>
      <div></div>
    </div>
  );
}) }
          </AccordionDetails>
        </Accordion>
      ))}
    </div>




          );
      } catch (e) {
        console.log(e);
      }
    };
      Data_to_use()
  }, []);



  return (
    <div className = "container" style={{ background: "#EEEEEE" }}>
        {leagues}
    </div> 
  );
};
 