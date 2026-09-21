import { Link } from "@tanstack/react-router";
import { BookMarked, ExternalLink } from "lucide-react";
import { sourceById } from "@/data/sources";
import { cn } from "@/lib/utils";

export function SourceRefs({
  ids,
  className,
  label = "Sources & Further Reading",
}: {
  ids: string[];
  className?: string;
  label?: string;
}) {
  const entries = ids.map((id) => ({ id, source: sourceById(id) })).filter((e) => e.source);
  if (entries.length === 0) return null;

  return (
    <div className={cn("border-t border-border pt-3", className)}>
      <p className="rule-eyebrow flex items-center gap-1.5">
        <BookMarked aria-hidden="true" className="size-3.5" />
        {label}
      </p>
      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
        {entries.map(({ id, source }) => (
          <li key={id}>
            {source!.url ? (
              <a
                href={source!.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1 underline decoration-accent/60 underline-offset-2 hover:text-foreground"
              >
                <span>
                  {source!.author}, <cite className="italic">{source!.title}</cite>
                  {source!.year ? `, ${source!.year}` : ""}
                </span>
                <ExternalLink aria-hidden="true" className="size-3 shrink-0 translate-y-0.5" />
              </a>
            ) : (
              <span>
                {source!.author}, <cite className="italic">{source!.title}</cite>
                {source!.year ? `, ${source!.year}` : ""}
              </span>
            )}
          </li>
        ))}
      </ul>
      <Link
        to="/sources"
        className="mt-2 inline-block text-xs font-semibold text-primary underline-offset-2 hover:underline"
      >
        Full bibliography
      </Link>
    </div>
  );
}
