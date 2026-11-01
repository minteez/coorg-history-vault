import type { Era, TimelineEvent } from "@/data/timeline";

export function filterTimeline(events: TimelineEvent[], { era, tag, eventId }: { era?: Era; tag?: string; eventId?: string }) {
  return events.filter((event) => (!era || event.era === era) && (!tag || event.tags.includes(tag)) && (!eventId || event.id === eventId));
}