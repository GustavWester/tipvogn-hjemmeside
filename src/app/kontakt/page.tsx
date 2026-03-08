import { ContactForm } from "@/components/ContactForm";
import { PHONE, PHONE_LINK, EMAIL, ADDRESS_LINE1, ADDRESS_LINE2 } from "@/lib/contact";

export default function Kontakt() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:py-12 lg:py-16">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
          Kontakt
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
          Kontakt os for rådgivning og et konkret tilbud.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Udfyld formularen, ring eller send en mail – så vender vi hurtigt
          tilbage. Jo mere du fortæller om din bedrift og dine behov, jo bedre
          kan vi ramme den rigtige tipvogn til dig.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4 text-sm text-stone-600">
          <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
            Direkte kontakt
          </h2>
          <p>
            Tlf.{" "}
            <a
              href={`tel:${PHONE_LINK}`}
              className="font-semibold text-green-700 hover:text-green-800"
            >
              {PHONE}
            </a>
          </p>
          <p>
            Mail:{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold text-green-700 hover:text-green-800"
            >
              {EMAIL}
            </a>
          </p>
          <p className="pt-2">
            Mandag–fredag kl. 8–16 (vejledende). Læg gerne en besked eller send
            en mail uden for åbningstid – vi vender tilbage.
          </p>

          <div className="mt-4 space-y-1">
            <p className="font-semibold text-stone-900">Adresse</p>
            <p>Tipvogn.dk</p>
            <p>{ADDRESS_LINE1}</p>
            <p>{ADDRESS_LINE2}</p>
          </div>

          <div className="mt-6 border border-stone-200 bg-stone-50 p-4 text-sm">
            <p className="font-semibold text-stone-900">
              Hvad hjælper det at fortælle?
            </p>
            <p className="mt-1">
              F.eks. areal, jordtyper, hovedafgrøder, hvad vognen primært skal
              bruges til (korn, majs, grovfoder, entreprenør, mv.) og hvilken
              traktor den skal gå bag.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="border border-stone-200 bg-stone-50 px-4 py-5 text-sm text-stone-600 sm:px-6 sm:py-6">
        <p className="font-semibold text-stone-900">
          Foretrækker du at ringe?
        </p>
        <p className="mt-1">
          Så tager vi snakken i telefonen og følger op med et skriftligt tilbud
          bagefter.
        </p>
      </section>
    </div>
  );
}

