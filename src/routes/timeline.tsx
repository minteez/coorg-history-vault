import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Filter, X } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Prose";
import { EvidenceBadge, type EvidenceLevel } from "@/components/site/EvidenceBadge";
import { SourceRefs } from "@/components/site/SourceRefs";
import { allTags, eraMeta, eraOrder, timelineSorted, type Era } from "@/data/timeline";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Interactive Timeline of Kodagu History — Coorg Archive" },
      {
        name: "description",
        content:
          "A filterable timeline of Kodagu (Coorg) history from Iron Age megaliths to the 1956 merger, with sources and evidence labels on every event.",
      },
      { property: "og:title", content: "Interactive Timeline of Kodagu History" },
      {
        property: "og:description",
        content: "Filter Coorg history by era, theme and kind of evidence.",
      },
    ],
  }),
  component: TimelinePage,
});

const levels: EvidenceLevel[] = [
  "documented",
  "scholarly",
  "colonial",
  "traditional",
  "community",
  "disputed",
  "uncertain",
];

function TimelinePage() {
  const [era, setEra] = useState<Era | "all">("all");
  const [tag, setTag] = useState<string | "all">("all");
  const [level, setLevel] = useState<EvidenceLevel | "all">("all");
  const [query, setQuery] = useState("");

  const events = useMemo(
    () =>
      timelineSorted.filter((e) => {
        if (era !== "all" && e.era !== era) return false;
        if (tag !== "all" && !e.tags.includes(tag)) return false;
        if (level !== "all" && e.level !== level) return false;
        if (query.trim()) {
          const haystack = `${e.date} ${e.title} ${e.summary} ${e.detail ?? ""} ${e.tags.join(" ")}`.toLowerCase();
          if (!haystack.includes(query.trim().toLowerCase())) return false;
        }
        return true;
      }),
    [era, tag, level, query],
  );

  const active = era !== "all" || tag !== "all" || level !== "all" || query.trim() !== "";

  return (
    <main id="main">
      <PageHeader
        eyebrow="History"
        title="An interactive timeline of Kodagu"
        native="ಕೊಡಗಿನ ಇತಿಹಾಸ"
        lede="Every entry states the kind of evidence it rests on and links to the works it comes from. Where dates are disputed, the disagreement is shown rather than smoothed over."
      />

      <Section className="!py-10">
        <div className="archive-card p-5">
          <div className="flex items-center gap-2">
            <Filter aria-hidden="true" className="size-4 text-accent" />
            <h2 className="text-base font-semibold">Filter</h2>
            {active ? (
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto gap-1.5"
                onClick={() => {
                  setEra("all");
                  setTag("all");
                  setLevel("all");
                  setQuery("");
                }}
              >
                <X aria-hidden="true" className="size-3.5" />
                Clear
              </Button>
            ) : null}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="block text-sm">
              <span className="rule-eyebrow">Search</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Madikeri, coffee, Cariappa"
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <label className="block text-sm">
              <span className="rule-eyebrow">Kind of evidence</span>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as EvidenceLevel | "all")}
                className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="all">All evidence types</option>
                {levels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="rule-eyebrow">Era</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              <FilterChip active={era === "all"} onClick={() => setEra("all")}>
                All eras
              </FilterChip>
              {eraOrder.map((e) => (
                <FilterChip key={e} active={era === e} onClick={() => setEra(e)}>
                  {eraMeta[e].label}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="rule-eyebrow">Theme</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              <FilterChip active={tag === "all"} onClick={() => setTag("all")}>
                All themes
              </FilterChip>
              {allTags.map((t) => (
                <FilterChip key={t} active={tag === t} onClick={() => setTag(t)}>
                  {t}
                </FilterChip>
              ))}
            </div>
          </fieldset>
        </div>

        <p aria-live="polite" className="mt-5 text-sm text-muted-foreground">
          Showing {events.length} of {timelineSorted.length} events.
        </p>

        <ol className="mt-8 space-y-6 border-l border-border pl-5 sm:pl-8">
          {events.map((event) => (
            <li key={event.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-2 size-3 rounded-full border-2 border-accent bg-background sm:-left-[2.4rem]"
              />
              <article className="archive-card p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-display text-sm tracking-wide text-accent">{event.date}</p>
                  <EvidenceBadge level={event.level} showHint />
                  <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {eraMeta[event.era].label}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl">{event.title}</h3>
                <p className="prose-archive mt-3 text-muted-foreground">{event.summary}</p>
                {event.detail ? <p className="prose-archive mt-3 text-sm">{event.detail}</p> : null}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {event.route ? (
                  <Link
                    to={event.route}
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Read the full chapter
                  </Link>
                ) : null}
                <SourceRefs ids={event.sourceIds} className="mt-4" />
              </article>
            </li>
          ))}
        </ol>

        {events.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            No events match these filters. Try clearing them.
          </p>
        ) : null}
      </Section>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
