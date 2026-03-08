import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/contact";

export function ContactStrip() {
  return (
    <section className="mt-10 border border-stone-200 bg-green-50 px-4 py-6 sm:px-6 sm:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
            Brug for sparring omkring tipvogn?
          </h2>
          <p className="mt-1 max-w-xl text-sm text-stone-600">
            Ring, skriv eller udfyld formularen – vi vender hurtigt tilbage med
            en konkret anbefaling og et uforpligtende tilbud.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`tel:${PHONE_LINK}`}
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
          >
            Ring {PHONE}
          </a>
          <div className="text-sm text-stone-600">
            <p>
              Eller skriv til{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-green-700 hover:text-green-800"
              >
                {EMAIL}
              </a>
            </p>
            <Link
              href="/kontakt"
              className="mt-1 inline-block text-sm font-semibold text-green-700 hover:text-green-800"
            >
              Gå til kontaktformular →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
