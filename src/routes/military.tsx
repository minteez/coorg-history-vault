import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section, InfoPanel } from "@/components/site/Prose";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { SourceRefs } from "@/components/site/SourceRefs";
import { Button } from "@/components/ui/button";
import { figures } from "@/data/figures";
import { archiveHead } from "@/lib/page-head";

export const Route = createFileRoute("/military")({
  head: () => archiveHead("Military Heritage of Kodagu", "Kodagu's military history, the careers of K. M. Cariappa and K. S. Thimayya, and the distinction between service records and martial tradition."),
  component: MilitaryPage,
});

function MilitaryPage() {
  return <main id="main">
    <PageHeader eyebrow="Culture · Service and remembrance" title="Military heritage" lede="Kodagu's military history reaches from the levies of the Haleri kingdom to service in the Indian Army and international peacekeeping. Individual careers are documented; broad claims about an inherently martial people need a different kind of scrutiny." />
    <Section eyebrow="Historical context" title="From kingdom to modern army">
      <div className="prose-archive max-w-3xl text-muted-foreground"><p>The Haleri rulers drew on local fighting forces in their conflicts with Mysore and in the defence of Coorg. British annexation in 1834 changed the political framework in which military service took place. Colonial accounts of courage and loyalty must be read alongside the administration's interests, rather than treated as neutral descriptions of an entire community.</p><SourceRefs ids={["richter-gazetteer", "karnataka-gazetteer-kodagu"]} className="mt-5" /></div>
      <div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="outline"><Link to="/mysore-conflicts">Mysore conflicts<ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/coorg-war-1834">The 1834 war<ArrowRight /></Link></Button></div>
    </Section>
    <Section eyebrow="Documented lives" title="Two distinguished careers" className="border-y border-border">
      <ul className="grid gap-6 md:grid-cols-2">{figures.filter((figure) => figure.field === "military").map((figure) => <li key={figure.id} className="archive-card p-6"><div className="flex flex-wrap items-center gap-3"><p className="rule-eyebrow">{figure.dates}</p><EvidenceBadge level={figure.level} /></div><h3 className="mt-4 text-2xl">{figure.name}</h3><p className="mt-2 text-sm font-medium text-primary">{figure.role}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{figure.bio}</p><SourceRefs ids={figure.sourceIds} className="mt-5" /></li>)}</ul>
      <p className="prose-archive mt-6 max-w-3xl text-muted-foreground">Cariappa's appointment as Commander-in-Chief in 1949 and his later Field Marshal rank are distinct milestones. Thimayya's tenure as Chief of Army Staff was 1957–1961; accounts number the early army chiefs differently, so this archive uses his office and tenure rather than a disputed ordinal.</p>
      <SourceRefs ids={["bharat-rakshak-cariappa", "bharat-rakshak-thimayya"]} className="mt-5" />
    </Section>
    <Section eyebrow="Reading the record" title="Service without stereotypes"><InfoPanel title="A community is more than its military reputation" tone="caution"><p>Service biographies establish what named individuals did. They do not establish ancestry theories, an innate martial character, or unverified claims that Kodagu contributed more soldiers per person than any other region. Such comparisons require a defined period and reliable recruitment and population data.</p></InfoPanel><div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/figures">Historical figures<ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/festivals">Kailpodhud and the festival calendar</Link></Button></div></Section>
  </main>;
}