export function PomoCounter({ counter }: { counter: number }) {
  return (
    <div className="pomo-counter">
      <h2>✅ Pomdoros Completed: {counter}</h2>
      {/* <p className="counter">{"🚀".repeat(counter)}</p> */}
    </div>
  );
}
