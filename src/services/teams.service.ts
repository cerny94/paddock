import { Team } from '@/types';
import { MOCK_TEAMS } from '@/data/mock-data';

export async function getTeams(): Promise<Team[]> {
  // TODO: Replace with real API call
  // return fetchWithRetry('/api/teams');
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_TEAMS), 300);
  });
}

export async function getTeam(id: string): Promise<Team> {
  const teams = await getTeams();
  const team = teams.find((t) => t.id === id);
  if (!team) throw new Error('Team not found');
  return team;
}

export async function getTeamStandings(): Promise<Team[]> {
  const teams = await getTeams();
  return teams.sort((a, b) => b.points - a.points);
}
