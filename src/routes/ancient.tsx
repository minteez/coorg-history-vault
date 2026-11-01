import { createFileRoute } from "@tanstack/react-router";
import megalithImg from "@/assets/megalith-dolmen.jpg";
import { ArchiveFigure, InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { EraEvents } from "@/components/site/EraEvents";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/ancient")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Prehistoric & Ancient Kodagu — Coorg History Archive" },
      {
        name: "description",
        content:
          "Megalithic burials, possible Sangam-era references and the earliest inscriptions: what can and cannot be said about Kodagu before the Haleri kingdom.",
      },
      { property: "og:title", content: "Prehistoric & ancient Kodagu" },
      {
        property: "og:description",
        content:
          "Iron Age megaliths, early dynastic overlordship and the limits of the evidence for early Kodagu.",
      },
    ],
  }),
  component: AncientPage,
});

function AncientPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Chapter one"
        title="Prehistoric & ancient Kodagu"
        lede="For most of Kodagu's past there is no text at all — only stone. Burial monuments, scattered tools and, much later, a handful of inscriptions carry the story until dynastic records begin to mention these hills."
      />

      <Section
        eyebrow="Before writing"
        title="Stone before script"
        lede="Neolithic and Iron Age material has been recorded across the uplands, but Kodagu has seen far less systematic excavation than neighbouring regions, so dating usually rests on broader South Indian sequences."
        level="scholarly"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="prose-archive space-y-4 text-muted-foreground">
            <p>
              The most visible antiquities are megalithic: dolmens of upright slabs capped by a
              horizontal stone, cairns and stone circles, generally associated with the South Indian
              Iron Age. They mark the dead, not settlements, so they tell us about ritual and social
              organisation more readily than about population or economy.
            </p>
            <p>
              Local tradition often attributes these monuments to a race of giants or to earlier
              peoples displaced by the Kodavas. That belongs to tradition, not to archaeology, and
              this archive keeps the two apart.
            </p>
            <SourceRefs ids={["moriarty-megaliths", "iar-asi", "asi-karnataka"]} />
          </div>
          <ArchiveFigure
            src={megalithImg}
            alt="A dolmen of upright stone slabs capped by a horizontal slab in grassland"
            caption="Dolmens of the kind recorded across the Kodagu uplands."
            credit="Commissioned illustration for this project."
            note="Illustrative reconstruction, not a photograph of an excavated site."
          />
        </div>
      </Section>

      <Section
        eyebrow="Earliest texts"
        title="Sangam hints and early epigraphy"
        className="border-y border-border bg-secondary/40"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="The Sangam question">
            <p>
              Sangam Tamil poetry mentions hill peoples and places that some scholars connect to
              Kodagu, and the name Kudagu is often read as an early form. The identifications are
              plausible but not secure: the poems are not geographies, and the readings depend on
              later commentary.
            </p>
          </InfoPanel>
          <InfoPanel title="What inscriptions can show" tone="forest">
            <p>
              From roughly the ninth century onwards, epigraphy from the Kannada and Malabar
              borderlands begins to name chiefs, temples and grants in and around these hills. It
              shows overlordship shifting between larger powers rather than a single continuous
              Kodagu polity.
            </p>
          </InfoPanel>
        </div>
        <SourceRefs
          ids={["asi-inscriptions-2024", "rice-gazetteer", "history-kodagu-wiki"]}
          className="mt-6"
        />
      </Section>

      <Section eyebrow="Chronology" title="Events in this period">
        <div className="space-y-10">
          <EraEvents era="prehistoric" />
          <EraEvents era="ancient" />
          <EraEvents era="medieval" />
        </div>
      </Section>
    </main>
  );
}
