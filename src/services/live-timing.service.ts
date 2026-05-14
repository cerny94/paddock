import { LiveTimingData, RaceSession } from '@/types';
import { MOCK_LIVE_TIMING, MOCK_RACES } from '@/data/mock-data';

export async function getLiveTimingData(): Promise<LiveTimingData[]> {
  // TODO: Replace with WebSocket connection for real-time data
  // WebSocket connection to F1 data provider would go here
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_LIVE_TIMING), 200);
  });
}

export async function getCurrentSession(): Promise<RaceSession | null> {
  const races = MOCK_RACES;
  const now = new Date();

  for (const race of races) {
    for (const session of race.sessions) {
      const startTime = new Date(session.startsAt);
      const endTime = new Date(session.endsAt);
      if (now >= startTime && now <= endTime) {
        return session;
      }
    }
  }
  return null;
}

export async function subscribeToLiveData(callback: (data: LiveTimingData[]) => void) {
  // TODO: Implement WebSocket subscription
  const interval = setInterval(async () => {
    const data = await getLiveTimingData();
    callback(data);
  }, 1000);

  return () => clearInterval(interval);
}
