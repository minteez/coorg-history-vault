import { createFileRoute, Link } from "@tanstack/react-router";
import coffeeImg from "@/assets/coffee-estate.jpg";
import { ArchiveFigure, InfoPanel, PageHeader, Pullquote, Section } from "@/components/site/Prose";
import { EraEvents } from "@/components/site/EraEvents";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/british")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "British Kodagu, 1834–1947 — Coorg History Archive" },
      {
        name: "description",
        content:
          "Coorg under Company and Crown rule: administration from Mercara, the coffee economy, roads and labour, and the records the period left behind.",
      },
      { property: "og:title", content: "British Kodagu, 1834–1947" },
      {
        property: "og:description",
        content: "Administration, coffee, labour and the colonial archive of Coorg.",
      },
    ],
  }),
  component: BritishPage,
});

function BritishPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Chapter five"
        title="British Kodagu"
        lede="After 1834 Coorg was governed as a small non-regulation province, first under the East India Company and then directly under the Crown. Its size was modest; the paperwork it generated was not, and much of what can be said about the nineteenth century comes from it."
      />

      <Section
        eyebrow="Administration"
        title="A province run from Mercara"
        level="documented"
        lede="Coorg was administered as a separate charge, at times attached to Mysore, with a Commissioner or Chief Commissioner seated in Mercara — the anglicised Madikeri."
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="prose-archive space-y-4 text-muted-foreground">
            <p>
              Existing structures were kept where they were useful. Nad and village headmen
              continued to collect revenue and settle small disputes, now answerable to a district
              officer rather than a raja. Kodava landholding was recognised in a distinctive form of
              tenure, and the community's right to carry arms was allowed to continue — a privilege
              later confirmed by exemption under Indian arms legislation.
            </p>
            <p>
              The 1837 rising in Amara Sullia showed how thin the new authority was in the western
              lowlands. It was suppressed, and afterwards the administration concentrated on roads,
              survey, forest reservation and revenue settlement, which together opened the highlands
              to planters.
            </p>
            <SourceRefs
              ids={["richter-gazetteer", "imperial-gazetteer-coorg", "amara-sullia-wiki", "karnataka-gazetteer-kodagu"]}
            />
          </div>
          <ArchiveFigure
            src={coffeeImg}
            alt="Rows of coffee bushes growing in the shade of tall trees on a slope"
            caption="Shade-grown coffee, the crop that reorganised Kodagu's land and labour."
            credit="Commissioned illustration for this project."
            note="Illustrative image, not a historical photograph."
          />
        </div>
      </Section>

      <Section
        eyebrow="Economy"
        title="Coffee, and what it changed"
        className="border-y border-border bg-secondary/40"
        level="documented"
      >
        <div className="prose-archive max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Coffee had been grown in the region before the annexation, but from roughly the 1850s
            European planters and then Kodava landowners expanded it rapidly. Forest was converted to
            shade plantation, migrant labour arrived from the plains and from Malabar, and Kodagu's
            fortunes became tied to a commodity price set elsewhere.
          </p>
          <p>
            Paddy remained the food crop and the social anchor; coffee, pepper and cardamom became
            the cash. Kodagu is still one of India's principal coffee districts, which is why the
            nineteenth-century plantation map is legible on the ground today.
          </p>
          <SourceRefs ids={["coffee-board", "imperial-gazetteer-coorg", "kushalappa"]} />
        </div>
      </Section>

      <Section eyebrow="Reading the record" title="Useful, and not neutral" level="colonial">
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="Where the detail comes from" tone="neutral">
            <p>
              Richter's <cite>Gazetteer of Coorg</cite> (1870), the <cite>Imperial Gazetteer</cite>
              {" "}article, revenue settlements and census tables are the densest sources for the
              period. Without them there would be far less to say.
            </p>
          </InfoPanel>
          <InfoPanel title="What they leave out" tone="caution">
            <p>
              These documents were written to govern. Plantation labourers, tenants and
              non-landholding communities appear mostly as numbers, and the justification for the
              1834 annexation is repeated in them as settled fact. This archive marks such passages
              as colonial accounts rather than plain history.
            </p>
          </InfoPanel>
        </div>
        <Pullquote cite="How this archive labels its evidence">
          A source can be the best we have and still be an interested party.
        </Pullquote>
        <p className="mt-6 text-sm">
          <Link to="/evidence" className="font-semibold text-primary hover:underline">
            How evidence is weighed here
          </Link>
        </p>
      </Section>

      <Section eyebrow="Chronology" title="Events under British rule" className="border-t border-border">
        <EraEvents era="british" />
      </Section>
    </main>
  );
}
