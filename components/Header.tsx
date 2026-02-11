import Link from "next/link";

const REGISTER_URL = "https://tally.so/r/WO5oMk";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap">
          <span className="logo-mark" />
          <span className="logo">Coefficient</span>
        </Link>
        <nav className="nav">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#why-this-matters">Why this matters</Link>
          <Link href="/#coming-soon">Coming soon</Link>
          <a href={REGISTER_URL} className="nav-cta">
            Register your interest
          </a>
        </nav>
      </div>
    </header>
  );
}
