import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { allNavItems } from "@/data/nav";
import { timelineSorted } from "@/data/timeline";
import { sources } from "@/data/sources";
import { figures } from "@/data/figures";
import { places } from "@/data/places";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const events = useMemo(() => timelineSorted.slice(0, 200), []);

  const go = (to: string, hash?: string) => {
    onOpenChange(false);
    setQuery("");
    void navigate({ to, ...(hash ? { hash } : {}) });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search pages, people, places and sources…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {allNavItems.map((item) => (
            <CommandItem
              key={item.label}
              value={`${item.label} ${item.blurb ?? ""}`}
              onSelect={() => go(item.to)}
            >
              <span className="font-medium">{item.label}</span>
              {item.blurb ? (
                <span className="ml-2 text-xs text-muted-foreground">{item.blurb}</span>
              ) : null}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Timeline events">
          {events.map((event) => (
            <CommandItem
              key={event.id}
              value={`${event.date} ${event.title} ${event.summary}`}
              onSelect={() => go(event.route ?? "/timeline")}
            >
              <span className="mr-2 text-xs tracking-wide text-muted-foreground">{event.date}</span>
              <span>{event.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="People">
          {figures.map((figure) => <CommandItem key={figure.id} value={`${figure.name} ${figure.role}`} onSelect={() => go("/figures", figure.id)}>{figure.name}</CommandItem>)}
        </CommandGroup>
        <CommandGroup heading="Places">
          {places.map((place) => <CommandItem key={place.id} value={`${place.name} ${place.summary}`} onSelect={() => go("/places", place.id)}>{place.name}</CommandItem>)}
        </CommandGroup>
        <CommandGroup heading="Sources">
          {sources.map((source) => (
            <CommandItem
              key={source.id}
              value={`${source.title} ${source.author}`}
              onSelect={() => go("/sources")}
            >
              <span>{source.title}</span>
              <span className="ml-2 text-xs text-muted-foreground">{source.author}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
