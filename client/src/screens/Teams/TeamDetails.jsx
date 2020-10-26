import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneTeam } from "../../services/teams";
import "./TeamDetails.css";

const TeamDetails = (props) => {
  const [team, setTeam] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const teamItem = await getOneTeam(id);
      setTeam(teamItem);
    };
    fetchTeam();
  }, [id]);

  return (
    <div>
      {team && (
        <>
          <div className="single-team-div">
            <div className="team-details">
              <div className="team-detail-pictures">
                <img src={team.img_url} alt={team.manager} />
              </div>
              <h3>{team.name}</h3>
              <p>{team.manager}</p>
            </div>
            <h3>Players:</h3>
            {team.players.map((player) => (
              <p key={player.id}>
                {player.name} #{player.number}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TeamDetails;
