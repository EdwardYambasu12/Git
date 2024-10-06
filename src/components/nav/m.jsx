import React, { useEffect, useState } from "react";
import Mini_Nav from "../nav/mini-nav";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Lined from "../../line.js"
import "./result.css"
import api from "../nav/details.js"
import axios from "axios"
import Trial from "./trial.jsx"
import Head_to_Head from "./h2h.js"
import SwipeableViews from 'react-swipeable-views-react-18-fix';

import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import { AppBar, Toolbar,Tabs, Tab,  Typography, List, ListItem,  ListItemText } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


import { styled } from '@mui/material/styles';
import {Fade} from "@mui/material"

import { Line } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,   ScatterController, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale,   ScatterController, PointElement, LineElement, Title, Tooltip, Legend);






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


   

const Rest_assure = ({props})=>{

    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };




var it
    const [dd, setD] = useState()
const [gem, setGem]= useState()
const [match, setMatch] = useState()
const [stts, setStts] = useState()
const [lu, setLu] = useState()
const [hh, setHh] = useState()
const [tabl, setTabl] = useState()


 const [temporance, setTemporance] = useState(dd)
 const navigate = useNavigate()

    const [tab_state, setTabstate] = useState(1)
const [below, setBelow] = useState()

const [tt, setTT] = useState()
const [useful, setUseful]= useState()

    console.log(props)

    var data = props[0]

    var comment = props[1]
    var tab = props[2]


       const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollRemoval = () => {
  };
const [teller, setTeller] = useState(160)

   useEffect(()=>{

    const handleScroll = (item) => {


        var status


        if(item.header.status.finished === true){

            status = "Full Time"

        }

        if(item.header.status.started === true && item.header.status.finished === false){
            status = item.header.status.liveTime.long
        }

        if(item.header.status.started === false){
               const dateTimeString = item.header.status.utcTime;
                        const dateObject = new Date(dateTimeString);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


                    status = timeString
        }


      const currentScrollY = window.scrollY;
      const header = item.header.teams
      if (currentScrollY > 0) {
        setIsScrolled(true);
        

        setTeller(130)
      
            setD(
            
                
                  <div className = "classaction"  TransitionComponent = {Fade} transitionDuration = {1000}>
                  <div  id = "backgroundt" >
                     
                  </div>
                  <div style = {{width : "100%", position : "absolute", top : "0%"}}>
                
        <div className="main_row">
         <Link to = {"/"}><img src = {require("../images/R.png")} style = {{width : "30px", height : "30px", marginLeft : "3%"}}></img> </Link>
                  
                  
            <div style={{width : "35%", textAlign : "right"}}  >
                <img src = {header[0].imageUrl} className="team_logost"></img>
        
              
                        
                                    
                                    
                     
            </div>
        

            <div style={{display : "flex", justifyContent : "space-between", width : "20%"}}>
                <h1 className="text-dark">{header[0].score}</h1>
                <h1 className="text-dark" style={{marginLeft : "2%", marginRight : "2%"}}>:</h1>
                <h1 className="text-dark text-center">{header[1].score}</h1>
            </div>
           
          
          

            <div id = "awaya" style={{width : "35%", textAlign : "left"}}>
                <img src = {header[1].imageUrl} className="team_logost"></img>
           
           
                        
                                    
               
            </div>

            <img src = {require("../images/bk.png")} style = {{width : "30px", height : "30px", marginRight : "3%"}}></img>










              

            </div>
              <h6 className="text-center text-danger">{status}</h6>   


         

          
            </div>

 


               <div>

           
                </div>


             
              </div>)

      } else {
        setIsScrolled(false);
        setTeller(160)
    
            setD(
                  <div className = "classaction" TransitionComponent = {Fade} transitionDuration = {1000}>
                  <div  id = "background" >
                     
                  </div>
                  <div style = {{width : "100%", position : "absolute", top : "0%"}}>
                  <div style = {{width : "100%", display : "flex", justifyContent : "space-between", marginTop : "1.5%"}}>  <Link to = {"/"}><img src = {require("../images/R.png")} style = {{width : "30px", height : "30px", marginLeft : "3%"}}></img> </Link>
                  <img src = {require("../images/bk.png")} style = {{width : "30px", height : "30px", marginRight : "3%"}}></img>
                  </div>
        <div className="main_row">
            <div style={{width : "40%"}} >
                <img src = {header[0].imageUrl} className="team_logos"></img>
                <br></br>
                <br></br>
                <h6
                        
                                    
                                    
                       className="text-dark " id = "break-down">{header[0].name}</h6
                        
                                    
                                    
                     >
            </div>
            <div>

            <div style={{display : "flex", justifyContent : "space-between", width : "100%"}}>
                <h1 className="text-dark">{header[0].score}</h1>
                <h1 className="text-dark" style={{marginLeft : "2%", marginRight : "2%"}}>:</h1>
                <h1 className="text-dark text-center">{header[1].score}</h1>
            </div>
             <h6 className="text-center text-danger">{status}</h6>
           </div>
          

            <div id = "awaya" style={{width : "40%"}} >
                <img src = {header[1].imageUrl} className="team_logos"></img>
                <br></br>
                <br></br>
               
                <h6
                        
                                    
                                    
                   className= " text-dark " id ="break-down">{header[1].name}</h6
                        
                                    
                                    
                     >
            </div>


              

            </div>
             


         

                <br></br>
            </div>

 


               <div>
           
                </div>


               
              </div>
                

                    )

           

                

                    
        
      }
    };

    window.addEventListener('scroll', handleScroll(data));  

    return () => {
      window.removeEventListener('scroll', handleScroll(data));
    };









}, [data])


    return(
            
                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs  style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          {
                data.nav.map((item)=>{
                    
                        var new_item

                        if (item === "matchfacts"){
                            new_item = "Info"
                        }

                        else if(item === "liveticker"){
                            new_item = "Commentary"
                        }

                        else if(item === "lineup"){
                            new_item = "Lineup"
                        }
                        else{
                            new_item = item
                        }


                    return(

                          <Tab label={new_item} />

                        )
                })
          }
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
       
       {
        data.nav.map((item, index)=>{

            var action 

            console.log(index)

            if(item === "matchfacts"){
                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <Info props = {props}/>
                          </Typography>
            }

              else if(item === "liveticker"){

                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <Commentary props = {props}/>
                            </Typography>
                            
                        }

                 else if(item === "lineup"){

                    if(data.content.lineup != null){

                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <Lineup props = {props}/>
                                      </Typography>
                        }

                    }
                    else if(item === "injured"){

                   

                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <Injured props = {data}/>
                                      </Typography>
                        

                    }


                else if(item === "stats"){

                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <Stats props = {data}/>
                            </Typography>
                            
                        }

                 else if(item === "table"){

                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <Table props = {tab}/>
                                      </Typography>
                        }




                        else if(item === "head to head"){

                action =   <Typography component="div" role="tabpanel" hidden={value !== index}>
                                     <HeadtoHead props = {data}/>
                            </Typography>
                            
                        }



                        return(
                                    <>
                                        {action}
                                    </>
                            )





       })
   }

      </SwipeableViews>
    </div>
     
                </>





        )

}















const Result = ()=>{

const id = useParams()
const [palma, setPalma] = useState()


const [data, setData] = useState()
const [dd, setD] = useState()

const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollRemoval = () => {
  };
const [teller, setTeller] = useState(160)

useEffect(()=>{

            const reloader = async()=>{



               
                const raw_data = await axios.get(Lined+"/result", {
                    params : {id : id}



                })

                const datam = raw_data.data 

                console.log(datam)

                var comment_data

                if(datam.content.liveticker != false){

                console.log( datam.content.liveticker.teams)
                

                const comment = await axios.get(Lined+"/commentary", {
                    params : {
                       first : datam.content.liveticker.teams[0],
                        second : datam.content.liveticker.teams[1]
                    }
                })

                 comment_data = comment.data
                console.log(comment_data)
            }
            var d

            if(datam.content.table.url){
            const rd = await axios.get(datam.content.table.url)
             d = rd.data

            console.log(d)
                }
            var trick = d

                const multi = [datam, comment_data, trick]




             

                

                setD(
                        <Rest_assure props = {multi}/>
                    )



                
            }

            reloader()





}, [])



return(

            <div style = {{  background : "#EEEEEE" }}>
                
                {dd}
            </div>
    )






}

export default Result







/////////////////////////////////////////Info////////////////////////////////






const Info = ({props})=>{

    const data = props[0]
    var ticker = props[2]
    console.log(ticker, "ticker")

    const [pump, setPump]  = useState()

    const [motm, setMotm] = useState()

    const [match_events, setEvents] = useState()

    const [highlight, setHighlight] = useState()

    const [momentum, setMomentum] = useState()

    const [stats, setStats] = useState()

    const [teamform, setForm] = useState()

    const [insight, setInsight] = useState()

    const [info, setInfo] = useState()

    const [pending_var, setPendingVar] = useState()
    useEffect(()=>{

      
        
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
                <button onClick={handleClick}>View in fullScreen</button>
                        <br></br>
                </div>
            )
    }
            ////////////////////Pending Var

            var var_ = data.hasPendingVAR

            if(var_ != false){
                setPendingVar(
                        <div style = {{background : "green", width : "100%", color : "white"}}><h6 className = "text-center">Var Check</h6></div>
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
                                         <div style = {{display : "flex"}}>
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
                                         <p>{box["stadium"] != null ? box["Stadium"].name : ""}</p>
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

                                    mern = {background : stat.teamColors.lightMode.away, borderRadius : "10px"}


                                }
                                else if(item.highlighted == "home"){

                                    mernd = {background : stat.teamColors.lightMode.home, borderRadius : "10px"}

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

                            if(item.assistInput != null){
                                assist = <div>({item.assistInput})</div>
                            }
                        return(
                                <div style = {{width : "100%", }}> <div style = {{width : "50%", justifyContent : "space-between",  alignItems : "center", display : "flex"}}><h6 className = "text-dark">⚽</h6><h6><strong>{item.player.name}</strong></h6> <div><strong>{item.time}</strong></div></div> {assist} <hr></hr></div>
                            )
                    }


                    if(item.isHome == false){
                        var assist

                            if(item.assistInput != null){
                                assist = <div>({item.assistInput})</div>
                            }
                        return(
                                <div style = {{width : "100%", textAlign : "right" }}> <div style = {{width : "50%", justifyContent : "space-between",  textAlign : "right",  marginLeft : "50%",      alignItems : "center",  display : "flex"}}><div className = "text-right"><strong>{item.time}</strong></div><h6 className = "text-right"><strong>{item.player.name}</strong></h6><h6 className = "text-dark text-right">⚽</h6> </div> {assist} <hr></hr></div>
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
    }, [])
   
 

    return(

            <div className = "container" style = {{background : "#EEEEEE"}} >
               
                        {pending_var}
                        <br></br>

                        {pump}

                        {highlight}
    
                   
                    <br></br>
               {motm}

                <br></br>

                <div style = {{background : "white", borderRadius : "10px"}}>
               
                {momentum}
                </div>
                <br></br>

                {stats}

                                <br></br>

               {match_events}


               
                <br></br>
                   <div style = {{background : "white", borderRadius : "10px"}}>
                <h6 className = "text-center text-secondary">Team Form</h6>
                {teamform}
                </div>

                <br></br>

                {insight}
                <br></br>

                {info}
                
            </div>
        )
}


/////COMMMENTARY


const Commentary = ({props})=>{
        const data = props[0]
        const comment = props[1]


        const [comments, setComments] = useState()

        useEffect(()=>{
                const main = comment.events

                setComments(
                            <div style = {{width : "100%", background : "white", borderRadius : "10px"}}>

                                {main.map((item)=>{
                                    var timer

                                    if(item.time != null && item.time.added != null){
                                        timer = item.time.main + item.time.added
                                    }

                                    if(item.time != null && item.time.added == null){
                                        timer = item.time.main
                                    }

                                    return(<>
                                            <div ><h6 className = "text-success">{timer}</h6></div>
                                            <div style = {{fontFamily : "monospace"}}><h6><strong>{item.text}</strong></h6></div>
                                            <hr></hr>
                                            </>
                                        )

                                })}
                            </div>
                    )



        }, [])

        return(
                <div style = {{background : "#EEEEEE"}} className = "container">{comments}</div>
            )



    

}


/////////////// STATS


const Stats = ({props})=>{
    const data = props

    const [regular_stats, setRegular] = useState()

    useEffect(()=>{
           const stat = data.content.stats.Periods.All

           if(stat!= null){
        const sm_stats = data.content.stats.Periods.All.stats
      

        setRegular(
                <div>
                    {sm_stats.map((item)=>{
                            return(

                            <div style = {{background : "white", borderRadius : "10px", marginTop : "5%"}}>
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
                                return(
                                        <div style = {{display : "flex", height: "40px", width : "100%", justifyContent : "space-between",}}>
                            <h6 style = {mernd}><strong>{item.stats[0]}</strong></h6>
                            <h6><strong>{item.title}</strong></h6>
                            <h6 style = {mern}><strong>{item.stats[1]}</strong></h6>
                        </div>
                                    )


                                })}
                            </div>


                                    )
                    })}
                </div>
                
            )
}

    }, [])




return(
        <div className = "container" >
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
        setTop(
                <div>

                <div style = {{width : "100%", height : "100px", alignItems : "center", display : "flex", justifyContent : "space-around", background : "white", borderRadius : "10px"}}>
                  <div style = {{ width : "14%",}}>  <div style = {{background : data.general.teamColors.lightMode.home, height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-light text-center"><strong>{main.summary[0]}</strong></h6></div> <p className = "text-center"><strong>Wins</strong></p></div>
                  <div style = {{ width : "14%",}}>  <div style = {{background : "#EEEEEE", height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-dark text-center"><strong>{main.summary[1]}</strong></h6></div> <p className = "text-center"><strong>Draw</strong></p></div>
                   <div style = {{ width : "14%",}}>  <div style = {{background : data.general.teamColors.lightMode.away, height : "40px", borderRadius : "40%", alignItems : "center", display : "flex", justifyContent : "center", width : "100%"}}><h6 className = "text-light text-center"><strong>{main.summary[2]}</strong></h6></div> <p className = "text-center"><strong>Wins</strong></p></div>
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
        );
      })}
    </div>
    )
    }
    })

    return(
            <div className = "container" style = {{background : "#EEEEEE", minHeight : window.innerHeight - 200}}>
            
                {top}
                <br></br>
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
          x: shot.x, // X position on the field
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
     <h6>Player Shot Map</h6>
      <Scatter data={shotData} options={options} />
    </div>
  );
};




function BasicModal({ open, handleClose, props, player }) {

    const data = props
    const [main, setMain] = useState()

    useEffect(()=>{

        if(data.content.playerStats != null){

        const item =  data.content.playerStats[player.id];



   


                    setMain(
                                    <div>
                                         <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {"https://images.fotmob.com/image_resources/playerimages/"+player.id+".png"} ></img></div>
                        <div><div><h6>{item.name}</h6></div>
                            <div><button className = "btn btn-info">{item.stats[0].stats["FotMob rating"].stat.value}.0</button> <p className = "text-secondary">Sportsup Match Ratings</p></div>
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
                                                                                        named = "Sportsup Rating"
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

                                                                <div><p className = "text-center">See player profile</p></div>

                          

                                    </div>



                        )

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
const parser = JSON.parse(monk);

  useEffect(() => {
    const fetchPlayerData = async () => {
      

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

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

   const monk =  sessionStorage.getItem("data_");
      const parser = JSON.parse(monk);

  useEffect(() => {
    const fetchPlayerData = async () => {
     

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
    };

    fetchPlayerData();
  }, [player.id, verticalLayout.x, verticalLayout.y]);

  return (
    <>
      {data}
    <>
      {data}
   
  <BasicModal 
    open={modalOpen} 
    handleClose={handleModalClose} 
    props={parser} 
    player={player} 
  />

    </>
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
      {players.map(player => (
        <Player key={player.id} player={player} />
      ))}
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
                                                        <>
                                                            
                                                            <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+item.id+".png"}></img>
                                
                                                            <h6>{item.name}</h6>
                                                           
                                                        </>
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

        setMa(
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




    const fetchAndSetData = async () => {
      
    


        const homeDataC = coach_a;
      setCa(
                <div>
                        <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+homeDataC[0].id+".png"}></img>
                        <h6>{homeDataC[0].name}</h6>
                </div>
        );

const homeDataH = coach_h;
      setCh(
                <div>
                        <img style = {{width : "60px", height : "60px"}} src  = {"https://images.fotmob.com/image_resources/playerimages/"+homeDataH[0].id+".png"}></img>
                        <h6>{homeDataH[0].name}</h6>
                </div>
        );
  




       



    };

    fetchAndSetData();
  }, [props]);

  const home_formation = data.content.lineup.awayTeam.formation
  const away_formation = data.content.lineup.homeTeam.formation

  const home_rating = data.content.lineup.homeTeam.rating
  const away_rating = data.content.lineup.awayTeam.rating

  return (
    <div className="container" style={{ width: '100vw', height: '100vh' }}>

    <p>Lineup Type: {data.content.lineup.lineupType}</p>
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





const Table = ({props})=>{
const [teams, setTeams] = useState([]);
  const [promotion, setPromotion] = useState({});
  const [relegation, setRelegation] = useState({});
  const [formUrl, setFormUrl] = useState('');
  
  useEffect(() => {
    const xmlString = props

    try {
      // Parse XML string
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

      // Extract teams
      const teamElements = xmlDoc.getElementsByTagName('t');
      const teamData = Array.from(teamElements).map((team) => ({
        name: team.getAttribute('name'),
        id: team.getAttribute('id'),
        points: team.getAttribute('p'),
        wins: team.getAttribute('w'),
        draws: team.getAttribute('d'),
        losses: team.getAttribute('l'),
        goalsFor: team.getAttribute('g'),
        goalsAgainst: team.getAttribute('c'),
      }));

      setTeams(teamData);

      // Extract rules
      const rules = xmlDoc.getElementsByTagName('rules')[0];
      const promotionRule = rules.querySelector('ti[tkey="promotion"]');
      const relegationRule = rules.querySelector('ti[tkey="relegation"]');

      setPromotion({
        description: promotionRule.getAttribute('desc') || 'No description',
        color: promotionRule.getAttribute('color') || '#000000',
        values: (promotionRule.getAttribute('value') || '').split(',').map(Number),
      });

      setRelegation({
        description: relegationRule.getAttribute('desc') || 'No description',
        color: relegationRule.getAttribute('color') || '#000000',
        values: (relegationRule.getAttribute('value') || '').split(',').map(Number),
      });

      // Extract form URL
      const formUrl = xmlDoc.getElementsByTagName('form')[0].getAttribute('url');
      setFormUrl(formUrl);
    } catch (error) {
      console.error('Error parsing XML:', error);
    }
  }, []);

  return (
    <div className = "container" style = {{background : "white", borderRadius : "10px"}}>
     
      <table>
        <thead>
          <tr style = {{width : "100%"}}>
                <td style = {{width : "10%"}}>#</td>
                 <td style = {{width : "55%"}}>Team</td>
                  <td style = {{width : "10%"}}>Pld</td>
                 <td style = {{width : "10%"}}>GD</td>
                 <td style = {{width : "10%"}}>PTS</td>
                                                    </tr>
        </thead>
        <tbody>
          
        </tbody>{teams.map((team, index) => (
            


            <tr   style = {{width : "100%",  height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
                          <td style = {{width : "10%", background : "inherit"}}>{index + 1}</td>
                        <td style = {{width : "55%", background : "inherit"}}>
                        <div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${team.id}_xsmall.png`} style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> 
                        <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{team.name}</div></div></td>
                       <td style = {{width : "10%", background : "inherit"}}>{team.points}</td>
                     <td style = {{width : "10%", background : "inherit"}}>{team.goalsFor - team.goalsAgainst}</td>
                  <td style = {{width : "10%", background : "inherit"}}>{team.points}</td>
                </tr>
          ))}
      </table>

      <h2>Promotion and Relegation</h2>
      <div>
        <h3 style={{ color: promotion.color }}>
          {promotion.description}
        </h3>
        <ul>
          {(promotion.values || []).map((value) => (
            <li key={value}>Position {value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 style={{ color: relegation.color }}>
          {relegation.description}
        </h3>
        <ul>
          {(relegation.values || []).map((value) => (
            <li key={value}>Position {value}</li>
          ))}
        </ul>
      </div>

      <h2>Form URL</h2>
      <a href={formUrl} target="_blank" rel="noopener noreferrer">
        {formUrl}
      </a>
    </div>
  );
};



