import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Globe, Mountain } from "lucide-react";

const explore = [
  { label: "Timeline", to: "/timeline" },
  { label: "Historical Atlas", to: "/map" },
  { label: "Culture", to: "/culture" },
  { label: "Kodava Language", to: "/language" },
  { label: "Historical Figures", to: "/figures" },
  { label: "Glossary", to: "/glossary" },
  { label: "Sources", to: "/sources" },
];

const project = [
  { label: "About", to: "/about" },
  { label: "Developer", to: "/about", hash: "developer" },
  { label: "Evidence Guide", to: "/evidence" },
  { label: "Sources", to: "/sources" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/sudo.minteez", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@thecubermint", icon: Youtube },
  { label: "Portfolio", href: "https://minteez.lovable.app", icon: Globe },
];

const siteVersion = "1.0.0";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-forest-deep text-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-md bg-accent text-accent-foreground">
              <Mountain aria-hidden="true" className="size-4.5" />
            </span>
            <p className="font-display text-lg leading-tight">The Complete History of Coorg</p>
          </div>
          <p className="mt-4 text-sm text-parchment/70">
            An independent digital historical archive of Kodagu — its history, people, culture and
            language — built with cited sources and clearly labelled evidence.
          </p>
          <p className="mt-4 text-sm tracking-[0.14em] text-accent">Kodagu • Coorg • ಕೊಡಗು</p>
        </div>

        <nav aria-label="Explore">
          <h2 className="font-display text-base">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {explore.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-parchment/75 underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Project">
          <h2 className="font-display text-base">Project</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {project.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...(item.hash ? { hash: item.hash } : {})}
                  className="text-parchment/75 underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base">Minteez</h2>
          <p className="mt-4 text-sm text-parchment/70">
            Created by Minteez, a developer from Coorg, as a digital archive dedicated to his
            homeland.
          </p>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-md border border-parchment/25 text-parchment/85 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon aria-hidden="true" className="size-4.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-parchment/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-parchment/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 Minteez. All Rights Reserved.</p>
          <p>Designed and engineered by Minteez with Lovable.</p>
          <p>Version {siteVersion} • Build 2026</p>
        </div>
      </div>
    </footer>
  );
}
