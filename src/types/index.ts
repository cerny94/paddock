// Driver types
export interface Driver {
  id: string;
  number: number;
  name: string;
  shortName: string;
  image: string;
  team: string;
  nationality: string;
  position: number;
  points: number;
  wins: number;
  poles: number;
  podiums: number;
  championships: number;
  birthday: string;
  bio: string;
}

// Team types
export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  principalOwner: string;
  teamChief: string;
  technicalChief: string;
  color: string;
  livery: string;
  drivers: Driver[];
  points: number;
  position: number;
  established: number;
}

// Race types
export interface Race {
  id: string;
  round: number;
  name: string;
  circuit: string;
  country: string;
  location: string;
  image: string;
  date: string;
  sessions: RaceSession[];
  status: 'upcoming' | 'ongoing' | 'completed';
  weather: WeatherCondition;
  trackInfo: TrackInfo;
}

export interface RaceSession {
  id: string;
  type: 'FP1' | 'FP2' | 'FP3' | 'Sprint' | 'Qualifying' | 'Race';
  startsAt: string;
  endsAt: string;
  status: 'scheduled' | 'ongoing' | 'completed';
  results?: SessionResult[];
}

export interface SessionResult {
  position: number;
  driver: Driver;
  team: Team;
  time: string;
  gap: string;
  laps: number;
  status: string;
  points: number;
}

export interface WeatherCondition {
  temperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  condition: string; // 'Sunny', 'Cloudy', 'Rainy', etc.
  trackTemperature: number;
  visibility: number;
}

export interface TrackInfo {
  name: string;
  country: string;
  length: number; // in km
  turns: number;
  firstRace: number;
  lapRecord: string;
  drs: number;
}

// Live timing types
export interface LiveTimingData {
  position: number;
  driver: Driver;
  team: Team;
  currentLap: number;
  totalLaps: number;
  timeDifference: string;
  interval: string;
  gap: string;
  speed: number;
  tires: TireInfo;
  drsStatus: boolean;
  pitLap: number | null;
  sector1: string;
  sector2: string;
  sector3: string;
  status: string;
  bestLap: string;
}

export interface TireInfo {
  compound: 'soft' | 'medium' | 'hard';
  age: number;
  condition: 'fresh' | 'used' | 'worn';
  temperature: number;
}

// Community types
export interface Post {
  id: string;
  title: string;
  content: string;
  category: 'Transfer' | 'Result' | 'Drama' | 'Technical';
  image?: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  createdAt: string;
  reactions: {
    up: number;
    down: number;
    fire: number;
    love: number;
  };
  userReaction?: 'up' | 'down' | 'fire' | 'love';
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  createdAt: string;
  endsAt: string;
  totalVotes: number;
  userVote?: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface Prediction {
  id: string;
  raceId: string;
  prediction: string;
  author: {
    id: string;
    name: string;
    image: string;
  };
  createdAt: string;
  upvotes: number;
  replies: number;
}

// User types
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  image: string;
  favoriteDriver?: string;
  favoriteTeam?: string;
  isPremium: boolean;
  createdAt: string;
}

export interface Standings {
  drivers: Driver[];
  constructors: Team[];
  round: number;
  season: number;
}
