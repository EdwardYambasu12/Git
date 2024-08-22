import React, { useEffect, useState } from "react";
import Mini_Nav from "../nav/mini-nav";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Line from "../../line.js"
import "./result.css"
import api from "../nav/details.js"
import axios from "axios"
import Trial from "./trial.jsx"
import Table from "./table.jsx"
import Head_to_Head from "./h2h.js"
import SwipeableViews from 'react-swipeable-views-react-18-fix';

import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import { AppBar, Toolbar,Tabs, Tab,  Typography, List, ListItem, ListItemText } from '@mui/material';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


import { styled } from '@mui/material/styles';
import {Fade} from "@mui/material"



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




function Personal(props){


const initialData = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

        
   const [isScrolled, setIsScrolled] = useState(false);
  const [data, setData] = useState(initialData);
  const [dynamicItem, setDynamicItem] = useState('Initial Item');


  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',
    background: '#3f51b5',
    height: isScrolled ? theme.spacing(6) : theme.spacing(8),
  }));

  const Title = styled(Typography)({
    flexGrow: 1,
    textAlign: 'center',
  });

  const handleScrollRemoval = () => {
    setData(prevData => prevData.slice(0, prevData.length - 10)); // Remove 10 items from data
  };




const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };




var it
const [gem, setGem]= useState()
const [match, setMatch] = useState()
const [stts, setStts] = useState()
const [lu, setLu] = useState()
const [hh, setHh] = useState()
const [tabl, setTabl] = useState()
const [teller, setTeller] = useState(160)
const [dd, setD] = useState()
 const [temporance, setTemporance] = useState(dd)
 const navigate = useNavigate()

    const [tab_state, setTabstate] = useState(1)
const [below, setBelow] = useState()

const [tt, setTT] = useState()
const [useful, setUseful]= useState()

       function tab_change(id, item){

        if (id === 1){
     

        setTabstate(id) 
    
            setBelow(<Info props  = {item} />)
            console.log(return1)
        }
    if (id === 2){
     

        setTabstate(id) 
    
            setBelow(<Match_info props  = {item} />)
            console.log(return1)
        }

    if (id === 3){
     

        setTabstate(id) 
    
            setBelow(<Stats props  = {item} />)
            console.log(return1)
        }

    if (id === 4){
     

        setTabstate(id) 
    
            setBelow(<Trial props  = {item} />)
            console.log(return1)
        }


    if (id === 5){
     

        setTabstate(id) 
    
            setBelow(<Head_to_Head props  = {item} />)
            console.log(return1)
        }

    
	    if (id === 6){
     

        setTabstate(id) 
    
            setBelow(<Table props  = {item} />)
            console.log(return1)
        }

    } 

    let {id} = useParams();
  

    let d = new Date()


const today_date = d.toISOString().split('T')[0]
console.log(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+1)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]

 
const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-1)
const yesterday = yesterday_setup.toISOString().split("T")[0]



//Time Zone
function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}
 
    function pushGo(){
    return(<h2 className = "text-danger">WE ar The Wold</h2>)
}

       const fyerd = sessionStorage.getItem("fyer")
    const itd = JSON.parse(fyerd)

    const [needed, setNeeded] = useState()
    const [na, setNa] = useState("ed")
    const {state} = useLocation();
    const [popout, setPopout] = useState("")
    const [return1, setReturn1] = useState("")

    const [meant, setMeant] = useState("money")
    const [video, setVideo] = useState()
    const api_key = api
    const [i, setI]= useState(itd)

    



         




  var status 
const date = new Date()
    const seconds = date.getSeconds()

      const dyerx = sessionStorage.getItem("fyer")
                        const ryerx = JSON.parse(dyerx)

                                  var new_seconds = seconds
                        var minute = Number(ryerx.match_status)

                        const [min, setMin]= useState(Number(ryerx.match_status))

useEffect(()=>{
    function ren(){

    setGem(
            <Info props = {i}/>
        )



 

    setMatch(<Match_info props = {i}/>)
     setStts(<Stats props = {i}/>)
      setLu(<Trial props = {i}/>)
       setHh(<Head_to_Head props = {i}/>)
        setTabl(<Table props = {i}/>)
    }

        ren()


        

}, [])



               




useEffect (()=>{


   


      



         

            

          axios.get("https://apiv3.apifootball.com/?action=get_events&match_id="+id+"&withPlayerStats=1&APIkey="+api_key)
            .then(async(res)=>{
                console.log(res)
                console.log(res.data[0])

                            
                          

                const parse_ing = JSON.stringify(res.data[0])
                sessionStorage.setItem("parse", parse_ing)


                const homeID = res.data[0].match_hometeam_id
                const awayID = res.data[0].match_awayteam_id
                const league_id = res.data[0].league_id
                const stage_name = res.data[0].stage_name



                sessionStorage.setItem("stage_name", stage_name)
                

            

           
                    
               
              const p = JSON.stringify({f : homeID, s : awayID})
              await sessionStorage.setItem( "path", p )

             
            

          

             const fyer = sessionStorage.getItem("fyer")
             const fypass = JSON.parse(fyer)


           

                const item = res.data[0]
                var it = item
      console.log(item.match_status, "match status")
              
                                  if (item.match_status === "Finished"){
                                        console.log(item.match_status, "match status")
                                        status = "FT"
                                    }
                                    else if(item.match_status === "After ET"){
                                        status = "AEt"
                                    }
                                    else if(item.match_status == "Half Time"){
                                        status = "HT"
                                    }
                                    else if (item.match_status == "Extra Time"){
                                        status  = "ET"
                                    }
                                    else if (item.match_status == "Postponed"){
                                        status = "Post."
                                    }
                                    else if(item.match_status == "Penalty"){
                                        status = "Pen."
                                    }

                                    else if(item.match_status === ""){
                                        

                                          




                                    }
                                    else{ 
                                            status = <div style = {{display : "flex", textAlign : "center", width : "100%", justifyContent : 'center'}}><p>{item.match_status}</p><p className = "live">'</p></div>
                                    }



        setI(item)

                setD(
                  <>
                  <div  id = "background" >
                     
                  </div>
                  <div style = {{width : "100%", position : "absolute", top : "0%"}}>
                  <div style = {{width : "100%", display : "flex", justifyContent : "space-between", marginTop : "1.5%"}}><Link to = {"/"}><img src = {require("../images/R.png")} style = {{width : "30px", height : "30px", marginLeft : "3%"}}></img> </Link>
                  <img src = {require("../images/bk.png")} style = {{width : "30px", height : "30px", marginRight : "3%"}}></img>
                  </div>
        <div className="main_row" >
            <div style={{width : "40%"}} onClick = {()=>{sessionStorage.setItem("team", item.match_hometeam.id);  navigate("team")}} >
                <img src = {item.team_home_badge} className="team_logos"></img>
                <br></br>
                <br></br>
                <h6
                        
                                    
                                    
                       className="text-dark " id = "break-down">{item.match_hometeam_name}</h6
                        
                                    
                                    
                     >
            </div>
            <div>

            <div style={{display : "flex", justifyContent : "space-between", width : "100%"}}>
                <h1 className="text-dark">{item.match_hometeam_score}</h1>
                <h1 className="text-dark" style={{marginLeft : "2%", marginRight : "2%"}}>:</h1>
                <h1 className="text-dark text-center">{item.match_awayteam_score}</h1>
            </div>
             <h6 className="text-center text-danger">{status}</h6>
           </div>
          

            <div id = "awaya" style={{width : "40%"}} onClick = {()=>{sessionStorage.setItem("team", item.match_hometeam.id);  navigate("team")}}>
                <img src = {item.team_away_badge} className="team_logos"></img>
                <br></br>
                <br></br>
               
                <h6
                        
                                    
                                    
                   className= " text-dark " id ="break-down">{item.match_awayteam_name}</h6
                        
                                    
                                    
                     >
            </div>


              

            </div>
             


         

                <br></br>
            </div>

 


               <div>
           
                </div>


               
              </>
                

                    )



 




                setReturn1(item)
                pushGo()

                })


        

            
}, [])


  useEffect(() => {

async function reader(){




    var it
    var m
    var home_id
    var away_id


     function reload(){
          const fyer = sessionStorage.getItem("fyer")
        it = JSON.parse(fyer)
        m = JSON.parse(fyer)
     
             home_id = JSON.stringify(m.match_hometeam_id)
             away_id = JSON.stringify(m.match_awayteam_id)
        setTimeout(reload, 100)

    }





 

    reload()
   
            if (it.match_status === "Finished"){
                                       
                                        status = "FT"
                                    }
                                    else if(it.match_status === "After ET"){
                                        status = "Aft. Et"
                                    }
                                    else if(it.match_status == "Half Time"){
                                        status = "half time"
                                    }
                                    else if (it.match_status == "Extra Time"){
                                        status  = "ET"
                                    }
                                    else if (it.match_status == "Postponed"){
                                        status = "Post."
                                    }
                                    else if(it.match_status == "Penalty"){
                                        status = "Pen."
                                    }

                                    else if(it.match_status === ""){

                                        


                                        status = it.match_time


                                    }
                                    else{ 

                              
                                     status = <div className = "live">{it.match_status}</div>


                    
                                            }
                                     
                                        
                               


                                                




                                                                        

  


    const handleScroll = (item) => {
      const currentScrollY = window.scrollY;
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
                  
                  
            <div style={{width : "35%", textAlign : "right"}}  onClick = {()=>{const home = JSON.stringify(item.match_hometeam_id); sessionStorage.setItem("team", home_id);  navigate("/team")}}>
                <img src = {item.team_home_badge} className="team_logost"></img>
        
              
                        
                                    
                                    
                     
            </div>
        

            <div style={{display : "flex", justifyContent : "space-between", width : "20%"}}>
                <h1 className="text-dark">{item.match_hometeam_score}</h1>
                <h1 className="text-dark" style={{marginLeft : "2%", marginRight : "2%"}}>:</h1>
                <h1 className="text-dark text-center">{item.match_awayteam_score}</h1>
            </div>
           
          
          

            <div id = "awaya" style={{width : "35%", textAlign : "left"}} onClick = {()=>{const away = JSON.stringify(item.match_awayteam_id); sessionStorage.setItem("team", away);  navigate("/team")}}>
                <img src = {item.team_away_badge} className="team_logost"></img>
           
           
                        
                                    
               
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
            <div style={{width : "40%"}} onClick = {()=>{const home = JSON.stringify(item.match_hometeam_id); sessionStorage.setItem("team", home_id);  navigate("/team")}}>
                <img src = {item.team_home_badge} className="team_logos"></img>
                <br></br>
                <br></br>
                <h6
                        
                                    
                                    
                       className="text-dark " id = "break-down">{item.match_hometeam_name}</h6
                        
                                    
                                    
                     >
            </div>
            <div>

            <div style={{display : "flex", justifyContent : "space-between", width : "100%"}}>
                <h1 className="text-dark">{item.match_hometeam_score}</h1>
                <h1 className="text-dark" style={{marginLeft : "2%", marginRight : "2%"}}>:</h1>
                <h1 className="text-dark text-center">{item.match_awayteam_score}</h1>
            </div>
             <h6 className="text-center text-danger">{status}</h6>
           </div>
          

            <div id = "awaya" style={{width : "40%"}} onClick = {()=>{const away = JSON.stringify(item.match_awayteam_id); sessionStorage.setItem("team", away);navigate("/team")}}>
                <img src = {item.team_away_badge} className="team_logos"></img>
                <br></br>
                <br></br>
               
                <h6
                        
                                    
                                    
                   className= " text-dark " id ="break-down">{item.match_awayteam_name}</h6
                        
                                    
                                    
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

    window.addEventListener('scroll', handleScroll(it));  

    return () => {
      window.removeEventListener('scroll', handleScroll(it));
    };












}

reader()





  }, [dd]);


useEffect(()=>{




async function redemmer(){

const fyer = sessionStorage.getItem("fyer")
    var it
    var status
    if(i === undefined){
    it = JSON.parse(fyer)




}

else if(i != undefined){
    it = i
   
}



if (it.match_live === "0"){

    setUseful(

                
                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Info" />
          <Tab label="Stats" />
          <Tab label="Lineups" />
          <Tab label="H2H" />
          <Tab label="Table" />
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        

        </Typography>

        <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {stts}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {lu}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
            {hh}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 4}>
            {tabl}
        </Typography>

      </SwipeableViews>
    </div>
     
                </>
        )

    
    if( it.player_stats.home.length > 1 && it.match_status == ""){
                 setUseful(

                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs  style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Info" />
          
          <Tab label="Lineups" />
          <Tab label="H2H" />
          <Tab label="League" />
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        

        </Typography>

        
        <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {lu}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {hh}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
            {tabl}
        </Typography>

      </SwipeableViews>
    </div>
     
                </>
        )

    }


if(it.player_stats.home.length < 1 && it.match_status == ""  ){

 setUseful(

                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs  style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Info" />
          <Tab label="H2H" />
          <Tab label="League" />
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        

        </Typography>

        
       
        <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {hh}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {tabl}
        </Typography>

      </SwipeableViews>
    </div>
     
                </>
        )


}


    if(it.stage_name === "Final" || it.stage_name === "Round of 16" || it.stage_name === "Round of 32" || it.stage_name  === "Quarter-finals" || it.stage_name === "Semi-finals"  ){

                setUseful(

                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs  style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Info" />
          <Tab label="Stats" />
          <Tab label="Lineups" />
          <Tab label="H2H" />
          <Tab label="Knockout" />
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        

        </Typography>

        <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {stts}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {lu}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
            {hh}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 4}>
            {tabl}
        </Typography>

      </SwipeableViews>
    </div>
     
                </>
        )
    }
}



else if(it.match_live === "1"){
 setUseful(

                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Info" />
          <Tab label="Live Commentary" />
          <Tab label="Stats" />
          <Tab label="Lineups" />
          <Tab label="H2H" />
          <Tab label="Table" />
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        

        </Typography>
              <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {match}
        </Typography>

        <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {stts}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
            {lu}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 4}>
            {hh}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 5}>
            {tabl}
        </Typography>

      </SwipeableViews>
    </div>
     
                </>
        )



}


    if(it.stage_name === "Final" || it.stage_name === "Round of 16" || it.stage_name === "Round of 32" || it.stage_name  === "Quarter-finals" || it.stage_name === "Semi-finals"  ){

                setUseful(

                <>
                       
                  <div style = {{background : "white", borderBottom : "solid #EEEEEE", borderWidth : "3px"}} className = "fixed-top">
                        

{dd}
       
      
<div >

      <ThemeProvider theme = {Theme}>
        <Tabs  style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="gold tabs example"  >
          <Tab label="Info" />
          <Tab label="Stats" />
          <Tab label="Lineups" />
          <Tab label="H2H" />
          <Tab label="Knockout" />
        </Tabs>
        </ThemeProvider>
        </div>

</div>

      
     
   
     
 




   <div style={{marginTop : teller+"px"}}>
      <br></br>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        

        </Typography>

        <Typography component="div" role="tabpanel" hidden={value !== 1}>
            {stts}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 2}>
            {lu}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 3}>
            {hh}
        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 4}>
            {tabl}
        </Typography>

      </SwipeableViews>
    </div>
     
                </>
        )
    }


}





 redemmer()
}, [dd])




    return(
      <body style = {{background : "#EEEEEE", minHeight : window.innerHeight}}>


      
     <div className = "classaction"  TransitionComponent = {Fade} transitionDuration = {1000}>

    {useful}
    </div>
                               
                         <YourComponent/>   
                        

      </body>


        )
}
export default Personal







function Head_to_Headd(props){

   
    const [map_return, setMap_return] = useState(<Box sx={{ width: "100%",  }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
 )
    const [map_return_2, setMap_return_2] = useState(<Box sx={{ width: "100%",  }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
 )
    const [h2h, setH2h] = useState()
    const navigate = useNavigate()
    const [per, setPer] = useState()
    const [spinner, setSpinner]= useState("loading data")
    const [table, setTable] = useState()

    async function redirector(item){
        const fyer = await JSON.stringify(item)


        sessionStorage.setItem("fyer", fyer)
        navigate("/match_small/result/"+item.match_id, {state : item })
        window.location.reload()
    }
        
    useEffect(()=>{
            
        async function starter(){

            
           
            
          
          const fyer = await sessionStorage.getItem("parse")
          const parser = await JSON.parse(fyer)



            const path = await sessionStorage.getItem("path")
            
            const match_data = await JSON.parse(path)


            const homeID = parser.match_hometeam_id
            const awayID  = parser.match_awayteam_id



              const maind = await axios.get("https://apiv3.apifootball.com/?action=get_H2H&firstTeamId="+homeID+"&secondTeamId="+awayID+"&APIkey="+api)
           
             const main = maind.data

             const mature = JSON.stringify(maind)

             sessionStorage.setItem("h2h", mature)
                    

             const response2 = await axios.get("https://apiv3.apifootball.com/?action=get_standings&league_id="+parser.league_id+"&APIkey="+api)
            const stringer = response2.data
                console.log(stringer, "stringer")
            


            const stage_key = parser.stage_name
            console.log(stage_key, "stringer")

           


                    

            


            try{
           
             if (stage_key === "Group Stage" || stage_key === "Current" || stage_key === "Regular Season"){

                const filter_array = stringer.filter((item)=> item.team_id === homeID || item.team_id === awayID)
                console.log(stringer)
                
            setTable(filter_array.map((item)=>{

                                                                                 

                                                    return(
                                                    <tr style = {{width : "100%", height : "50px", fontSize :'0.7em', textDecoration : "bold", fontWeight : "5px", alignItems : "center"}}>
                                                        <td style = {{width : "10%",}}>{item.overall_league_position}</td>
                                                        <td style = {{width : "55%", background : "inherit",}}><div style = {{display : "flex", width : "100%", justifyContent : "space-between", alignItems : "center"}}> <img src = {item.team_badge}  style = {{width : "30px", height : "30px", borderRadius :"50%"}}></img> <div style = {{ textOverflow : "ellipsis", whiteSpace : "nowrap", overFlow : "hidden"}}>{item.team_name}</div></div></td>
                                                        <td style = {{width : "10%", background : "inherit",}}>{item.overall_league_payed}</td>
                                                        <td style = {{width : "10%", background : "inherit",}}>{Number(item.overall_league_GF) - Number(item.overall_league_GA)}</td>
                                                        <td style = {{width : "10%", background : "inherit",}}>{item.overall_league_PTS}</td>
                                                </tr>

                                                        
                                                )
                                             

            })
            )
}
                console.log(main, "Woomi")



                const slice_bread = main.firstTeam_lastResults.slice(0,5)


                //////////DATA FOR HOME-TEAM PREVIOUS MATCHES

                setMap_return( slice_bread.map((element)=>{
                    var status
                        console.log(element)   
                        console.log(Number(element.match_awayteam_score) + Number(element.match_hometeam_score))

                if(element.match_awayteam_id == homeID){
              
                    if(Number(element.match_awayteam_score) > Number(element.match_hometeam_score)){
                        status = "win"
                        console.log("while severing as awayteam they won this match")

                    }

                    else if(Number(element.match_awayteam_score) < Number(element.match_hometeam_score)){
                        status = "lost"
                        console.log("while severing as awayteam they lost this match")
                    }

                    else if(Number(element.match_awayteam_score) == Number(element.match_hometeam_score)){
                        status = "draw"
                        console.log("While playing away the drew this match")
                    }

                }
                else if(element.match_hometeam_id == homeID){
                    if(Number(element.match_hometeam_score) > Number(element.match_awayteam_score)){
                        status = "win"
                        console.log("while severing as hometeam they won this match")

                    }

                    else if(Number(element.match_hometeam_score) < Number(element.match_awayteam_score)){
                        status = "lost"
                        console.log("while severing as hometeam they lost this match")
                    }

                    else if(Number(element.match_hometeam_score) == Number(element.match_awayteam_score)){
                        status = "draw"
                        console.log("While playing at home the drew this match")
                    }

                }
                var background_

                if (status === "win")
                {
                    background_ = "green"
                }

                else if (status == "lost"){
                    background_ = "red"
                }
                else if (status == "draw"){
                    background_ = "grey" 
                }
                return(<div onClick = {()=> redirector(element)} to = {"result/"+element.match_id} style = {{display : "flex", textDecoration : "none", width : "100%", justifyContent : "space-between", marginTop : "3%"}}>

                        <img img src = {element.team_home_badge} style = {{height : "30px", width : "30px"}}></img>
                        <div style = {{borderRadius : "10px", height : "30px", alignItems : "center", color: "white", background : background_, display : "flex", width : "30%", justifyContent : "space-around"}}> <h6>{element.match_hometeam_score}</h6>-<h6>{element.match_awayteam_score}</h6> </div>
                        <img img src = {element.team_away_badge} style = {{height : "30px", width : "30px"}}></img>
                        

                </div>

                
                )
          
          
            })

            )

            ////////// DATA FOR AWAY-TEAM PREVIOUS MATCHES

                const slicer = main.secondTeam_lastResults.slice(0,5)
            
        setMap_return_2(   slicer.map((element)=>{
            var status
                

            if(element.match_awayteam_id == awayID){
              
                if(Number(element.match_awayteam_score) > Number(element.match_hometeam_score)){
                    status = "win"
                    

                }

                else if(Number(element.match_awayteam_score) < Number(element.match_hometeam_score)){
                    status = "lost"
                    
                }

                else if(Number(element.match_awayteam_score) == Number(element.match_hometeam_score)){
                    status = "draw"
                  
                }

            }
            else if(element.match_hometeam_id == awayID){
                if(Number(element.match_hometeam_score) > Number(element.match_awayteam_score)){
                    status = "win"
                 

                }

                else if(Number(element.match_hometeam_score) < Number(element.match_awayteam_score)){
                    status = "lost"
                    
                }

                else if(Number(element.match_hometeam_score) == Number(element.match_awayteam_score)){
                    status = "draw"
                    
                }

            }
            var background_

            if (status === "win")
            {
                background_ = "green"
            }

            else if (status == "lost"){
                background_ = "red"
            }
            else if (status == "draw"){
                background_ = "grey" 
            }
            return(<div style = {{display : "flex", width : "100%", justifyContent : "space-between", marginTop : "3%"}} onClick = {()=> redirector(element)}>

                        <img img src = {element.team_home_badge} style = {{height : "30px", width : "30px"}}></img>
                        <div style = {{borderRadius : "10px", color: "white",  height : "30px", background : background_, display : "flex", width : "30%", justifyContent : "space-around", alignItems : "center"}}> <h6>{element.match_hometeam_score}</h6>-<h6>{element.match_awayteam_score}</h6> </div>
                        <img img src = {element.team_away_badge} style = {{height : "30px", width : "30px"}}></img>
                        

                </div>
                )
          
        })


            

            )




    /////////// DATA FOR HEAD TO HEAD MATCHES

        const home_obj = {
            win : [],
            loss : [],
            draw : [],
        }

        const away_obj = {
            win : [],
            loss : [],
            draw : []
        }

            
                    main.firstTeam_VS_secondTeam.map((element)=>{
                        

                        if(element.match_awayteam_id == awayID){
              
                        if(Number(element.match_awayteam_score) > Number(element.match_hometeam_score)){
                            
                            away_obj.win.push("win")
                            home_obj.loss.push("loss")

                        }

                        else if(Number(element.match_awayteam_score) < Number(element.match_hometeam_score)){
                            
                            away_obj.loss.push("loss")
                            home_obj.win.push("win")
                    
                        }

                        else if(Number(element.match_awayteam_score) == Number(element.match_hometeam_score)){
                            
                            away_obj.loss.push("draw")
                            home_obj.win.push("draw")
                  
                         }

                    }

                    if(element.match_hometeam_id == awayID){
              
                        if(Number(element.match_hometeam_score) > Number(element.match_awayteam_score)){
                            
                            away_obj.win.push("win")
                            home_obj.loss.push("loss")

                        }

                        else if(Number(element.match_hometeam_score) < Number(element.match_awayteam_score)){
                            
                            away_obj.loss.push("loss")
                            home_obj.win.push("win")
                    
                        }

                        else if(Number(element.match_hometeam_score) == Number(element.match_awayteam_score)){
                            
                            away_obj.loss.push("draw")
                            home_obj.win.push("draw")
                  
                        }

                    }

                            


})

                    console.log(home_obj)
                    console.log(away_obj)

                    const len = main.firstTeam_VS_secondTeam.length

                    const home_win = home_obj.win.length
                    const away_win = away_obj.win.length
                    const draw = home_obj.draw.length + away_obj.draw.length

                    const home_percentage = home_obj.win.length * 100 / len;
                    const away_percentage = away_obj.win.length * 100 / len;
                    const draw_percentage = draw * 100 / len;

                    

                        setPer(
                                 <div style = {{background : "white", borderRadius : "15px", width : "100%" }}>
                                            <br></br>

                                       <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
                                       <div><img src = {match_data.team_home_badge} style = {{height : "40px", width : "40px"}}></img></div>
                                       <h6 className = "text-secondary" style = {{fontFamily : "monospace"}}>Past Matches</h6>
                                       <div><img src = {match_data.team_away_badge} style = {{height : "40px", width : "40px"}}></img></div> 
                                       </div>
    
                                      <div className="progress-bar">
                                        <div className="progress" style={{ width: home_percentage+"%", background : "midnightblue", color : "white" }}>Home: {home_percentage}%</div>
                                      </div>
                                      <div className="progress-bar">
                                        <div className="progress" style={{ width: draw_percentage+"%", background : "grey"}}>Draw: {draw_percentage}%</div>
                                      </div>
                                      <div className="progress-bar">
                                        <div className="progress" style={{ width: away_percentage+"%",  background : "gold"  }}>Away: {away_percentage}%</div>
                                      </div>
                                    </div>
                            )

              

                                        
                    
                    
                
            
            setSpinner(
                 
                )
            
            }catch(e){
            
            }

        }

        starter()


    }, [])



    return(
            <>   
                <h6>Team Form</h6>
                    <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>  
                         <div style = {{width : "35%"}}> {map_return}</div>
                         <div style = {{width : "35%"}}> {map_return_2}</div>
                    </div>
            
                    <br></br>     
                <h6>Standings Position</h6>

                <div>
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
                                                    {table}
                                                </tbody>
                </table>
                </div>
                    
                    </>

        )


}










































function Info(props){




const [video, setVideo] = useState()
const [news, setNews] = useState()





  useEffect(()=>{
            axios.get(Line+"/sportsup_news")
            .then((res)=>{

               
                var data = props.props


             

                    const filter = res.data.filter((item)=> item.team_related === data.match_awayteam_id || item.team_related === data.match_hometeam_id || item.league_related === data.league_id)

                     
                    setNews(
                                filter.map((make)=>{
                                            return(
                             <div style = {{background : "white", borderRadius : "10px", }}>
             
                                      <Link to = {"/news/"+make._id} style = {{textDecoration : "none",  color : "black", background : "white"}}>
                                          <img src = {make.cover_photo} style = {{height : "170px", width : "100%", borderRadius : "0%"}}></img>
                                          <h5>{make.title}</h5>
                                      </Link>
                                                              
                             </div>
                                                )
                                })
                        )
              
            })

}, [])

















































    function compare_func(a,b){
        return b.player_rating - a.player_rating
    }
    let d = new Date()


const today_date = d.toISOString().split('T')[0]
console.log(today_date)

console.log(props.props)

    const prop = props
    const [recip, setRecip] = useState()
    const [states, setStates] = useState()
    const [rtr, setRtr] = useState()
    const [odds, setOdds] = useState()
    const [dis, setDis]= useState()
    const navigate = useNavigate()
    const [leag, setLeag] = useState(
                    <div style={{width : "100%", display : "flex", alignItem : "center"}}> <img style={{height :"30px", width : "30px"}} src = { props.props.league_logo === "" ? require("../images/no-img.png") : props.props.league_logo }></img> <h6 className = "text-secondary"  onClick = {()=>{navigate("/leagues/leauges_mall");const stringer = JSON.stringify(props.props); sessionStorage.setItem("selected_league", stringer)}} >{props.props.league_name} - {props.props.league_year}</h6></div>
                )
        const [pr, setPr] = useState()
       let {id} = useParams();
       let api_key = api

    const [data, setData] = useState()
  const [more, setMore] = useState()
  const [ret, setRet] = useState()
  const [live_access, setAccess] = useState()
  useEffect(()=>{
        async function getting(){


    
        const fetched = await sessionStorage.getItem("fyer")
        const release = await JSON.parse(fetched)
        console.log(release, "release")
        
        const item = release

      
setRecip(
              <div className="info_div">
        <>
            <h6>Match Information</h6>
          <div style={{width : "100%", justifyContent : "space-between", display : "flex"}}>
                <h6>KickOff Time and Date</h6>
                <h6>{item.match_time} || {item.match_date}</h6>
            </div>

       

           <div style={{width : "100%", justifyContent : "space-between", display : "flex"}}>
                <h6>Country Name</h6>
                <h6>{item.country_name}</h6>
            </div>

          
            
           <div style={{width : "100%", justifyContent : "space-between", display : "flex"}}>
                <h6>Referee</h6>
                <h6>{item.match_referee}</h6>
            </div>
        <div style={{width : "100%", justifyContent : "space-between", display : "flex"}}>
                <h6>Venue</h6>
                <h6>{item.match_stadium}</h6>
            </div>

<br></br>


     
        
            </>
         

        </div>)

        const goals = item.goalscorer
        const card = item.cards
        const substitues = item.substitutions.home
        const substitues1 = item.substitutions.away



        var first_half = [];
        var second_half = [];
        var extra_time = [];
        var penalty = [];



        goals.forEach(element=>{
            if (element.score_info_time === "1st Half"){
                first_half.push({item: element, item_info: "goal"})
            }
            else if(element.score_info_time === "2nd Half"){
                second_half.push({item: element, item_info: "goal"})
            }
           else if(element.score_info_time === "Extra Time"){
                extra_time.push({item: element, item_info : "goal"})
            }
            else if(element.score_info_time === "Penalty"){
                penalty.push({item: element, item_info : "goal"})
            }

        })

     card.forEach(element=>{
            if (element.score_info_time === "1st Half"){
                first_half.push({item: element, item_info: "card"})
            }
            else if(element.score_info_time === "2nd Half"){
                second_half.push({item: element, item_info: "card"})
            }
            else if (element.score_info_time === "Extra Time"){
                extra_time.push({item: element, item_info : "card"})
            }
        })




        first_half.sort((a,b)=>{
            return Number(a.item.time)-Number(b.item.time);
        })
        console.log(first_half, "sorted")
        second_half.sort((a,b)=>{

            return Number(a.item.time)-Number(b.item.time);
        })
        extra_time.sort((a,b)=>{

            return Number(a.item.time)-Number(b.item.time)
        })
        penalty.sort((a,b)=>{
            return Number(a.item.time)-Number(b.item.time)
        })

    const left = {textAlign : "left", width : "100%"}
    const right = {textAlign : "right", width : "100%"}

    function extra_check(){
        if(release.match_hometeam_extra_score === ""){
     
        }

        else{
            return(
                      <div>

                    <div style = {{width : "90%", marginRight : "5%", marginLeft : "5%",   border : "solid black", borderWidth : "1px"}}
                    >
                        
                        <div style = {{width : "100%", textAlign : "right", background : "#EEEEEE", display : "flex", justifyContent : "space-between"}}><h6>Extra Time</h6><h6 >{item.match_hometeam_extra_score}:{item.match_awayteam_extra_score}</h6></div>
                        
                        <div>
                            {extra_time.map((item)=>{
                                const fault = item.item
                                if(item.item_info === "card"){
                                    
                                    let cards
                                    if(fault.card == "yellow card"){
                                        cards = "🟨"
                                    }
                                    else{
                                        cards  = "🟥"
                                    }



                                        if(fault.home_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_fault} {fault.time}' {cards}</div><hr></hr></div>
                                                )
                                        }


                                        else if(fault.away_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_fault} {fault.time}' {cards}</div><hr></hr></div>
                                                )
                                        }
                                    
                                           // <div style = {item.item.away_fault === "" ? {left}:{right}}><div >"money"</div><hr></hr></div>
                                       
                                }
                                                              if(item.item_info === "goal"){
                                   if(fault.away_scorer === ""){

                                            if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }
                                    }

                                    else if(fault.home_scorer === ""){
                                        
                                        if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               
                                    }

                                }
                             
                            })}
                        </div>
                    </div>
              

                </div>
                )
        }
    }

  function penalty_check(){
        if(release.match_hometeam_penalty_score === ""){
       

        }

        else{
            return(
                      <div>

                    <div style = {{width : "90%", marginRight : "5%", marginLeft : "5%",   border : "solid black", borderWidth : "1px"}}
                    >
                        
                        <div style = {{width : "100%", textAlign : "right", background : "#ECE5B6", display : "flex", justifyContent : "space-between"}}><h6>Penalties</h6><h6 >{item.match_hometeam_penalty_score}:{item.match_awayteam_penalty_score}</h6></div>
                        
                        <div>
                            {penalty.map((item)=>{
                                const fault = item.item
                                if(item.item_info === "card"){
                                    
                                    let cards
                                    if(fault.card == "yellow card"){
                                        cards = "🟨"
                                    }
                                    else{
                                        cards  = "🟥"
                                    }



                                        if(fault.home_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_fault} {fault.time}' {cards}</div><hr></hr></div>
                                                )
                                        }


                                        else if(fault.away_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_fault} {fault.time}' {cards}</div><hr></hr></div>
                                                )
                                        }
                                    
                                           // <div style = {item.item.away_fault === "" ? {left}:{right}}><div >"money"</div><hr></hr></div>
                                       
                                }
                                                              if(item.item_info === "goal"){
                                  if(fault.away_scorer === ""){

                                            if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }
                                    }

                                    else if(fault.home_scorer === ""){

                                                    if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "right", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }

                                               
                                    }

                                }
                             
                            })}
                        </div>
                    </div>
              

                </div>
                )
        }
    }

  function second_half_check(){
        if(release.match_hometeam_score === ""){
    
        }
        

        else{ 
            var sab;

               if(release.match_hometeam_score === ""){
                        sab = ""

                    }

                    else{
                        sab = <h6 className = " text-dark " style = {{borderRadius : "20px", textAlign : "center", background : "#EEEEEE"}}>2nd Half {item.match_hometeam_ft_score}:{item.match_awayteam_ft_score}</h6>

                    }


            return(
                      <div>

                    <div style = {{}}>

                                         
                       {sab}
                        
                        <div>
                            {second_half.map((item)=>{
                                const fault = item.item
                                if(item.item_info === "card"){
                                    
                                    let cards
                                    if(fault.card == "yellow card"){
                                        cards = "🟨"
                                    }
                                    else{
                                        cards  = "🟥"
                                    }



                                        if(fault.home_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_fault} {fault.time}' {cards}</div><br></br></div>
                                                )
                                        }


                                        else if(fault.away_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_fault} {fault.time}' {cards}</div><br></br></div>
                                                )
                                        }
                                    
                                           // <div style = {item.item.away_fault === "" ? {left}:{right}}><div >"money"</div><hr></hr></div>
                                       
                                }
                                                              if(item.item_info === "goal"){
                                    if(fault.away_scorer === ""){

                                            if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }
                                    }

                                    else if(fault.home_scorer === ""){

                                                    if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }

                                               
                                    }

                                }
                             
                            })}
                        </div>
                    </div>
              

                </div>
                )
        }
    }

    var sm_tab

    var sab

 if(item.match_hometeam_halftime_score === ""){
                        sab = "";

                    }

                    else{
                        sab =  <h6 className = " text-dark " style = {{borderRadius : "20px", textAlign : "center", background : "#EEEEEE"}}> 1st Half {item.match_hometeam_halftime_score}:{item.match_awayteam_halftime_score}</h6>

                    }

        const dimmed= <>
                <div>

                    <div style = {{}}
                    >
                        
                       {sab}
                        
                        <div>
                            {first_half.map((item)=>{
                                const fault = item.item
                                if(item.item_info === "card"){
                                    
                                    let cards
                                    if(fault.card == "yellow card"){
                                        cards = "🟨"
                                    }
                                    else{
                                        cards  = "🟥"
                                    }



                                        if(fault.home_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_fault} {fault.time}' {cards}</div><br></br></div>
                                                )
                                        }


                                        else if(fault.away_fault === ""){
                                            return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_fault} {fault.time}' {cards}</div><br></br></div>
                                                )
                                        }
                                    
                                           // <div style = {item.item.away_fault === "" ? {left}:{right}}><div >"money"</div><hr></hr></div>
                                       
                                }

                                if(item.item_info === "goal"){
                              if(fault.away_scorer === ""){

                                            if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }
                                    }

                                    else if(fault.home_scorer === ""){

                                                      if(fault.info === "Penalty"){
                                                   return(
                                  
                                                      <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | (<span className = "text-danger">pen</span>) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                               }

                                               else{
                                                     return(
                                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )

                                               }

                                               
                                    }

                                }
                             
                            })}
                        </div>
                    </div>
              

                </div>



                <div>
         
                    {second_half_check()}
                    {extra_check()}
                    {penalty_check()}
                </div>
               


                </>
            
        setMore(
           dimmed
           )

     
        console.log("first half materials", first_half)



        console.log("second half materials", second_half)






first_half.map((item)=>{
    if(item.item_info == "goal"){
        console.log("this is item is a goal", item)
    }
    else{
        console.log("this item is a card", item)
    }
})



second_half.map((item)=>{
    if(item.item_info == "goal"){
        console.log("this is item is a goal", item)
    }
    else{
        console.log("this item is a card", item)
    }
})















      



      let subs_home = item.substitutions.home.map((item)=>{
            return(
                <div id="main-left">
                <p>{item.substitution} {item.time}'</p>
                </div>
            )
      })
      let subs_away = item.substitutions.away.map((item)=>{
        return(
            <div id="main">
            <p>{item.substitution} {item.time}'</p>
            </div>
        )
  })






   setData(

<div className="container" >
   


        
            {subs_home}
        
        
            {subs_away}
        
 </div>

      )


  
        setTimeout(getting, 10000)
    }
    getting()
  }, [])



    useEffect(()=>{


        async function fetcher(){

             const chi = await sessionStorage.getItem("parse")
            const res = await JSON.parse(chi)
              const man = await axios.get("https://apiv3.apifootball.com/?action=get_videos&match_id="+res.match_id+"&APIkey="+api_key)

            const trans = man.data


            if(trans.error === "404")
            {
                setVideo ("")
            }

            else if (trans.length > 0){
                setVideo(

                    <div>

            <h6 className = "text-center">Match Highlight</h6>
                    <video src = {trans[0].video_url} style = {{width : "90%", height : "250px",  marginLeft :"5%"}} controls></video>

                    </div>)
                
                }        



                    console.log(trans, "trans")

      
        
            setStates(res   )
            
            var home_mvp
            var away_mvp
            console.log(res.data)
            var player_info = []
            var stating = res.statistics

            res.player_stats.home.map((item)=>{
                player_info.push(item)
            })
            res.player_stats.away.map((item)=>{
                player_info.push(item)
            })
            
            player_info.forEach((element)=>{
              if (element.team_name == "home"){
              console.log("home player pushing home")
             
          }


          else if(element.team_name == "away"){
            console.log("away player pushing away")
            
          }

            })

   

            
            var if_available 

            if (player_info.length > 0){
                      player_info.forEach((element)=>{
              if (element.team_name == "home"){
              console.log("home player pushing home")
           
          }


          else if(element.team_name == "away"){
            console.log("away player pushing away")
           
          }

            })

            res.player_stats.home.sort(compare_func)
            res.player_stats.away.sort(compare_func) 
           

             home_mvp = res.player_stats.home[0]
             away_mvp = res.player_stats.away[0]

            const hm = await axios.get("https://apiv3.apifootball.com/?action=get_players&player_id="+home_mvp.player_key+"&APIkey="+api_key)
            const h = hm.data 
            
            const ay = await axios.get("https://apiv3.apifootball.com/?action=get_players&player_id="+away_mvp.player_key+"&APIkey="+api_key)
            const a = ay.data 
             
                console.log(a,h)
             setPr(

        <div style = {{ background : "white", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
         
        <h6 className = "text-center text-warning">Top Match Ratings</h6>
        
                <div style = {{display : "flex", justifyContent : "space-evenly"}}>
                    <div style = {{display : "flex", alignItem : "center"}}><img alt = "404" src = {h[0].player_image === "" ? require("../images/login.jpg") : h[0].player_image} style = {{width : "40px", height : "40px"}}></img><div><h6 className = "text-center">{home_mvp.player_rating}</h6><h6>{home_mvp.player_name}</h6></div></div>
                    <div style = {{display : "flex", alignItem : "center"}}> <div><h6 className = "text-center">{away_mvp.player_rating}</h6><h6>{away_mvp.player_name}</h6></div> <img alt = "404" src = {h[0].player_image === "" ? require("../images/login.jpg") : a[0].player_image} style = {{width : "40px", height : "40px"}}></img></div>
                </div>         
                <hr></hr>
                    
        </div>
            
                )


            }

           




            else if(player_info.length < 1){

            }


          if(stating.length > 0){
            var possession
            var streaks
            stating.map((item)=>{
                if(item.type === "Ball Possession"){
                    possession = item 
                }
                if(item.type === "Dangerous Attacks"){
                    streaks = item
                }
            })
            console.log("this array got something to tell")
            setRtr(
                    <div className = "container" style = {{background : "white", borderRadius : "10px", width : "90%", marginRight : "5%", marginLeft : "5%"}}>
                        <h6 className = "text-center">Important Stats</h6>
                        <br></br>

                        <div style ={{display : "flex", justifyContent : "space-between"}}>

                            <h5 style = {{borderRadius : "10px", color : "gold", background : possession.home > possession.away ? "midnightblue" : "white"}}> {possession.home}</h5>
                            <h6>Ball Possession</h6>
                            <h5  style = {{borderRadius : "10px", color : "black", background : possession.away > possession.home ? "gold" : "white"}}>{possession.away}</h5>
                        </div>
                        <br></br>
                        <div style ={{display : "flex", color: "black", justifyContent : "space-between"}}>
                            <h5 style = {{borderRadius : "10px", color : "gold", background : Number(streaks.home) > Number(streaks.away) ? "midnightblue" : "white"}}>{streaks.home}</h5>
                            <h6>Attackig Streaks</h6>
                            <h5 style = {{borderRadius : "10px", color : "black", background : Number(streaks.away) > Number(streaks.home) ? "gold" : "white"}}>{streaks.away}</h5>
                        </div>
                                <br></br>
                    </div>
                )
          }

          else if (stating.length < 1){
            console.log("this array got nothing to tell")
          }



        

              console.log("home player pushing home")
       
            console.log(home_mvp, away_mvp, "mvps")


        const fetched = await sessionStorage.getItem("parse")
        const release = await JSON.parse(fetched)
        console.log(release, "release")
        
        const item = release
        
        



       

            if (props.props.match_status === "After Pen."){
        setDis(<div><h3 className = "text-center" style = {{color : "midnightblue"}}>Full Time: {props.props.match_hometeam_ft_score} : {props.props.match_awayteam_ft_score}</h3></div>)
        console.log("this match went into penalty")
    }
    else{
        setDis("")
    }
      
    }
    fetcher()
    }, [])

useEffect(()=>{
                axios.get("https://apiv3.apifootball.com/?action=get_odds&match_id="+id+"&APIkey="+api_key)
                .then(res=>{
                    console.log(res, "odds")
                    setOdds(
                            <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
                                
                                <h6 className = "text-center" style = {{color : "midnightblue"}}>SportsUp Odds</h6>
                                <div style = {{display : "flex", justifyContent : "space-between"}}>
                                    <div><h6>Home</h6><h6>{res.data[0].odd_1}</h6></div>
                                    <div><h6>Draw</h6><h6>{res.data[0].odd_x}</h6></div>
                                    <div><h6>Away</h6><h6>{res.data[0].odd_2}</h6></div>
                                </div>
                                <hr></hr>
                                
                            </div>
                        )

                })
                .catch(err=>{console.log("err")})
}, [])





    return(

       
    <div>

        <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
        {leag}
        <br></br>
       
        {video}
        <br></br>
        {more}
        <br></br>
        {data}
        </div>
        <br></br>
        <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
        {dis}
         {pr}
        
      
        </div> 
        <br></br>

        <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
            
            <br></br>
            {rtr}

            <Head_to_Headd props = {prop}/>
        </div>       

        
        <br></br>
<div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
{odds}
{recip}
</div>
<br></br>

<div style = {{ borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}} >
    
    {news}
</div>

<br></br>

        
    </div>

        

    )	
}


function Match_info(props){


 let {id} = useParams();
 const [comment, setComment] = useState()
  
const api_key = api


    useEffect(()=>{

        axios.get("https://apiv3.apifootball.com/?action=get_live_odds_commnets&APIkey="+api_key)
        .then((res)=> { 


            console.log(res, "live data commentary")
            console.log(res.data[id], "particular mathc")



            if(res.data[id] != undefined){

                res.data[id].live_comments.reverse()

                setComment(
                res.data[id].live_comments.map((item)=>{
                    return(
                            <div style = {{display : "flex", justifyContent : "space-between", width : "98%", marginRight : "1%", marginLeft : "1%", marginTop : "3%", background : "white", borderRadius : "10px",}}><h6>{item.time}</h6><p>{item.text}</p></div>
                        )
                })
                )
            }

            else{
                setComment(<div style = {{width : "100%", textAlign : "center"}}><h6>Live commentary is not available for at the moment</h6></div>)
            }


    })


    }, [])

    return(
               <> {comment}</>
        )

}






function Stats(props){

const [returner, setReturner] = useState()
const [top, setTop] = useState()
const [teller, setTeller]= useState()
const [tbd, setTbd] = useState("statistics")
const [rating, setRating] = useState()
const [goals, setGoals] = useState()
const [pshots, setShots] = useState()
const [dribbles, setDribbles]= useState()
const [tackles, setTackles] = useState()
const [wider_loop, setWider_loop] = useState()







useEffect(()=>{

    async function fetcher(){

        const point = await sessionStorage.getItem("parse")
        const pointer = await JSON.parse(point)

        var possession = ""
        var coners = ""
        var acurate_pass = ""
        var total_shots = ""
        var ontarget = ""
        var fouls= ""
        var streaks= ""


        


        if (pointer.statistics_1half.length > 0){
            setTeller(
                    <div>
                        <button className ="btn btn-light" style = {{ width : "50%"}} onClick = {()=> {setTbd("statistics")}}>ALL</button>
                        <button className =  "btn btn-light" style = {{ width : "50%"}} onClick = {()=> {setTbd("statistics_1half")}}> 1st Half </button>
                    </div>
                )
        }   

    setReturner(
 pointer[tbd].map((item)=>{




          
                if(item.type === "Ball Possession"){
                    possession = item 
                }
                if(item.type === "Dangerous Attacks"){
                    streaks = item
                }
                if (item.type === "Fouls"){
                    fouls = item
                }
                   if (item.type === "Corners"){
                    coners = item
                }

                   if (item.type === "Shots Total"){
                    total_shots = item
                }
                   if (item.type === "On Target"){
                    ontarget = item
                }
                   if (item.type === "Passes Accurate"){
                    acurate_pass = item
                }
                   
        























        let home = Number(item.home)
        let away = Number(item.away)
        if(Number(item.home) > Number(item.away)){
            let percent = away+home
            console.log(percent)
            let inner = away*100/percent
            let outcome = 100-inner
            let main = outcome+"%"
            console.log("bigger")
            console.log(main)
            return(
                <>
                 <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>
                <div style={{width : "100%", height : "15px", backgroundColor : "gold", borderRadius : "15%"}}>
                <div class="div-inner" style={{width : main, height:"15px", backgroundColor : "midnightblue", borderRadius : "15%"}}>
        
                </div>
            </div>
            </>
            )
        }
        else if(Number(item.away) > Number(item.home)){
            let percent = away+home
            console.log(percent)
            let inner = home*100/percent
         
            let main = inner+"%"
            console.log("bigger")
            console.log(main)
            return(
                <>
                 <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>
                <div style={{width : "100%", height : "15px", backgroundColor : "gold", borderRadius : "15%"}}>
                <div class="div-inner" style={{width : main, height:"15px", backgroundColor : "midnightblue", borderRadius : "15%"}}>
        
                </div>
            </div>
            </>
            )
        }
        else if(item.type == "Ball Possession"){
            return(
                <>
                <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>
                <div style={{width : "100%", height : "15px", backgroundColor : "gold", borderRadius : "15%"}}>
                <div class="div-inner" style={{width : item.home, height:"15px", backgroundColor : "midnightblue", borderRadius : "15%"}}>
        
                </div>
            </div>
            </>
            )
        }
        else{
            console.log('equal')
            return(
                <>
                      <div style={{justifyContent : "space-between", display:"flex"}}>
                <h6>{item.home}</h6>
                <h6>{item.type}</h6>
                <h6>{item.away}</h6>

                </div>

              
                <div style={{width : "100%", height : "15px", backgroundColor : "gold", borderRadius : "15%"}}>
                <div class="div-inner" style={{width : "50%", height:"15px", backgroundColor : "midnightblue", borderRadius : "15%"}}>
        
                </div>
            </div>
                </>
            )
        }
    })
     )


if(pointer.statistics.length > 0){

if(possession == "" || acurate_pass  == "" || coners ==  "" || streaks == "" || fouls == "" || total_shots == "" || ontarget == ""){

}

else{

    setTop(
            <div>
                <h5 className = "text-center">Important Stats</h5>


                <h6 className = "text-center">Ball Possession</h6>

                <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>

                <div style = {{width : possession.home, background : "midnightblue", height : "40%", color : "white"}}>{possession.home}</div>
                <div style = {{width : possession.away, background : "gold", height : "40%", textAlign : "right", color : "black" }}>{possession.away}</div>

                </div>

                <div style = {{display : "flex", marginTop : "4%", justifyContent : "space-between", width : "100%"}}> <h6>{total_shots.home}</h6><h6>Shots</h6><h6>{total_shots.away}</h6></div>
                 <div style = {{display : "flex", marginTop : "4%", justifyContent : "space-between", width : "100%"}}> <h6>{ontarget.home}</h6><h6>On Target</h6><h6>{ontarget.away}</h6></div>
                  <div style = {{display : "flex", marginTop : "4%", justifyContent : "space-between", width : "100%"}}> <h6>{acurate_pass.home}</h6><h6>Accurate Passes</h6><h6>{acurate_pass.away}</h6></div>
                   <div style = {{display : "flex", marginTop : "4%", justifyContent : "space-between", width : "100%"}}> <h6>{coners.home}</h6><h6>Corners</h6><h6>{coners.away}</h6></div>
                    <div style = {{display : "flex", marginTop : "4%", justifyContent : "space-between", width : "100%"}}> <h6>{fouls.home}</h6><h6>Fouls</h6><h6>{fouls.away}</h6></div>
                     <div style = {{display : "flex", marginTop : "4%", justifyContent : "space-between", width : "100%"}}> <h6>{streaks.home}</h6><h6>Attacking Streaks</h6><h6>{streaks.away}</h6></div>
            


            </div>
        )
}
var all_players = []



pointer.player_stats.home.map((item)=>{
    all_players.push(item)
})

pointer.player_stats.away.map((item)=>{
    all_players.push(item)
})


all_players.sort((a,b)=> b.player_rating - a.player_rating)

if (all_players.length > 0){


   setRating(
            <div  style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}} >
                <h6 className = "text-center">Highest rated players</h6>

                <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[0].player_name}</h6>
                    <h6 className = "bg-secondary text-light">{all_players[0].player_rating}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center",  justifyContent : "space-between", }}>
                    <h6>{all_players[1].player_name}</h6>
                    <h6>{all_players[1].player_rating}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[2].player_name}</h6>
                    <h6>{all_players[2].player_rating}</h6>
                </div>

                


            </div>

)

all_players.sort((a,b)=> b.player_dribble_succ - a.player_dribble_succ )




   setGoals(
            <div  style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%", marginTop : "4%"}}>
                <h6 className = "text-center">Successful Dribbles</h6>

                <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[0].player_name}</h6>
                    <h6 className = "bg-secondary text-light">{all_players[0].player_dribble_succ}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center",  justifyContent : "space-between", }}>
                    <h6>{all_players[1].player_name}</h6>
                    <h6>{all_players[1].player_dribble_succ}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[2].player_name}</h6>
                    <h6>{all_players[2].player_dribble_succ}</h6>
                </div>

                


            </div>

)

all_players.sort((a,b)=> b.player_tackles- a.player_tackles)




   setTackles(
            <div  style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%", marginTop : "4%"}}>
                <h6 className = "text-center">Tackles</h6>

                <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[0].player_name}</h6>
                    <h6 className = "bg-secondary text-light">{all_players[0].player_tackles}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center",  justifyContent : "space-between", }}>
                    <h6>{all_players[1].player_name}</h6>
                    <h6>{all_players[1].player_tackles}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[2].player_name}</h6>
                    <h6>{all_players[2].player_tackles}</h6>
                </div>

                


            </div>

)


all_players.sort((a,b)=> b.player_shots_on_goal - a.player_shots_on_goal )




   setShots(
            <div  style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%", marginTop : "4%"}}>
                <h6 className = "text-center">Shots on Goal</h6>

                <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[0].player_name}</h6>
                    <h6 className = "bg-secondary text-light">{all_players[0].player_shots_on_goal}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center",  justifyContent : "space-between", }}>
                    <h6>{all_players[1].player_name}</h6>
                    <h6>{all_players[1].player_shots_on_goal}</h6>
                </div>

                 <div style = {{display : "flex", width : "100", height : "30px", alignItems : "center", justifyContent : "space-between", }}>
                    <h6>{all_players[2].player_name}</h6>
                    <h6>{all_players[2].player_shots_on_goal}</h6>
                </div>

                


            </div>

)
}



}



}
fetcher()

}, [tbd])

  
    return(
        <div className ="container" >
                
                {teller}
                <br></br>

                <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
                {top}
                </div>
                <hr></hr>
                <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
                <h5 className = "text-center">All Stats</h5>
                {returner}
                </div>

                        <br></br>

                        <h6 className = "text-center text-secondary">Players Statistics</h6>


                {rating}

                {goals}

                {pshots}

                {tackles}

                {wider_loop}
        </div>
    )

}

