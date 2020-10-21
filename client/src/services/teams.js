import api from './api-config'

export const getAllTeams = async () => {
  const resp = await api.get('/teams');
  return resp.data;
}

export const getOneTeam = async (id) => {
  const resp = await api.get(`/teams/${id}`);
  return resp.data;
}

export const postTeam = async (teamData) => {
  console.log(teamData)
  const resp = await api.post('/teams', { team: teamData });
  console.log(resp)
  return resp.data;
}

export const putTeam = async (id, teamData) => {
  const resp = await api.put(`/teams/${id}`, {team: teamData});
  return resp.data;
}

export const destroyTeam = async (id) => {
  const resp = await api.delete(`/teams/${id}`);
  return resp;
}

export const addTeam = async(playerId, teamId) => {
  const resp = await api.put(`/teams/${teamId}/players/${playerId}`);
  return resp.data;
}