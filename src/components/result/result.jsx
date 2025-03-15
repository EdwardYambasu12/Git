import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Mini_Nav from "../nav/mini-nav";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Lined from "../../line.js"
import "./result.css"
import api from "../nav/details.js"
import AudioPlayer from "./audioplayer.jsx";
import axios from "axios"
import Timer from "./timer.js"
import VideoPlayer from "./vid.js"

import Bracket from "./addup.jsx"
import Trial from "./trial.jsx"
import Head_to_Head from "./h2h.js"
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import TabsSticky from "./tabber.jsx"
import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import { AppBar, Toolbar,Tabs, Tab,  Typography, List, ListItem,  ListItemText } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';                                                                
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';


import { styled } from '@mui/material/styles';
import {Fade} from "@mui/material"

import { Line } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,   ScatterController, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import AdSenseFluidAd from "../nav/adsense_fluid.jsx";
import { blue } from "@mui/material/colors";

ChartJS.register(CategoryScale, LinearScale,   ScatterController, PointElement, LineElement, Title, Tooltip, Legend);



const audioStreams = [
  {
    url: 'https://livesportradio.com/global7/foeng16/playlist.m3u8',
    language: 'ENG'
  },
  {
    url: 'https://livesportradio.com/global9/foesp1/playlist.m3u8',
    language: 'ESP'
  }
];





const YourComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      
          } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchDataInterval = setInterval(() => {
        const dyer = sessionStorage.getItem("fyer")
        const ryer = JSON.parse(dyer)

     
  .catch(error => console.error('Error fetching data:', error));




          axios.get("https://apiv3.apifootball.com/?action=get_events&match_id="+ryer.match_id+"&withPlayerStats=1&APIkey="+api)
            .then(async(res)=>{


                            
                          

                const parse_ing = JSON.stringify(res.data[0])
                sessionStorage.setItem("fyer", parse_ing)
            })


      fetchData();
    }, 20000); // 30 seconds

    // Initial fetch when component mounts
    fetchData();

    // Clean up interval on component unmount
    return () => {
      clearInterval(fetchDataInterval);
    };
  }, []); // empty dependency array to run effect only once on mount

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
};






const Theme = createTheme({
  palette: {
    primary: {
      
      main: '#FFD700',
      
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const App = () => {
  const exampleProps = [{
    header: {
      status: {
        liveTime: {
          long: "32:05" // Example time string
        }
      }
    }
  }];

  return (
    <div>
      <h1>Game Timer</h1>
      <Timer props={exampleProps} />
    </div>
  );
};



const Rest_assure = ({ props }) => {
    const [value, setValue] = useState(0);
    const [elementHeight, setElementHeight] = useState(0);
    const elementRef = useRef(null);
    const navigate = useNavigate();
    const data = props[0];
    const match_news = props[4]
    const league = props[3];
    const homeTeam = data.general.homeTeam;
    const awayTeam = data.general.awayTeam;
    const matchId = data.general.matchId;
    const schemaMarkup = JSON.stringify(data.seo.eventJSONLD);

    const handleChange = (event, newValue) => setValue(newValue);

    // Adjusts the top margin based on header height
    useLayoutEffect(() => {
        if (elementRef.current) {
            setElementHeight(elementRef.current.getBoundingClientRect().height);
        }
    }, []);

    // Dynamic match status logic
    const getStatus = () => {
       if(data.header.status.reason){
        if(data.header.status.reason.short === "Pen") return data.header.status.reason.long
       }
        if(data.header.status.finished) return "Full Time"
        if (data.header.status.started && !data.header.status.finished) {
            return data.header.status.liveTime.short === "HT" 
                ? data.header.status.liveTime.long 
                : <Timer props={props} />;
        }
        const dateTimeString = data.header.status.utcTime;
        const dateObject = new Date(dateTimeString);
        return dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const status = getStatus();

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        "sport": "Football/Soccer",
        "homeTeam": {
            "@context": "https://schema.org",
            "@type": "SportsTeam",
            "name": homeTeam.name,
            "sport": "Football/Soccer",
            "logo": `https://images.fotmob.com/image_resources/logo/teamlogo/${homeTeam.id}.png`,
            "url": `https://www.lonescore.com/team/${homeTeam.id}`
        },
        "awayTeam": {
            "@context": "https://schema.org",
            "@type": "SportsTeam",
            "name": awayTeam.name,
            "sport": "Football/Soccer",
            "logo": `https://images.fotmob.com/image_resources/logo/teamlogo/${awayTeam.id}.png`,
            "url": `https://www.lonescore.com/team/${awayTeam.id}`
        },
        "name": data.seo.eventJSONLD.name,
        "description": data.seo.eventJSONLD.description,
        "startDate": data.seo.eventJSONLD.startDate,
        "endDate": data.seo.eventJSONLD.endDate,
        "location": data.seo.eventJSONLD.location,
        "organizer": {
            "@type": "Organization",
            "name": "LoneScore",
            "url": "https://www.lonescore.com"
        },
        "offers": {
            "@type": "Offer",
            "url": `http://www.lonescore.com/result/${matchId}`,
            "price": "0",
            "priceCurrency": "USD"
        },
        "performer": [
            {
                "@type": "SportsTeam",
                "name": homeTeam.name,
                "url": `https://www.lonescore.com/team/${homeTeam.id}`
            },
            {
                "@type": "SportsTeam",
                "name": awayTeam.name,
                "url": `https://www.lonescore.com/team/${awayTeam.id}`
            }
        ]
    };

    const schemaJson = JSON.stringify(schemaData);

    // Content tabs based on available navigation data
    const renderTabContent = (item, index) => {
        if (item === "matchfacts") return <Info props={props} news = {match_news}/>;
        if (item === "liveticker") return <Commentary props={props} />;
        if (item === "lineup" && data.content.lineup) return <Lineup props={props} />;
        if (item === "injured") return <Injured props={data} />;
        if (item === "stats") return <Stats props={data} />;
        if (item === "table") return <Table props={data} league={league} />;
        if(item === "knockout") return <KnockOut data = {data}/>
        if (item === "head to head") return <HeadtoHead props={data} />;
    };


const item = data
const time = <Timer/>
   const header = data.header.teams
     var statuss


        if(item.header.status.finished === true){

          if(item.header.status.reason.short === "Pen"){
            statuss = item.header.status.reason.long
          }
       
        }

        

        if(data.header.status.started === true && data.header.status.finished === false){

            if(data.header.status.liveTime.short === "HT"){
                statuss = data.header.status.liveTime.long
            }

            else {
            statuss = time
                }
        }

        if(item.header.status.started === false){
               const dateTimeString = item.header.status.utcTime;
                        const dateObject = new Date(dateTimeString);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


                    statuss = timeString
        }
var hommie
    var awayer
if(data.header.events != null && data.header.events != null) {
    hommie =  Object.keys(data.header.events.homeTeamGoals).map(key => {
        var og

       var min =  data.header.events.homeTeamGoals[key].map((id)=>{
            return(
                    <>{id.time}",</>
                )
        })

        key.ownGoal != null ?  og = <small style = {{fontSize : "0.7em"}} className = "text-danger">⚽{key} {min}</small> : og = <small style = {{fontSize : "0.7em", margin: `-200px 2px`}} className = "text-secondary">⚽{key} {min}</small>

    return(
            <div>{og}</div>

    ) // Output: "a", "b", "c"
});

     awayer =  Object.keys(data.header.events.awayTeamGoals).map(key => {
        var og
         var min =  data.header.events.awayTeamGoals[key].map((id)=>{
            return(
                      <>{id.time}",</>
                )
        })
        key.ownGoal != null ?  og = <small style = {{fontSize : "0.7em"}} className = "text-danger">⚽{key} {min}</small> : og = <small style = {{fontSize : "0.7em"}} className = "text-secondary">⚽{key} {min}</small>

    return(
            <div>{og}</div>

    ) // Output: "a", "b", "c"
});}
           


    return (
    <>

     {useEffect(() => {
            // Scrolls to the top of the page
            window.scrollTo(0, 0);
        }, [])}
        <div  className="header">
            <div style={{ background: "white", borderBottom: "solid #EEEEEE", borderWidth: "3px" }}>
                <div>
                    <div id="background">
                        {/* Background content if any */}
                    </div>
                    <div style={{ width: "100%", position: "absolute", top: "0%" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "1.5%" }}>
                            <ArrowBackIcon onClick={() => navigate(-1)} style={{ color: "black", cursor: 'pointer' }} />
                           
                        </div>
                        <br></br>
                        <div className="main_row">
                            <div style={{ width: "40%" }} onClick={() => { navigate("/team/" + header[0].id); const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer); }}>
                                <img src={header[0].imageUrl} className="team_logos" alt="Home Team Logo" />
                                <br />
                                <br />
                                <h6 style = {{fontSize : "0.8em"}} className="text-dark" id="break-down">{header[0].name}</h6>
                            </div>
                            <div>
                                <div style={{ display: "flex", transform: `translateX(25%)`, justifyContent: "space-between", width: "100%" }}>
                                    <h1 className="text-dark">{header[0].score}</h1>
                                    <h1 className="text-dark" style={{ marginLeft: "2%", marginRight: "2%" }}>:</h1>
                                    <h1 className="text-dark text-center">{header[1].score}</h1>
                                </div>
                                <h6 style={{ transform: `translateX(25%)` }} className="text-center text-danger">{status}</h6>
                            </div>
                            <div id="awaya" style={{ width: "40%" }} onClick={() => { navigate("/team/" + header[1].id); const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer); }}>
                                <img src={header[1].imageUrl} className="team_logos" alt="Away Team Logo" />
                                <br />
                                <br />
                                <h6 className="text-dark" style = {{fontSize : "0.8em"}} id="break-down">{header[1].name}</h6>
                            </div>
                        </div>
                    </div>


                 {data.header.status.aggregatedStr ?  <small className = "text-center text-secondary">{data.header.status.aggregatedStr}</small>: <></>}

                    <div className="container" style={{ justifyContent: "space-between", marginTop: "4%", width: "100%", display: "flex" }}>
                        <div style={{  maxHeight: "100px", overflowY: "auto", }}>{hommie}</div>
                        <div style={{ maxHeight: "120px", overflowY: "auto" }}>{awayer}</div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="sticky-tabs" >
            <ThemeProvider theme={Theme}>
                <Tabs
                    textColor="primary"
                    value={value}
                    TabIndicatorProps={{ style: { backgroundColor: 'midnightblue' } }}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="nav tabs"
                >
                    {data.nav.map((item, index) => (
                        <Tab sx = {{fontSize : "0.8em"}} key={index} label={{ matchfacts: "Info", liveticker: "Commentary", lineup: "Lineup" }[item] || item} />
                    ))}
                </Tabs>
            </ThemeProvider>
        </div>
                      <br/>
        <SwipeableViews index={value} onChangeIndex={(index) => setValue(index)}>
            {data.nav.map((item, index) => (
                <Typography key={index} component="div" role="tabpanel" hidden={value !== index}>
                    {renderTabContent(item, index)}
                </Typography>
            ))}
        </SwipeableViews>

        <script type="application/ld+json">{schemaJson}</script>

        <style>
            {`
                .header {
                    position: relative;
                    background-color: #fff;
                    
                   
                }
                .sticky-tabs {
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
            `}
        </style>
    </>
);

};




















const Result = ()=>{

const id = useParams()
const [palma, setPalma] = useState()
const {state} = useLocation()
console.log(state, "Location data generated")
const navigate = useNavigate()

const [data, setData] = useState()
const [dd, setD] = useState()

useEffect(()=>{
        if(state === null){
            setD(
                    <div>

    <Skeleton variant="rectangular" width={"100%"} height={160} />

    <br></br>

    <Skeleton className = "container" variant="rectangular" width={"100%"} height={window.innerHeight-160} />

    </div>
                )
        }

        else{
            setD(

                <div  className="header">
            <div style={{ background: "white", borderBottom: "solid #EEEEEE", borderWidth: "3px" }}>
                <div>
                    <div id="background">
                        {/* Background content if any */}
                    </div>
                    <div style={{ width: "100%", position: "absolute", top: "0%" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "1.5%" }}>
                            <ArrowBackIcon onClick={() => navigate(-1)} style={{ color: "black", cursor: 'pointer' }} />
                           
                        </div>
                        <br></br>
                        <div className="main_row">
                            <div style={{ width: "40%" }} onClick={() => { navigate("/team/" + state.home.id);  }}>
                                 <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${state.home.id}_xsmall.png`} className = "team_logos" loading="lazy" alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                                <br />
                                <br />
                                <h6 style = {{fontSize : "0.8em"}} className="text-dark" id="break-down">{state.home.name}</h6>
                            </div>
                            <div>
                                <div style={{ display: "flex", transform: `translateX(25%)`, justifyContent: "space-between", width: "100%" }}>
                                    <h1 className="text-dark">{state.home.score}</h1>
                                    <h1 className="text-dark" style={{ marginLeft: "2%", marginRight: "2%" }}>:</h1>
                                    <h1 className="text-dark text-center">{state.away.score}</h1>
                                </div>
                                <h6 style={{ transform: `translateX(25%)` }} className="text-center text-danger">LoneScore</h6>
                            </div>
                            <div id="awaya" style={{ width: "40%" }} onClick={() => { navigate("/team/" + state.away.id); }}>
                                 <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${state.away.id}_xsmall.png`} className = "team_logos" loading="lazy" alt="Home Team Logo" style={{ width: "20px", height: "20px" }} />
                                <br />
                                <br />
                                <h6 className="text-dark" style = {{fontSize : "0.8em"}} id="break-down">{state.away.name}</h6>
                            </div>
                        </div>
                    </div>

                 
                </div>
            </div>

    <br></br>

    <Skeleton className = "container" variant="rectangular" width={"100%"} height={window.innerHeight-160} />
        </div>
        

                )
        }
}, [])

const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollRemoval = () => {
  };
const [teller, setTeller] = useState(160)

useEffect(()=>{

 const reloader = async () => {
    try {
        // Fetch raw data
        const raw_data = await axios.get(`${Lined}/result`, {
            params: { id: id }
        });
        const datam = raw_data.data;
        console.log(datam);

        let comment_data;
        let trick;
        var league_data;
        var odds;
        var match_news

    
     

        const response = await axios.get(`${Lined}/league`, {
          params: {
              id: datam.general.parentLeagueId  // Ensure correct syntax here
          }
      });

      league_data = response.data
      console.log(league_data)

 
        // Fetch additional data if URL is present
        if (datam.content.table?.url) {
            const rd = await axios.get(datam.content.table.url);
            trick = rd.data;
        }

        const multi = [datam, comment_data, trick, league_data, match_news, odds];

        // Update state
        setD(<Rest_assure props={multi} />);

        // Check if the match is ongoing
        if (datam.ongoing) { 
            // Notify the user that the match is live
            setTimeout(reloader, 10000);  // Reload the function after 10 seconds
        }

    } catch (error) {
        console.error('Error in reloader:', error);
        setD(<div><Alert severity="error">Fail to load data Try checking Network Connection</Alert></div>)
    }
};

// Start reloading
reloader();






}, [])



return(

            <div style = {{  background : "#EEEEEE" }}>
                  
         
                {dd}

            </div>
    )






}

export default Result







/////////////////////////////////////////Info////////////////////////////////






const Info = ({props })=>{

    const data = props[0]
    var ticker = props[2]
   const video_data = JSON.parse(sessionStorage.getItem("video"))
   console.log(video_data, "Video Data")





    const [audio, setAudio] = useState()
    const replacement =" https://www.bing.com/images/search?view=detailV2&ccid=hzIbAsJ%2f&id=D6AF153162164F6E0A2C3133813AB7479BD696F8&thid=OIP.hzIbAsJ_xX9L4TfdzxWGtQAAAA&mediaurl=https%3a%2f%2fwww.pngkey.com%2fpng%2ffull%2f349-3499617_person-placeholder-person-placeholder.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.87321b02c27fc57f4be137ddcf1586b5%3frik%3d%252bJbWm0e3OoEzMQ%26pid%3dImgRaw%26r%3d0&exph=377&expw=377&q=human+placeholder&simid=608042511054100806&FORM=IRPRST&ck=12372B13B16E8130F69590AD2A2940FD&selectedIndex=2&itb=1"
    const [pump, setPump]  = useState()

    const [motm, setMotm] = useState()

    const [match_events, setEvents] = useState()

    const [highlight, setHighlight] = useState()

    const [momentum, setMomentum] = useState()

    const [stats, setStats] = useState()

    const [topplayers, setTopPlayers] = useState()

    const [teamform, setForm] = useState()

    const [insight, setInsight] = useState()

    const [info, setInfo] = useState()

    const [pending_var, setPendingVar] = useState()


    const [top_scorers, setTopScorers] = useState()

    const [fifa_ranking, setFifaRanking] = useState()
    const [headrecord, setHeadrecord] = useState()
    const [match_news, setmatchNews] = useState()
    const [match_odds, setMatch_odds] = useState()
    const [vid, setVid] = useState()
    const navigate = useNavigate()
      let nik = [];     

    useEffect(()=>{

    
        console.log(video_data, "New effect")
        // Check if video_data is available
    if (video_data != null) {
        video_data.data.forEach((item) => {
            if (item.homeName === data.header.teams[0].name) {
                nik.push(item);
            } else if (item.guestName === data.header.teams[1].name) {
                nik.push(item);
            }
        });
    } 
    // Fetch video data if it's null
    else if (video_data === null) {
       
        axios.get(Lined + "/get_video_data")
            .then((res) => {
                const datam = res.data; // Destructure here to get 'data'
                console.log(datam, data, "DATA")
                datam.data.forEach((item) => {
            if (item.homeName === data.header.teams[0].name) {
                nik.push(item);
            } else if (item.guestName === data.header.teams[1].name) {
                nik.push(item);
            }
        });
            })
            .catch((err) => {
                console.error("Error fetching video data", err);
            });
    }

            async function dik(){
            
                console.log(nik, "first")
                if(nik.length > 0){
                 await axios.get(`${Lined}/animation`,
          {
            params : {id : nik[0].matchId}
          }
        )
                .then((res)=>{
                    console.log(res.data, "main animation data")
                    setVid(
                      <div>

                      { data.ongoing === true?

                      <div>
                        {res.data.data != null ? 
                      <VideoPlayer props = {res.data.data.videoUrl}/>
                        : <div></div>
                        }



                    </div>
                    :
                    <div>
                        {data.header.status.finished === true ? <div></div> : <div>
                        <h6 className = "text-center">Watch This Match Live when it begins</h6></div>}
                    </div>
                          }</div>
                        )
                })  

            }



        }
        dik()
    }, [nik])
    useEffect(()=>{

    
          async function asap(){
              
        const news_data = await axios.get(`${Lined}/match_news`,
          {
            params : {id : data.general.matchId}
          }
        )

        const news = news_data.data
        
        console.log(news_data, data.general.matchId, "news")

        
      
        ////////////////// MATCH NEWS //////////
        setmatchNews(
          <div style = {{borderRadius : "10px", background : "white"}}>
            {news.length > 0? <h6 className = "text-center">Match News</h6> : <></>}
            
            {news.map((item)=>{
  
              console.log(item)
              return(
                <Link to={item.page.url} ><div className="container">
                    <img style = {{width : "100%", height : "200px", borderRadius : "0"}} src = {item.imageUrl}></img>
                    <p><strong>{item.title}</strong></p>
                    </div>
                </Link>
              )
            })}
          </div>
        )



          }

          asap()
      //////////////////////////////////////////////
      
      ///////////////////Audio Commentary
      console.log(data.general.matchId, "id for the match")
       axios.get(`${Lined}/audio_commentary`, {
        params: { id: data.general.matchId }
    }).then((res)=>{
  console.log(res, "audio data")

if(res.data.urls.length > 0){
  setAudio(

    <div style = {{borderRadius : 10, background : "white", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}} >
      
      <h6  className="text-center">Audio Commentary</h6>
      <div style  = {{width : "100%", height : "3px", background : "black"}}></div>
      {data.ongoing === false ? 
      <div><h6 className="text-center">Audio Commentary not available now</h6></div> : 

      <div>

        {data.header.status.liveTime.short === "HT" ? 
          <h6 className="text-center">Audio Commentary will be available when the match resumes</h6> : 

          <div style = {{display :"flex", width : "100%", justifyContent : "space-between"}}> {res.data.urls.map((stream, index) => {
            console.log(stream._)
            return(  <AudioPlayer key={index} streamUrl={stream._} language={stream.lang[0]} />)
    })}</div>
      }

     

  </div>


}
    </div>
  )
}

else{

}
    })
     



      ////////////// Head to Head record
      if(data.content.h2h != false){
        const main = data.content.h2h
        setHeadrecord(

          <div style={{borderRadius : "10px", background : "white", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
            <h6 className="text-center">Head TO Head Record</h6>

            <div style = {{width : "100%", height : "100px", alignItems : "center", display : "flex", justifyContent : "space-around", background : "white", borderRadius : "10px"}}>
                  <div style = {{ width : "14%",}}>  <div style = {{background : data.general.teamColors.lightMode.home, height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-light text-center"><strong>{main.summary[0]}</strong></h6></div> <p className = "text-center"><strong>Wins</strong></p></div>
                  <div style = {{ width : "14%",}}>  <div style = {{background : "#EEEEEE", height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-dark text-center"><strong>{main.summary[1]}</strong></h6></div> <p className = "text-center"><strong>Draw</strong></p></div>
                   <div style = {{ width : "14%",}}>  <div style = {{background : data.general.teamColors.lightMode.away, height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-light text-center"><strong>{main.summary[2]}</strong></h6></div> <p className = "text-center"><strong>Wins</strong></p></div>
                </div>
          </div>
        )
      }
      ///////////////fifa ranking

      if(data.header.teams[0].fifaRank != null && data.header.teams[1].fifaRank != null){
        setFifaRanking(
          <div style={{width : "100%", background : "white", borderRadius : "10px", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
            <h6 className="text-center">Fifa Ranking</h6> 
            <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
              
            <div style = {{display : "flex"}}>
              <img style={{width : "60px", height : "60px"}} src = {data.header.teams[0].imageUrl}></img>
            <div>
              <h5>#{data.header.teams[0].fifaRank}</h5>
              <h6 className="text-secondary">{data.header.teams[0].name}</h6>
              </div>
            </div>
            <div>

            </div>

            <div style = {{display : "flex"}}>
            
            <div>
              <h5 style = {{textAlign : "right"}}>#{data.header.teams[1].fifaRank}</h5>
              <h6  style = {{textAlign : "right", wordBreak : "break-word", }} className="text-secondary">{data.header.teams[1].name}</h6>
              </div>
              <img style={{width : "60px", height : "60px"}} src = {data.header.teams[1].imageUrl}></img>
            </div>
            <div>

            </div>
            </div>

          


          </div>
        )
      }

      ///////////////// Top Scorers

      if(data.content.matchFacts.topScorers != null){
        if(data.header.status.started == false && data.header.status.finished == false ){
          const item = data.content.matchFacts.topScorers
          setTopScorers(

            <div style = {{background : "white", borderRadius : "10px", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}} >

                  <h6 className = "text-center">{item.section}</h6>

                  <div style = {{width : "100%", display : "flex", justifyContent : "space-around"}}>
                      <div onClick={()=>navigate("/player/"+item.homePlayer.playerId)}>
                          <img style = {{height : "50px", height : "50px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.homePlayer.playerId+".png"}  onError={(e) => { e.target.src = replacement }} />
                          <h6>{item.homePlayer.lastName}</h6>
                      </div>
                      <div onClick={()=>navigate("/player/"+item.awayPlayer.playerId)}>
                          <img style = {{height : "50px", height : "50px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.awayPlayer.playerId+".png"}  onError={(e) => { e.target.src = replacement }} />
                          <h6>{item.awayPlayer.lastName}</h6>
                      </div>
                  </div>
                  <br/>
                  <div>
                    <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                      <h6><strong>{item.homePlayer.stats.playerRating}</strong></h6>
                     <h6 className="text-secondary">LoneScore Rating</h6> 
                     <h6><strong>{item.awayPlayer.stats.playerRating}</strong></h6></div>
                 <br/>
                  <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                      <h6><strong>{item.homePlayer.stats.goals}</strong></h6>
                     <h6 className="text-secondary">Goals</h6> 
                     <h6><strong>{item.awayPlayer.stats.goals}</strong></h6></div>
                     <br/>
                    <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                    <h6><strong>{item.homePlayer.stats.goalAssist}</strong></h6>
                   <h6 className="text-secondary">Assist</h6> 
                   <h6><strong>{item.awayPlayer.stats.goalAssist}</strong></h6>
                </div>
                <br/>
                <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                <h6><strong>{item.homePlayer.stats.gamesPlayed}</strong></h6>
               <h6 className="text-secondary">Matches Played</h6> 
               <h6><strong>{item.awayPlayer.stats.gamesPlayed}</strong></h6></div>
            </div>
            <hr></hr>

            <div>
             
              <h5 className="text-center">{data.content.matchFacts.infoBox["Tournament"].leagueName}</h5>
            </div>
            <hr></hr>
            </div>
          )
        }
      }


        ///////////////Top Players

        if(data.content.matchFacts.topPlayers.homeTopPlayers.length > 0 && data.content.matchFacts.topPlayers.awayTopPlayers.length > 0){

            setTopPlayers(
                    <div style = {{background : "white",fontFamily : "Montserrat", borderRadius : "10px", marginTop : "5%"}}>
                    <h6 className = "text-center">Top Players</h6>
                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", }}>
                            <div >

                                {data.content.matchFacts.topPlayers.homeTopPlayers.map((item)=>(
                                        <div style = {{width : "90%", marginTop : "3%", display : "flex", justifyContent : "space-between"}}>
                                            <img style = {{width : "30px", height : "30px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.playerId+".png"}></img>
                                            <h6>{item.name.lastName}</h6>
                                            <h6 style = {{background : item.color, height : "fit-content", color : "black", textDecoration : "bold", borderRadius : "10px"}}>{item.playerRatingRounded}</h6>
                                        </div>
                                    ))}
                                
                            </div>


                             <div >

                                {data.content.matchFacts.topPlayers.awayTopPlayers.map((item)=>(
                                        <div style = {{width : "90%", marginTop : "3%", display : "flex", justifyContent : "space-between"}}>
                                              <img style = {{width : "30px", height : "30px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.playerId+".png"}></img>
                                            <h6>{item.name.lastName}</h6>
                                            <h6 style = {{background : item.color, height : "fit-content", color : "black", textDecoration : "bold", borderRadius : "10px"}}>{item.playerRatingRounded}</h6>
                                        </div>
                                    ))}
                                
                            </div>
                        </div>

                    </div>
                )

        }

      
        
        /////////////////ticker

        if(data.content.superlive.showSuperLive != false){

             const handleClick = () => {
    window.open(data.content.superlive.superLiveUrl, '_blank', 'noopener,noreferrer');
  };
        setPump(

                <div>

                       <iframe
              src={data.content.superlive.superLiveUrl} // URL of the content to display
              width="100%"
              height="200"
              frameBorder="0"
              title="Embedded Content"
            ><small>credits to FOTMOB</small></iframe>
                <button className = "btn btn-success" style = {{width : "100%"}} onClick={handleClick}>View in fullScreen</button>
                        <br></br>
                </div>
            )
    }
            ////////////////////Pending Var

            var var_ = data.hasPendingVAR

            if(var_){
                setPendingVar(
                        <div className = "blink-animation" style = {{background : "green", width : "100%", color : "white"}}><h6 className = "text-center">Var Check</h6></div>
                    )
            } 
            else{
            setPendingVar(
                    )
            } 
            


            ////////////////////Information Box

                const box = data.content.matchFacts.infoBox



                if(box != false){

                    const reloade = async()=>{

                    var status

                    const dateTimeString = box["Match Date"].utcTime;
                        const dateObject = new Date(dateTimeString);
                    

                    status = dateObject.toString()
                    console.log(status)

                            try {
        const response = await axios.get(Lined+'/player_pic', {
          params: {
            url: "https://images.fotmob.com/image_resources/logo/leaguelogo/"+box["Tournament"].parentLeagueId+".png",
            w: '48',
            q: '75',
          },
          responseType: 'arraybuffer',
        });

        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        var source = `data:${response.headers['content-type']};base64,${base64}`;

                    setInfo(
                                    <div style = {{background : "white",fontFamily : "Montserrat", borderRadius : "10px"}}>

                                        <div style = {{display : "flex"}}>
                                         <p>Match Date:</p> 
                                         <p>{status}</p>
                                         </div>

                                         <hr></hr>
                                         <div style = {{display : "flex"}} onClick = {()=>{navigate("/leauges/"+box["Tournament"].id);}} >
                                         <img src = {source}></img> 
                                         <h5>{box["Tournament"] != null ? box["Tournament"].leagueName : ""}</h5>
                                         </div>
                                            <hr></hr>
                                         <div style = {{display : "flex"}}>
                                         <p>Match Referee:</p> 
                                         <p>{ box["Referee"] != null ? box["Referee"].text : ""}</p>
                                         </div>

                                         <hr></hr>

                                         <div style = {{display : "flex"}}>
                                         <p>Stadium:</p> 
                                         <p>{box["Stadium"] != null ? box["Stadium"].name : ""}</p>
                                         </div>

                                        
                                    </div>
                        )
                }
                catch(e){
                    console.log(e)
                }
                }

                reloade()

                }


            ////////////////Insight

        const insight = data.content.matchFacts.insights

        const home_id = data.general.homeTeam.id 
        const away_id = data.general.awayTeam.id 

        var home_target = []

        var away_target = []
            if(insight){

        insight.map((items)=>{
                        if(items.teamId === home_id){
                            home_target.push(items)
                        }

                        else if(items.teamId === away_id){
                            away_target.push(items)
                        }
        })





        if(insight.length > 0){
            setInsight(
                            <div style = {{background : "white", borderRadius : "10px"}}>

                                <h6 className = "text-secondary text-center">Match Insights</h6>
                                    <div style = {{width : "100%",  display : "flex", justifyContent : "center"}}><img style = {{ width : "30px", height : "30px" }} src = {data.header.teams[0].imageUrl}></img>
                                    </div>
                               {
                                home_target.map((item)=>{

                                    return(

                                        <div> 
                                                    <h6 style = {{color : item.color}}>{item.text}</h6>
                                        </div>


                                        )

                                })
                               }

                               <div style = {{width : "100%",  display : "flex", justifyContent : "center"}}><img style = {{ width : "30px", height : "30px" }} src = {data.header.teams[1].imageUrl}></img>
                                    </div>
                               {
                               away_target.map((item)=>{

                                    return(

                                        <div> 
                                                    <h6 style = {{color : item.color}}>{item.text}</h6>
                                        </div>


                                        )

                                })
                               }
                            </div>
                )
        }
}





            ////////////////Team Form

        const form = data.content.matchFacts.teamForm

            if(form != null){

        var map_return = form[0].map((element)=>{

             var our_img = data.header.teams[0].imageUrl
            var background_

            if(element.result === 1){
                background_ = "green"
            }

            else if(element.result === 0){
                background_ = "lightgray"
            }

            else if (element.result === -1){
                background_ = "red"
            }

                if(element.home.isOurTeam == true){
                    return(

                        <div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "3%", marginTop : "3%"}} >

                        <img img src = {our_img} style = {{height : "30px", width : "30px"}}></img>
                        <div style = {{borderRadius : "10px", color: "white",  height : "30px", background : background_, display : "flex", width : "30%", justifyContent : "space-around", alignItems : "center"}}> {element.score} </div>
                        <img img src = {element.imageUrl} style = {{height : "30px", width : "30px"}}></img>
                        

                             </div>

                        )
                }



                 if(element.home.isOurTeam == false){
                    return(

                        <div style = {{display : "flex", width : "100%", marginTop : "3%", justifyContent : "space-between", marginTop : "3%"}} >

                        <img img src = {element.imageUrl} style = {{height : "30px", width : "30px"}}></img>
                        <div style = {{borderRadius : "10px", color: "white",  height : "30px", background : background_, display : "flex", width : "30%", justifyContent : "space-around", alignItems : "center"}}> {element.score} </div>
                        <img img src = {our_img} style = {{height : "30px", width : "30px"}}></img>
                        

                             </div>

                        )
                }


        })


        var map_return_2= form[1].map((element)=>{

            var our_img = data.header.teams[1].imageUrl
                       var background_

            if(element.result === 1){
                background_ = "green"
            }

            else if(element.result === 0){
                background_ = "lightgray"
            }

            else if (element.result === -1){
                background_ = "red"
            }

                if(element.home.isOurTeam == true){
                    return(

                        <div style = {{display : "flex", width : "100%", marginTop : "3%", justifyContent : "space-between", marginTop : "3%"}} >

                        <img img src = {our_img} style = {{height : "30px", width : "30px"}}></img>
                        <div style = {{borderRadius : "10px", color: "white",  height : "30px", background : background_, display : "flex", width : "30%", justifyContent : "space-around", alignItems : "center"}}> {element.score} </div>
                        <img img src = {element.imageUrl} style = {{height : "30px", width : "30px"}}></img>
                        

                             </div>

                        )
                }



                 if(element.home.isOurTeam == false){
                    return(

                        <div style = {{display : "flex", width : "100%", marginTop : "3%", justifyContent : "space-between", marginTop : "3%"}} >

                        <img img src = {element.imageUrl} style = {{height : "30px", width : "30px"}}></img>
                        <div style = {{borderRadius : "10px", color: "white",  height : "30px", background : background_, display : "flex", width : "30%", justifyContent : "space-around", alignItems : "center"}}> {element.score} </div>
                        <img img src = {our_img} style = {{height : "30px", width : "30px"}}></img>
                        

                             </div>

                        )
                }


        })

        setForm(
                         <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>  
                         <div style = {{width : "35%"}}> {map_return}</div>
                         <div style = {{width : "35%"}}> {map_return_2}</div>
                         </div>
            )


}  

            /////////////////Average Stats
      
        const stati = data.content.stats

        if(stati != null){
              const stats = data.content.stats.Periods.All
              if (stats != null){
const stat = data.content.stats.Periods.All
        const val = stat.stats[0].stats.slice(0,5)
            setStats(

<div style = {{background : "white", borderRadius : "10px"}}>
                <h6 className = "text-center text-secondary">Top Stats</h6>
               

                        {
                            val.map((item)=>{

                                var mern = {}
                                var mernd = {}
                                if(item.highlighted == "away"){

                                    mern = {background : stat.teamColors.lightMode.away, height : "fit-content", color : "white", textDecoration : "bold", borderRadius : "10px"}


                                }
                                else if(item.highlighted == "home"){

                                    mernd = {background : stat.teamColors.lightMode.home,  height : "fit-content", color : "white", textDecoration : "bold", borderRadius : "10px"}

                                }
                                return(
                                        <div style = {{display : "flex", height: "40px", width : "100%", justifyContent : "space-between",}}>
                            <h6 style = {mernd}>{item.stats[0]}</h6>
                            <h6>{item.title}</h6>
                            <h6 style = {mern}>{item.stats[1]}</h6>
                        </div>
                                    )
                            })
                        }

                </div>

)



}
        }


        /////////////////Momentum


        const moments = data.content.momentum

        if(moments != false){

const moment = data.content.momentum.main.data


const labels = moment.map(item => item.minute);
  const values = moment.map(item => item.value);

  // Chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Momentum',
        data: values,
        borderColor: data.general.teamColors.lightMode.home,
        backgroundColor: data.general.teamColors.lightMode.away,
        fill: true,
      }
    ]
  };

  // Chart options configuration
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Minute'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Momentum Value'
        },
        suggestedMin: -100, // Adjust as needed
        suggestedMax: 100  // Adjust as needed
      }
    }
  };

  setMomentum( <Line style = {{width : "100%"}} data={chartData} options={options} />);



}

        /////////////// highlight

        var light = data.content.matchFacts.highlights

        if(light != null){
            setHighlight(
                            <Link to = {light.url} style = {{width : "100%", height : "230px"}}>
                                <img style = {{width : "100%", height : "230px"}}   src={light.image}  ></img>
                            </Link>
                )
        }

        /////////////// MatchEvents

        var event = data.content.matchFacts.events.events


        if(event.length > 0){



           setEvents(

             <div style = {{background : "white", borderRadius : "10px"}}>
                <h6 className = "text-center text-secondary">Match Events</h6>
                
           { event.map((item)=>{
                if(item.type === "Goal"){
                    if(item.isHome == true){
                        var assist
                        var pen
                        var id 

                        if(item.playerId){
                          id = item.playerId
                        }
                        else{
                          id = 0
                        }

                            if(item.assistInput != null){
                                assist = <div>({item.assistInput})</div>
                            }
                            if(item.suffix === "Pen"){
                                pen = "(penalty)"
                            }
                        return(
                        <div>  <div style = {{display : "flex"}}><img style = {{width : "35px", height : "35px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.player.id+".png"}></img>   <div style = {{width : "100%", }}> <div style = {{width : "50%", justifyContent : "space-between",  alignItems : "center", display : "flex"}}><h6><strong>⚽{item.lastName}</strong></h6> <div><strong>{item.time}</strong></div></div> {assist} {pen}</div></div><hr/></div>
                            )
                    }


                    if(item.isHome == false){
                        var assist
                        var pen

                            if(item.assistInput != null){
                                assist = <div>({item.assistInput})</div>
                            }
                              if(item.suffix === "Pen"){
                                pen = "(penalty)"
                            }
                        return(
                        <div>  <div style = {{display : "flex"}}><div style = {{width : "100%", textAlign : "right" }}> <div style = {{width : "50%", justifyContent : "space-between",  textAlign : "right",  marginLeft : "50%",      alignItems : "center",  display : "flex"}}><div className = "text-right"><strong>{item.time}</strong></div><h6 className = "text-right"><strong>{item.lastName}⚽</strong></h6></div> {assist} {pen} </div><img style = {{width : "35px", height : "35px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+item.player.id+".png"}/> </div><hr></hr></div>
                            )
                    }
                }

                if(item.type === "AddedTime"){
                    return(
                                    <div style = {{width : "100%", height : "30px"}}><h6 className = "text-secondary text-center">{item.minutesAddedStr}</h6></div>
                        )
                }

                if(item.type === "Half"){
                    return(
                                <div style = {{width : "100%", height : "30px", display : "flex", justifyContent : "center" }}><div style={{color : "white", borderRadius : "50%", width : "10%", background : "black", alignItems : "center"}}><strong><h6 className = "text-light text-center">{item.halfStrShort}</h6></strong></div></div>
                        
                        )
                }


                if(item.type === "Substitution"){

                    if(item.isHome === true){

                        return(

                       <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", display : "flex"}}><div><h6 className = "text-success"><strong>{item.swap[0].name}</strong></h6><h6 className = "text-danger">{item.swap[1].name}</h6></div> <div><strong>{item.time}</strong></div> </div> {assist} <hr></hr></div>
                          ) 


                    }

                     if(item.isHome === false){

                        return(

                       <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center", marginLeft : "50%" , justifyContent : "space-between", display : "flex"}}><div><strong>{item.time}</strong></div><div><h6 className = "text-success"><strong>{item.swap[0].name}</strong></h6><h6 className = "text-danger">{item.swap[1].name}</h6></div> </div> {assist} <hr></hr></div>
                          ) 


                    }

                }
                     if(item.type === "MissedPenalty"){

                    if(item.isHome === true){

                        return(

                       <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", display : "flex"}}><div><h6 className = "text-dark"><strong>❌Missed Penalty</strong></h6><h6 className = "text-dark">{item.nameStr}</h6></div> <div><strong>{item.time}</strong></div> </div> {assist} <hr></hr></div>
                          ) 


                    }

                     if(item.isHome === false){

                       
                      
                        return(

                       
                          <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center", marginLeft : "50%" , justifyContent : "space-between", display : "flex"}}><div><h6 className = "text-dark"><strong>❌Missed Penalty</strong></h6><h6 className = "text-dark">{item.nameStr}</h6></div> <div><strong>{item.time}</strong></div> </div> {assist} <hr></hr></div>
                          ) 
 


                    }

                }

                if(item.type === "Card"){

                    if(item.card === "Yellow"){
                        if(item.isHome === true){

                            return(

                                <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", display : "flex"}}><div><strong>{item.nameStr}</strong></div> <div><h6 className = "text-success"><strong>🟨</strong></h6></div> <div><strong>{item.time}</strong></div> </div> {assist} <hr></hr></div>

                                )
                        }

                        if(item.isHome == false){

                            return(

                            <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", marginLeft : "50%", display : "flex"}}> <div><strong>{item.time}</strong></div> <div><h6 className = "text-success"><strong>🟨</strong></h6></div>  <div><strong>{item.nameStr}</strong></div></div> {assist} <hr></hr></div>

                                    )
                        }

                }


         

                    if(item.card === "YellowRed"){
                        if(item.isHome === true){

                            return(

                                <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", display : "flex"}}><div><strong>{item.nameStr}</strong></div> <div><h6 className = "text-success"><strong>🟨🟥</strong></h6></div> <div><strong>{item.time}</strong></div> </div> {assist} <hr></hr></div>

                                )
                        }

                        if(item.isHome == false){

                            return(

                            <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", marginLeft : "50%", display : "flex"}}> <div><strong>{item.time}</strong></div> <div><h6 className = "text-success"><strong>🟨🟥</strong></h6></div>  <div><strong>{item.nameStr}</strong></div></div> {assist} <hr></hr></div>

                                    )
                        }

}
                

                    if(item.card == "Red"){

                        if(item.isHome === true){

                            return(

                                <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", display : "flex"}}><div><strong>{item.nameStr}</strong></div> <div><h6 className = "text-success"><strong>🟥</strong></h6></div> <div><strong>{item.time}</strong></div> </div> {assist} <hr></hr></div>

                                )
                        }

                        if(item.isHome == false){

                            return(

                            <div style = {{width : "100%",  }}> <div style = {{width : "50%",   textAlign : "right", alignItems : "center" , justifyContent : "space-between", marginLeft : "50%", display : "flex"}}> <div><strong>{item.time}</strong></div> <div><h6 className = "text-success"><strong>🟥</strong></h6></div>  <div><strong>{item.nameStr}</strong></div></div> {assist} <hr></hr></div>

                                    )
                        }

                    }
                
                }




            })
}

                </div>

            )
      


        }



        ///////////Player of the Match
        var pro = data.content.matchFacts.playerOfTheMatch

            if("name" in pro){ 

                setMotm(

                     <div style = {{background : "white", borderRadius : "10px"}}>
                <h6 className = "text-center text-secondary">Player of the Match</h6>
                   
                   <div style = {{display : "flex", width : "100%", justifyContent : "space-around", alignItems : "center", }}>
                    <img style = {{height : "40px", width : "40px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+pro.id+".png"}></img>
                    <div>
                                <span><strong>{pro.name.fullName}</strong></span>
                                <br></br>
                                <span>{pro.teamName}</span>
                    </div>

                    <div  style = {{borderRadius : "10px", background : "midnightblue", color : "white"}}><strong>{pro.rating.num} ⭐</strong></div>

                   </div>

                   </div>

                    )

              



            
                }
    }, [data])
   
 

    return(

            <div className = "container" style = {{background : "#EEEEEE", fontSize : "0.8em"}} >

             <div style = {{boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}> {audio}</div>
             <br></br>

                        {pending_var}
                        <br/>
                        {vid}

                        

                        <div style = {{marginTop:"5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
                          {top_scorers}
                        </div>
                   
                   <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>

                        {pump}
                        </div>

      	                <div style = {{boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
                        {highlight}
                          </div>
                        <div style = {{boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
                          {match_odds}
                        </div>
    
                   
                  <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
               {motm}
               </div>
              
                <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>

                {topplayers}


                </div>

              
                <div style = {{background : "white", borderRadius : "10px", marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
               
                {momentum}
                </div>
                <br></br>
                <div style = {{boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>
                {stats}
                </div>
                               <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>

               {match_events}
               </div>

               
              <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>{fifa_ranking}</div>
                <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>{headrecord}</div>
     
                   <div style = {{background : "white", borderRadius : "10px", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`, marginTop : "5%"}}>
                <h6 className =   "text-center text-secondary">Team Form</h6>
                {teamform}
                </div>



                <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>

                {insight}
                </div>

                <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>

                {info}

                </div>

                <div style = {{marginTop : "5%", boxShadow : ` 0 10px 10px rgba(0, 0, 0, 0.1)`,}}>

                {match_news}

                </div>
                
           
            </div>
        )
}


/////COMMMENTARY


const Commentary = ({props})=>{
        const data = props[0]
        


        const [comments, setComments] = useState()

        useEffect(()=>{

            async function trainer(){

        if (data.content.liveticker) {
            console.log(data.content.liveticker.teams);

            const str = data.content.liveticker.langs;
            const arr = str.split(',');
            console.log(arr);

            // Fetch commentary data
            const commentd = await axios.get(`${Lined}/commentary`, {
                params: {
                    first: data.content.liveticker.teams,
                    id: data.general.matchId,
                    arr: arr
                }
            });
            var comment = commentd.data;

            const main = comment.events
            console.log(main, "main comments")
                setComments(
                            <div >

                                {main.map((item)=>{
                                    var timer

                                    if(item.time != null && item.time.added != null){
                                        timer = item.time.main + item.time.added
                                    }

                                    if(item.time != null && item.time.added == null){
                                        timer = item.time.main
                                    }

                                    var picker 

                                    if(item.onlyText === false){
                                        if(item.players.length > 0){

                                        picker = <img style = {{width : "30px", height : "30px"}} src={`https://images.fotmob.com/image_resources/playerimages/${item.players[0].id}.png`} ></img>
                                    }
                                }

                                    return(<div style = {{width : "100%", background : "white", borderRadius : "10px"}}>
                                    <div style = {{marginTop : "2%", marginBottom : "2%"}}>{item.title ? <h6 className="text-center text-success"><strong>{item.title.value}</strong> </h6> : ""}</div>
                                            <div style = {{width : "100%", display : "flex", justifyContent : "space-between"}} ><h6 className = "text-success" >{timer}</h6><div>{picker}</div></div>
                                            <div style = {{fontFamily : "monospace"}}><h6 style = {{fontSize : "0.8em"}}><strong>{item.text}</strong></h6></div>
                                          {item.isSubstitution == true ?
                                            <div className="container">
                                              <h6 className="text-center">Player OUT</h6>
                                                <div style = {{borderRadius : "15px", marginTop: "2%", background : "red", color : "white", display : "flex", justifyContent : "space-around", width : "100%"}}>
                                                    <img style = {{width : "30px", height : "30px"}} src={`https://images.fotmob.com/image_resources/playerimages/${item.players[1].id}.png`}></img>
                                                    <h6 style = {{fontSize : "0.8em"}}><strong>{item.players[1].name}</strong></h6>
                                                </div>
                                                <h6 className="text-center">Player IN</h6>
                                                <div style = {{borderRadius : "15px", marginTop: "2%", marginBottom : "4%", background : "green", color : "white", display : "flex", justifyContent : "space-around", width : "100%"}}>
                                                    <img style = {{width : "30px", height : "30px"}} src={`https://images.fotmob.com/image_resources/playerimages/${item.players[0].id}.png`}></img>
                                                    <h6 style = {{fontSize : "0.8em"}}><strong>{item.players[0].name}</strong></h6>
                                                </div>
                                            </div>
                                          :<></>}
                                            </div>
                                        )

                                })}
                            </div>
                    )
           
        }

            }

            trainer()
                



        }, [data])

        return(
                <div style = {{background : "#EEEEEE"}} className = "container">{comments}</div>
            )



    

}

////////////////////SHOT MAPPER

const ShotMap = ({data}) => {
  // Data for the shot map

    var team_color

    if(data.length < 1){
            team_color = "red"
    }

    else if(data.length > 0){
                team_color = data[0].teamColor
    }
 const shotData = {
    datasets: [
      {
        label: 'Shots',
        data: data.map(shot => ({
          x: shot.x* 50/100, // X position on the field
          y: shot.y, // Y position on the field
          r: 5, // Radius of the point
        })),
        backgroundColor: team_color,  // Team color
        borderColor: '#DE0209',
        borderWidth: 1,
      }
    ]
  };

  // Configuration for the shot map
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const { x, y, r } = context.raw;
            return `X: ${x}, Y: ${y}, Radius: ${r}`;
          }
        }
      },
      drawGoalPost: drawGoalPostPlugin
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'X Position'
        }
      },
      y: {
        min: 0,
        max: 50,
        title: {
          display: true,
          text: 'Y Position'
        }
      }
    }
  };
  return (
    <div>
     <h6 className = "text-center text-secondary"> Shots Map</h6>
      <Scatter data={shotData} options={options} />
    </div>
  );
};


/////////////// STATS


const Stats = ({props})=>{
    const data = props

    const [regular_stats, setRegular] = useState()
    const [possess, setPossess] = useState()

    useEffect(()=>{
           const stat = data.content.stats.Periods.All

           if(stat!= null){
        const sm_stats = data.content.stats.Periods.All.stats
      

        setPossess(
          <div className = "container" style = {{width : "100%", background : "white", borderRadius : "10px"}}>
            <h6 className = "text-center">Ball Possession</h6>
              <div style = {{width : "100%", height : "30px", display : "flex", borderRadius : "7px", background : "gray"}}>
                <div  style = {{width : `${sm_stats[0].stats[0].stats[0]}%`, borderBottomLeftRadius : "7px", borderTopLeftRadius : "7px",  height : "30px", display : "flex", background : `${data.content.stats.Periods.All.teamColors.lightMode.home}`, color : "white"}}>{sm_stats[0].stats[0].stats[0]}%</div>
              <div style = {{width : `${sm_stats[0].stats[0].stats[1]}%`, borderTopRightRadius : "7px", borderBottomRightRadius : "7px", height : "30px", display : "flex", background : `${data.content.stats.Periods.All.teamColors.lightMode.away}`, textAlign : "right", color : "white"}}> {sm_stats[0].stats[0].stats[1]}% </div>
              </div>
          </div>
        )

        setRegular(
                <div>
                     <div style = {{background : "white", width : "100%", display : "flex", justifyContent : "center", borderRadius : "10px", marginTop : "5%"}}>
                <ShotMapped data = {data.content.shotmap.shots} />
              
                </div>
                    {sm_stats.map((item)=>{
                            return(

                            <div style = {{background : "white", borderRadius : "10px", marginTop : "7%"}}>
                                <h5 style = {{fontFamily : "monospace"}} className = "text-center text-dark">{item.title}</h5>

                                {item.stats.map((item)=>{

                                     var mern = {}
                                var mernd = {}
                                if(item.highlighted == "away"){

                                    mern = {color : "white", background : stat.teamColors.lightMode.away, borderRadius : "10px"}


                                }
                                else if(item.highlighted == "home"){

                                    mernd = {color : "white", background : stat.teamColors.lightMode.home, borderRadius : "10px"}

                                }
                                var sum = item.stats[0]+item.stats[1]
                               var home_percent = item.stats[0] * 100 / sum
                               var away_percent = item.stats[1] * 100 / sum
                                return(
                                        <div style = {{  width : "100%", marginTop : "5%" }}>
                                          <div style = {{width : "100%", display : "flex", justifyContent : "space-between"}}>
                                          <p>{item.stats[0]}</p>
                                          <h6><strong>{item.title}</strong></h6>
                                          <p>{item.stats[1]}</p>
                                    
                                          </div>
                                          <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                                          <div style = {{width : "45%"}}>
                          
                            <div style = {{width : "100%", height : "10px", borderRadius : "7px", background : "lightgray"}}>
                                  <div style= {{width : `${home_percent}%`, borderTopLeftRadius: "7px", borderBottomLeftRadius : "7px", height : "10px", background : stat.teamColors.lightMode.home  }}></div>
                            </div>
                            </div>

                            <div style = {{width : "45%"}}>
                          
                          <div style = {{width : "100%", height : "10px", borderRadius : "7px", justifyContent : "right", background :  "lightgray", display : "flex"}}>
                                <div style= {{width : `${away_percent}%`, borderTopRightRadius : "7px", borderBottomRightRadius : "7px", height : "10px", background :  stat.teamColors.lightMode.away }}></div>
                          </div>
                          </div>
                          
                            </div>
                        </div>
                                    )


                                })}
                            </div>


                                    )
                    })}
                </div>
                
            )
}

    }, [data])




return(
        <div className = "container" >
     <div>{possess}</div>
            {regular_stats}

        </div>
            
    )

}


///////////////////////////Head to Head







const HeadtoHead = ({props})=>{
    const data = props

    const [top, setTop] = useState()
    const [bottom, setBottom] = useState()
    const navigate = useNavigate()

    const main = data.content.h2h 


    useEffect(()=>{

        if(main != null){
      
            const total = main.summary[0] + main.summary[1] + main.summary[2]
            const redWidth = (main.summary[0]/total) *100
            const grayWidth = (main.summary[1]/total)*100
            const blueWidth = (main.summary[2]/total) *100

            console.log(total, redWidth, "this is the info for h2h")
        setTop(
                <div className = "container" style = {{borderRadius : "10px", background : "white"}}>

                <div style = {{width : "100%", height : "100px", alignItems : "center", display : "flex", justifyContent : "space-around", }}>
                  <div style = {{ width : "14%",}}>  <div style = {{background : data.general.teamColors.lightMode.home, height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-light text-center"><strong>{main.summary[0]}</strong></h6></div> <p className = "text-center"><strong>Wins</strong></p></div>
                  <div style = {{ width : "14%",}}>  <div style = {{background : "#EEEEEE", height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-dark text-center"><strong>{main.summary[1]}</strong></h6></div> <p className = "text-center"><strong>Draw</strong></p></div>
                   <div style = {{ width : "14%",}}>  <div style = {{background : data.general.teamColors.lightMode.away, height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-light text-center"><strong>{main.summary[2]}</strong></h6></div> <p className = "text-center"><strong>Wins</strong></p></div>
              </div>
               <div style = {{width : "100%", background : "black", height : "10px", display : "flex", borderRadius : "5px", overflow : "hidden"}}>
                    <div style = {{width : `${redWidth}%`, height : "10px", backgroundColor : data.general.teamColors.lightMode.home  }}></div>
                     <div style = {{width : `${grayWidth}%`, height : "10px", backgroundColor : "gray" }}></div>
                      <div style = {{width : `${blueWidth}%`, height : "10px", backgroundColor : data.general.teamColors.lightMode.away }}></div>
                </div>
              

                
                    
                </div>
            )



setBottom(
        <div style={{ background: 'white', borderRadius: '10px', padding: '20px' }}>
      {main.matches.map((match) => {
        // Example URL
        const url = match.matchUrl;

        // Create a URL object with a base URL for relative URLs
        const urlObject = new URL(url, 'http://example.com');

        // Extract and clean the fragment identifier
        const fragmentIdentifier = urlObject.hash.replace(/^#/, '');

        return (
          <div>
            <p style = {{textAlign : "right", fontSize : "0.7em"}}>{match.league.name}</p>
          <div
            key={fragmentIdentifier}
            onClick={() => {navigate(`/result/${fragmentIdentifier}`); window.location.reload()}} // Navigate without reloading
            style={{
              display: 'flex',
              textDecoration: 'none',
              justifyContent: 'space-between',
              width: '90%',
              margin: '10px auto', // Center and add margin
              cursor: 'pointer', // Indicate clickable
              padding: '10px', // Add padding for better visual separation
              border: '1px solid #ddd', // Optional: Add border for better visual separation
              borderRadius: '8px' // Optional: Slightly rounded corners
            }}
          >
            
            <div style={{ display: 'flex', width: '33%', justifyContent: 'space-between', alignItems: 'center' }}>
              <h6 className="text-dark" style={{ fontSize: '0.8em' }}>{match.home.name}</h6>
              <img
                src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.home.id}_xsmall.png`}
                loading="lazy"
                alt="Home Team Logo"
                style={{ width: '20px', height: '20px' }}
              />
            </div>
            <div
              className="text-dark"
              style={{
                width: '20%',
                justifyContent: 'center',
                textAlign: 'center',
                display: 'flex',
                color: 'black'
              }}
            >
              <strong>{match.status.scoreStr}</strong>
            </div>
            <div style={{ display: 'flex', width: '33%', justifyContent: 'space-between', alignItems: 'center' }}>
              <img
                src={`https://images.fotmob.com/image_resources/logo/teamlogo/${match.away.id}_xsmall.png`}
                loading="lazy"
                alt="Away Team Logo"
                style={{ width: '20px', height: '20px' }}
              />
              <h6 className="text-dark" style={{ fontSize: '0.8em' }}>{match.away.name}</h6>
            </div>
          </div>
        </div>);
      })}
    </div>
    
    )
    }
    }, [])

    return(
            <div className = "container" style = {{background : "#EEEEEE", minHeight : window.innerHeight - 200}}>
            
                {top}
                <br></br>
                <AdSenseFluidAd/>
                {bottom}
            </div>
        )

}










/////////////////////LINEUP SECTION/////////////////////////////////////////////////////


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  bgcolor: 'background.paper',
borderRadius : "10px",
  boxShadow: 24,
  p: 4,
};


// ShotMap.js

// Plugin to draw the goal post
const drawGoalPostPlugin = {
  id: 'drawGoalPost',
  beforeDraw: (chart) => {
    const { ctx, chartArea, scales } = chart;
    const goalPostX = 10; // X position of the goal post (adjust as needed)
    const goalPostWidth = 2; // Width of the goal post (adjust as needed)
    const goalPostHeight = 20; // Height of the goal post (adjust as needed)

    // Convert goal post position to chart coordinates
    const x = scales.x.getPixelForValue(goalPostX);
    const y = scales.y.getPixelForValue(0);

    // Ensure goal post is within chart area
    if (x >= chartArea.left && x <= chartArea.right && y >= chartArea.top && y <= chartArea.bottom) {
      ctx.save();
      ctx.fillStyle = 'pink'; // Color of the goal post
      ctx.fillRect(x - goalPostWidth / 2, chartArea.bottom - goalPostHeight, goalPostWidth, goalPostHeight);
      ctx.restore();
    }
  }
};







function BasicModal({ open, handleClose, props, player }) {

    const data = props
    const [main, setMain] = useState()
    const navigate = useNavigate()

    useEffect(()=>{

        if(data.content.playerStats != null){

        const item =  data.content.playerStats[player.id];


            if(item){

   


                    setMain(
                                    <div>
                                         <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+player.id+".png"} ></img></div>
                        <div><div><h6>{item.name}</h6></div>
                        {item.stats[0].stats["FotMob rating"]?
                            <div><button className = "btn btn-info">{item.stats[0].stats["FotMob rating"].stat ? item.stats[0].stats["FotMob rating"].stat.value : ""}</button> <p className = "text-secondary">LoneScore Match Ratings</p></div>
                        :""}
                        </div>
                                                    </div>

                                                    <hr></hr>

                                                                <div style={{ height : "300px", overflowY : "auto",}}>

                                                                    {item.shotmap ? <ShotMap  data = {item.shotmap}/>:<div></div>}

                                                                    {item.stats.map((item)=>{

                                                                        const new_val = Object.values(item.stats)

                                                                      


                                                                        return(
                                                                        <div><h6 className = "text-center text-secondary">{item.title}</h6>
                                                                          {

                                                                                  Object.entries(item.stats).map(([name, { key, stat }]) => {
                                                                                    var named
                                                                                    if(name == "FotMob rating"){
                                                                                        named = "LoneScore Rating"
                                                                                    }
                                                                                    else {
                                                                                        named = name
                                                                                    }
                                                                                            return(
                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>{named}</p>
                            <p style = {{marginRight : "2%"}}>{stat.value}</p>
                        </div>

                                                                                                )
                                                                                        
                                                                                        })

                                                                        }
                                                                        </div>
                                                                                   )
                                                                    })}
                                                                </div>
                                                                <hr></hr>

                                                                <div><p className = "text-center" onClick={()=>navigate("/player/"+player.id)}>See player profile</p></div>

                          

                                    </div>



                        )

                }
                     }      
    }, [])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
            {main}
      </Box>
    </Modal>
  );
}









// Player component
const Player = ({ player }) => {
  const { lastName, playerImage, horizontalLayout, verticalLayout, id } = player;

  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const monk =  sessionStorage.getItem("data_");
  const navigate = useNavigate()
const parser = JSON.parse(monk);

  useEffect(() => {
    const fetchPlayerData = async () => {


        if(parser.content.lineup.lineupType === "predicted"){
            setData(
                        <div
            style={{
              position: 'absolute',
              left: `${verticalLayout.x * 100}%`,
              top: `${verticalLayout.y * 100}%`,
              width: 50,
              height: 50,
              backgroundColor: 'white',
              backgroundImage: `url("https://images.fotmob.com/image_resources/playerimages/${id}.png")`,
              backgroundSize: 'cover',
              color: 'white',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              transform: 'translatex(-50%) translateY(-70%)',
              textAlign: 'center'
            }}
    onClick={()=>navigate("/player/"+id)}
          >
          

            <div 

             style={{ transform: 'translateY(170%)', textAlign: 'center' }}>
              <strong>{lastName}</strong>
            </div>
          </div>
                )
        }

        else{
      

      let rating_color, goal, assist, rating_value;
      let rating_back = 'gray'; // Default rating color

      if (parser.content.playerStats && parser.content.playerStats[player.id]) {
        const playerStats = parser.content.playerStats[player.id];
        const stats = playerStats.stats[0].stats;

        rating_value = stats["FotMob rating"]?.stat.value || 0;
        goal = stats["Goals"]?.stat.value || 0;
        assist = stats["Assists"]?.stat.value || 0;

        // Determine rating color
        if (rating_value < 6) rating_back = 'red';
        else if (rating_value < 6.5) rating_back = 'orange';
        else if (rating_value < 7) rating_back = '#EED202';
        else if (rating_value < 8) rating_back = 'green';
        else if (rating_value < 9) rating_back = '#1974D2';
        else rating_back = '#151B54';

        const goalElement = goal > 0 && (
          <div style={{ display: 'flex', width: '100%', height: '17px', background: 'white', transform: 'translateY(100%)' }}>
            <p>⚽ {goal > 1 && <strong>{goal}</strong>}</p>
          </div>
        );

        const assistElement = assist > 0 && (
          <div style={{ display: 'flex', width: '100%', height: '17px', background: 'white', transform: 'translateY(100%)' }}>
            <p>🎯 {assist > 1 && <strong>{assist}</strong>}</p>
          </div>
        );

        setData(
          <div
            style={{
              position: 'absolute',
              left: `${verticalLayout.x * 100}%`,
              top: `${verticalLayout.y * 100}%`,
              width: 50,
              height: 50,
              backgroundColor: 'white',
              backgroundImage: `url("https://images.fotmob.com/image_resources/playerimages/${id}.png")`,
              backgroundSize: 'cover',
              color: 'white',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              transform: 'translatex(-50%) translateY(-70%)',
              textAlign: 'center'
            }}
            onClick={handleModalOpen}
          >
            <div
              style={{
                color: 'white',
                background: rating_back,
                borderRadius: '5px',
                transform: 'translateY(-100%)'
              }}
            >
              <strong>{rating_value}</strong>
            </div>
            <div>{goalElement} {assistElement}</div>
            <div style={{ transform: 'translateY(170%)', textAlign: 'center' }}>
              <strong>{lastName}</strong>
            </div>
          </div>
        );
      }

      else{
        setData(
          <div
style={{
position: 'absolute',
left: `${verticalLayout.x * 100}%`,
top: `${verticalLayout.y * 100}%`,
width: 50,
height: 50,
backgroundColor: 'white',
backgroundImage: `url("https://images.fotmob.com/image_resources/playerimages/${id}.png")`,
backgroundSize: 'cover',
color: 'white',
fontSize: '13px',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
borderRadius: '50%',
transform: 'translatex(-50%) translateY(-70%)',
textAlign: 'center'
}}
onClick={()=>navigate("/player/"+id)}
>


<div 

style={{ transform: 'translateY(170%)', textAlign: 'center' }}>
<strong>{lastName}</strong>
</div>
</div>
  )
      }
  }
    };

    fetchPlayerData();
  }, [player.id, verticalLayout.x, verticalLayout.y]);

  return (
    <>
      {data}
     
  <BasicModal 
    open={modalOpen} 
    handleClose={handleModalClose} 
    props={parser} 
    player={player} 
  />

    </>
  );
};


const Player1 = ({ player }) => {
  const { lastName, playerImage, horizontalLayout, verticalLayout, id } = player;

  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate()
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

   const monk =  sessionStorage.getItem("data_");
      const parser = JSON.parse(monk);

  useEffect(() => {
    const fetchPlayerData = async () => {

         if(parser.content.lineup.lineupType === "predicted"){

            setData(
                        <div
            style={{
               position: 'absolute',
              left: `${verticalLayout.x * 100-7}%`,
              top: `${verticalLayout.y * 100}%`,
              width: 50,
              height: 50,
              backgroundColor: 'white',
              backgroundImage: `url("https://images.fotmob.com/image_resources/playerimages/${id}.png")`,
              backgroundSize: 'cover',
              color: 'white',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              transform: 'rotateZ(180deg)',
              textAlign: 'center'
            }}
        
        onClick={()=>navigate("/player/"+id)}
          >
          

            <div style={{ transform: 'translateY(170%)', textAlign: 'center' }}>
              <strong>{lastName}</strong>
            </div>
          </div>
                )
        }
        else{


      let rating_color, goal, assist, rating_value;
      let rating_back = 'gray'; // Default rating color

      if (parser.content.playerStats && parser.content.playerStats[player.id]) {
        const playerStats = parser.content.playerStats[player.id];
        const stats = playerStats.stats[0].stats;

        rating_value = stats["FotMob rating"]?.stat.value || 0;
        goal = stats["Goals"]?.stat.value || 0;
        assist = stats["Assists"]?.stat.value || 0;

        // Determine rating color
        if (rating_value < 6) rating_back = 'red';
        else if (rating_value < 6.5) rating_back = 'orange';
        else if (rating_value < 7) rating_back = '#EED202';
        else if (rating_value < 8) rating_back = 'green';
        else if (rating_value < 9) rating_back = '#1974D2';
        else rating_back = '#151B54';

        const goalElement = goal > 0 && (
          <div style={{ display: 'flex', width: '100%', height: '17px', background: 'white', transform: 'translateY(100%)' }}>
            <p>⚽ {goal > 1 && <strong>{goal}</strong>}</p>
          </div>
        );

        const assistElement = assist > 0 && (
          <div style={{ display: 'flex', width: '100%', height: '17px', background: 'white', transform: 'translateY(100%)' }}>
            <p>🎯 {assist > 1 && <strong>{assist}</strong>}</p>
          </div>
        );

        setData(
          <div
            style={{
              position: 'absolute',
              left: `${verticalLayout.x * 100-7}%`,
              top: `${verticalLayout.y * 100}%`,
              width: 50,
              height: 50,
              backgroundColor: 'white',
              backgroundImage: `url("https://images.fotmob.com/image_resources/playerimages/${id}.png")`,
              backgroundSize: 'cover',
              color: 'white',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              transform: 'rotateZ(180deg)',
              textAlign: 'center'
            }}
            onClick={handleModalOpen}
          >
            <div
              style={{
                color: 'white',
                background: rating_back,
                borderRadius: '5px',
                transform: 'translateY(-100%)'
              }}
            >
              <strong>{rating_value}</strong>
            </div>
            <div>{goalElement} {assistElement}</div>
            <div style={{ transform: 'translateY(170%)', textAlign: 'center' }}>
              <strong>{lastName}</strong>
            </div>
          </div>
        );
      }
  }
    };

    fetchPlayerData();
  }, [player.id, verticalLayout.x, verticalLayout.y]);
 return (
    <>
      {data}
     
  <BasicModal 
    open={modalOpen} 
    handleClose={handleModalClose} 
    props={parser} 
    player={player} 
  />

    </>
  );
};
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

// Field component


const Field = ({ players }) => {

     const fieldStyle = {
    position: 'relative',
    width: '100%', // Full width
    height: '70%', // Taller height for portrait mode
    backgroundColor: '#00A36C',
    borderTopRadius : "10px"
  };

return (
    <div style= {fieldStyle}>
      {players.map(player =>{

      return (
        <Player key={player.id} player={player} />
      )})}
    </div>
  );
    
};
const Field1 = ({ players }) => {

     const fieldStyle = {
    position: 'relative',
    width: '100%', // Full width
    height: '70%', // Taller height for portrait mode
    backgroundColor: '#00A36C',
    borderTopRadius : "10px",
    transform : "rotateZ(180deg)"
  };

return (
    <div style= {fieldStyle}>
      {players.map(player => (
        <Player1 style = {{transform : "rotateZ(360deg)"}} key={player.id} player={player} />
      ))}
    </div>
  );
    
};
// Main Lineup component
const Lineup = ({ props }) => {
     const data = props[0];
      sessionStorage.setItem("data_", JSON.stringify(data));

  const [homePlayers, setHomePlayers] = useState([]);
  const [awayPlayers, setAwayPlayers] = useState([]);

const [ca, setCa] = useState()
const [ch, setCh] = useState()

const [sa, setSa] = useState()
const [sh, setSh] = useState()
const navigate = useNavigate()
var homeTeamPlayers 
    var awayTeamPlayers 
    if(data.content.lineup != null){

        if(data.content.lineup.homeTeam.starters){
                    homeTeamPlayers = data.content.lineup.homeTeam.starters;
        }
        if(data.content.lineup.awayTeam.starters){
            awayTeamPlayers = data.content.lineup.awayTeam.starters.reverse();

        }
}
      const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
       

    const [ma, setMa] = useState()
    const[mh, setMh] = useState()
  useEffect(() => {
   
   
     // Assuming you want to reverse the away players
    const coach_a = [data.content.lineup.awayTeam.coach]
    const coach_h = [data.content.lineup.homeTeam.coach]


    const a = [data.content.lineup.awayTeam.unavailable]

if("subs" in data.content.lineup.homeTeam){
        const h = [data.content.lineup.homeTeam.subs]

        setSh(
                    <div >
                                {h.map((item)=>{
                                   

                                    return(
                                    <>
                                             {item.map((item)=>{
                                                return(
                                                        <div onClick={()=>navigate("/player/"+item.id)}>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>

                                                           
                                                        </div>
                                                    )
                                             })}
                        </>)
                                            })}

                                
                    </div>
                            
        )

}
  
if("subs" in data.content.lineup.awayTeam){

      const a = [data.content.lineup.awayTeam.subs]

        setSa(
                    <div>
                                {a.map((item)=>{
                                    
                                     return(
                                    <>
                                             {item.map((item)=>{
                                                return(
                                                        <div onClick={()=>navigate("/player/"+item.id)}>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>
                                                           
                                                        </div>
                                                    )
                                             })}
                        </>)
                                            })}

                                
                    </div>        )


}

if("unavailable" in data.content.lineup.homeTeam){

      const h = [data.content.lineup.homeTeam.unavailable]

        setMh(
                    <div>
                                {h.map((item)=>{
                                   return(
                                    <>
                                             {item.map((item)=>{
                                                return(
                                                        <div onClick={()=>navigate("/player/"+item.id)}>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>
                                                        </div>
                                                    )
                                             })}
                        </>)     })}

                                
                    </div>
                            
        )

}


if("unavailable" in data.content.lineup.awayTeam){

      const a = [data.content.lineup.awayTeam.unavailable]

        setMa(
                    <div>
                                 {a.map((item)=>{
                                   return(
                                    <>
                                             {item.map((item)=>{
                                                return(
                                                        <div onClick={()=>navigate("/player/"+item.id)}>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>
                                                        </div>
                                                    )
                                             })}
                        </>)     })}

                                
                    </div>        )

}




    const fetchAndSetData = async () => {
      
    
if(data.content.lineup.homeTeam.coach){

        const homeDataC = coach_a;
      setCa(
                <div onClick={()=>navigate("/player/"+homeDataC[0].id)}>
                        <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+homeDataC[0].id+".png"}></img>
                        <h6>{homeDataC[0].name}</h6>
                </div>
        );
}
if(data.content.lineup.awayTeam.coach){

const homeDataH = coach_h;
      setCh(
                <div onClick={()=>navigate("/player/"+homeDataH[0].id)}>
                        <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+homeDataH[0].id+".png"}></img>
                        <h6>{homeDataH[0].name}</h6>
                </div>
        );
  }




       



    };

    fetchAndSetData();
  }, [props, data]);

  const home_formation = data.content.lineup.homeTeam.formation
  const away_formation = data.content.lineup.awayTeam.formation

  const home_rating = data.content.lineup.homeTeam.rating
  const away_rating = data.content.lineup.awayTeam.rating

  return (
    <div className="container" style={{ width: '100vw', background : "white", borderRadius : "10px", height: '100vh' }}>

    <p className = "text-center">Lineup Type: {data.content.lineup.lineupType}</p>
      <Field players={homeTeamPlayers} />
      <div style={{ width: '100%', height: '5px' }}></div>


      <Field1 players={awayTeamPlayers} rotation={45} /> {/* Rotate the second field */}

  <h6 className = "text-center text-secondary">Formations</h6>
      <div style = {{display : "flex", textAlign : "center", width : "100%", justifyContent : "space-between"}}>
          
          <div style = {{borderRadius : "10px", background : "white", width : "30%"}}>
              
              <h6 className = "text-center">{home_formation}</h6>
              <hr></hr>
               <h6 className = "text-center text-success">{home_rating}</h6>
          </div>
          <div style = {{borderRadius : "10px", background : "white", width : "30%"}}>
              
              <h6 className = "text-center">{away_formation}</h6>
              <hr></hr>
              <h6 className = "text-center text-success">{away_rating}</h6>
          </div>
      </div>

      <br></br>

      <h6 className = "text-center text-secondary">Coaches</h6>

      <div style = {{display : "flex", height : "120px", alignItems : "center", borderRadius : "15px", background : "white", textAlign : "center", width : "100%", justifyContent : "space-between"}}>
          {ch}
          {ca}
      </div>

      <br></br>

       <h6 className = "text-center text-secondary">substitute Players</h6>
        <div style = {{display : "flex",  alignItems : "center", borderRadius : "15px", background : "white", textAlign : "center", width : "100%", justifyContent : "space-between"}}>
          {sh}
          {sa}
      </div>

      <br></br>

         <h6 className = "text-center text-secondary">Missing Players</h6>
        <div style = {{display : "flex",  alignItems : "center", borderRadius : "15px", background : "white", textAlign : "center", width : "100%", justifyContent : "space-between"}}>
          {mh}
          {ma}
      </div>

    </div>
  );
};




const Injured = ({props})=>{

        const data = props


        const [missing_home, setMissingH] = useState()
        const [missing_away, setMissingA] = useState()

        useEffect(()=>{

            if("unavailable" in data.content.lineup.homeTeam){

      const h = [data.content.lineup.homeTeam.unavailable]

        setMissingH(
                    <div>
                                {h.map((item)=>{
                                   return(
                                    <>
                                             {item.map((item)=>{
                                                return(
                                                        <>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>
                                                        </>
                                                    )
                                             })}
                        </>)     })}

                                
                    </div>
                            
        )

}


if("unavailable" in data.content.lineup.awayTeam){

      const a = [data.content.lineup.awayTeam.unavailable]

        setMissingA(
                    <div>
                                 {a.map((item)=>{
                                   return(
                                    <>
                                             {item.map((item)=>{
                                                return(
                                                        <>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>
                                                        </>
                                                    )
                                             })}
                        </>)     })}

                                
                    </div>        )

}



        }, [])

        return(
                        <div style = {{display : "flex",  alignItems : "center", borderRadius : "15px", background : "white", textAlign : "center", width : "100%", justifyContent : "space-between"}}>
          {missing_home}
          {missing_away}
      </div>
            )



}





const ShotMapped = ({data}) => {
   // Example shot data
   const shots = data;
  const [selectedShot, setSelectedShot] = useState(null);

  // Convert percentage coordinates to SVG scale
  const toSVGCoordinates = (x, y) => ({
    x: (x / 100) * 350, // Scale to 350px width
    y: (y / 100) * 200, // Scale to 200px height
  });

  // Function to close popup
  const closePopup = () => setSelectedShot(null);

  return (
    <div style={{ position: "relative" }}>
      <svg
        width="350"
        height="200"
        viewBox="0 0 350 200"
        style={{ backgroundColor: "#e0f7fa", border: "1px solid black" }}
      >
        {/* Draw pitch */}
        <rect x="0" y="0" width="350" height="200" fill="white" />
        <line x1="175" y1="0" x2="175" y2="200" stroke="black" strokeWidth="2" />
        <rect x="0" y="60" width="50" height="80" stroke="black" fill="none" strokeWidth="2" />
        <rect x="300" y="60" width="50" height="80" stroke="black" fill="none" strokeWidth="2" />
        <circle cx="175" cy="100" r="30" stroke="black" fill="none" strokeWidth="2" />
        <circle cx="175" cy="100" r="3" fill="black" />

        {/* Plot shots */}
        {shots.map((shot, index) => {
          const coords = toSVGCoordinates(shot.x, shot.y);
          return shot.eventType === "Goal" ? (
            <text
              key={index}
              x={coords.x}
              y={coords.y}
              fontSize="8"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedShot(shot)}
            >
              ⚽
            </text>
          ) : (
            <circle
              key={index}
              cx={coords.x}
              cy={coords.y}
              r="5"
              fill={shot.teamColor}
              stroke="black"
              strokeWidth="1"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedShot(shot)}
            >
              <title>{shot.eventType}</title>
            </circle>
          );
        })}
      </svg>

      {/* Popup for shot details */}
      {selectedShot && (
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid black",
            padding: "20px",
            zIndex: 1000,
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Shot Details</h3>
          <p><b>Player:</b> {selectedShot.playerName}</p>
          <p><b>Event Type:</b> {selectedShot.eventType}</p>
          <p><b>Team ID:</b> {selectedShot.teamId}</p>
          <p><b>Situation:</b> {selectedShot.situation}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}

      {/* Background overlay for popup */}
      {selectedShot && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
          onClick={closePopup}
        ></div>
      )}
    </div>
  );

};

const Table = ({props, league})=>{

    const prop = props

 const [composite_true, setCompositeTrue] = useState()
    const [composite_false, setCompositeFalse] = useState()
    const navigate = useNavigate()
    const [slated, setSlated] = useState()
    const [text, setText] = useState("see more")

    useEffect(()=>{ 

       async function tab(){

        if (prop.nav.includes("table")) {
         

           
            // Store the response data
            var data = league;
            console.log(data, "league data");

             if(data.overview.table.length>0){


                    ////////////////COMPOSITE TRUE



                   if(data.overview.table[0].data.composite === true){

                 setCompositeTrue(   data.overview.table[0].data.tables.map((item)=>{

                var tabber = item.table.all 

                var main_tabber = tabber

                    



                return(
                                <div key={item.leagueName} style={{ marginBottom: "20px" }}>
          <h2>{item.leagueName}</h2>
          <table>
            <thead>
              <tr style={{ width: "100%" }}>
                <td style={{ width: "10%" }}>#</td>
                <td style={{ width: "55%" }}>Team</td>
                <td style={{ width: "10%" }}>Pld</td>
                <td style={{ width: "10%" }}>GD</td>
                <td style={{ width: "10%" }}>PTS</td>
              </tr>
            </thead>

            <tbody>
                        {main_tabber.map((team, index)=>{

                            return(
                                                   <tr

                                                   onClick = {()=>{navigate("/team/"+team.id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}}
                  key={team.id}
                  style={{ width: "100%", backgroung : "inherit", height: "50px", fontSize: '0.7em', fontWeight: "bold", alignItems: "center" }}
                >
                  <td style={{ width: "10%" }}>{index + 1}</td>
                  <td style={{ width: "55%" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.id}_xsmall.png`}
                        alt={team.name}
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{team.name}</div>
                    </div>
                  </td>
                   <td style = {{width : "10%", background : "inherit"}}>{Number(team.wins)+Number(team.draws)+Number(team.losses)}</td>
                  <td style={{ width: "10%" }}>{team.goalConDiff}</td>
                  <td style={{ width: "10%" }}>{team.pts}</td>
                </tr>
                            )

                        })}
            </tbody>

                

            </table>

            </div>
                    )
                    })

)
}

                    ///////////////COMPOSITE FALSE


                    if(data.overview.table[0].data.composite === false){
                        

                        setCompositeFalse(
                                <div>

                                   { data.overview.table.map((item)=>{
                                         var tabber = item.data.table.all 

                var main_tabber = tabber

                return(
                                <div key={item.leagueName} style={{ marginBottom: "20px" }}>
          <h2>{item.leagueName}</h2>
          <table>
            <thead>
              <tr style={{ width: "100%" }}>
                <td style={{ width: "10%" }}>#</td>
                <td style={{ width: "55%" }}>Team</td>
                <td style={{ width: "10%" }}>Pld</td>
                <td style={{ width: "10%" }}>GD</td>
                <td style={{ width: "10%" }}>PTS</td>
              </tr>
            </thead>

            <tbody>
                        {main_tabber.map((team, index)=>{

                            var styling = "inherit"

                            if(prop.content.table.teams[0] === team.id){
                                styling =  "beige"
                            }
                            else if(prop.content.table.teams[1] === team.id){
                                styling =  "beige"
                            }
                            

                            return(
                                                   <tr

                                                   onClick = {()=>{navigate("/team/"+team.id);const stringer = JSON.stringify(team); sessionStorage.setItem("selected_league", stringer)}}
                  key={team.id}
                  style={{ width: "100%", background : styling, height: "50px", fontSize: '0.7em', fontWeight: "bold", alignItems: "center" }}
                >
                  <td style={{ width: "10%" }}>{index + 1}</td>
                  <td style={{ width: "55%" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.id}_xsmall.png`}
                        alt={team.name}
                        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{team.name}</div>
                    </div>
                  </td>
                   <td style = {{width : "10%", background : "inherit"}}>{Number(team.wins)+Number(team.draws)+Number(team.losses)}</td>
                  <td style={{ width: "10%" }}>{team.goalConDiff}</td>
                  <td style={{ width: "10%" }}>{team.pts}</td>
                </tr>
                            )

                        })}
            </tbody>

                

            </table>

            </div>
                    )
                                    })
}
                                </div>
                            )
                    }


}
      
}

}
tab()
/*
       
*/
    }, [])



  function selectOptions(value){

    const table_data = props

    
    if(league.overview.table[0].data.composite === false){
    console.log("the user selected", value, league)

    if(text == "see more"){

      if(value === "All"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "45%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
                <td style = {{width : "5%"}}>W</td>
                <td style = {{width : "5%"}}>D</td>
                <td style = {{width : "5%"}}>L</td>
               
                <td style = {{width : "8%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.all.map((item, index)=>{

                            var styling = "inherit"

                            if(prop.content.table.teams[0] === item.id){
                                styling =  "beige"
                            }
                            else if(prop.content.table.teams[1] === item.id){
                                styling =  "beige"
                            }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "45%"}}><strong>{item.shortName}</strong></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                      <td style = {{width : "5%"}}>{item.wins}</td>
                      <td style = {{width : "5%"}}>{item.draws}</td>
                      <td style = {{width : "5%"}}>{item.losses}</td>
                    
                      <td style = {{width : "8%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

      if(value === "Home"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.6em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "45%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
                <td style = {{width : "5%"}}>W</td>
                <td style = {{width : "5%"}}>D</td>
                <td style = {{width : "5%"}}>L</td>
               
                <td style = {{width : "8%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.home.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "45%"}}><strong>{item.shortName}</strong></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                      <td style = {{width : "5%"}}>{item.wins}</td>
                      <td style = {{width : "5%"}}>{item.draws}</td>
                      <td style = {{width : "5%"}}>{item.losses}</td>
                    
                      <td style = {{width : "8%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }
      if(value === "xg"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "45%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
                <td style = {{width : "5%"}}>W</td>
                <td style = {{width : "5%"}}>D</td>
                <td style = {{width : "5%"}}>L</td>
               
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.xg.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "45%"}}><strong>{item.shortName}</strong></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                      <td style = {{width : "5%"}}>{item.wins}</td>
                      <td style = {{width : "5%"}}>{item.draws}</td>
                      <td style = {{width : "5%"}}>{item.losses}</td>
                    
                      <td style = {{width : "8%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

      if(value === "Form"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "45%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
                <td style = {{width : "5%"}}>W</td>
                <td style = {{width : "5%"}}>D</td>
                <td style = {{width : "5%"}}>L</td>
               
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.form.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "45%"}}><strong>{item.shortName}</strong></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                      <td style = {{width : "5%"}}>{item.wins}</td>
                      <td style = {{width : "5%"}}>{item.draws}</td>
                      <td style = {{width : "5%"}}>{item.losses}</td>
                    
                      <td style = {{width : "5%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "8%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

      if(value === "Away"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "45%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
                <td style = {{width : "5%"}}>W</td>
                <td style = {{width : "5%"}}>D</td>
                <td style = {{width : "5%"}}>L</td>
               
                <td style = {{width : "8%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.away.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "45%"}}><strong>{item.shortName}</strong></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                      <td style = {{width : "5%"}}>{item.wins}</td>
                      <td style = {{width : "5%"}}>{item.draws}</td>
                      <td style = {{width : "5%"}}>{item.losses}</td>
                    
                      <td style = {{width : "8%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

    }

    else if(text == "see less"){

      if(value === "xg"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "65%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
            
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.xg.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "65%"}}><div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.id}_xsmall.png`}
                        alt={item.name}
                        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.shortName}</div>
                    </div></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                
                      <td style = {{width : "5%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

      if(value === "Form"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "65%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
            
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.form.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "65%"}}><div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.id}_xsmall.png`}
                        alt={item.name}
                        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.shortName}</div>
                    </div></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                
                      <td style = {{width : "5%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

      if(value === "Away"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "65%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
            
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.away.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "65%"}}><div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.id}_xsmall.png`}
                        alt={item.name}
                        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.shortName}</div>
                    </div></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                
                      <td style = {{width : "5%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }


      if(value === "Home"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "65%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
            
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.home.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "65%"}}><div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.id}_xsmall.png`}
                        alt={item.name}
                        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.shortName}</div>
                    </div></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                
                      <td style = {{width : "5%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )
      }

      if(value === "All"){
        setSlated(
          <table>
            <thead>

              <tr style = {{width : "100%", fontSize : "0.7em"}}   >
                <td style = {{width : "5%"}}>#</td>
                <td style = {{width : "65%"}}>Team</td>
                <td style = {{width : "5%"}}>Pl</td>
            
                <td style = {{width : "5%"}}>GD</td>
                <td style = {{width : "7%"}}>Pts</td>
              </tr>
            </thead>


            <tbody>
                {league.table[0].data.table.all.map((item, index)=>{
                          var styling = "inherit"

                          if(prop.content.table.teams[0] === item.id){
                              styling =  "beige"
                          }
                          else if(prop.content.table.teams[1] === item.id){
                              styling =  "beige"
                          }

                  return(
                    <tr style = {{width : "100%", fontSize : "0.7em", background : styling}}  onClick = {()=>{navigate("/team/"+item.id)}}>
                      <td style = {{width : "5%", background : item.qualColor}}>{index+1}</td>
                      <td  style = {{width : "65%"}}><div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                      <img
                        src={`https://images.fotmob.com/image_resources/logo/teamlogo/${item.id}_xsmall.png`}
                        alt={item.name}
                        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                      />
                      <div style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{item.shortName}</div>
                    </div></td>
                      <td style = {{width : "5%"}}>{item.played}</td>
                
                      <td style = {{width : "5%"}}>{item.goalConDiff}</td>
                      <td style = {{width : "7%"}}>{item.pts}</td>

                    </tr>
                  )
                })}
            </tbody>
          </table>
        )

      }
      }


    }
  }

useEffect(()=>{

  selectOptions("All")
  
}, [league, text])


    function handleSee(){

      if(text === "see more"){
        setText("see less")

      }

      else{
        setText("see more")
      }
    }

    return(
            <div className = "container" style = {{background : "white", width : "95%", marginLeft : "2.5%", marginRight : "2.5%", borderRadius : "10px"}}>
<div style = {{width  :"100%", display : "flex", justifyContent : "space-around"}}>
              <select  onChange={(val)=>{selectOptions(val.target.value)}} style = {{height : "30px", width : "150px", margin : "4%", borderRadius : "10px"}}>
                  <option>All</option>
                  <option>Home</option>
                  <option>Away</option>
                  <option>Form</option>
                  <option>xg</option>
              </select>


              <button onClick = {()=>{handleSee()}} style = {{height : "35px", marginTop : "4%"}} className="btn btn-sm btn-outline-success">
                {text}
              </button>

              </div>
            <div style = {{width : "100%", display : "flex", height : "30px", alignItems : "center" }}>
                    <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${prop.content.table.parentLeagueId}.png`} style = {{width : "30px", height : "30px"}}></img>
                    <h5>{prop.content.table.parentLeagueName}</h5>
            </div>
                    {slated}
                    {composite_true}



                    <hr/>
                    <div>
                        <h4 className = "text-center">League Guide</h4>


                        {

                            league.table[0].data.legend.map((item=>{
                                return(
                                        <div style = {{display : "flex"}}>
                                            <label style = {{height : "10px", width : "10px", background : item.color, borderRadius : "50%"}}></label>   <p>{item.title}</p>
                                        </div>
                                    )
                            }))
                        }
                    </div>
            </div>
    )

};









const KnockOut = ({data})=>{


return(
            <Bracket data = {data.content.playoff}/>
    )

}
