import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { figures, figureFieldLabels, type FigureField } from "@/data/figures";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/figures")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Historical Figures of Kodagu — Coorg History Archive" },
      {
        name: "description",
        content:
          "Rulers, soldiers, writers and scholars connected with Kodagu — from the Haleri rajas to Field Marshal Cariappa — each entry with its evidence level and sources.",
      },
      { property: "og:title", content: "Historical figures of Kodagu" },
      {
        property: "og:description",
        content:
          "A sourced who's who of Kodagu: Haleri rulers, military leaders, politicians, poets and documenters.",
      },
    ],
  }),
  component: FiguresPage,
});

const fields = Object.keys(figureFieldLabels) as FigureField[];

function FiguresPage() {
  const [field, setField] = useState<"all" | FigureField>("all");
  const shown = useMemo(
    () => (field === "all" ? figures : figures.filter((f) => f.field === field)),
    [field],
  );

  return (
    <main id="main">
      <PageHeader
        eyebrow="Archive"
        title="Historical figures"
        lede="People whose lives are documented in the record of Kodagu — rulers of the Haleri house, soldiers, politicians, poets and the scholars who wrote the country down. Dates for the earliest reigns remain uncertain."
      />

      <Section eyebrow="Browse" title={`${shown.length} people`}>
        <div className="mb-8 flex flex-wrap gap-2">
          {(["all", ...fields] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setField(f)}
              aria-pressed={field === f}
              className={cn(
                "rounded-full border border-border px-4 py-1.5 text-sm font-semibold transition-colors",
                field === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {f === "all" ? "All" : figureFieldLabels[f]}
            </button>
          ))}
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {shown.map((f) => (
            <li key={f.id} id={f.id} className="archive-card scroll-mt-24 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="rule-eyebrow">{f.dates}</p>
                <EvidenceBadge level={f.level} showHint />
              </div>
              <h3 className="mt-2 text-xl">{f.name}</h3>
              {f.native ? (
                <p className="mt-1 text-sm text-accent-foreground/80">{f.native}</p>
              ) : null}
              <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.bio}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                {figureFieldLabels[f.field]}
              </p>
              <SourceRefs ids={f.sourceIds} className="mt-4" />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
