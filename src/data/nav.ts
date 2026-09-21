export interface NavItem {
  label: string;
  to: string;
  blurb?: string;
}

export const navGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "History",
    items: [
      { label: "Interactive Timeline", to: "/timeline", blurb: "Every era, filterable" },
      { label: "Prehistoric & Ancient Kodagu", to: "/ancient", blurb: "Megaliths, Sangam references, early dynasties" },
      { label: "Haleri Dynasty", to: "/haleri", blurb: "The Kingdom of Coorg, 1600s–1834" },
      { label: "Mysore Conflicts", to: "/mysore-conflicts", blurb: "Hyder Ali, 1782, Tipu Sultan" },
      { label: "The Coorg War of 1834", to: "/coorg-war-1834", blurb: "Annexation and the fall of the kingdom" },
      { label: "British Kodagu", to: "/british", blurb: "1834–1947, coffee and colonial rule" },
      { label: "Independence & Coorg State", to: "/independence", blurb: "1947, Part C State, 1956 merger" },
    ],
  },
  {
    title: "Culture",
    items: [
      { label: "The Kodava People", to: "/people", blurb: "Okka, ainmane, community" },
      { label: "Sacred Traditions", to: "/culture", blurb: "Ancestor veneration, Karana, kaimada" },
      { label: "Festivals", to: "/festivals", blurb: "Kailpodhud, Kaveri Sankramana, Puttari" },
      { label: "Agriculture", to: "/agriculture", blurb: "Paddy, coffee, pepper, cardamom" },
      { label: "Military Heritage", to: "/figures", blurb: "Cariappa, Thimayya and service" },
    ],
  },
  {
    title: "Language",
    items: [
      { label: "Kodava Takk", to: "/language", blurb: "ಕೊಡವ ತಕ್ಕ್ — classification to today" },
      { label: "Pattole Palame", to: "/pattole-palame", blurb: "The silken lore, 1924" },
      { label: "Kodava Literature", to: "/language", blurb: "Appacha Kavi and after" },
    ],
  },
  {
    title: "Archive",
    items: [
      { label: "Interactive Map", to: "/map", blurb: "Layered historical atlas" },
      { label: "Historical Figures", to: "/figures", blurb: "Searchable person database" },
      { label: "Places in History", to: "/map", blurb: "Forts, temples, settlements" },
      { label: "Image Credits", to: "/sources", blurb: "Source list and cited material" },
      { label: "Glossary", to: "/glossary", blurb: "Terms explained" },
      { label: "Myth, Tradition or History?", to: "/evidence", blurb: "How this archive weighs evidence" },
      { label: "Sources & Bibliography", to: "/sources", blurb: "Everything cited" },
      { label: "About the Project", to: "/about", blurb: "And the developer, Minteez" },
    ],
  },
];

export const allNavItems = navGroups.flatMap((g) => g.items);

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/sudo.minteez" },
  { label: "YouTube", href: "https://www.youtube.com/@thecubermint" },
  { label: "Portfolio", href: "https://minteez.lovable.app" },
];
