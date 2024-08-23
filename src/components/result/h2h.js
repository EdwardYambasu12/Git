
// JavaScript source code

import React, { useState, useEffect, } from 'react';
import axios from 'axios'; 
import api from "../nav/details.js"
import {Link, useLocation, useNavigate} from "react-router-dom"

export default function Head_to_Head(props){

   
 
    const [map_return, setMap_return] = useState()
    const [map_return_2, setMap_return_2] = useState()
    const [h2h, setH2h] = useState()
    const navigate = useNavigate()
    const [per, setPer] = useState()
    const [spinner, setSpinner]= useState()
    const [sup, setSup] = useState()
    async function redirector(item){
        const fyer = await JSON.stringify(item)


        
        sessionStorage.setItem("fyer", fyer)
          sessionStorage.setItem("parse", fyer)
        navigate("/match_small/result/"+item.match_id, {state : item })
        window.location.reload()
    }
        
    useEffect(()=>{
            
        async function starter(){
            


                const fyer = await sessionStorage.getItem("parse")
                const parser = await JSON.parse(fyer)

                 const match_data = parser

                  const homeID = parser.match_hometeam_id
                  const awayID  = parser.match_awayteam_id
                
            const maind = await axios.get("https://apiv3.apifootball.com/?action=get_H2H&firstTeamId="+homeID+"&secondTeamId="+awayID+"&APIkey="+api)
           
             const main = maind.data
            try{
           
                
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

                    else if(element.match_awayteam_score == element.match_hometeam_score){
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

                    else if(element.match_hometeam_score == element.match_awayteam_score){
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
                console.log(element)   
                console.log(Number(element.match_awayteam_score) + Number(element.match_hometeam_score))

            if(element.match_awayteam_id == awayID){
              
                if(Number(element.match_awayteam_score) > Number(element.match_hometeam_score)){
                    status = "win"
                    

                }

                else if(Number(element.match_awayteam_score) < Number(element.match_hometeam_score)){
                    status = "lost"
                    
                }

                else if(element.match_awayteam_score == element.match_hometeam_score){
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

                else if(element.match_hometeam_score == element.match_awayteam_score){
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

                        else if(element.match_awayteam_score == element.match_hometeam_score){
                            
                            away_obj.draw.push("draw")
                            
                  
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

                        else if(element.match_hometeam_score === element.match_awayteam_score){
                            
                            home_obj.draw.push("draw")
                  
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

                    console.log(home_percentage, away_percentage, draw_percentage)

                        setPer(
                                 <div style = {{background : "white", borderRadius : "15px", width : "100%" }}>
                                            <br></br>

                                       <div style = {{display : "flex", justifyContent : "space-between", width : "100%"}}>
                                       <div><img src = {match_data.team_home_badge} style = {{height : "40px", width : "40px"}}></img></div>
                                       <h6 className = "text-secondary" style = {{fontFamily : "monospace"}}>Past Matches</h6>
                                       <div><img src = {match_data.team_away_badge} style = {{height : "40px", width : "40px"}}></img></div> 
                                       </div>
                                        <br></br>

                                        <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>
                                        <div style ={{borderRadius : "10px", width : "13%", textAlign : "center",  height : "50px", background : "midnightblue", color : "gold", }}>
                                            <div >
                                                {home_win}
                                            </div>

                                            <p>win</p>

                                        </div>



                                         <div style ={{borderRadius : "10px", width : "13%", textAlign : "center",  height : "50px", background : "#EEEEEE", color : "black", }}>
                                            <div >
                                                {draw}
                                            </div>

                                            <p>draw</p>

                                        </div>





                                         <div style ={{borderRadius : "10px", width : "13%", textAlign : "center",  height : "50px", background : "gold", color : "black", }}>
                                            <div >
                                                {away_win}
                                            </div>

                                            <p>win</p>

                                        </div>


                                        </div>
                                    
                                    </div>
                            )
console.log(main.firstTeam_VS_secondTeam.length, "where" )
              
setSup(
            main.firstTeam_VS_secondTeam.map((item)=>{

                return(

                            <div style = {{display : "flex", marginTop : "3%", width : "100%", justifyContent : "space-between", background : "white", borderRadius : "10px"}} onClick = {()=> redirector(item)}>

                                    <div style = {{display : "flex", justifyContent : "space-between", width : "100%", height : "50px", alignItems : "center", }}>
                                        
                                    <div style = {{display : "flex", width : "40%",justifyContent : "space-between", display : "flex", alignItems : "center", }}><h6 className = "text-secondary" style ={{textOverflow : "ellipsis", whiteSpace : "nowrap", overflow : "hidden"}}>{item.match_hometeam_name}</h6><img src = {item.team_home_badge} style = {{width : "30px", height : "30px"}}></img></div>
                                    <div style = {{width : "20%", justifyContent : "space-around", display : "flex"}}><h6>{item.match_hometeam_score}</h6>-<h6>{item.match_awayteam_score}</h6></div>
                                    <div style = {{display : "flex", width : "40%", justifyContent : "space-between", display : "flex", alignItems : "center", }}><img src = {item.team_away_badge} style = {{width : "30px", height : "30px"}}></img><h6 className = "text-secondary" style ={{textOverflow : "ellipsis", whiteSpace : "nowrap", overflow : "hidden"}}>{item.match_awayteam_name}</h6></div>
                                    </div>
                                    <div></div>

                                    </div>
                                    )
            })                            
                    
                    
                
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

                    {per}
                <br>
                </br>
                    <div style = {{ background : "white", borderRadius : "15px"}}>
                    <br></br>
                <h5>Team Form</h5>
                    <div style = {{display : "flex", width : "100%", justifyContent : "space-between"}}>  
                         <div style = {{width : "35%"}}> {map_return}</div>
                         <div style = {{width : "35%"}}> {map_return_2}</div>
                    </div>
            
                    </div>
                    <br></br>

                    {sup}
                    
            </>
        )


}
