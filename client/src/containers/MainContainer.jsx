import React, { useState, useEffect } from "react";
import { getAllTeams } from "../services/teams";
import { destroyPlayer, getAllPlayers, postPlayer, putPlayer } from "../services/players";
import { Route, Switch, useHistory } from "react-router-dom";
import Teams from "../screens/Teams";
import Players from "../screens/Players";
import PlayerCreate from "../screens/PlayerCreate";
import PlayerEdit from "../screens/PlayerEdit";
import PlayerDetail from "../screens/PlayerDetail";

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
    setPlayers(prevState => prevState.filter(player => {
      return player.id !== id
    }))
    history.push('/players');
  }

  return (
    <Switch>
      <Route path="/teams">
        <Teams teams={teams} />
      </Route>
      <Route path="/players/new">
        <PlayerCreate handlePlayerCreate={handlePlayerCreate} />
      </Route>
      <Route path="/players/:id/edit">
        <PlayerEdit handlePlayerEdit={handlePlayerEdit} players={players} />
      </Route>
      <Route path="/players/:id">
        <PlayerDetail teams={teams} />
      </Route>
      <Route path="/players">
        <Players players={players} deletePlayer={deletePlayer} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
