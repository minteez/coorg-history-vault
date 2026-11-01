export function archiveHead(title: string, description: string, type = "article") {
  return {
    meta: [
      { title: `${title} — Coorg History Archive` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}