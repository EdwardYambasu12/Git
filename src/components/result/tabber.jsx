import React, { useEffect, useState } from "react";
import Mini_Nav from "../nav/mini-nav";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Lined from "../../line.js"
import "./result.css"
import api from "../nav/details.js"
import axios from "axios"
import Timer from "./timer.js"
import Trial from "./trial.jsx"
import Head_to_Head from "./h2h.js"
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

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


const TabsSticky = ({props}) => {
  const [scrolled, setScrolled] = useState(false);
  var time = <Timer props = {props} />
  const [sm, setSm] = useState()
  const [bg, setBg] = useState()
    const navigate = useNavigate()
  const data = props
  useEffect(() => {
    const handleScroll = () => {
      // Log the scroll position to ensure the event is detected
      console.log("Scroll position:", window.scrollY);
      setScrolled(window.scrollY > 50); // Set `scrolled` to true when scroll position > 50
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



useEffect(()=>{

const item = data

   const header = data.header.teams
     var status


        if(item.header.status.finished === true){

            status = "Full Time"

        }

        if(data.header.status.started === true && data.header.status.finished === false){

            if(data.header.status.liveTime.short === "HT"){
                status = data.header.status.liveTime.long
            }

            else {
            status = time
                }
        }

        if(item.header.status.started === false){
               const dateTimeString = item.header.status.utcTime;
                        const dateObject = new Date(dateTimeString);
                    const timeString = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


                    status = timeString
        }



      setSm(
          <h1>Troop for Christ</h1>
        )

      setBg(
          <div >
                  <div  id = "background" >
                     
                  </div>
                  <div style = {{width : "100%", position : "absolute", top : "0%"}}>
                  <div style = {{width : "100%", display : "flex", justifyContent : "space-between", marginTop : "1.5%"}}>  <ArrowBackIcon onClick={() => navigate(-1)} style={{ color : "black", cursor: 'pointer' }} />
                
                  </div>
        <div className="main_row">
            <div style={{width : "40%"}} onClick = {()=>{navigate("/team/"+header[0].id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}} >
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
          

            <div id = "awaya" style={{width : "40%"}} onClick = {()=>{navigate("/team/"+header[1].id);const stringer = JSON.stringify(item); sessionStorage.setItem("selected_league", stringer)}}>
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

}, [])


  return (
    <div >
      <div  className={`header ${scrolled ? "scrolled" : ""}`}>
        {/* Dynamic header text to check which state is active */}
        <h1>{scrolled ? sm : bg}</h1>
      </div>

     
    </div>
  );
};

export default TabsSticky;
