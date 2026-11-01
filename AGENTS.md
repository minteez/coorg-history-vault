<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Archive architecture
- Keep shareable chapters as separate TanStack file routes with unique leaf metadata; this preserves direct links and page-specific sharing.
- Reuse the typed places, figures, gallery and bibliography collections for archive views; this prevents conflicting copies of historical entries.
- Keep Leaflet isolated in a lazy component rendered inside ClientOnly; its browser-only imports must not enter the synchronous SSR graph.
