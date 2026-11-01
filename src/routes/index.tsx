import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Landmark, Languages, Users } from "lucide-react";
import heroImg from "@/assets/hero-kodagu-hills.jpg";
import archiveImg from "@/assets/archive-books.jpg";
import fortImg from "@/assets/madikeri-fort.jpg";
import { ArchiveFigure, InfoPanel, Section } from "@/components/site/Prose";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { eraMeta, eraOrder, timelineSorted } from "@/data/timeline";
import { sources } from "@/data/sources";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "The Complete History of Coorg — A Cited Archive of Kodagu" },
      {
        name: "description",
        content:
          "Explore the history of Kodagu (Coorg) — megaliths, the Haleri kingdom, the Mysore conflicts, the 1834 Coorg War, British rule, Coorg State and Kodava culture — with every claim sourced.",
      },
      { property: "og:title", content: "The Complete History of Coorg" },
      {
        property: "og:description",
        content:
          "A researched digital archive of Kodagu: timeline, historical atlas, Kodava culture and language, with cited sources and evidence labels.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Landmark,
    title: "History",
    blurb: "From Iron Age megaliths to the 1956 merger, era by era.",
    to: "/timeline",
    cta: "Open the timeline",
  },
  {
    icon: Compass,
    title: "Historical atlas",
    blurb: "Forts, temples, battle sites and settlements, mapped.",
    to: "/map",
    cta: "Open the map",
  },
  {
    icon: Users,
    title: "Kodava culture",
    blurb: "Okka and ainmane, ancestor veneration, festivals, land.",
    to: "/people",
    cta: "Meet the community",
  },
  {
    icon: Languages,
    title: "Kodava Takk",
    blurb: "A Dravidian language, its documentation and literature.",
    to: "/language",
    cta: "Read about the language",
  },
];

function Home() {
  const highlights = timelineSorted.filter((e) =>
    ["madikeri-founded", "coorg-war-1834", "pattole-palame", "coorg-state"].some((id) =>
      e.id.includes(id),
    ),
  );
  const featured = (highlights.length >= 3 ? highlights : timelineSorted).slice(0, 4);

  return (
    <main id="main">
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt="Mist over the forested ridges and valleys of Kodagu in the Western Ghats"
          className="absolute inset-0 size-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/70 to-forest-deep/95" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-parchment sm:py-32">
          <p className="text-xs tracking-[0.24em] text-accent">KODAGU • COORG • ಕೊಡಗು</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl">
            The Complete History of Coorg
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-parchment/85">
            A digital archive of Kodagu — a small highland country in the Western Ghats with its own
            dynasty, language, martial tradition and contested past. Every claim here is labelled by
            the kind of evidence behind it, and every page cites its sources.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Explore the timeline
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              to="/map"
              className="inline-flex items-center gap-2 rounded-md border border-parchment/35 px-5 py-3 text-sm font-semibold text-parchment transition-colors hover:border-accent hover:text-accent"
            >
              Open the historical atlas
            </Link>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-parchment/20 pt-8 sm:grid-cols-4">
            <div>
              <dt className="text-xs tracking-[0.16em] text-parchment/60">EVENTS</dt>
              <dd className="font-display text-2xl">{timelineSorted.length}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-parchment/60">SOURCES</dt>
              <dd className="font-display text-2xl">{sources.length}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-parchment/60">ERAS</dt>
              <dd className="font-display text-2xl">{eraOrder.length}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-parchment/60">SPAN</dt>
              <dd className="font-display text-2xl">3000 BCE –</dd>
            </div>
          </dl>
        </div>
      </section>

      <Section
        eyebrow="Where to begin"
        title="Four ways into Kodagu"
        lede="The archive is organised as a museum would be: chronology, geography, community and language."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, blurb, to, cta }) => (
            <Link key={title} to={to} className="archive-card group flex flex-col p-6">
              <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {cta}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Chronology"
        title="Seven eras"
        lede="Kodagu's past is usually told in these stretches. The timeline lets you filter within and across them."
        className="border-y border-border bg-secondary/40"
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eraOrder.map((era) => (
            <li key={era} className="archive-card p-5">
              <p className="rule-eyebrow">{eraMeta[era].span}</p>
              <h3 className="mt-2 text-lg">{eraMeta[era].label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{eraMeta[era].blurb}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Turning points" title="Moments worth knowing first">
        <ul className="grid gap-5 md:grid-cols-2">
          {featured.map((event) => (
            <li key={event.id} className="archive-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="rule-eyebrow">{event.date}</p>
                <EvidenceBadge level={event.level} showHint />
              </div>
              <h3 className="mt-3 text-xl">{event.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{event.summary}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See all {timelineSorted.length} events
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Method"
        title="History, tradition and the difference between them"
        className="border-t border-border"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <InfoPanel title="Every claim is labelled">
              <p>
                Much of what circulates about Coorg blends documented record, colonial reportage and
                cherished tradition. This archive keeps them apart with a visible label on each
                claim, and tells you when historians disagree.
              </p>
            </InfoPanel>
            <InfoPanel title="Sources are visible, not hidden" tone="forest">
              <p>
                Pages carry their references inline and the full bibliography lists every book,
                gazetteer, statute, census table and study used, with notes on reliability.
              </p>
            </InfoPanel>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/evidence"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                How evidence is weighed
              </Link>
              <Link
                to="/sources"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
              >
                Bibliography
              </Link>
            </div>
          </div>
          <div className="grid gap-5">
            <ArchiveFigure
              src={archiveImg}
              alt="Old books, manuscripts and papers stacked on a desk"
              caption="The archive rests on printed and archival sources, from 19th-century accounts to modern scholarship."
              credit="Commissioned illustration for this project."
              note="Illustrative image, not a historical photograph."
            />
            <ArchiveFigure
              src={fortImg}
              alt="Stone ramparts of Madikeri Fort under a bright sky"
              caption="Madikeri, the Haleri capital, and its much-rebuilt fort."
              credit="Commissioned illustration for this project."
              note="Illustrative image, not a historical photograph."
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
