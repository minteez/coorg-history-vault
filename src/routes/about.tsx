import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Youtube, Globe } from "lucide-react";
import { PageHeader, InfoPanel, Section } from "@/components/site/Prose";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Project & the Developer — Coorg History Archive" },
      {
        name: "description",
        content:
          "About The Complete History of Coorg: an independent, cited digital archive of Kodagu, built by Minteez, a developer from Coorg.",
      },
      { property: "og:title", content: "About the Coorg History Archive" },
      {
        property: "og:description",
        content: "Why this archive exists, how it is researched, and who built it.",
      },
    ],
  }),
  component: AboutPage,
});

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/sudo.minteez", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@thecubermint", icon: Youtube },
  { label: "Portfolio", href: "https://minteez.lovable.app", icon: Globe },
];

function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="The project"
        title="About this archive"
        lede="An independent digital historical archive of Kodagu — its history, people, culture and language — built with cited sources and clearly labelled evidence."
      />

      <Section title="Why it exists">
        <div className="prose-archive max-w-2xl space-y-4 text-muted-foreground">
          <p>
            Kodagu is small, and much of what is written about it online is repeated without
            attribution: dates that contradict each other, origin stories presented as settled fact,
            colonial anecdotes recycled as record. This archive was built to gather the same material
            carefully — naming sources, marking what is documented, and saying plainly when
            historians disagree.
          </p>
          <p>
            It is not an official publication of any institution or community body. It is a research
            project, open to correction, and it aims to be useful to students, visitors and Kodavas
            looking for something more solid than a summary.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoPanel title="What it covers">
            <p>
              Prehistory and megalithic burials, early dynastic overlordship, the Haleri kingdom, the
              Mysore conflicts, the Coorg War of 1834 and the 1837 rebellion, British rule and
              coffee, Coorg State and the 1956 merger — alongside Kodava community life, festivals,
              agriculture, military service, Kodava Takk and its literature.
            </p>
          </InfoPanel>
          <InfoPanel title="How it is researched" tone="forest">
            <p>
              Published books, gazetteers, legislation, census tables, archaeological reporting and
              peer-reviewed studies, listed in full in the bibliography. Images are commissioned
              illustrations, labelled so no one mistakes them for archival photographs.
            </p>
          </InfoPanel>
        </div>
      </Section>

      <Section
        id="developer"
        title="The developer"
        eyebrow="Minteez"
        className="border-y border-border bg-secondary/40"
      >
        <div className="prose-archive max-w-2xl space-y-4 text-muted-foreground">
          <p>
            Created by Minteez, a developer from Coorg, as a digital archive dedicated to his
            homeland. The work — research, writing, design and engineering — was done as an
            independent side project.
          </p>
          <p>
            Corrections, better sources and additions are welcome; the archive is meant to improve
            over time rather than stand as a final word.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent"
              >
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Coorg in the CBSE Classroom">
        <div className="prose-archive max-w-2xl space-y-4 text-muted-foreground">
          <p>
            For many students in the CBSE Class 10 English Language &amp; Literature course, the chapter
            “Coorg,” written by Lokesh Abrol in First Flight, was part of the syllabus for the 2007–2026
            batches. It was one of those chapters that made school reading feel a little more personal
            when a student happened to come from the place being described.
          </p>
          <p>
            Since Minteez is from Coorg, classmates were often surprised to learn that he came from the
            same place they were reading about in class. That surprise quickly turned into a steady stream
            of questions about Kodava culture, lifestyle, food, traditions and everyday life. A recurring
            joke was whether he personally owned a firearm because of the well-known historical and legal
            tradition associated with Kodavas carrying firearms without a licence. Some classmates even
            jokingly asked him to “buy them a gun” because he was from Coorg — a humorous classroom
            anecdote, not a serious suggestion or encouragement.
          </p>
          <p>
            When the chapter was taught, the English teacher would introduce it by jokingly saying, “Coorg
            is the place of Minteez,” and would tell students they could approach Minteez if they had doubts
            about Coorg instead of asking the teacher. That kind of classroom humour, curiosity and friendly
            confusion became part of the experience itself.
          </p>
          <p>
            Those moments helped inspire The Complete History of Coorg. What started as a personal connection
            to a chapter in a textbook became a larger effort to turn classroom curiosity into a comprehensive
            digital resource covering Kodagu&apos;s history, culture, people, language, places and heritage.
            It is a project shaped by memory as much as research: by a student who lived the story, by the
            questions classmates asked, and by the feeling that a place as rich as Coorg deserved more than a
            brief chapter summary.
          </p>
          <p>
            This story feels especially meaningful because the CBSE Class 10 English curriculum is changing
            from the 2026–27 academic session, which means future batches will not necessarily encounter the
            same “Coorg” chapter in the same way. In that sense, this project also preserves a small piece of
            that shared classroom experience — a reminder that a textbook chapter can become part of a lived,
            nostalgic memory for an entire generation.
          </p>
        </div>
      </Section>

      <Section title="Using this archive">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/evidence"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            How evidence is weighed
          </Link>
          <Link
            to="/sources"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
          >
            Bibliography
          </Link>
          <Link
            to="/glossary"
            className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
          >
            Glossary of terms
          </Link>
        </div>
      </Section>
    </main>
  );
}
