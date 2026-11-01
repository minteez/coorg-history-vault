import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, InfoPanel, Section, Pullquote } from "@/components/site/Prose";
import { EvidenceKey } from "@/components/site/EvidenceBadge";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Myth, Tradition or History? — Coorg Archive Method" },
      {
        name: "description",
        content:
          "How this archive of Kodagu weighs evidence: documented record, colonial accounts, scholarly interpretation, community tradition and disputed claims.",
      },
      { property: "og:title", content: "Myth, Tradition or History?" },
      {
        property: "og:description",
        content: "The evidence labels used across this Coorg history archive, and why they matter.",
      },
    ],
  }),
  component: EvidencePage,
});

function EvidencePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Method"
        title="Myth, tradition or history?"
        lede="Kodagu's past reaches us through very different kinds of testimony. Treating them as interchangeable is how confident errors spread. This page explains the labels used throughout the archive."
      />

      <Section title="The labels">
        <EvidenceKey />
      </Section>

      <Section
        title="Why the distinction matters here"
        className="border-y border-border bg-secondary/40"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoPanel title="Origin narratives">
            <p>
              Accounts tracing Kodava origins to Chandravarma, to Alexander's soldiers, to Scythians
              or to Arab migrants circulate widely. They are traditions and hypotheses of varying
              age and credibility, not established findings, and are labelled accordingly.
            </p>
          </InfoPanel>
          <InfoPanel title="Numbers in colonial sources" tone="caution">
            <p>
              Figures such as the number of Kodavas deported during Tipu Sultan's campaigns come
              largely from later British and missionary writing. The archive reports the range given
              by sources and flags that the totals are contested.
            </p>
          </InfoPanel>
          <InfoPanel title="Dates that don't agree" tone="forest">
            <p>
              Haleri regnal dates differ between gazetteers, dynastic lists and modern studies. Where
              they conflict, the archive gives the competing dates instead of picking one silently.
            </p>
          </InfoPanel>
        </div>

        <div className="mt-10 max-w-3xl">
          <Pullquote cite="Editorial principle of this archive">
            A tradition can be culturally true and historically unverified at the same time. Saying
            so is respect, not scepticism.
          </Pullquote>
        </div>
      </Section>

      <Section title="What you can check">
        <ul className="prose-archive max-w-2xl list-disc space-y-2 pl-5 text-muted-foreground">
          <li>Each page lists the works behind it, with links where the text is freely readable.</li>
          <li>Illustrations here are commissioned artwork, labelled as such, never passed off as photographs of historical events.</li>
          <li>Where a claim rests on a single source, the page says so.</li>
        </ul>
        <div className="mt-8">
          <Link
            to="/sources"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Read the full bibliography
          </Link>
        </div>
      </Section>
    </main>
  );
}
