import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../nav_bar/nav'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import Footer from '../scores/footer/footer';


export default function Players() {

    var [login_email, setlogin_email] = useState()
    var [tech, setTech] = useState()
    var [button_state, setButton] = useState()




    useEffect(()=>{
        async function login(){
                const data = localStorage.getItem("data")
                
                if (data == "undefined"){
                    console.log("guest user")
                }
                else{
                const trial = JSON.parse(data)
                setlogin_email(trial.email_reader)
                }
        } 
        login()
  }, [])     

    function following(){
        fetch("http://localhost:6100/sportsup/user/"+login_email).then(data=> data.json()).then(data=> setTech(data))


    }
    following()

    const {state} = useLocation()
    const [inner, setInner] = useState(<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
      
    >
      <CircularProgress color="inherit" />
    </Backdrop>)
    console.log(state)

    async function fetcher(state){

        try{
           const checker = tech.filter(item => item.player_id == state)

           if (checker.length > 0){
            setButton("unfollow")
           }
           else{
            setButton("follow")
           }
            const result = await    fetch("https://sportsulp.onrender.com/players/"+state)
            const json = await result.json()
            console.log(json)
            setInner(
              <div  style={{textAlign : "center"}}>
              <h2 className='text-center'>Player Stats</h2>
              <hr></hr>
      <Link className="btn btn-danger text-right"  to={"/"}>{button_state}</Link>
          <img style={{height : "200px", width : "50%", marginLeft : "25%", marginRight : "25%"} } src = {json[0].player_image} alt = "player photo" loading='lazy'></img>
          <h5 className='text-center text-warning'>Personal Information</h5>


          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Player Name: </h4>
              <h4> {json[0].player_name}</h4>
          </div>

           <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Player  Nationality: </h4>
              <h4> {json[0].player_country}</h4>
          </div>

         
           <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Date of Birth: </h4>
              <h4> {json[0].player_birthdate}</h4>
          </div>


   
          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Player Age: </h4>
              <h4> json[0].player_age}</h4>
          </div>

          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Club Team :  </h4>
              <h4> {json[0].team_name}</h4>
          </div>
          <hr>
          </hr>
      
          <h2 className='text-center text-warning'>Seasonal Stats</h2>


          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Goals :  </h4>
              <h4> {json[0].player_goals}</h4>
          </div>

          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Assist :  </h4>
              <h4>  {json[0].player_assists}</h4>
          </div>

          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Penalty(s) :  </h4>
              <h4>  {json[0].player_pen_scored}</h4>
          </div>


          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Yellow Card :  </h4>
              <h4> {json[0].player_yellow_cards}</h4>
          </div>


             <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Red Cards :  </h4>
              <h4> {json[0].player_red_cards}</h4>
          </div>

           <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Saves:  </h4>
              <h4> {json[0].player_saves}</h4>
          </div>

          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Games Played:  </h4>
              <h4> {json[0].player_match_played}</h4>
          </div>
          <h6>Games Minutes : {json[0].player_minutes}</h6>

          <div style = {{display : "flex", justifyContent : "space-between"}}>
              <h4>Minutes Played:  </h4>
              <h4> {json[0].player_minutes}</h4>
          </div>
          </div>
            )}
            catch(error){
              setInner(
                <h3>Check Network Connection</h3>
              )
            }
    }

    fetcher(state)

  return (
    
    <body>
        <Nav></Nav>
        <Link className="btn btn-danger text-left"  to={"/"}>return home</Link>
      {inner}
      <Footer></Footer>
      
    </body>
  )
}
