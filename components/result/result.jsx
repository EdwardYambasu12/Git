import React, { useEffect, useState } from "react";
import Mini_Nav from "../nav/mini-nav";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import "./result.css"
import api from "../nav/details.js"
import axios from "axios"
import Trial from "./trial.jsx"
import Table from "./table.jsx"
import Head_to_Head from "./h2h.js"
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { AppBar, Tabs, Tab, Typography } from '@mui/material';

function Personal(props){


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
 

    const [tab_state, setTabstate] = useState(1)
const [below, setBelow] = useState()

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
    console.log(id)

    let d = new Date()


const today_date = d.toISOString().split('T')[0]
console.log(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+1)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]
console.log(tomorrow_date)
 
const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-1)
const yesterday = yesterday_setup.toISOString().split("T")[0]
console.log(yesterday)
const [dd, setD] = useState()
 

//Time Zone
function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}
 
    function pushGo(){
    return(<h2 className = "text-danger">WE ar The Wold</h2>)
}

    const [needed, setNeeded] = useState()
    const [na, setNa] = useState("ed")
    const {state} = useLocation();
    const [popout, setPopout] = useState("")
    const [return1, setReturn1] = useState("")

    const [meant, setMeant] = useState("money")
    const [video, setVideo] = useState()
    const api_key = api

    



         




  var status 
useEffect (()=>{


   


        axios.get("https://apiv3.apifootball.com/?action=get_videos&match_id="+id+"&APIkey="+api_key)
        .then(async(res)=>{
            const parse1 = JSON.stringify(res.data)
            sessionStorage.setItem("highlights", parse1)


           


            console.log(res, "video_data")
        })
        .catch((e)=>{console.log(e)})


         

            

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
                

            

             const dam = await axios.get("https://apiv3.apifootball.com/?action=get_H2H&firstTeamId="+homeID+"&secondTeamId="+awayID+"&APIkey="+api)
           
             
                    const parser = await JSON.stringify(dam)
                    
               sessionStorage.setItem("h2", parser)
              console.log(dam)
              const p = JSON.stringify({f : homeID, s : awayID})
              await sessionStorage.setItem( "path", p )

             
             const response = await axios.get("https://apiv3.apifootball.com/?action=get_standings&league_id="+league_id+"&APIkey="+api)
            const datad = response.data

            const pas = JSON.stringify(datad)
            await sessionStorage.setItem('table', pas)

             

           

                const item = res.data[0]
                var it = item
      console.log(item.match_status, "match status")
              
                                  if (item.match_status === "Finished"){
                                        console.log(item.match_status, "match status")
                                        status = "Finished"
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
                                        status = item.match_time

                                    }
                                    else{ 
                                            status = <div style = {{display : "flex", textAlign : "center", width : "100%", justifyContent : 'center'}}><p>{item.match_status}</p><p className = "live">'</p></div>
                                    }



    setGem(
            <Info props = {item}/>
        )



 

    setMatch(<Match_info props = {item}/>)
     setStts(<Stats props = {item}/>)
      setLu(<Trial props = {item}/>)
       setHh(<Head_to_Head props = {item}/>)
        setTabl(<Table props = {item}/>)


                setD(
                  <>
                  <div  id = "background" >
                     
                  </div>
                  <div style = {{width : "100%", position : "absolute", top : "0%"}}>
                  <div style = {{width : "100%", display : "flex", justifyContent : "space-between", marginTop : "1.5%"}}><img src = {require("../images/R.png")} style = {{width : "30px", height : "30px", marginLeft : "3%"}}></img> 
                  <img src = {require("../images/bk.png")} style = {{width : "30px", height : "30px", marginRight : "3%"}}></img>
                  </div>
        <div className="main_row">
            <div style={{width : "40%"}}>
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
          

            <div id = "awaya" style={{width : "40%"}}>
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


            
}, [  ])
 
        


    return(
      <body style = {{background : "#EEEEEE", minHeight : window.innerHeight}}>


                        <>{dd}</>


          <div >
      <AppBar position="static">
        <Tabs value={value}  indicatorColor="primary" textColor="primary"   variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" onChange={handleChange} variant="fullWidth" >
          <Tab label="Info" />
          <Tab label="Live Commentary" />
          <Tab label="Stat" />
          <Tab label="Lineups" />
          <Tab label="H2H" />
          <Tab label="Table" />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Typography component="div" role="tabpanel" hidden={value !== 0}>
        {gem}
         
        }

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
   
                               
                            
                         <div style = {{marginTop : "2%"}}>{below}</div>

      </body>


        )
}
export default Personal







function Head_to_Headd(props){

   
    const [map_return, setMap_return] = useState()
    const [map_return_2, setMap_return_2] = useState()
    const [h2h, setH2h] = useState()
    const navigate = useNavigate()
    const [per, setPer] = useState()
    const [spinner, setSpinner]= useState("loading data")
    const [table, setTable] = useState()

    function redirector(item){
        navigate("/match_small/result/"+item.match_id, {state : item })
        window.location.reload()
    }
        
    useEffect(()=>{
            
        async function starter(){

            
            const h2m = await sessionStorage.getItem("h2")
            const getter = await JSON.parse(h2m)
            const man = getter
            const main = man.data
          


            const path = await sessionStorage.getItem("path")
            
            const match_data = await JSON.parse(path)

            const table_retrieve = await sessionStorage.getItem("table")
            const stringer = await JSON.parse(table_retrieve)

            


            const stage_key = await sessionStorage.getItem("stage_name")
            console.log(stage_key, "stringer")


            const homeID = match_data.f
            const awayID  = match_data.s


            

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


            try{
           
             
                console.log(main)
                
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
                        <div style = {{borderRadius : "10px", color: "white", background : background_, display : "flex", width : "30%", justifyContent : "space-around"}}> <h6>{element.match_hometeam_score}</h6>-<h6>{element.match_awayteam_score}</h6> </div>
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
                        <div style = {{borderRadius : "10px", color: "white", background : background_, display : "flex", width : "30%", justifyContent : "space-around"}}> <h6>{element.match_hometeam_score}</h6>-<h6>{element.match_awayteam_score}</h6> </div>
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
    const [leag, setLeag] = useState(
                    <div style={{width : "100%", display : "flex", alignItem : "center"}}> <img style={{height :"30px", width : "30px"}} src = { props.props.league_logo === "" ? require("../images/no-img.png") : props.props.league_logo }></img> <h6 className = "text-secondary">{props.props.league_name} - {props.props.league_year}</h6></div>
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

    
        const fetched = await sessionStorage.getItem("parse")
        const release = await JSON.parse(fetched)
        console.log(release, "release")
        
        const item = release

      


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
                                                   return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><hr></hr></div>
                                                )
                                    }

                                    else if(fault.home_scorer === ""){
                                              return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.away_assist})<label>{(fault.score)}</label></div><hr></hr></div>
                                                )
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
                                                   return(
                                                    <div style = {{textAlign : "left", width : "100%",}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><hr></hr></div>
                                                )
                                    }

                                    else if(fault.home_scorer === ""){
                                              return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.away_assist})<label>{(fault.score)}</label></div><hr></hr></div>
                                                )
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
                                                   return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                    }

                                    else if(fault.home_scorer === ""){
                                              return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.away_assist})<label>{(fault.score)}</label></div><br></br></div>
                                                )
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
                                                   return(
                                                    <div style = {{textAlign : "left", width : "100%"}}><div >{fault.home_scorer} {fault.time}'⚽ | ({fault.home_assist}) <label>{(fault.score)}</label></div><br></br></div>
                                                )
                                    }

                                    else if(fault.home_scorer === ""){
                                              return(
                                                    <div style = {{textAlign : "right", width : "100%"}}><div >{fault.away_scorer} {fault.time}'⚽ | ({fault.away_assist})<label>{(fault.score)}</label></div><br></br></div>
                                                )
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
   

        <h6
                        
                                    
                                    
                      className="text-center text-secondary">substitutions</h6
                        
                                    
                                    
                     >
        
            {subs_home}
        
        
            {subs_away}
        
 </div>

      )

    }
    getting()
  }, [])



    useEffect(()=>{


        async function fetcher(){


            const fet = await sessionStorage.getItem("highlights")

            const trans = JSON.parse(fet)

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
        
        axios.get('https://apiv3.apifootball.com/?action=get_statistics&match_id='+id+'&APIkey='+api_key)
        .then(async(res)=>{
            setStates(res.data)
            var home_array = []
            var away_array = []
            var home_mvp
            var away_mvp
            console.log(res.data)
            var player_info = res.data[id].player_statistics
            var stating = res.data[id].statistics
            
            player_info.forEach((element)=>{
              if (element.team_name == "home"){
              console.log("home player pushing home")
              home_array.push(element)
          }


          else if(element.team_name == "away"){
            console.log("away player pushing away")
            away_array.push(element)
          }

            })

   

            
            var if_available 

            if (player_info.length > 0){
                      player_info.forEach((element)=>{
              if (element.team_name == "home"){
              console.log("home player pushing home")
              home_array.push(element)
          }


          else if(element.team_name == "away"){
            console.log("away player pushing away")
            away_array.push(element)
          }

            })

            home_array.sort(compare_func)
            away_array.sort(compare_func) 


             home_mvp = home_array[0]
             away_mvp = away_array[0]

            const hm = await axios.get("https://apiv3.apifootball.com/?action=get_players&player_id="+home_mvp.player_key+"&APIkey="+api_key)
            const h = hm.data 
            
            const ay = await axios.get("https://apiv3.apifootball.com/?action=get_players&player_id="+away_mvp.player_key+"&APIkey="+api_key)
            const a = ay.data 
             
                console.log(a,h)
             setPr(

        <div style = {{ background : "white", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
            {leag}
            <br></br>
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
        })



        .catch((e)=>{console.log(e)})

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
        {rtr}
        </div> 
        <br></br>

        <div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
            
            <br></br>

            <Head_to_Headd props = {prop}/>
        </div>       

        
        <br></br>
<div style = {{background : "white ", borderRadius : "10px", width : "98%", marginRight : "1%", marginLeft : "1%"}}>
{odds}
{recip}
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
                setComment(<div style = {{width : "100%", textAlign : "center"}}><h6>Live commentary is not available for this match</h6></div>)
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
