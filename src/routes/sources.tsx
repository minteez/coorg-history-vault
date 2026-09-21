import { createFileRoute, Link } from "@tanstack/react-router";
import { sources } from "@/data/sources";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Sources & Bibliography — The Complete History of Coorg" },
      {
        name: "description",
        content:
          "Full bibliography for the Coorg history archive: books, government records, academic studies, linguistic works and image credits.",
      },
      { property: "og:title", content: "Sources & Bibliography — The Complete History of Coorg" },
      {
        property: "og:description",
        content: "Every publication, record and image credit cited in this archive of Kodagu history.",
      },
    ],
  }),
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-5 py-14">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Back to archive home
        </Link>
      </div>
      <p className="rule-eyebrow">Archive</p>
      <h1 className="mt-2 font-display text-4xl">Sources &amp; Bibliography</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Everything cited across this archive, with notes where a source is a colonial-era account,
        a community tradition, or a single-source claim.
      </p>

      <ul className="mt-10 space-y-6">
        {sources.map((source) => (
          <li key={source.id} className="archive-card p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{source.type}</p>
            <h2 className="mt-1 font-display text-lg">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-accent/60 underline-offset-2"
                >
                  {source.title}
                </a>
              ) : (
                source.title
              )}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {source.author}
              {source.publication ? ` — ${source.publication}` : ""}
              {source.year ? `, ${source.year}` : ""}
            </p>
            {source.note ? <p className="mt-2 text-sm">{source.note}</p> : null}
            {source.sectionsReferenced.length > 0 ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Referenced in: {source.sectionsReferenced.join(", ")}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
