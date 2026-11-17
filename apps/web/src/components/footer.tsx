import Link from "next/link";
import { Mark } from "@commerce/ui";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="wordmark" href="/">
            <Mark />
            {process.env.NEXT_PUBLIC_BRAND_NAME ?? "GEREZ"}
          </Link>
          <p className="muted" style={{ maxWidth: 270, fontSize: 12 }}>
            Gear built for granite, rain and wind.
            <br />
            Designed with the Serra do Gerês in mind.
          </p>
        </div>
        <nav className="footer-links" aria-label="Shop">
          <span className="eyebrow">Explore</span>
          <Link href="/catalog">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/account">Your account</Link>
        </nav>
        <nav className="footer-links" aria-label="Customer care">
          <span className="eyebrow">Customer care</span>
          <Link href="/policies/delivery">Delivery & returns</Link>
          <Link href="/policies/privacy">Privacy</Link>
          <Link href="/policies/terms">Terms of service</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()}{" "}
          {process.env.NEXT_PUBLIC_BRAND_NAME ?? "GEREZ"}
        </span>
        <span>Prices in EUR · Secure checkout with Stripe</span>
      </div>
    </footer>
  );
}
