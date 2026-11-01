import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Sacred Traditions of Kodagu — Coorg History Archive" },
      {
        name: "description",
        content:
          "Ancestor veneration, Karana and kaimada, sacred groves and household ritual in Kodagu — described as living tradition, with sources.",
      },
      { property: "og:title", content: "Sacred traditions of Kodagu" },
      {
        property: "og:description",
        content: "Ancestors, groves and household ritual in Kodava practice.",
      },
    ],
  }),
  component: CulturePage,
});

const practices = [
  {
    title: "Ancestor veneration",
    level: "community" as const,
    body: "Ancestors of the okka are addressed at the ainmane at festivals, marriages and death rites. The relationship is one of continuing obligation rather than commemoration: the living owe the dead attention, and the dead are held to remain concerned with the house's affairs.",
    ids: ["pattole-palame", "sahapedia-kodagu"],
  },
  {
    title: "Karana and kaimada",
    level: "community" as const,
    body: "Karana — sometimes written Karona — refers to ancestral spirits, and the kaimada is the small shrine or structure associated with them on clan land. Practice varies between okkas and between nads, and descriptions in print rarely capture that variation.",
    ids: ["kodavaclan-karona", "pattole-palame"],
  },
  {
    title: "Devarakadu, the sacred grove",
    level: "documented" as const,
    body: "Patches of forest reserved for a village deity and traditionally protected from felling. Kodagu retains an unusually high number of them, and they have been studied both as religious institutions and as remnant biodiversity.",
    ids: ["kushalappa", "karnataka-gazetteer-kodagu"],
  },
  {
    title: "Household and life-cycle rites",
    level: "community" as const,
    body: "Kodava rites are conducted largely within the family and the okka. Marriage, for instance, is performed by elders of the house rather than requiring priestly officiation, and the wedding sequence is closely tied to the ainmane courtyard.",
    ids: ["pattole-palame", "sahapedia-kodagu"],
  },
  {
    title: "Nature, weapons and the hunt",
    level: "traditional" as const,
    body: "Rain, rivers, forest and the gun recur across Kodava ritual — the Kaveri as deity, the harvest as a household rite, and the customary right to bear arms marked in festival practice. Firing a shot at Kailpodhud is the best-known instance.",
    ids: ["kodavas-festivals", "richter-gazetteer"],
  },
  {
    title: "Temples and shared devotion",
    level: "documented" as const,
    body: "Alongside clan ritual there are the district's temple centres — Talakaveri, Bhagamandala, Iruppu and many village shrines — where Kodava practice meets wider Hindu devotional tradition and Kerala and Nayaka building styles.",
    ids: ["talakaveri-wiki", "karnataka-gazetteer-kodagu"],
  },
];

function CulturePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Culture"
        title="Sacred traditions"
        lede="Kodava religious life is centred on the ancestral house and the land around it. Much of it is living practice rather than documented history, so this page labels it as tradition and points to where it was written down."
      />

      <Section
        eyebrow="Caution"
        title="How this page treats ritual"
        className="border-b border-border bg-secondary/40"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="Practice varies" tone="caution">
            <p>
              Names, sequences and prohibitions differ between okkas, villages and nads. Any single
              description — including the ones below — is a summary of some practice, not a rule for
              all of it.
            </p>
          </InfoPanel>
          <InfoPanel title="Where it comes from" tone="forest">
            <p>
              The fullest written record is Nadikerianda Chinnappa's <cite>Pattole Palame</cite>
              {" "}(1924), a compilation made from within the community, supplemented by colonial
              gazetteers and modern documentation projects.
            </p>
          </InfoPanel>
        </div>
      </Section>

      <Section eyebrow="Practices" title="Six threads of Kodava ritual life">
        <ul className="grid gap-5 md:grid-cols-2">
          {practices.map((p) => (
            <li key={p.title} className="archive-card p-6">
              <EvidenceBadge level={p.level} showHint />
              <h3 className="mt-3 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              <SourceRefs ids={p.ids} className="mt-4" />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link to="/pattole-palame" className="font-semibold text-primary hover:underline">
            Read about Pattole Palame
          </Link>
        </p>
      </Section>
    </main>
  );
}
