import { Race } from '@/types';
import { MOCK_RACES } from '@/data/mock-data';

export async function getRaces(): Promise<Race[]> {
  // TODO: Replace with real API call (OpenF1 or Ergast)
  // return fetchWithRetry('/api/races');
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_RACES), 300);
  });
}

export async function getRace(id: string): Promise<Race> {
  const races = await getRaces();
  const race = races.find((r) => r.id === id);
  if (!race) throw new Error('Race not found');
  return race;
}

export async function getNextRace(): Promise<Race> {
  const races = await getRaces();
  return races.find((r) => r.status === 'upcoming') || races[0];
}

export async function getCompletedRaces(): Promise<Race[]> {
  const races = await getRaces();
  return races.filter((r) => r.status === 'completed').reverse();
}
