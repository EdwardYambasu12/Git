import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Mini_Nav from "../nav/mini-nav"
import './signin.css'; // Make sure to adjust the path based on your project structure
import heheImage from '../images/main_logo.png'; // Make sure to adjust the path based on your project structure
import "./bootstrap.min.css"
import {Link} from "react-router-dom"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import FeedIcon from '@mui/icons-material/Feed';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Line from "../../line.js"

function LabelBottomNavigation() {
  const [value, setValue] = React.useState();
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{  position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>
     <BottomNavigationAction
        label="Matches"
        value="matches"
        onClick={()=>{navigate("/")}}
        icon={<SportsIcon />}
      />
      <BottomNavigationAction
        label="News"
        value="News"
         onClick={()=>{navigate("/news")}}
        icon={<FeedIcon />}
      />
      <BottomNavigationAction
        label="Leagues"
        value="Leagues"
         onClick={()=>{navigate("/leagues")}}
        icon={<EmojiEventsIcon />}
      />
      <BottomNavigationAction onClick={()=>{navigate("/faves")}} label="Favorites" value="Favorites" icon={<BookmarkAddIcon />} />
    </BottomNavigation>
  );
}


function Login() {

  const [email_value, setEmail_value] = useState()
  const [password_value, setPassword_value] = useState()
  const [terms, setTerms] = useState()
  const [error, setError] = useState()
  const [remember, setRemember] = useState()
  const navigate = useNavigate()
async  function poster(){
console.log(terms)


  if(email_value == ""){
      setError("Fill in email slot")
    }
  else if(password_value == ""){
    setError("Fill in Password slot")
  }


      try{
        const datad = {
          email_reader : email_value, 
          password_reader : password_value,
          confirm_password : password_value
        }

         async function late(){

       
            


           const data = await  fetch(Line+"/users")
           const datum = await data.json()
          
           
           const checker = datum.filter((id)=> id.email === datad.email_reader ) 
            console.log(checker, "checker result")
              console.log(datad, datum)
             const parser  = JSON.stringify(datad)
             if(checker.length < 1){
              alert("wrong credential")
             }

              else if(checker.length > 0){
          await localStorage.setItem("data", parser)
            navigate("/")

          }
           /*
            if (raw_data.email_reader == data.email_reader && raw_data.password_reader == data.password_reader) {
              console.log("account available")
              navigate("/")
            }  

            else{

              setError("account not found try again")
            }

          */
    
        }

      
          late()
     
      }

      catch(error){

      }
    
  
  }


  return (
    <body>
    

    <div className="d-flex align-items-center py-4 bg-body-tertiary">
  
      <main className="form-signin w-100 m-auto">
        <div>
           <img className="mb-4" src={heheImage} alt="SPORTS UP" height="95" style = {{marginLeft : "30%", marginRight : "30%", width : "40%"}}/>
         <h1 className="h3 mb-3 fw-normal">Login to SportsUp</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" onChange = {(value)=>setEmail_value(value.target.value)} placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <br></br>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  onChange = {(value)=>setPassword_value(value.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>


          <hr></hr>
              <p className = "text-danger">{error}</p>
          <div className="form-check text-start my-3">
            <input className="form-check-input"  onChange={(value)=>setTerms(value.target.checked)} type="checkbox" value="terms and conditions" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
             remember me            </label>
          </div>
          <button onClick = {()=> poster()}className="btn btn-success w-100 py-2" type="submit">
           Login
          </button>
          <br></br>
          <br></br>
          <h4 className = "text-center text-warning">Don't Have a SportsUp account</h4>
          <hr></hr>
           <Link to = {"/register"}className="btn btn-info w-100 py-2" type="submit" id = "submit_link" >
           Create New Account
          </Link>
      
        </div>
      </main>
    
    </div>


     <LabelBottomNavigation/>

    </body>
  );
}

export default Login;