import { Driver } from '@/types';
import { MOCK_DRIVERS } from '@/data/mock-data';

export async function getDrivers(): Promise<Driver[]> {
  // TODO: Replace with real API call
  // return fetchWithRetry('/api/drivers');
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_DRIVERS), 300);
  });
}

export async function getDriver(id: string): Promise<Driver> {
  const drivers = await getDrivers();
  const driver = drivers.find((d) => d.id === id);
  if (!driver) throw new Error('Driver not found');
  return driver;
}

export async function getDriverStandings(): Promise<Driver[]> {
  const drivers = await getDrivers();
  return drivers.sort((a, b) => b.points - a.points);
}
