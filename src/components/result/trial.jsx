import React, {useState, useEffect} from 'react'
import "./trial.css"
import api from "../nav/details.js"
import axios from "axios"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
 import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { Tabs, Tab, } from '@mui/material';
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';

import Slide from '@mui/material/Slide';


 





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





    const api_key = api


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Trial(){

   const navigate = useNavigate(); const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [piper, setPiper] = useState()
    const [liner, setLiner] = useState()
    const [idh, setIdh]  = useState(1)
    const [diner, setDiner] = useState()
    const [but, setBut] = useState()
    const [mid, setMid] = useState()
    const [homer, setHomer] = useState()
    const [awayer, setAwayer] = useState()
    const [homersubs, setHomersubs] = useState()
    const [awayersubs, setAwayersubs] = useState()
    const [hc, setHc] = useState()
    var determiner
    const [ac, setAc] = useState()
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };



useEffect(()=>{
    
    try{



async function fetched( props){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
    console.log(main_data, "data to use")


        async function upper_cut(item){
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                       




<AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>


                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )


        }


        function check_mate(id){

                console.log(main_data.player_stats.home)
                const data = main_data.player_stats.home.filter((it)=> id.player_key === it.player_key)
                const data1 = main_data.player_stats.away.filter((it)=> id.player_key === it.player_key)

                if(data.length > 0){
                    upper_cut(data[0])
                }

                if (data1.length > 0){
                    upper_cut(data1[0])
                }
                console.log(data)

        }




        setHomer(
                main_data.lineup.home.starting_lineups.map((item)=>{
                    console.log(item.lineup_player)

                    return(
                            <div style = {{width : "100%"}} variant="outlined" onClick={handleClickOpen}>
                                <div onClick  = {()=> check_mate(item)} style = {{width : "100%", alignItems : "center",  justifyContent : "space-between", display : "flex"}}> <h6>{item.lineup_player}</h6><h6>{item.lineup_number}</h6></div>
                                <hr></hr>
                            </div>
                        )
                })
            )

                setAwayer(
                main_data.lineup.away.starting_lineups.map((item)=>{
                    console.log(item.lineup_player)

                    return(
                            <div style = {{width : "100%"}} variant="outlined" onClick={handleClickOpen}>
                                <div onClick  = {()=> check_mate(item)} style = {{width : "100%",alignItems : "center",  justifyContent : "space-between", display : "flex"}}><h6>{item.lineup_player}</h6><h6>{item.lineup_number}</h6></div>
                                <hr></hr>
                            </div>
                        )
                })
            )




                    setHomersubs(
                main_data.lineup.home.substitutes.map((item)=>{
                    console.log(item.lineup_player)

                    return(
                            <div style = {{width : "100%"}}>
                                <div onClick  = {()=> check_mate(item)} style = {{width : "100%", marginLeft : "1%", marginRight : "2%", alignItems : "center",  justifyContent : "space-between", display : "flex"}}> <h6>{item.lineup_player}</h6><h6>{item.lineup_number}</h6></div>
                                <hr></hr>
                            </div>
                        )
                })
            )

                setAwayersubs(
                main_data.lineup.away.substitutes.map((item)=>{
                    console.log(item.lineup_player)

                    return(
                            <div style = {{width : "100%"}}>
                                <div onClick  = {()=> check_mate(item)} style = {{width : "100%", marginLeft : "1%", marginRight : "2%", alignItems : "center",  justifyContent : "space-between", display : "flex"}}><h6>{item.lineup_player}</h6><h6>{item.lineup_number}</h6></div>
                                <hr></hr>
                            </div>
                        )
                })
            )
			try{

                setHc(
                        <div style = {{background : "#EEEEEE", display : "flex", justifyContent : "space-between" }}><h6>Coach : {main_data.lineup.home.coach[0].lineup_player}</h6> <h6>Formation : {main_data.match_hometeam_system}</h6></div>
                    )

                setAc(
                        <div style = {{background : "#EEEEEE", display : "flex", justifyContent : "space-between" }}><h6>Coach : {main_data.lineup.away.coach[0].lineup_player}</h6> <h6>Formation : {main_data.match_awayteam_system}</h6></div>
                    )

					}catch(e){
						console.log("ERROR : ", e)
					}

        function pars(id){
               
                console.log(id)
                    if(id === 1){
                         setIdh(id)
                        setMid(
                            
                            )
                    }
                    
                     if(id ===2){
                         setIdh(id)
                        setMid(      )
                    }
        }



    setBut(

                <div style = {{width : "100%"}}>
                    <button style = {{width : "50%"}} onClick = {()=> pars(1)} className = {idh === 1 ? "btn btn-secondary": "btn btn-outline-secondary"}><img style = {{width:"20px", height : "20px"}} src = {main_data.team_home_badge}></img>{main_data.match_hometeam_name}</button>
                    <button style = {{width : "50%"}} onClick = {()=> pars(2)} className = {idh === 2 ? "btn btn-secondary": "btn btn-outline-secondary"}><img style = {{width:"20px", height : "20px"}} src = {main_data.team_away_badge}></img> {main_data.match_awayteam_name}</button>
                </div>
        )
   /////////////////////////// conditions home

    if(main_data.match_hometeam_system === "4-2-3-1"){
       
        setLiner( <F231 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "4-4-2"){
        setLiner( <F42 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "4-3-3"){
        setLiner( <F33 determiner = "home"/>)
    }

        if(main_data.match_hometeam_system === "4-1-4-1"){
        setLiner( <F141 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "3-5-2"){
        setLiner( <T52 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "4-4-1-1"){
        setLiner( <F411 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "4-1-2-1-2"){
        setLiner( <F1212 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "3-4-3"){
        setLiner( <T43 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "4-2-2-2"){
        setLiner( <F222 determiner = "home"/>)
    }
        if(main_data.match_hometeam_system === "2-3-5"){
        
    }
        if(main_data.match_hometeam_system === "3-5-1-1"){
        setLiner( <T511 determiner = "home"/>)
    }
       if(main_data.match_hometeam_system === "3-4-2-1"){
        setLiner( <T421 determiner = "home"/>)
    }
    if (main_data.match_hometeam_system === "5-4-1"){
         setLiner( <F41 determiner = "home"/>)
    }

 if (main_data.match_awayteam_system === "4-3-1-2"){
         setLiner( <F312 determiner = "home"/>)
    }






    ///////////away conditions




    if(main_data.match_awayteam_system === "4-2-3-1"){
        setDiner( <F231 determiner = "away"/>)
        
    }
        if(main_data.match_awayteam_system === "4-4-2"){
        setDiner( <F42 determiner = "away"/>)
    }
        if(main_data.match_awayteam_system === "4-3-3"){
        setDiner( <F33 determiner = "away"/>)
    }

        if(main_data.match_awayteam_system === "4-1-4-1"){
        setDiner( <F141 determiner = "away"/>)
    }
        if(main_data.match_awayteam_system === "3-5-2"){
        setDiner( <T52 determiner = "away"/>)
    }
        if(main_data.match_awayteam_system === "4-4-1-1"){
        setDiner( <F411 determiner = "away"/>)
    }
        if(main_data.match_awayteam_system === "4-1-2-1-2"){
        setDiner( <F1212 determiner = "away"/>)
    }
        if(main_data.match_awayteam_system === "3-4-3"){
        setDiner( <T43 determiner = "away"/>)
    }
        if(main_data.match_awayteam_system === "4-2-2-2"){
        setDiner( <F222 determiner = "away"/>)
    }
        if(main_data.match_hometeam_system === "2-3-5"){
        
    }
        if(main_data.match_awayteam_system === "3-5-1-1"){
        setDiner( <T511 determiner = "away"/>)
    }
       if(main_data.match_awayteam_system === "3-4-2-1"){
        setDiner( <T421 determiner = "away"/>)
    }
    if (main_data.match_awayteam_system === "5-4-1"){
         setDiner( <F41 determiner = "away"/>)
    }
        if (main_data.match_awayteam_system === "4-3-1-2"){
         setDiner( <F312 determiner = "away"/>)
    }


}
fetched()

}

catch(e){
    console.log(e)
}

}, [idh])


try{


    return(
            <>



                  <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>



         

    <div>

      <ThemeProvider theme = {Theme}>
        <Tabs style ={{background : "inherit", borderWidth : "0px",  boxShawdow : "none"}} textColor = "primary" value={value} TabIndicatorProps={{ style: { backgroundColor: 'midnightblue'} }} onChange={handleChange}   centered>
          <Tab label="Home" />
          <Tab label="Away" />
        </Tabs>
        </ThemeProvider>
        
            <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>

                <div>
                            {hc}
                            <br></br>
                            <div id = "home_t">{liner}</div>
                            <br></br>
                            <br></br>
                            <h5 style = {{fontFamily : "monospace"}} className = "text-center">Starting Players</h5>
                            <div style = {{fontFamily : "monospace"}}>{homer}</div>
                            <h5 style = {{fontFamily : "monospace"}} className = "text-center">substitutes Players</h5>
                            <div style = {{fontFamily : "monospace"}}>{homersubs}</div>                            
                            </div>
             
         
        

        </Typography>
        <Typography component="div" role="tabpanel" hidden={value !== 1}>
           
                            <div>
                                {ac}
                                <br></br>

                            <div id = "home_t">{diner}</div>
                            <br></br>
                            <br></br>
                            <h5 style = {{fontFamily : "monospace"}} className = "text-center">Starting Players</h5>
                            <div style = {{fontFamily : "monospace"}}>{awayer}</div>
                            <h5 style = {{fontFamily : "monospace"}} className = "text-center">substitutes Players</h5>
                            <div style = {{fontFamily : "monospace"}}>{awayersubs}</div>
                            </div>
        </Typography>
       

      </SwipeableViews>
    </div>


    </React.Fragment>
            </>
        )

		}

	catch(e){
			console.log(e)
	}
}

///////////////////////////////////////////442////////////////////////////////////////

function F42(props){

 const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const [piper, setPiper] = useState()


 const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                       <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button    className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>



                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }

    setLet(







 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
                   <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}> 
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>


        
         </tr>


                 <tr>
          
                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

                    <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
           
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )

}













//////////////////////////////////////4312//////////////////////////
function F312(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [piper, setPiper] = useState()
 const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")

        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                       <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>




                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
                
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>


        
         </tr>
            <tr>
                   <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        
            </tr>

                 <tr>
          
                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

                    <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
            
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )
}




























function F411(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [piper, setPiper] = useState()
     const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")

        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                       <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>






                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
                 <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>


        
         </tr>
            <tr>
                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                   
            </tr>

                 <tr>
          
                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
    
            <>
          
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )

}












































function F213(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [piper, setPiper] = useState()

     const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                       <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>






                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }

    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
             

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>




        
         </tr>
<tr>


        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>
        </tr>


            <tr>


                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
                   
     
          
                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(


 
            <>
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )

}




















function T52(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const [piper, setPiper] = useState()
const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
            console.log(item, "upper_cut")
             handleClickOpen()
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>



                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
            
                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
<td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>             

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

 <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>



        
         </tr>


            <tr>


                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       
                   
     
          
                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
         
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )

}




















function F1212(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const [piper, setPiper] = useState()

     const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
            console.log(item, "upper_cut")
             handleClickOpen()
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>






                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
             

                
                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>




        
         </tr>
<tr>


        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>




            <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

        </tr>


            <tr>

       <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
                   
     
          
                          
         </tr>



<tr>
    

                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
</tr>     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
        
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )



}



































function T43(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const [piper, setPiper] = useState()
const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                      <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>




                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
            
                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>             

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

 <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>



        
         </tr>


            <tr>


                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       
<td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                   
     
          
                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
            
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>


        )

}


function F222(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [piper, setPiper] = useState()
     const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")

        async function upper_cut(item){
            console.log(item, "upper_cut")
             handleClickOpen()
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                      <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>




                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >

            <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

             

                
                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>




        
         </tr>
<tr>
  <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
                   
     
     

        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>



        </tr>





<tr>
    

                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
</tr>     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
           
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )


}


function T511(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const [piper, setPiper] = useState()
    const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                      <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>





                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
            
                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
       
<td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td> 
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>             

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

 <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>



        
         </tr>
<tr>


                   <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       

                   
     
          
                          
         </tr>

            <tr>


                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
        </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
          
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )


}





function F41(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [piper, setPiper] = useState()
    const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


                async function upper_cut(item){
                     handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>


                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>

                      <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>





             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




              
<tr>
            <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       

        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

         <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

        </tr>
        <tr>

                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

            
     
          
                          
         </tr>
     
 </table>


      
    </div>


        )
}
fet()
    }, [])
    return(
 
            <>
      
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )

}


function F141(props){

     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [piper, setPiper] = useState()
const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
             handleClickOpen()
            console.log(item, "upper_cut")
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>


                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }

    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
             

                   
                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>




        
         </tr>
<tr>
            <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
       

        
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

         <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

        </tr>
        <tr>

                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

            
     
          
                          
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
          
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
            {lets_hold}</>

        )
}

















function T421(props){

     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [piper, setPiper] = useState()
const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
            console.log(item, "upper_cut")
             handleClickOpen()
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>

                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
    

 

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                           <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>


                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >


 <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>


                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        
                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

</tr>


        <tr>
             

                <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
           
<td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        </tr>


        
         

                 <tr>
          
                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

             

                         
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
            
            <>
         
             <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
             {lets_hold}</>
            

        )
}




















////////////////////////////////////////433////////////////////////////////////433



function F33(props){

     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [piper, setPiper] = useState()
  const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


        async function upper_cut(item){
            console.log(item, "upper_cut")
             handleClickOpen()
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>




                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }

    setLet(
 <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-433">

 <table id="table">
   
         <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
             <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>


        
         </tr>


                 <tr>
          
                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>

                    <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                            <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        
         </tr>
     
 </table>


      
    </div>


        )

}
fet()
    }, [])
    return(
 
            <>
                      
                            <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>

            {lets_hold}</>

        )
}














function F231(props){
     const navigate = useNavigate(); const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [piper, setPiper] = useState()
     const [lets_hold, setLet] = useState()
    useEffect(()=>{
        async function fet(){
    const data = await sessionStorage.getItem("parse")
    const main_data = JSON.parse(data)
      const lizer = props.determiner
    console.log(lizer)


    var short =  main_data.lineup[lizer]
    
    var card_filter = main_data.player_stats[lizer].filter(item=> item.player_yellow_cards > 0  )
    const red = main_data.player_stats[lizer].filter(item=> item.player_red_cards > 0  )
    red.map(item=>{
        card_filter.push(item)
    })


    var goals = main_data.player_stats[lizer].filter(item=> item.player_goals > 0)
    console.log(goals, "Goal involvement")

    var subs = main_data.player_stats[lizer].filter(item=> item.player_isSubst === "True")
    console.log(subs, "players substituted")
    
    var captain  = main_data.player_stats[lizer].filter(item=> item.player_isCaptain === "True")
    console.log(captain)
    const t = card_filter.filter(item=> item.player_key === short.starting_lineups[0].player_key) 
    console.log(t)
    console.log(card_filter, "set card filter")


         async function upper_cut(item){
            console.log(item, "upper_cut")
           handleClickOpen()
               const id = await  axios.get('https://apiv3.apifootball.com/?action=get_players&player_id='+item.player_key+'&APIkey='+api_key)
               console.log(id)
               const data = id.data[0]
                setPiper(
                    <div id = "delivery" className = "fixed-top" style = {{overflowY : "auto"}} >
                     <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
           
         
            <Button className = "text-dark" autoFocus color="inherit" onClick={()=>window.location.reload()}>
              close
            </Button>

             </Toolbar>

                        <div style = {{display : "flex", justifyContent : "space-around", width : "100%" }}> 

                        <div><img style = {{height : "80px", width : "80px"}} src = {data.player_image} ></img></div>
                        <div><div><h6>{data.player_complete_name}</h6></div>
                            <div><button className = "btn btn-info">{item.player_rating}.0</button> <p className = "text-light">Sportsup Match Ratings</p></div>
                        </div>
                     
                        </div>
                           <div style = {{display : "flex", justifyContent : "space-around", width : "100%"}}><p className = "text-light">position : {item.player_position}</p><button className = "btn btn-warning" onClick = {()=>{const home = JSON.stringify(data.player_key); sessionStorage.setItem("player", home);  navigate("/player")}}>View Player Profile</button></div>
         

        </AppBar>



                        <hr></hr>

                        <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Minutes Played</p>
                            <p style = {{marginRight : "2%"}}>{item.player_minutes_played}'</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}> Goals</p>
                            <p style = {{marginRight : "2%"}}>{item.player_goals}</p>
                        </div>
                       <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Assists</p>
                            <p style = {{marginRight : "2%"}}>{item.player_assists}</p>
                        </div>


                        <hr></hr>
                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Clearances</p>
                            <p style = {{marginRight : "2%"}}>{item.player_clearances}</p>
                        </div>
                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Interceptions</p>
                            <p style = {{marginRight : "2%"}}>{item.player_interceptions}</p>
                        </div>

                            <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Blocks</p>
                            <p style = {{marginRight : "2%"}}>{item.player_blocks}</p>
                        </div>
                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Tackles</p>
                            <p style = {{marginRight : "2%"}}>{item.player_tackles}</p>
                        </div>
                            <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Yellow Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_yellow_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Red Cards</p>
                            <p style = {{marginRight : "2%"}}>{item.player_red_cards}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Fouls Commited</p>
                            <p style = {{marginRight : "2%"}}>{item.player_fouls_commited}</p>
                        </div>



                        <hr></hr>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Shots on goal</p>
                            <p style = {{marginRight : "2%"}}>{item.player_shots_on_goal}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player total shots</p>
                            <p style = {{marginRight : "2%"}}>{item.player_total_shots}</p>
                        </div>

                             <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes}</p>
                        </div>

                         <div style = {{width : "100%", justifyContent : "space-between", display : "flex", fontFamily : "Tahoma"}}>
                            <p style = {{marginLeft : "2%"}}>Player accurate Passes</p>
                            <p style = {{marginRight : "2%"}}>{item.player_passes_acc}/{item.player_passes}</p>
                        </div>


                    </div>
                )
        }


    setLet(
        



  <div className = "teamx" style={{height : window.innerHeight/1.5}} id = "system-4231">


 <table id="table">
   
         <tr>
             <td> 
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][0])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[0].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[0].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[0].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[0].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[0].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[0].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][0].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[0].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
         </tr>
                 <tr>
             <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][4])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[4].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[4].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[4].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[4].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[4].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[4].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[4].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][4].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[4].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
            
     
        </td>

                    <td>
              <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][3])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[3].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[3].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[3].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[3].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[3].player_key === item.player_key && item.player_goals >0){
                    return("⚽")
                }
                else if(short.starting_lineups[3].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[3].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][3].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[3].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                    <td>
                        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][2])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[2].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[2].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[2].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[2].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[2].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[2].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][2].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[2].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
  

        </div>
        </td>

                    <td>
           
   <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][1])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[1].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[1].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[1].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[1].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[1].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[1].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][1].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[1].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

         </tr>




                 <tr >
           

                    <td>
                 <div id = "individual"onClick = {()=> upper_cut(main_data.player_stats[lizer][6])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[6].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[6].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[6].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[6].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[6].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[6].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][6].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[6].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
          </div>
        </td>

                    <td>
             <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][5])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[5].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[5].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[5].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[5].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[5].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[5].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][5].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[5].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>


        
         </tr>


                 <tr>
          

                    <td>
                    <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][9])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[9].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[9].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[9].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[9].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[9].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[9].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][9].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[9].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>

                            <td>
           <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <div id = "player_number_holder" onClick = {()=> upper_cut(main_data.player_stats[lizer][8])}>
          <h6 id = "player_number">{short.starting_lineups[8].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[8].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[8].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[8].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[8].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[8].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][8].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[8].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>
        </td>
        

          <td>
        <div id = "individual" onClick = {()=> upper_cut(main_data.player_stats[lizer][7])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[7].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[7].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[7].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[7].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[7].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[7].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][7].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[7].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
      

      </div>

        </td>
         </tr>


         <tr>
            
                    <td>
              <div id = "individual"  onClick = {()=> upper_cut(main_data.player_stats[lizer][10])}>
          <div id = "player_number_holder">
          <h6 id = "player_number">{short.starting_lineups[10].lineup_number}</h6>
          </div>
          <p id = "player_name">{short.starting_lineups[10].lineup_player}</p>
          <div id = "beneath_holder">
          <p id = "beneath1"  >
              {
                    card_filter.map((item)=>{
                        if(short.starting_lineups[10].player_key === item.player_key && item.player_yellow_cards > 0){
                                return("🟨")
                        }
                        else if(short.starting_lineups[10].player_key === item.player_key && item.player_red_cards>0){
                                return("🟥")
                        }


                    })
              }
          </p>
          <p  id = "beneath" className = "text-danger">
              {goals.map(item =>{
                if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 0){
                    return("⚽")
                }
                else if(short.starting_lineups[10].player_key === item.player_key && item.player_goals > 1){
                    return("⚽" + item.player_goals)
                }
              })}
          </p>
          <p  id = "beneath2" >{
            subs.map(item=>{
                  if(short.starting_lineups[10].player_key === item.player_key){
                    return("🔁")
                }


            })
          }</p>
          <p id = "beneath3" className = "bg-info text-light">
                    {main_data.player_stats[lizer][10].player_rating}.0
          </p>
          <p id = "beneath4">
              {captain.map(item=>{
                if(short.starting_lineups[10].player_key === item.player_key){
                    return("C")
                }
              })}
          </p>
          </div>
        </div>



      
        </td>
         </tr>
     
 </table>


    </div>

)
}
fet()
}, [])

return(
    <>
   
     <React.Fragment>
    
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
       

        {piper}
      </Dialog>
    </React.Fragment>
    {lets_hold}</>

        )
}
 