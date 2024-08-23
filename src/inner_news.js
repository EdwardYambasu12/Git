import {React, useEffect, useState} from "react"
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Line from "./line.js"
export default function  Inner_News() {
	
	let {id} = useParams();
	const [news, setNews] = useState()
	const navigate = useNavigate()

	var counter = 0

	useEffect(()=>{
			axios.get(Line+"/sportsup_news")
			.then((res)=>{
				const finder = res.data.find((item)=> item._id == id)

				console.log(finder)

				setNews(
							<div className = "container bg-light">
								<Button onClick={()=>navigate("/news")} className = "text-dark" style = {{textAlign : "left"}} autoFocus color="inherit" >
					               <ArrowBackIcon/>
					            </Button>

					            <p style = {{textAlign : "right", fontSize : "0.7em"}}><strong>{finder.time_stamp}</strong></p>

					            <img style = {{width : "100%", height : 200, borderRadius : "0%"}} src = {finder.cover_photo}>

					            </img>

					            <h5><strong>{finder.title}</strong></h5>

					            <br></br>

					            <div  style= {{borderRadius : "none", width : "100%", borderRadius : "0%", fontSize : "1.1em"}}>
					            	{finder.body}
					            </div>


					            {finder.photo_album.map((item)=>{
					            	counter += 1

					            	var list = Number(counter)
					            	var major = finder.additonalBodies[list-1]

					            	return(
					            		<div>
					            			<img style = {{width : "100%", borderRadius : "0%", height : 200}} src = {item}>

					            			</img>

					            				<p>{major}</p>
					            				<br></br>
					            		</div>
					            		)

					            })}


					          
							</div>
					)
			})
	}, [])


return(
			<>

				{news}
			</>
	)


}