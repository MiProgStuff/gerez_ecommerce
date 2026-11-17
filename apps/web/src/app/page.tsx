import Image from "next/image";
import Link from "next/link";
import type { ProductPage } from "@commerce/contracts";
import { serverApi } from "../lib/server";
import { ProductCard } from "../components/product-card";
import { Notice, Empty } from "@commerce/ui";
export const dynamic = "force-dynamic";
export default async function Home() {
  let data: ProductPage | null = null;
  try {
    data = await serverApi<ProductPage>("/products?limit=4");
  } catch {}
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Peneda-Gerês · Est. in granite country</span>
          <h1>
            Built for the mountain.
            <br />
            Made to last.
          </h1>
          <p>
            Technical layers and considered gear, tested against granite,
            rain and wind in Portugal&rsquo;s only national park.
          </p>
          <Link className="button" href="/catalog">
            Shop the collection <span aria-hidden="true">↗</span>
          </Link>
          <span className="eyebrow" style={{ marginTop: 48 }}>
            Repair first. Replace last.
          </span>
        </div>
        <div className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85"
            alt="Sunrise over forested mountain ridgelines"
            fill
            priority
            sizes="(max-width:700px) 100vw,55vw"
          />
          <span className="hero-caption">Serra do Gerês · Portugal</span>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Gear worth carrying</span>
            <h2>The current collection.</h2>
          </div>
          <Link className="text-link" href="/catalog">
            Discover all ↗
          </Link>
        </div>
        {data?.items.length ? (
          <div className="product-grid">
            {data.items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : data ? (
          <Empty title="Our next drop is taking shape.">
            <p>New gear will appear here when the collection is ready.</p>
          </Empty>
        ) : (
          <Notice>
            The collection is temporarily unavailable. Please try again shortly.
          </Notice>
        )}
      </section>
      <section className="editorial">
        <div className="editorial-photo">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85"
            alt="Mist moving through a green Atlantic forest"
            fill
            sizes="(max-width:700px) 100vw,50vw"
          />
        </div>
        <div className="editorial-copy">
          <span className="eyebrow">Wild by nature</span>
          <h2>
            From oak groves
            <br />
            to granite peaks.
          </h2>
          <p>
            Peneda-Gerês shapes everything we make. Durable fabrics and
            repairable construction, built to outlast the trail and the
            seasons that follow.
          </p>
          <Link className="text-link" href="/catalog?category=Outerwear">
            Explore outerwear ↗
          </Link>
        </div>
      </section>
      <section className="container values">
        <div>
          <span className="eyebrow">01 / Built to last</span>
          <p>Fabric and care details for every piece, so gear earns its keep.</p>
        </div>
        <div>
          <span className="eyebrow">02 / True to size</span>
          <p>Compare colour and size before it joins your pack.</p>
        </div>
        <div>
          <span className="eyebrow">03 / Honest checkout</span>
          <p>Verified email sign-in and secure hosted checkout.</p>
        </div>
      </section>
    </>
  );
}
