"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { api } from "@commerce/api-client";
import { Mark } from "@commerce/ui";
export function Header() {
  const cart = useQuery({ queryKey: ["cart"], queryFn: api.cart });
  const count = cart.data?.items.reduce((n, i) => n + i.quantity, 0) ?? 0;
  return (
    <>
      <div className="announcement">
        Built for the Serra do Gerês · Made to outlast the trail
      </div>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Home">
          <Mark />
          {process.env.NEXT_PUBLIC_BRAND_NAME ?? "GEREZ"}
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/catalog">Shop</Link>
          <Link href="/catalog?category=Outerwear">Outerwear</Link>
          <Link href="/collections">Collections</Link>
        </nav>
        <div className="header-actions">
          <Link href="/catalog" aria-label="Search the gear">
            Search
          </Link>
          <Link href="/account">Account</Link>
          <Link href="/cart" aria-label={`Pack, ${count} items`}>
            Pack ({count})
          </Link>
        </div>
      </header>
    </>
  );
}
