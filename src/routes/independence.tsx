import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { EraEvents } from "@/components/site/EraEvents";
import { SourceRefs } from "@/components/site/SourceRefs";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { figures } from "@/data/figures";

export const Route = createFileRoute("/independence")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Independence & Coorg State, 1947–1956 — Coorg History Archive" },
      {
        name: "description",
        content:
          "Coorg after 1947: a Part C State with its own legislature and chief minister from 1950, merged into Mysore State in 1956 and renamed Kodagu in 1973.",
      },
      { property: "og:title", content: "Independence and Coorg State" },
      {
        property: "og:description",
        content: "From Part C State to district: Kodagu's constitutional history after 1947.",
      },
    ],
  }),
  component: IndependencePage,
});

function IndependencePage() {
  const poonacha = figures.find((f) => f.id === "poonacha");
  return (
    <main id="main">
      <PageHeader
        eyebrow="Chapter six"
        title="Independence and Coorg State"
        lede="For six years after the Constitution came into force, Coorg was a state of the Indian Union in its own right — one of the smallest — before being merged into Mysore in the reorganisation of 1956."
      />

      <Section
        eyebrow="1950"
        title="A Part C State"
        level="documented"
        lede="The Constitution of 1950 classified Coorg as a Part C State, administered by a Chief Commissioner with an elected legislative council and a council of ministers."
      >
        <div className="prose-archive max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Elections were held for a small legislature, and C. M. Poonacha headed the government as
            chief minister. The state's revenue came largely from coffee and forest; its
            administrative machinery was inherited almost intact from the colonial province.
          </p>
          <p>
            Coorg's leaders were divided over its future. One current argued that a district of this
            size could not sustain statehood; another held that separate status protected a distinct
            language and land tenure. Both arguments were made in public and both are documented — the
            question of what Kodagu lost or gained in 1956 remains a live political argument rather
            than a settled historical judgement.
          </p>
          <SourceRefs ids={["constitution-1950", "poonacha-wiki", "hindu-kodagu-assembly"]} />
        </div>
      </Section>

      <Section
        eyebrow="1956"
        title="The States Reorganisation Act"
        className="border-y border-border bg-secondary/40"
        level="documented"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="What the Act did" tone="neutral">
            <p>
              The States Reorganisation Act, 1956 redrew India's map on largely linguistic lines.
              Coorg State was abolished and its territory became Coorg district of the enlarged
              Mysore State — Karnataka from 1973, the same year the district's own name, Kodagu,
              replaced the anglicised Coorg in official use.
            </p>
          </InfoPanel>
          <InfoPanel title="Afterwards" tone="forest">
            <p>
              Kodagu today is a district of Karnataka with two revenue subdivisions and its
              headquarters at Madikeri. Kodava Takk is not a scheduled language, and campaigns for
              statehood, autonomy or greater recognition of the language recur; this archive records
              them as ongoing claims, not outcomes.
            </p>
          </InfoPanel>
        </div>
        <SourceRefs
          ids={["sra-1956", "mysore-name-change-1973", "hindu-reorganisation", "census-2011-kodagu"]}
          className="mt-6"
        />
      </Section>

      {poonacha ? (
        <Section eyebrow="Figure" title="The chief minister of a state that lasted six years">
          <div className="archive-card max-w-2xl p-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="rule-eyebrow">{poonacha.dates}</p>
              <EvidenceBadge level={poonacha.level} showHint />
            </div>
            <h3 className="mt-2 text-xl">{poonacha.name}</h3>
            <p className="mt-1 text-sm font-semibold text-primary">{poonacha.role}</p>
            <p className="mt-2 text-sm text-muted-foreground">{poonacha.bio}</p>
            <SourceRefs ids={poonacha.sourceIds} className="mt-4" />
          </div>
          <p className="mt-6 text-sm">
            <Link to="/figures" className="font-semibold text-primary hover:underline">
              All historical figures
            </Link>
          </p>
        </Section>
      ) : null}

      <Section eyebrow="Chronology" title="Events after 1947" className="border-t border-border">
        <EraEvents era="modern" />
      </Section>
    </main>
  );
}
