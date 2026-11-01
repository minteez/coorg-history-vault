import { createFileRoute, Link } from "@tanstack/react-router";
import fortImg from "@/assets/madikeri-fort.jpg";
import { ArchiveFigure, InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { EraEvents } from "@/components/site/EraEvents";
import { SourceRefs } from "@/components/site/SourceRefs";
import { figuresByField } from "@/data/figures";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";

export const Route = createFileRoute("/haleri")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "The Haleri Dynasty & Kingdom of Coorg — Coorg History Archive" },
      {
        name: "description",
        content:
          "The Haleri rajas ruled Kodagu from the 17th century until the British annexation of 1834: founding, capital at Madikeri, rulers, and the dates historians dispute.",
      },
      { property: "og:title", content: "The Haleri dynasty" },
      {
        property: "og:description",
        content: "The Kingdom of Coorg under the Haleri rajas, from the 1600s to 1834.",
      },
    ],
  }),
  component: HaleriPage,
});

function HaleriPage() {
  const rulers = figuresByField("haleri");
  return (
    <main id="main">
      <PageHeader
        eyebrow="Chapter two"
        title="The Haleri dynasty"
        lede="For roughly two centuries Kodagu was a kingdom in its own right, ruled by a line of Lingayat rajas usually said to have come from Ikkeri and taken their name from the village of Haleri."
      />

      <Section
        eyebrow="Origins"
        title="A borrowed name and a contested date"
        level="uncertain"
        lede="The dynasty's foundation is conventionally placed in the sixteenth or early seventeenth century, but the sources disagree, and the earliest reigns are known mainly through later compilations."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="prose-archive space-y-4 text-muted-foreground">
            <p>
              The rajas are generally described as a branch of the Keladi–Ikkeri house who
              established themselves at Haleri and gradually brought the nads — the country's
              territorial divisions — under a single authority. Rule was never absolute: the okkas
              and their headmen retained considerable local standing, and the kingdom governed
              through them rather than over them.
            </p>
            <p>
              Under Mudduraja the seat moved to a new settlement that became Madikeri, fortified and
              refortified over the following century. Later rulers extended control toward the
              lowland frontiers, which is where friction with Mysore began.
            </p>
            <SourceRefs
              ids={["richter-gazetteer", "kingdom-coorg-wiki", "kodavaclan-rulers", "madikeri-wiki"]}
            />
          </div>
          <ArchiveFigure
            src={fortImg}
            alt="Stone ramparts and gateway of a hill fort under a bright sky"
            caption="Madikeri, the Haleri capital, and its much-rebuilt fort."
            credit="Commissioned illustration for this project."
            note="Illustrative image, not a historical photograph."
          />
        </div>
      </Section>

      <Section
        eyebrow="Caution"
        title="Why the regnal lists differ"
        className="border-y border-border bg-secondary/40"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="Two kinds of list" tone="caution">
            <p>
              The 19th-century gazetteers built their king-lists from palace records, oral testimony
              and Company correspondence gathered after the conquest. Community compilations draw on
              family memory and temple records. Where the two disagree — and for the earlier reigns
              they often do by a decade or more — this archive gives the range instead of choosing.
            </p>
          </InfoPanel>
          <InfoPanel title="Reading the last reign" tone="forest">
            <p>
              Almost everything written about Chikka Vira Rajendra comes from officials who wanted
              him removed. His deposition may still have been popular in parts of the country; the
              point is that the evidence is not neutral.
            </p>
          </InfoPanel>
        </div>
      </Section>

      <Section eyebrow="Rulers" title="Figures of the Haleri house">
        <ul className="grid gap-5 md:grid-cols-2">
          {rulers.map((f) => (
            <li key={f.id} className="archive-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="rule-eyebrow">{f.dates}</p>
                <EvidenceBadge level={f.level} showHint />
              </div>
              <h3 className="mt-2 text-xl">{f.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.bio}</p>
              <SourceRefs ids={f.sourceIds} className="mt-4" />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link to="/figures" className="font-semibold text-primary hover:underline">
            See all historical figures
          </Link>
        </p>
      </Section>

      <Section eyebrow="Chronology" title="Events under the Haleri rajas" className="border-t border-border">
        <EraEvents era="haleri" />
      </Section>
    </main>
  );
}
