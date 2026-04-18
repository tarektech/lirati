"use client";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { TICKER_DATA } from "@/lib/demo-data";

export function SiteTicker() {
  return (
    <section className="ticker ticker--slider p-0" aria-hidden>
      <InfiniteSlider className="ticker-slider" gap={48}>
        {TICKER_DATA.map((item) => (
          <span key={item.code} className="ticker-item">
            <span>{item.flag}</span>
            <span className="code">{item.code}</span>
            <span>{item.val}</span>
            <span className="sep" />
            <span className={item.up ? "chg-up" : "chg-dn"}>
              {item.up ? "▲" : "▼"} {item.chg}
            </span>
          </span>
        ))}
      </InfiniteSlider>
    </section>
  );
}
