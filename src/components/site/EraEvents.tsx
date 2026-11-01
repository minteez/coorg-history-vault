import { EvidenceBadge } from "./EvidenceBadge";
import { SourceRefs } from "./SourceRefs";
import { timelineSorted, type Era } from "@/data/timeline";
import { filterTimeline } from "@/lib/timeline-filter";

export function EraEvents(filters: { era?: Era; tag?: string; eventId?: string }) {
  const events = filterTimeline(timelineSorted, filters);
  if (events.length === 0) return null;

  return (
    <ol className="space-y-5 border-l border-border pl-5 sm:pl-7">
      {events.map((event) => (
        <li key={event.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[1.55rem] top-2 size-2.5 rounded-full border-2 border-background bg-accent sm:-left-[2.05rem]"
          />
          <article className="archive-card p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="rule-eyebrow">{event.date}</p>
              <EvidenceBadge level={event.level} showHint />
            </div>
            <h3 className="mt-2 text-xl">{event.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{event.summary}</p>
            {event.detail ? (
              <p className="mt-2 text-sm text-muted-foreground/90">{event.detail}</p>
            ) : null}
            <SourceRefs ids={event.sourceIds} className="mt-4" />
          </article>
        </li>
      ))}
    </ol>
  );
}
