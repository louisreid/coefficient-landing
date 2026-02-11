"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-wrap">
          <span className="logo-mark" />
          <span className="logo">Coefficient</span>
        </Link>
        <button
          type="button"
          className="header-burger"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header-burger-bar" />
          <span className="header-burger-bar" />
          <span className="header-burger-bar" />
        </button>
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <Link href="/#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </Link>
          <Link href="/#why-this-matters" onClick={() => setMenuOpen(false)}>
            Why this matters
          </Link>
          <Link href="/#coming-soon" onClick={() => setMenuOpen(false)}>
            Coming soon
          </Link>
        </nav>
      </div>
    </header>
  );
}
