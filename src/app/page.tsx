import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/contact";

const uspItems = [
  {
    title: "Bygget til dansk landbrug",
    body: "Tipvogne til tunge marker, lange kampagner og skiftende forhold.",
  },
  {
    title: "Kvalitetsmærker",
    body: "Smyth, Rolland, Herculano og Bossini – udstyr vi selv stoler på i marken.",
  },
  {
    title: "Rådgivning og service",
    body: "Vi hjælper dig med at vælge den rigtige vogn.",
  },
];

const brands = [
  {
    name: "Smyth",
    description:
      "Irske tipvogne til tung kørsel, store laster og krævende entreprenøropgaver.",
  },
  {
    name: "Rolland",
    description:
      "Franske vogne med fokus på komfort, kapacitet og fleksible løsninger.",
  },
  {
    name: "Herculano",
    description:
      "Portugisiske tipvogne til alsidige landbrugsopgaver og blandet drift.",
  },
  {
    name: "Bossini",
    description:
      "Italiensk kvalitet til både landbrugs- og entreprenørkørsel med høj finish.",
  },
];

export default function Home() {
  return (
    <>
      {/* Stort banner med tipvogn-billedet – fylder meget på forsiden */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] bg-stone-300">
        // To this:
        <div
         className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/tipvogn-hjemmeside/photos/hero.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] sm:min-h-[60vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-20 sm:pb-14">
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Robuste tipvogne til hårdt arbejde
          </h1>
          <p className="mt-2 max-w-xl text-base text-white/95 drop-shadow sm:text-lg">
            Til landmænd og entreprenører.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/produkter"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-base font-semibold text-white hover:bg-green-800"
            >
              Vores Produkter
            </Link>
            <a
              href="/kontakt"
              className="text-base font-semibold text-white hover:underline"
            >
              Kontakt Os
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <section className="grid gap-8 sm:grid-cols-3">
          {uspItems.map((usp) => (
            <div
              key={usp.title}
              className="border border-stone-200 bg-white p-5"
            >
              <h3 className="font-semibold text-stone-900">{usp.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{usp.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold text-stone-900">
            Mærker vi arbejder med
          </h2>
          <p className="mt-1 max-w-xl text-sm text-stone-600">
            Vi har udvalgt mærker, der holder til virkeligheden i dansk
            landbrug – både på marken, på gårdspladsen og på vejen.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <article
                key={brand.name}
                className="border border-stone-200 bg-white p-4"
              >
                <h3 className="font-semibold text-stone-900">{brand.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{brand.description}</p>
                <Link
                  href="/produkter"
                  className="mt-3 inline-block text-sm font-medium text-green-700 hover:text-green-800"
                >
                  Se tipvogne fra {brand.name} →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/produkter"
              className="text-sm font-semibold text-green-700 hover:text-green-800"
            >
              Se alle produkter →
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold text-stone-900">
            Udvalgte tipvogne
          </h2>
          <p className="mt-1 max-w-xl text-sm text-stone-600">
            Et udsnit af populære løsninger. Alle vogne tilpasses din traktor,
            din drift og dine kampagner.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="border border-stone-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                Smyth
              </p>
              <h3 className="mt-1 font-semibold text-stone-900">
                18T korn-/majsvogn
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-stone-600">
                <li>• Ca. 24–26 m³ kapacitet</li>
                <li>• Tandemaksel med bremser</li>
                <li>• Hydraulisk bagklap og kraftig tipcylinder</li>
              </ul>
              <p className="mt-3 text-sm text-stone-600">
                Perfekt til intensiv korn- og majslogistik.
              </p>
              <p className="mt-2 text-sm text-green-700">
                Interesseret? Ring {PHONE} eller skriv til {EMAIL}.
              </p>
            </article>
            <article className="border border-stone-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                Rolland
              </p>
              <h3 className="mt-1 font-semibold text-stone-900">
                Højvolumen tipvogn til grovfoder
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-stone-600">
                <li>• Stor overbygning til lette afgrøder</li>
                <li>• Stabil undervogn til ujævne markveje</li>
                <li>• Hydrauliske støtteben og LED-lys</li>
              </ul>
              <p className="mt-3 text-sm text-stone-600">
                Til større kvægbrug og maskinstationer.
              </p>
              <p className="mt-2 text-sm text-green-700">
                Få et tilbud – ring {PHONE} eller send en mail.
              </p>
            </article>
            <article className="border border-stone-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                Herculano & Bossini
              </p>
              <h3 className="mt-1 font-semibold text-stone-900">
                Allround-vogne til blandet drift
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-stone-600">
                <li>• Flere størrelser og opbygninger</li>
                <li>• Velegnet til korn, roer og entreprenørkørsel</li>
                <li>• Udvalg af dæk- og akselløsninger</li>
              </ul>
              <p className="mt-3 text-sm text-stone-600">
                God løsning, hvor vognen skal kunne lidt af det hele.
              </p>
              <p className="mt-2 text-sm text-green-700">
                Kontakt os for at finde den rigtige model til din gård.
              </p>
            </article>
          </div>
        </section>
{/*
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-stone-900">
            Hvad siger landmændene?
          </h2>
          <p className="mt-1 max-w-xl text-sm text-stone-600">
            Korte, ærlige tilbagemeldinger fra hverdagen – hvor vognen skal
            fungere, når vejret og høsten bestemmer tempoet.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <figure className="border border-stone-200 bg-white p-4 text-sm text-stone-600">
              <p>
                "Vi kører mange timer i sæsonen. Tipvognen skal bare virke – og
                det gør den."
              </p>
              <figcaption className="mt-3 text-xs text-stone-500">
                – Mælkeproducent, Midtjylland
              </figcaption>
            </figure>
            <figure className="border border-stone-200 bg-white p-4 text-sm text-stone-600">
              <p>
                "God sparring omkring valg af størrelse og dæk. Vi har fået en
                vogn, der passer til vores maskinpark."
              </p>
              <figcaption className="mt-3 text-xs text-stone-500">
                – Planteavler, Sjælland
              </figcaption>
            </figure>
            <figure className="border border-stone-200 bg-white p-4 text-sm text-stone-600">
              <p>
                "Når vi ringer, får vi fat i nogen, der kender udstyret – ikke en
                webshop."
              </p>
              <figcaption className="mt-3 text-xs text-stone-500">
                – Maskinstation, Nordjylland
              </figcaption>
            </figure>
          </div>
        </section>
*/}
        <section className="mt-16 border border-stone-200 bg-green-50 px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-stone-900">
                Klar til at snakke tipvogn?
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                Ring eller skriv, vi vender hurtigt tilbage!
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-base font-semibold text-white hover:bg-green-800"
              >
                Ring {PHONE}
              </a>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-green-700 hover:text-green-800"
              >
                Eller skriv en forespørgsel →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
