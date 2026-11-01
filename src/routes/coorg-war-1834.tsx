import { createFileRoute } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { EraEvents } from "@/components/site/EraEvents";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/coorg-war-1834")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "The Coorg War of 1834 & the 1837 Rebellion — Coorg History Archive" },
      {
        name: "description",
        content:
          "How the Kingdom of Coorg fell in April 1834, why the Company said it acted, and why the Amara Sullia rising of 1837 was a separate event.",
      },
      { property: "og:title", content: "The Coorg War of 1834" },
      {
        property: "og:description",
        content: "Annexation, exile and the separate rebellion of 1837.",
      },
    ],
  }),
  component: WarPage,
});

function WarPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Chapter four"
        title="The Coorg War of 1834"
        lede="A short campaign in April 1834 ended two centuries of Haleri rule. Company columns entered from several directions, resistance collapsed within weeks, and Chikka Vira Rajendra was deposed and exiled."
      />

      <Section
        eyebrow="The campaign"
        title="Weeks, not months"
        level="documented"
        lede="Four columns converged on Madikeri. There was fighting at the stockades and passes, but the kingdom's defence depended on levies that did not hold once the capital was threatened."
      >
        <div className="prose-archive max-w-3xl space-y-4 text-muted-foreground">
          <p>
            The Company's stated grounds were the raja's misrule and his refusal to surrender a
            relative who had taken refuge in British territory. Both appear in the official record;
            both were also convenient. Annexation completed British control of the passes between the
            Mysore plateau and the Malabar coast.
          </p>
          <p>
            After the surrender the raja was removed with his household to Benares. Coorg was
            administered as a small non-regulation province, initially under a Commissioner
            answering to the Madras and later the Mysore establishment.
          </p>
        </div>
        <SourceRefs
          ids={["coorg-war-wiki", "chikka-vira-wiki", "richter-gazetteer", "kodavaclan-annexation"]}
          className="mt-6"
        />
      </Section>

      <Section
        eyebrow="A common error"
        title="1834 and 1837 are not the same event"
        className="border-y border-border bg-secondary/40"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="1834: the annexation" tone="forest">
            <p>
              A war between the Company and the Haleri state, fought in Kodagu, ending in the
              kingdom's abolition.
            </p>
          </InfoPanel>
          <InfoPanel title="1837: the Amara Sullia rising" tone="caution">
            <p>
              A revolt three years later in the Amara Sullia country against Company taxation and
              administration, involving people from Kodagu and the adjoining South Canara tracts. It
              briefly took Mangaluru before being suppressed. It was not a continuation of the royal
              cause and is often wrongly folded into the 1834 story.
            </p>
          </InfoPanel>
        </div>
        <SourceRefs ids={["amara-sullia-wiki", "meenakshi-2024"]} className="mt-6" />
      </Section>

      <Section eyebrow="Chronology" title="1834, 1837 and after">
        <EraEvents tag="coorg-war" />
        <div className="mt-10">
          <EraEvents tag="rebellion" />
        </div>
      </Section>
    </main>
  );
}
