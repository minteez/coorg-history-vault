import { createFileRoute } from "@tanstack/react-router";
import { InfoPanel, PageHeader, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Festivals of Kodagu — Coorg History Archive" },
      {
        name: "description",
        content:
          "Kailpodhud, Kaveri Sankramana and Puttari: the three principal Kodava festivals, what each marks, when it falls, and how it is observed.",
      },
      { property: "og:title", content: "Festivals of Kodagu" },
      {
        property: "og:description",
        content: "The three great Kodava observances of arms, river and harvest.",
      },
    ],
  }),
  component: FestivalsPage,
});

const festivals = [
  {
    name: "Kailpodhud",
    native: "ಕೈಲ್‌ಪೊದ್",
    when: "Early September (commonly 3 September)",
    marks: "Weapons",
    level: "community" as const,
    body: "Held once the transplanting of paddy is finished, when the fields no longer need constant attention. Arms are taken down, cleaned and honoured, and the day is marked with shooting at a target, sports and a family feast. The festival's continuity is bound up with the community's customary exemption from parts of Indian arms legislation.",
    ids: ["kodavas-festivals", "sahapedia-kodagu"],
  },
  {
    name: "Kaveri Sankramana",
    native: "ಕಾವೇರಿ ಸಂಕ್ರಮಣ",
    when: "Mid-October (around 17 October)",
    marks: "The river",
    level: "traditional" as const,
    body: "The Kaveri is said to well up at Talakaveri at a precise moment, and pilgrims gather at the spring on Brahmagiri hill to collect the theerthodbhava water. Kodava households treat the day as the river's own festival; the timing and the welling-up are matters of devotional tradition rather than measurement.",
    ids: ["talakaveri-wiki", "kodavas-festivals", "sahapedia-kodagu"],
  },
  {
    name: "Puttari",
    native: "ಪುತ್ತರಿ",
    when: "Late November or December, at the full moon",
    marks: "Harvest",
    level: "community" as const,
    body: "The new-rice festival. The first sheaf is cut at an appointed hour with the family gathered, carried to the ainmane and cooked; the days that follow bring village dances and games. Of the three festivals this is the one most closely tied to the agricultural calendar and to the ancestral house.",
    ids: ["kodavas-festivals", "pattole-palame"],
  },
];

function FestivalsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Culture"
        title="Festivals"
        lede="Three observances structure the Kodava year: one for arms, one for the river, one for the harvest. Each is held at the ainmane as much as at any temple."
      />

      <Section eyebrow="The calendar" title="Three festivals">
        <ul className="space-y-5">
          {festivals.map((f) => (
            <li key={f.name} className="archive-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="rule-eyebrow">{f.when}</p>
                <EvidenceBadge level={f.level} showHint />
              </div>
              <h2 className="mt-2 text-2xl">{f.name}</h2>
              <p className="mt-1 text-sm text-accent-foreground/80">{f.native}</p>
              <p className="mt-1 text-sm font-semibold text-primary">Marks: {f.marks}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              <SourceRefs ids={f.ids} className="mt-4" />
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Note" title="Dates and variation" className="border-t border-border">
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="Why the dates move" tone="caution">
            <p>
              Kailpodhud and Kaveri Sankramana are usually fixed to the solar calendar and fall on
              nearly the same day each year; Puttari follows the lunar month and the ripening of the
              crop, so it shifts. Local announcements, not this page, are the authority for a given
              year.
            </p>
          </InfoPanel>
          <InfoPanel title="Other observances" tone="forest">
            <p>
              Village temple festivals, Kodava participation in wider Hindu festivals, and okka-level
              rites at the kaimada all sit alongside the three. Listing only three is a convention of
              summary, not a complete calendar.
            </p>
          </InfoPanel>
        </div>
      </Section>
    </main>
  );
}
