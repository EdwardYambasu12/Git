import React from "react";


const Bracket = ({data}) => {

    console.log(data, "playoff data")








    return (
            <div>
              

                {data.draw != null ? data.draw.configuration.map((item)=>{
                    return(
                            <div style = {{background : "white", borderRadius : "10px"}} className = "container">
                                    <h5 className = "text-center">{item.stage}</h5>
                                    {item.draw.map((id)=>{

                                        return(
                                            <div style = {{margin : "2.5%", display : "flex", flexFlow : 1, flex : 0,  width : "100%", justifyContent : "space-between"}}>
                                            {

                                        id.drawResult.map((i)=>{

                                            return(
                                                    <div style = {{display : "flex", justifyContent : "space-between", width : "22%", background : "lightgray", borderRadius : "7px"}}>
                                                    <div>
                                                        <img  src={`https://images.fotmob.com/image_resources/logo/teamlogo/${i.homeTeamId}_xsmall.png`} style = {{width : "20px", heght : "20px"}}/>
                                                        <h6>{i.homeTeamShortName}</h6>
                                                        <h6><strong>{i.aggregatedResult.homeScore}</strong></h6>
                                                    </div>

                                                    <div>
                                                     <img  src={`https://images.fotmob.com/image_resources/logo/teamlogo/${i.awayTeamId}_xsmall.png`} style = {{width : "20px", heght : "20px"}}/>
                                                        <h6>{i.awayTeamShortName}</h6>
                                                        <h6><strong>{i.aggregatedResult.awayScore}</strong></h6>
                                                    </div>
                                                    </div>
                                                )

                                        })}
                                        </div>
                                        )
                                    })}
                            </div>
                        )
                }) : <><div>
    {data.rounds.map((round, roundIndex) => {
        return (
            <div
                key={roundIndex}
                style={{
                    background: "white",
                    borderRadius: "10px",
                    display: "flex",
                    flexFlow: 1,
                    flex: 0,
                    width: "100%",
                    flexWrap : "wrap",
                    justifyContent : "space-between"
                }}
                className="container"
            >
              
                {round.matchups.map((matchup, matchupIndex) => {
                    return (
                        <div
                            key={matchupIndex}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "22%",
                                background: "lightgray",
                                borderRadius: "7px",
                            }}
                        >
                            <div>
                                <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${matchup.homeTeamId}_xsmall.png`}
                                    style={{ width: "20px", height: "20px" }}
                                    alt={`${matchup.homeTeamShortName} logo`}
                                />
                                <h6>{matchup.homeTeamShortName}</h6>
                                <h6>
                                    <strong>{matchup.aggregatedResult.homeScore}</strong>
                                </h6>
                            </div>

                            <div>
                                <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${matchup.awayTeamId}_xsmall.png`}
                                    style={{ width: "20px", height: "20px" }}
                                    alt={`${matchup.awayTeamShortName} logo`}
                                />
                                <h6>{matchup.awayTeamShortName}</h6>
                                <h6>
                                    <strong>{matchup.aggregatedResult.awayScore}</strong>
                                </h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    })}
</div>
</>}
                    
            </div>
    );
};

export default Bracket;
