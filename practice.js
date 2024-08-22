// JavaScript source code
import React, { useState, useEffect } from 'react';

function MatchStandings({ matchResultsDetailsAjaxURL, Widgetkey, res, hometeamKeyMain, awayteamKeyMain }) {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        if (res[0].match_round.indexOf('finals') === -1) {
            fetchStandings();
}
}, [res]);

    const fetchStandings = () => {
        fetch(matchResultsDetailsAjaxURL, {
            method: 'POST', // or 'GET'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'get_standings',
                Widgetkey: Widgetkey,
                league_id: res[0].league_id,
                stage_key: res[0].fk_stage_key
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                setStandings(data);
}
})
        .catch((error) => {
            console.error('Error:', error);
});
};

return (
    <section id="matchStandings" className="tab-content">
        <div className="tab-container">
            {standings.map((stand, index) => (
                <div key={index} className="flex-table row" role="rowgroup">
                    <div className="flex-row first fix-width" role="cell">{index + 1}.</div>
                    <div className={`flex-row teams ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">
                        <a href="#" onClick={(e) => { e.preventDefault(); windowPreventOpening(); }}>{stand.team_name}</a>
                    </div>
                    <div className={`flex-row fix-width ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">{stand.league_payed}</div>
                    <div className={`flex-row fix-width ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">{stand.league_W}</div>
                    <div className={`flex-row fix-width ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">{stand.league_D}</div>
                    <div className={`flex-row fix-width ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">{stand.league_L}</div>
                    <div className={`flex-row goals ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">{stand.league_GF}:{stand.league_GA}</div>
                    <div className={`flex-row fix-width ${((hometeamKeyMain === stand.team_id) || (awayteamKeyMain === stand.team_id)) ? 'selectedMatchStandings' : ''}`} role="cell">{stand.league_PTS}</div>
                </div>
                ))}
</div>
</section>
    );
}

export default MatchStandings;
