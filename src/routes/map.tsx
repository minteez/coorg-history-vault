import { lazy, Suspense, useMemo, useState } from "react";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Prose";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { SourceRefs } from "@/components/site/SourceRefs";
import { places, placeCategoryLabels, type PlaceCategory } from "@/data/places";
import { cn } from "@/lib/utils";

const MapView = lazy(() => import("@/components/site/MapView"));

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Historical Atlas of Kodagu — Coorg History Archive" },
      {
        name: "description",
        content:
          "An interactive map of Kodagu's forts, palaces, temples, battle sites, megalithic sites and plantation country, each entry sourced and labelled by evidence.",
      },
      { property: "og:title", content: "Historical atlas of Kodagu" },
      {
        property: "og:description",
        content: "Forts, palaces, temples and battle sites of Coorg, mapped with citations.",
      },
    ],
  }),
  component: MapPage,
});

const categories = Object.keys(placeCategoryLabels) as PlaceCategory[];

function MapPage() {
  const [active, setActive] = useState<PlaceCategory[]>(categories);

  const visible = useMemo(() => places.filter((p) => active.includes(p.category)), [active]);

  const toggle = (c: PlaceCategory) =>
    setActive((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  return (
    <main id="main">
      <PageHeader
        eyebrow="Historical atlas"
        title="Kodagu, mapped"
        lede="Places that carry the history on this site: the Haleri capital and its fort, forest palaces, sacred sites at the head of the Kaveri, the ground of the 1834 war, the 1837 rebellion country and the coffee belt. Coordinates are approximate where a site covers a wide area."
      />

      <Section title="Layers">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Map layers">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => toggle(c)}
              aria-pressed={active.includes(c)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold",
                active.includes(c)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary",
              )}
            >
              {placeCategoryLabels[c]}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <ClientOnly
            fallback={
              <div className="grid h-[28rem] w-full place-items-center rounded-lg border border-border bg-secondary/40 text-sm text-muted-foreground md:h-[34rem]">
                Loading the map…
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="grid h-[28rem] w-full place-items-center rounded-lg border border-border bg-secondary/40 text-sm text-muted-foreground md:h-[34rem]">
                  Loading the map…
                </div>
              }
            >
              <MapView places={visible} />
            </Suspense>
          </ClientOnly>
          <p className="mt-3 text-xs text-muted-foreground">
            Base map © OpenStreetMap contributors, ODbL. Markers place each site as closely as
            published coordinates allow; broad regions are marked at a representative point.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Gazetteer"
        title={`${visible.length} places`}
        className="border-t border-border"
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {visible.map((p) => (
            <li key={p.id} className="archive-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="rule-eyebrow">{placeCategoryLabels[p.category]}</p>
                <EvidenceBadge level={p.level} showHint />
              </div>
              <h3 className="mt-3 text-xl">
                {p.name}
                {p.native ? (
                  <span className="ml-2 text-base text-muted-foreground">{p.native}</span>
                ) : null}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.period}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <SourceRefs ids={p.sourceIds} className="mt-4" />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            to="/timeline"
            className="inline-flex items-center rounded-md border border-border px-3.5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Back to timeline
          </Link>
        </div>
      </Section>
    </main>
  );
}
