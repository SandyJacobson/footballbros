import React, { useState, useEffect } from "react";
import { getAllTeams, destroyTeam, postTeam, putTeam } from "../services/teams";
import {
  destroyPlayer,
  getAllPlayers,
  postPlayer,
  putPlayer,
} from "../services/players";
import { Route, Switch, useHistory } from "react-router-dom";
import Teams from "../screens/Teams/Teams";
import TeamCreate from "../screens/Teams/TeamCreate";
import TeamEdit from "../screens/Teams/TeamEdit";
import TeamDetails from "../screens/Teams/TeamDetails";
import Players from "../screens/Players/Players";
import PlayerCreate from "../screens/Players/PlayerCreate";
import PlayerEdit from "../screens/Players/PlayerEdit";
import PlayerDetail from "../screens/Players/PlayerDetail";

const MainContainer = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getAllPlayers();
      setPlayers(playersData);
    };
    const fetchTeams = async () => {
      const teamsData = await getAllTeams();
      setTeams(teamsData);
    };
    fetchPlayers();
    fetchTeams();
  }, []);

  const handlePlayerCreate = async (playerData) => {
    const newPlayer = await postPlayer(playerData);
    setPlayers((prevState) => [...prevState, newPlayer]);
    history.push("/players");
  };

  const handlePlayerEdit = async (id, playerData) => {
    const updatedPlayer = await putPlayer(id, playerData);
    setPlayers((prevState) =>
      prevState.map((player) => {
        return player.id === Number(id) ? updatedPlayer : player;
      })
    );
    history.push("/players");
  };

  const deletePlayer = async (id) => {
    await destroyPlayer(id);
    setPlayers((prevState) =>
      prevState.filter((player) => {
        return player.id !== id;
      })
    );
    history.push("/players");
  };

  const handleTeamCreate = async (teamData) => {
    const newTeam = await postTeam(teamData);
    setTeams((prevState) => [...prevState, newTeam]);
    history.push("/teams");
  };

  const deleteTeam = async (id) => {
    await destroyTeam(id);
    setTeams((prevState) =>
      prevState.filter((team) => {
        return team.id !== id;
      })
    );
    history.push("/teams");
  };

  const handleTeamEdit = async (id, teamData) => {
    const updatedTeam = await putTeam(id, teamData);
    setTeams((prevState) =>
      prevState.map((team) => {
        return team.id === Number(id) ? updatedTeam : team;
      })
    );
    history.push("/teams");
  };

  return (
    <Switch>
      <Route path="/players/new">
        <PlayerCreate handlePlayerCreate={handlePlayerCreate} />
      </Route>
      <Route path="/players/:id/edit">
        <PlayerEdit handlePlayerEdit={handlePlayerEdit} players={players} />
      </Route>
      <Route path="/players/:id">
        <PlayerDetail teams={teams} players={players} setPlayers={setPlayers} />
      </Route>
      <Route path="/players">
        <Players players={players} deletePlayer={deletePlayer} />
      </Route>
      <Route path="/teams/new">
        <TeamCreate handleTeamCreate={handleTeamCreate} />
      </Route>
      <Route path="/teams/:id/edit">
        <TeamEdit handleTeamEdit={handleTeamEdit} teams={teams} />
      </Route>
      <Route path="/teams/:id">
        <TeamDetails players={players} />
      </Route>
      <Route path="/teams">
        <Teams teams={teams} deleteTeam={deleteTeam} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
