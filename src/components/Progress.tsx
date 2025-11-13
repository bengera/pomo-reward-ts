/**
 * Progress component displays session statistics and renders its children.
 *
 * @param children - React nodes to be rendered inside the stats container.
 */
export function Progress({ children }: { children: React.ReactNode }) {
  return (
    <div className="stats-container">
      <h2 className="stats">Stats</h2>
      <p style={{ textDecoration: "underline", marginBottom: "10px" }}>
        Counters only count for this session
      </p>
      {children}
    </div>
  );
}
