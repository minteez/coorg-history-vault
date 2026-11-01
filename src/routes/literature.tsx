import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight } from "lucide-react";
import books from "@/assets/archive-books.jpg";
import { PageHeader, Section, ArchiveFigure, InfoPanel } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";
import { Button } from "@/components/ui/button";
import { archiveHead } from "@/lib/page-head";

export const Route = createFileRoute("/literature")({
  head: () => archiveHead("Kodava Literature", "Kodava oral literature, Appacha Kavi's poetry and drama, Pattole Palame, translation and the relationship between language and cultural memory."),
  component: LiteraturePage,
});

function LiteraturePage() {
  return <main id="main">
    <PageHeader eyebrow="Language · Written and spoken memory" title="Kodava literature" lede="Literature in Kodava Takk begins long before print: in songs, stories, proverbs and ritual performance. Poetry, drama, collection and translation gave this living oral inheritance new written forms." />
    <Section eyebrow="Oral inheritance" title="A literature carried in performance" level="traditional">
      <div className="grid items-start gap-8 lg:grid-cols-2"><div className="prose-archive text-muted-foreground"><p>Folk songs and ballads preserve accounts of ancestors, family memory and ritual. Proverbs and riddles belong to the same repertoire. The dudi drum accompanies many traditional songs; their meaning lies in performance and occasion as well as in words on a page.</p><p>A song is evidence of a remembered or transmitted narrative, not automatic proof that every event it describes occurred. Written collections preserve versions of this tradition without replacing the people who continue to perform it.</p><SourceRefs ids={["pattole-palame", "sahapedia-kodagu"]} className="mt-5" /></div><ArchiveFigure src={books} alt="An illustrated arrangement of old books and papers on a wooden desk" caption="From spoken memory to the written record." credit="Commissioned illustration for this project." note="Illustrative image, not a photograph of a specific literary collection." /></div>
    </Section>
    <Section eyebrow="Poetry and drama" title="Haradasa Appacha Kavi, 1868–1944" level="documented" className="border-y border-border"><div className="prose-archive max-w-3xl text-muted-foreground"><p>Appacha Kavi is conventionally remembered as a founding figure of modern Kodava literature. His poetry and plays brought Kodava Takk into authored literary and theatrical forms, drawing on devotional and narrative traditions. That recognition concerns modern written literature; it does not imply that the language previously lacked creative expression.</p><SourceRefs ids={["sahapedia-appacha", "appacha-kavi-wiki"]} className="mt-5" /></div></Section>
    <Section eyebrow="Collection and translation" title="Pattole Palame and its afterlife" level="documented"><div className="prose-archive max-w-3xl text-muted-foreground"><p>Nadikerianda Chinnappa's <cite>Pattole Palame</cite>, published in 1924, gathered songs, customs, proverbs, riddles and ritual accounts. Written in Kannada script, it became a central reference for the study of Kodava cultural life.</p><p>The English translation by Boverianda Nanjamma and Chinnappa widened access beyond readers of Kodava Takk and Kannada script. Translation is also interpretation: the terminology, performance setting and social context of a song do not always have exact equivalents in another language.</p><SourceRefs ids={["pattole-palame", "boverianda-wiki"]} className="mt-5" /></div><Button asChild className="mt-6"><Link to="/pattole-palame"><BookOpen />Read the Pattole Palame chapter</Link></Button></Section>
    <Section eyebrow="Literature and language" title="Continuity beyond the printed page" className="border-t border-border"><InfoPanel title="Script is not the same as language" tone="forest"><p>Kodava Takk is a South Dravidian language, not a dialect of Kannada. Using Kannada script to write it does not change that classification. Spoken transmission, performance, print and translation are complementary parts of its literary life.</p><SourceRefs ids={["krishnamurti-2003", "ebert-kodagu", "pattole-palame"]} className="mt-4" /></InfoPanel><div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="outline"><Link to="/language">Kodava Takk<ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/figures">Writers and documenters<ArrowRight /></Link></Button></div></Section>
  </main>;
}