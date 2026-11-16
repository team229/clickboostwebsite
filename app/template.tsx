// A template remounts on every navigation, so each new page fades in.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page">{children}</div>;
}
