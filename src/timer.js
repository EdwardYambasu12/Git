import {React, useEffect} from "react"



export default function Timer(){



	const numbers_array = [0,1,2,3,4,5,6,7,8,10]


	

	const round = Math.round(Math.random() *10)

	

	const date = new Date()
	const seconds = date.getSeconds()





		useEffect(()=>{

						var new_seconds = seconds
						var minute = round
						
						function loader(){
								
								setTimeout(loader, 1000)
								new_seconds = new_seconds + 1


								if (new_seconds === 60){
									new_seconds = 1

									minute += 1


								}

								console.log(minute+":"+new_seconds)
						}	


						loader()	
		}, [])

return(
		<h1>

				Timer
		</h1>
	)


}