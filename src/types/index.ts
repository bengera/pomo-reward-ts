import { Dispatch, SetStateAction } from "react";

type Reward = {
  id: string;
  description: string;
  category: "reward";
  price: number;
};
// Reacts own types hide arrow functions and void for you
//(value: number | ((prev: number) => number)) => void -
// shorthand
//  Dispatch<SetStateAction<Reward[]>>

export type RewardListProps = {
  rewards: Reward[];
  setRewards: Dispatch<SetStateAction<Reward[]>>; //void by default
  setMoney: Dispatch<SetStateAction<number>>;
  setRewardsCounter: Dispatch<SetStateAction<number>>;

  money: number;
  timerRunning: boolean;
  timeLeft: number;

  setOverlay: Dispatch<SetStateAction<boolean>>;
  setCurrentClaim: Dispatch<SetStateAction<Reward[]>>;
  allQuotes: string[];
  setSelectedQuote: Dispatch<SetStateAction<string>>;
};
