import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL, ADDRESS_LINE1, ADDRESS_LINE2 } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-6 text-sm text-stone-600 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="font-semibold text-stone-900">Tipvogn.dk</h2>
            <p className="mt-2 max-w-sm">
              Robust udstyr til danske landmænd. Vi hjælper dig med at finde den
              rigtige tipvogn til din bedrift.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-stone-900">Kontakt</h3>
            <p className="mt-2">
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
                className="text-green-700 hover:text-green-800"
              >
                {EMAIL}
              </a>
            </p>
            <p className="mt-2 text-stone-500">
              Mandag–fredag kl. 8–16 (vejledende).
            </p>
          </div>
          <div className="text-stone-500">
            <p>{ADDRESS_LINE1}</p>
            <p className="mt-1">{ADDRESS_LINE2}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tipvogn.dk. Alle rettigheder forbeholdes.</p>
          <p>Ingen webshop – kontakt os for tilbud.</p>
        </div>
      </div>
    </footer>
  );
}
