export function RewardCounter({ rewardsCounter }: { rewardsCounter: number }) {
  return (
    <div className="reward-counter">
      <h2>🎁 Rewards claimed: {rewardsCounter} </h2>
    </div>
  );
}
