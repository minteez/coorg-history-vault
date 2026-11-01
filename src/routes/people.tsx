import { createFileRoute, Link } from "@tanstack/react-router";
import ainmaneImg from "@/assets/ainmane.jpg";
import { ArchiveFigure, InfoPanel, PageHeader, Pullquote, Section } from "@/components/site/Prose";
import { SourceRefs } from "@/components/site/SourceRefs";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "The Kodava People — Coorg History Archive" },
      {
        name: "description",
        content:
          "Okka, ainmane and nad: how Kodava society is organised, who else lives in Kodagu, and what the record does and does not establish about origins.",
      },
      { property: "og:title", content: "The Kodava people" },
      {
        property: "og:description",
        content: "Clan, ancestral house and land in Kodagu — with origin claims clearly labelled.",
      },
    ],
  }),
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Culture"
        title="The Kodava people"
        native="ಕೊಡವ"
        lede="Kodagu's historically dominant landholding community, organised around the patrilineal okka and its ancestral house. Kodagu has never been home to only one community, and this section tries to say so plainly."
      />

      <Section
        eyebrow="Society"
        title="Okka, ainmane, nad"
        level="documented"
        lede="Three units carry most of the social structure: the clan, the house that anchors it, and the territorial division above both."
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="prose-archive space-y-4 text-muted-foreground">
            <p>
              An <strong>okka</strong> is a patrilineal joint family holding ancestral land and name
              in common. Membership passes through the father's line; marriage within the okka is
              prohibited. The okka's ritual centre is the <strong>ainmane</strong>, the ancestral
              house, where births, marriages, death rites and festivals are observed and where the
              ancestors are addressed.
            </p>
            <p>
              Above the okka sat the <strong>nad</strong>, a grouping of villages with its own
              headman — the unit through which the Haleri kingdom and later the British
              administration actually governed. Land tenure in Kodagu was recognised in distinctive
              forms, and land, clan and identity are difficult to separate in the historical record.
            </p>
            <p>
              Kodagu's population also includes Kodava-speaking and Kannada-speaking communities of
              many kinds — Amma Kodava, Airi, Kembatti, Kudiya, Yerava, Kuruba and Gowda groups,
              Moplah and Muslim traders, Tulu and Malayali settlers, and the labour communities that
              came with coffee. Writing only about the Kodava would misdescribe the district.
            </p>
            <SourceRefs
              ids={["richter-gazetteer", "ainmanes-wiki", "sahapedia-kodagu", "census-2011-kodagu"]}
            />
          </div>
          <ArchiveFigure
            src={ainmaneImg}
            alt="A large traditional courtyard house with tiled roofs and a wide verandah"
            caption="An ainmane: courtyard, verandah and the raised place where ancestors are remembered."
            credit="Commissioned illustration for this project."
            note="Illustrative image, not a photograph of a named ainmane."
          />
        </div>
      </Section>

      <Section
        eyebrow="Origins"
        title="What is claimed, and what is established"
        className="border-y border-border bg-secondary/40"
        level="disputed"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="The popular theories" tone="caution">
            <p>
              Descent from Alexander's Greeks, from Scythians, from Arabs, from Kshatriya migrants
              from the north — each has been proposed, repeated in print, and none is supported by
              evidence that historians or geneticists treat as decisive. They are usually
              nineteenth- and twentieth-century constructions rather than old traditions.
            </p>
          </InfoPanel>
          <InfoPanel title="What can be said" tone="forest">
            <p>
              Kodava Takk is a Dravidian language of the South Dravidian group, and the community's
              institutions, kinship terms and ritual vocabulary are of a piece with the western
              Ghats region. Long local continuity is a reasonable reading of the linguistic and
              archaeological evidence; a distant single origin is not.
            </p>
          </InfoPanel>
        </div>
        <Pullquote cite="Editorial note">
          Origin stories are historical evidence about the people who tell them, not about the
          distant past they describe.
        </Pullquote>
        <SourceRefs
          ids={["krishnamurti-2003", "emeneau-kodagu", "richter-gazetteer", "sahapedia-kodagu"]}
          className="mt-6"
        />
      </Section>

      <Section eyebrow="Continue" title="Related sections">
        <ul className="grid gap-3 text-sm sm:grid-cols-3">
          <li className="archive-card p-5">
            <Link to="/culture" className="font-semibold text-primary hover:underline">
              Sacred traditions
            </Link>
            <p className="mt-1 text-muted-foreground">Ancestors, Karana and kaimada.</p>
          </li>
          <li className="archive-card p-5">
            <Link to="/festivals" className="font-semibold text-primary hover:underline">
              Festivals
            </Link>
            <p className="mt-1 text-muted-foreground">The three great observances.</p>
          </li>
          <li className="archive-card p-5">
            <Link to="/language" className="font-semibold text-primary hover:underline">
              Kodava Takk
            </Link>
            <p className="mt-1 text-muted-foreground">Classification, script and numbers.</p>
          </li>
        </ul>
      </Section>
    </main>
  );
}
