type Reward = {
  id: string;
  description: string;
  category: "reward";
  price: number;
};

export type RewardListProps = {
  rewards: Reward[];
  setRewards: (value: Reward[] | ((prev: Reward[]) => Reward[])) => void;
  setMoney: (value: number | ((prev: number) => number)) => void;
  setRewardsCounter: (value: number | ((prev: number) => number)) => void;
  money: number;
  timerRunning: boolean;
  timeLeft: number;
  setOverlay: (value: boolean) => void;
  setCurrentClaim: (value: Reward) => void;
  allQuotes: string[];
  setSelectedQuote: (value: string) => void;
};
