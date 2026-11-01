import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Search } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Prose";
import { EvidenceBadge } from "@/components/site/EvidenceBadge";
import { SourceRefs } from "@/components/site/SourceRefs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { places, placeCategoryLabels, type PlaceCategory } from "@/data/places";
import { archiveHead } from "@/lib/page-head";

export const Route = createFileRoute("/places")({
  head: () => archiveHead("Places in History", "A sourced gazetteer of Kodagu's forts, palaces, sacred sites, settlements and plantation country.", "website"),
  component: PlacesPage,
});

function PlacesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PlaceCategory | "all">("all");
  const shown = places.filter((place) => (category === "all" || category === place.category) && `${place.name} ${place.native ?? ""} ${place.period} ${place.summary}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <main id="main">
    <PageHeader eyebrow="Historical atlas · Gazetteer" title="Places in history" lede="Forts and forest palaces, river shrines and settlements: a place-by-place reading of Kodagu's past. Broad regions have representative map points, not precise archaeological locations.">
      <Button asChild variant="outline" className="mt-6"><Link to="/map"><MapPin />Open the historical atlas</Link></Button>
    </PageHeader>
    <Section eyebrow="Browse the gazetteer" title={`${shown.length} places`}>
      <div className="mb-5 max-w-md"><label htmlFor="place-search" className="mb-2 block text-sm font-medium">Search places</label><div className="relative"><Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" aria-hidden="true" /><Input id="place-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, period or subject" className="pl-9" /></div></div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Place categories">
        <Button variant={category === "all" ? "default" : "outline"} size="sm" aria-pressed={category === "all"} onClick={() => setCategory("all")}>All places</Button>
        {(Object.keys(placeCategoryLabels) as PlaceCategory[]).map((value) => <Button key={value} variant={category === value ? "default" : "outline"} size="sm" aria-pressed={category === value} onClick={() => setCategory(value)}>{placeCategoryLabels[value]}</Button>)}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} places found</p>
      {shown.length ? <ul className="grid gap-5 md:grid-cols-2">{shown.map((place) => <li key={place.id} id={place.id} className="archive-card scroll-mt-24 p-6">
        <div className="flex flex-wrap items-center gap-3"><p className="rule-eyebrow">{placeCategoryLabels[place.category]}</p><EvidenceBadge level={place.level} showHint /></div>
        <h3 className="mt-3 text-2xl">{place.name}</h3>{place.native && <p className="mt-1 text-sm text-muted-foreground">{place.native}</p>}
        <p className="mt-2 text-sm font-medium text-primary">{place.period}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{place.summary}</p>
        <SourceRefs ids={place.sourceIds} className="mt-5" />
      </li>)}</ul> : <div className="border-y border-border py-12 text-center"><p className="text-muted-foreground">No places match these filters.</p><Button variant="link" onClick={() => { setQuery(""); setCategory("all"); }}>Clear filters</Button></div>}
    </Section>
  </main>;
}