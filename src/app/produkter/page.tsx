import { ProductCard } from "@/components/ProductCard";
import { ContactStrip } from "@/components/ContactStrip";

export default function Produkter() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:py-12 lg:py-16">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
          Produkter
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
          Tipvogne fra Smyth, Rolland, Herculano og Bossini.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Vi leverer tipvogne til alt fra intensiv planteavl til blandet
          landbrug og entreprenørkørsel. Herunder ser du eksempler på typiske
          løsninger – vi tilpasser altid vognen efter din traktor, dine marker
          og dine kampagner.
        </p>
      </section>

      <section className="space-y-6">
        <header className="space-y-1">
          <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
            Smyth – irske højkapacitetsvogne
          </h2>
          <p className="max-w-2xl text-sm text-stone-600">
            Smyth er kendt for stærke tipvogne til tung transport og lange
            kampagner, hvor der ikke er plads til stilstand.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <ProductCard
            brand="Smyth"
            name="Smyth 16T korn-/majsvogn"
            description="Kompakt, men stærk vogn til gårde med blandet drift og varierende afstand til mark."
            specs={[
              "Ca. 20–22 m³ kapacitet",
              "Tandemaksel med bremser",
              "Hydraulisk bagklap og kornlem",
            ]}
            perfectFor="Mellemstore planteavlere, kvægbrug og maskinstationer med skiftende opgaver."
            imageAlt="Smyth Fieldmaster FM18/FM20 tipvogn"
            imageSrc="/photos/smyth-fm18-fm20.jpg"
          />
          <ProductCard
            brand="Smyth"
            name="Smyth 18T højvolumen"
            description="Populær størrelse til intensive kampagner, hvor hvert læs tæller."
            specs={[
              "Ca. 24–26 m³ kapacitet",
              "Kraftig tipcylinder og solid ramme",
              "Mulighed for forskellige dæk- og akselløsninger",
            ]}
            perfectFor="Planteavlere med store arealer og maskinstationer med fokus på høj kapacitet."
            imageAlt="Smyth Fieldmaster FM24/FM26 tipvogn"
            imageSrc="/photos/smyth-fm24-fm26.jpg"
          />
          <ProductCard
            brand="Smyth"
            name="Smyth 20T kampagnevogn"
            description="Til bedrifter og stationer, hvor der flyttes rigtig mange tons hver sæson."
            specs={[
              "Ekstra stor volumen",
              "Forstærket undervogn til tung kørsel",
              "LED-lys og moderne sikkerhedsudstyr",
            ]}
            perfectFor="Store planteavlere og entreprenører med intensiv korn-, majs- og roetransport."
            imageAlt="Smyth Fieldmaster FM30 4-akslet tipvogn"
            imageSrc="/photos/smyth-fm30.jpg"
          />
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-1">
          <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
            Rolland – fransk komfort og kapacitet
          </h2>
          <p className="max-w-2xl text-sm text-stone-600">
            Rolland tilbyder tipvogne med fokus på kørekomfort, kapacitet og
            fleksible opbygninger.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <ProductCard
            brand="Rolland"
            name="Rolland højvolumen til grovfoder"
            description="Let konstruktion med stor kasse til volumeniøse afgrøder."
            specs={[
              "Let, men stærk overbygning",
              "Stabil undervogn til ujævne markveje",
              "Fleksible sider og bagklap",
            ]}
            perfectFor="Grovfoder, majs og lette afgrøder til kvægbrug og maskinstationer."
            imageAlt="Rolland 7840 tipvogn"
            imageSrc="/photos/rolland-7840.jpg"
          />
          <ProductCard
            brand="Rolland"
            name="Rolland kombivogn"
            description="Vogn til dig, der vil kunne håndtere både korn, grovfoder og entreprenøropgaver."
            specs={[
              "Fleksibel opbygning",
              "Valgfrie sider og ekstraudstyr",
              "Komfortorienteret aksel- og dækløsning",
            ]}
            perfectFor="Blandet bedrift med både planteavl, grovfoder og entreprenørkørsel."
            imageAlt="Rolland kombivogn"
            imageSrc="/photos/rolland-7840.jpg"
          />
          <ProductCard
            brand="Rolland"
            name="Rolland stor kampagnevogn"
            description="Til de helt store volumener, hvor logistikken skal spille."
            specs={[
              "Høj totalvægt og volumen",
              "Hydraulisk affjedring afhængig af model",
              "LED-lys og moderne sikkerhed",
            ]}
            perfectFor="Store planteavlere og maskinstationer med intens logistik."
            imageAlt="Rolland 7840 tipvogn"
            imageSrc="/photos/rolland-7840.jpg"
          />
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-1">
          <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
            Herculano – alsidige allround-vogne
          </h2>
          <p className="max-w-2xl text-sm text-stone-600">
            Herculano leverer solide tipvogne til bedrifter, hvor vognen skal
            kunne lidt af det hele året rundt.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <ProductCard
            brand="Herculano"
            name="Herculano 12–14T allround"
            description="God standardvogn til blandet landbrug og mindre entreprenøropgaver."
            specs={[
              "Flere størrelser omkring 12–14T",
              "Enkelt- eller tandemaksel afhængig af model",
              "Robust kasse og ramme",
            ]}
            perfectFor="Mindre og mellemstore bedrifter, hvor vognen bruges til mange forskellige opgaver."
            imageAlt="Herculano HMB 24 RG DK tipvogn"
            imageSrc="/photos/herculano-hmb-24.jpeg"
          />
          <ProductCard
            brand="Herculano"
            name="Herculano 16T"
            description="Til dig, der ønsker lidt ekstra kapacitet uden at gå på kompromis med fleksibiliteten."
            specs={[
              "Ca. 18–20 m³ kapacitet",
              "Mulighed for forskellige dæktyper",
              "Hydraulisk bagklap",
            ]}
            perfectFor="Planteavlere og kvægbrug med fokus på robusthed og enkel drift."
            imageAlt="Herculano HMB 24 tipvogn"
            imageSrc="/photos/herculano-hmb-24.jpeg"
          />
          <ProductCard
            brand="Herculano"
            name="Herculano entreprenørvogn"
            description="Forstærket model til entreprenørkørsel og tungere materialer."
            specs={[
              "Forstærket bund og sider",
              "Kraftig undervogn",
              "Tilpasningsmuligheder efter opgave",
            ]}
            perfectFor="Entreprenører og landmænd med behov for både landbrugs- og entreprenørkørsel."
            imageAlt="Herculano HMB 24 tipvogn"
            imageSrc="/photos/herculano-hmb-24.jpeg"
          />
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-1">
          <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
            Bossini – italiensk kvalitet og finish
          </h2>
          <p className="max-w-2xl text-sm text-stone-600">
            Bossini kombinerer robust opbygning med høj finish – til både
            landbrugs- og entreprenørkørsel.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <ProductCard
            brand="Bossini"
            name="Bossini allround tipvogn"
            description="En fleksibel løsning, hvor der er tænkt over både funktion og udseende."
            specs={[
              "Flere størrelser og opbygninger",
              "Moderne lys- og sikkerhedsudstyr",
              "Gennemført finish på svejsninger og detaljer",
            ]}
            perfectFor="Bedrifter, der ønsker en præsentabel og robust vogn til både gårdsplads og vej."
            imageAlt="Bossini allround tipvogn"
          />
          <ProductCard
            brand="Bossini"
            name="Bossini højvolumen"
            description="Stor kapacitet til lette afgrøder og grovfoder."
            specs={[
              "Høj kasse til volumeniøse læs",
              "Komfortabel undervogn",
              "Mulighed for udstyrspakker",
            ]}
            perfectFor="Store kvægbrug og maskinstationer med fokus på grovfoder."
            imageAlt="Bossini højvolumen tipvogn"
          />
          <ProductCard
            brand="Bossini"
            name="Bossini entreprenørvogn"
            description="Til entreprenøropgaver, hvor vognen må tage nogle tæsk."
            specs={[
              "Forstærket bund og sider",
              "Kraftig tipcylinder",
              "Mulighed for ekstraudstyr til byggeplads og vej",
            ]}
            perfectFor="Entreprenører og landmænd med tunge materialer i vognen."
            imageAlt="Bossini entreprenørvogn"
          />
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}

