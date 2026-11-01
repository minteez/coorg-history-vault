import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Prose";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { gallery } from "@/data/gallery";
import { archiveHead } from "@/lib/page-head";

export const Route = createFileRoute("/gallery")({
  head: () => archiveHead("Cultural Gallery of Kodagu", "An illustrated collection of Kodagu landscapes, ancestral houses, monuments and coffee country, with image provenance and reuse notes.", "website"),
  component: GalleryPage,
});

function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const item = selected === null ? undefined : gallery[selected];
  const move = (direction: number) => setSelected((current) => current === null ? null : (current + direction + gallery.length) % gallery.length);
  return <main id="main">
    <PageHeader eyebrow="Visual archive" title="Cultural gallery" lede="The highland landscape, the ancestral house and the traces of changing livelihoods. These commissioned illustrations evoke the subjects of the archive; they are not historical photographs or documentary records of named buildings." />
    <Section eyebrow="Illustrated collection" title="Land, memory and material culture">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((image, index) => <li key={image.id}>
        <figure className="archive-card overflow-hidden">
          <Button variant="ghost" className="group relative block h-auto w-full overflow-hidden rounded-none p-0" aria-label={`Enlarge ${image.title}`} onClick={() => setSelected(index)}>
            <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-md border border-border bg-card text-foreground"><Expand aria-hidden="true" /></span>
          </Button>
          <figcaption className="space-y-3 p-5"><h3 className="text-xl">{image.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{image.caption}</p><div className="border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground"><p>{image.credit}</p><p className="mt-1 italic">{image.note}</p><p className="mt-2">{image.licence}</p></div></figcaption>
        </figure>
      </li>)}</ul>
    </Section>
    <Dialog open={item !== undefined} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto" onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
        {item && <><DialogTitle className="pr-8">{item.title}</DialogTitle><img src={item.src} alt={item.alt} className="max-h-[55dvh] w-full object-contain" /><DialogDescription>{item.caption}</DialogDescription><div className="text-xs leading-relaxed text-muted-foreground"><p>{item.credit} {item.note}</p><p className="mt-1">{item.licence}</p></div><div className="flex items-center justify-between"><Button variant="outline" size="icon" aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft /></Button><p className="text-xs text-muted-foreground" aria-live="polite">{(selected ?? 0) + 1} / {gallery.length}</p><Button variant="outline" size="icon" aria-label="Next image" onClick={() => move(1)}><ChevronRight /></Button></div></>}
      </DialogContent>
    </Dialog>
  </main>;
}