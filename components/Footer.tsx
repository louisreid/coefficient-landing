import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-mark footer-logo-mark" />
            <span className="footer-logo">Coefficient</span>
          </div>
          <p className="footer-tagline">
            Standardising assessment for the physical world.
          </p>
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <a href="mailto:louisreid@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy.html">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms.html">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Coefficient AI Inc.</p>
        </div>
      </div>
    </footer>
  );
}
