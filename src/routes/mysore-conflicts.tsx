import { createFileRoute } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Pullquote, Section } from "@/components/site/Prose";
import { EraEvents } from "@/components/site/EraEvents";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/mysore-conflicts")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Kodagu & the Mysore Conflicts — Coorg History Archive" },
      {
        name: "description",
        content:
          "Hyder Ali's campaigns, the occupation of Kodagu, the captivity narratives of 1785, Tipu Sultan's wars and the Haleri recovery of the 1790s — with the disputed figures marked.",
      },
      { property: "og:title", content: "Kodagu and the Mysore conflicts" },
      {
        property: "og:description",
        content: "Hyder Ali, Tipu Sultan and the wars that nearly ended the Kingdom of Coorg.",
      },
    ],
  }),
  component: MysorePage,
});

function MysorePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Chapter three"
        title="The Mysore conflicts"
        lede="In the second half of the eighteenth century Kodagu was drawn into the wars of Mysore. The kingdom was occupied, its ruling family imprisoned, and its recovery came only through alliance with the English East India Company — the alliance that would later cost it its independence."
      />

      <Section
        eyebrow="Occupation"
        title="Hyder Ali and the loss of the hills"
        lede="Mysore's expansion under Hyder Ali reached the Kodagu frontier in the 1760s and 1770s. Forts changed hands repeatedly; garrisons were installed, expelled and reinstalled."
        level="documented"
      >
        <div className="prose-archive max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Kodagu's value to Mysore was strategic rather than economic: the passes through these
            hills linked the Mysore plateau to the Malabar coast. Control of Kodagu meant control of
            the route, which is why the campaigns were persistent out of all proportion to the
            country's size.
          </p>
          <p>
            Resistance was decentralised — ambushes on columns moving through forest and defile
            rather than pitched battle — and that pattern became central to how Kodavas later
            described their own military tradition.
          </p>
        </div>
        <SourceRefs
          ids={["richter-gazetteer", "kingdom-coorg-wiki", "history-kodagu-wiki"]}
          className="mt-6"
        />
      </Section>

      <Section
        eyebrow="1785"
        title="The captivity"
        level="disputed"
        className="border-y border-border bg-secondary/40"
        lede="Under Tipu Sultan large numbers of Kodavas were deported and held at Srirangapatna. The event is documented; the numbers are not."
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="prose-archive space-y-4 text-muted-foreground">
            <p>
              Figures given in different sources range from a few thousand to seventy thousand or
              more. The highest come from Company-era accounts and Tipu's own correspondence, both
              written to impress readers — one with atrocity, the other with success. Modern
              historians treat the largest numbers as implausible against any reasonable estimate of
              Kodagu's population at the time.
            </p>
            <p>
              What is not in doubt is that the deportations, forced conversions and reprisals of this
              period left a lasting mark on Kodava memory, and that survivors and escapees formed
              the core of the force that restored the Haleri line.
            </p>
            <SourceRefs ids={["seringapatam-captivity-wiki", "richter-gazetteer", "meenakshi-2024"]} />
          </div>
          <div className="space-y-5">
            <InfoPanel title="How this archive handles the number" tone="caution">
              <p>
                We state the event as documented and the scale as disputed, and we name the range
                rather than repeating a single figure. Any page that gives you one number without a
                source is guessing.
              </p>
            </InfoPanel>
            <Pullquote cite="This archive's method note">
              A remembered wrong does not need an inflated number to be real.
            </Pullquote>
          </div>
        </div>
      </Section>

      <Section eyebrow="Recovery" title="1790s: alliance and restoration">
        <div className="prose-archive max-w-3xl space-y-4 text-muted-foreground">
          <p>
            Dodda Vira Rajendra escaped captivity, gathered support in the hills and, with Company
            backing during the wars against Tipu, recovered the kingdom. A treaty relationship
            followed. Kodagu emerged intact and nominally independent, but tied to a power whose
            interest in the passes was the same as Mysore's had been.
          </p>
        </div>
        <SourceRefs ids={["dodda-vira-wiki", "richter-gazetteer"]} className="mt-6" />
      </Section>

      <Section eyebrow="Chronology" title="Events of the Mysore period" className="border-t border-border">
        <EraEvents era="mysore" />
      </Section>
    </main>
  );
}
