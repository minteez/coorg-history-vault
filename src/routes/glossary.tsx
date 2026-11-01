import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";
import { glossary, glossaryCategories } from "@/data/glossary";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Glossary of Kodagu & Kodava Terms — Coorg History Archive" },
      {
        name: "description",
        content:
          "Kodava and Kodagu terms explained: okka, ainmane, kaimada, Karana, nad, jamma tenure, Kodava Takk and more, each with sources.",
      },
      { property: "og:title", content: "Glossary of Kodagu & Kodava terms" },
      {
        property: "og:description",
        content: "A sourced glossary of the words used across this archive of Kodagu history.",
      },
    ],
  }),
  component: GlossaryPage,
});

const categoryLabels: Record<(typeof glossaryCategories)[number], string> = {
  society: "Society & kinship",
  land: "Land & settlement",
  religion: "Religion & ritual",
  language: "Language",
  history: "History & administration",
  food: "Food & dress",
};

function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | (typeof glossaryCategories)[number]>("all");

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((t) => (category === "all" ? true : t.category === category))
      .filter(
        (t) =>
          !q ||
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          (t.native ?? "").includes(query.trim()),
      )
      .slice()
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [query, category]);

  return (
    <main id="main">
      <PageHeader
        eyebrow="Reference"
        title="Glossary"
        lede="Kodava and Kodagu words used throughout this archive, defined plainly and attributed. Where a term carries a contested or ceremonial meaning, that is said rather than smoothed over."
      />

      <Section title={`${glossary.length} terms`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="relative flex-1 md:max-w-sm">
            <span className="sr-only">Search terms</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a term or definition"
              className="w-full rounded-md border border-border bg-background py-2.5 pl-9 pr-3 text-sm"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {(["all", ...glossaryCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold",
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:bg-secondary",
                )}
              >
                {c === "all" ? "All" : categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>

        {terms.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            No terms match that search. Try a shorter word.
          </p>
        ) : (
          <dl className="mt-8 grid gap-5 md:grid-cols-2">
            {terms.map((t) => (
              <div key={t.term} className="archive-card p-6">
                <p className="rule-eyebrow">{categoryLabels[t.category]}</p>
                <dt className="mt-2 font-display text-xl">
                  {t.term}
                  {t.native ? (
                    <span className="ml-2 text-base text-muted-foreground">{t.native}</span>
                  ) : null}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{t.definition}</dd>
                <SourceRefs ids={t.sourceIds} className="mt-4" />
              </div>
            ))}
          </dl>
        )}
      </Section>
    </main>
  );
}
