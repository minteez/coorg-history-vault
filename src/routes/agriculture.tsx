import { createFileRoute } from "@tanstack/react-router";
import coffeeImg from "@/assets/coffee-estate.jpg";
import { ArchiveFigure, InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { EraEvents } from "@/components/site/EraEvents";

export const Route = createFileRoute("/agriculture")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Agriculture in Kodagu — Coorg History Archive" },
      {
        name: "description",
        content:
          "Paddy in the valleys, coffee on the slopes, pepper on the shade trees and cardamom in the forest: how Kodagu's crops shaped its land, labour and law.",
      },
      { property: "og:title", content: "Agriculture in Kodagu" },
      {
        property: "og:description",
        content: "Paddy, coffee, pepper and cardamom — the making of Kodagu's landscape.",
      },
    ],
  }),
  component: AgriculturePage,
});

const crops = [
  {
    name: "Paddy",
    level: "documented" as const,
    body: "Wet rice in the valley bottoms was the food crop and the basis of Kodava land tenure and social standing. The agricultural year — transplanting, ripening, first harvest — still sets the dates of the two household festivals.",
    ids: ["richter-gazetteer", "karnataka-gazetteer-kodagu"],
  },
  {
    name: "Coffee",
    level: "documented" as const,
    body: "Grown under shade trees on the slopes. Planting expanded rapidly from about the 1850s under British administration, first by European planters and then widely by Kodava landowners; Kodagu remains one of India's leading coffee districts.",
    ids: ["coffee-board", "imperial-gazetteer-coorg"],
  },
  {
    name: "Black pepper",
    level: "documented" as const,
    body: "Trained up the shade trees of the coffee plantations, giving two harvests from the same ground and a second cash income keyed to a different market.",
    ids: ["coffee-board", "kushalappa"],
  },
  {
    name: "Cardamom",
    level: "documented" as const,
    body: "Grown in the wetter, higher forest margins. Historically a forest-collected and then cultivated spice, and one of the reasons the lowland trade routes mattered to the Haleri kingdom.",
    ids: ["karnataka-gazetteer-kodagu", "imperial-gazetteer-coorg"],
  },
  {
    name: "Oranges, honey and forest produce",
    level: "documented" as const,
    body: "Coorg mandarin, wild honey, timber and minor forest produce filled out the district's economy and its export lists in the colonial gazetteers.",
    ids: ["imperial-gazetteer-coorg", "kodagu-district-portal"],
  },
  {
    name: "Shade, groves and cattle",
    level: "scholarly" as const,
    body: "Because coffee is grown under native trees and villages retained sacred groves, Kodagu kept far more tree cover than most plantation districts — a pattern studied as an agroforestry system rather than simply as farming.",
    ids: ["kushalappa"],
  },
];

function AgriculturePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Culture"
        title="Agriculture"
        lede="Kodagu's history is legible in its fields. Rice made the social order; coffee, pepper and cardamom tied a highland district to distant markets and brought labour, roads and law with them."
      />

      <Section
        eyebrow="Land"
        title="Two landscapes, one holding"
        level="documented"
        lede="A typical holding combined valley paddy with slope plantation — subsistence and cash on the same title."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="prose-archive space-y-4 text-muted-foreground">
            <p>
              Under the Haleri rajas and then the British, land in Kodagu was held under distinctive
              tenures that tied families to particular valleys. Rice fields could not easily be
              enlarged; plantations could, and the nineteenth-century expansion of coffee therefore
              pushed into forest rather than replacing paddy.
            </p>
            <p>
              That expansion brought migrant labour into the district, reorganised the forest
              administration, and made Kodagu's prosperity dependent on commodity prices set in
              Europe. Its consequences — labour settlements, reserved forest, plantation
              smallholdings — are visible in the district today.
            </p>
            <SourceRefs ids={["richter-gazetteer", "imperial-gazetteer-coorg", "coffee-board", "kushalappa"]} />
          </div>
          <ArchiveFigure
            src={coffeeImg}
            alt="Rows of coffee bushes growing in the shade of tall trees on a slope"
            caption="Coffee under shade trees, with pepper vines trained up the trunks."
            credit="Commissioned illustration for this project."
            note="Illustrative image, not a historical photograph."
          />
        </div>
      </Section>

      <Section eyebrow="Crops" title="What Kodagu grows" className="border-y border-border bg-secondary/40">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {crops.map((c) => (
            <li key={c.name} className="archive-card p-6">
              <EvidenceBadge level={c.level} showHint />
              <h3 className="mt-3 text-lg">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <SourceRefs ids={c.ids} className="mt-4" />
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Note" title="Figures change">
        <InfoPanel title="Production statistics" tone="caution">
          <p>
            Area and yield figures for coffee and pepper move year to year with rainfall, price and
            replanting. This archive avoids quoting a single tonnage as though it were a historical
            fact; the Coffee Board and district statistics are the place to check the current number.
          </p>
        </InfoPanel>
      </Section>

      <Section eyebrow="Chronology" title="Agricultural turning points" className="border-t border-border">
        <EraEvents tag="agriculture" />
      </Section>
    </main>
  );
}
