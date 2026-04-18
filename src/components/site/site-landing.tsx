"use client";

import { SiteConverter } from "./site-converter";
import { SiteDenominations } from "./site-denominations";
import { SiteDownload } from "./site-download";
import { SiteFaq } from "./site-faq";
import { SiteFeatures } from "./site-features";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SiteHero } from "./site-hero";
import { SiteHow } from "./site-how";
import { SiteUseCases } from "./site-use-cases";
import { SiteValidator } from "./site-validator";

export function SiteLanding() {
  return (
    <div className="site">
      <SiteHeader />
      <div className="nav-spacer" aria-hidden />
      <SiteHero />
      <SiteFeatures />
      <SiteConverter />
      <SiteUseCases />
      <SiteValidator />
      <SiteDenominations />
      <SiteHow />
      <SiteFaq />
      <SiteDownload />
      <SiteFooter />
    </div>
  );
}
