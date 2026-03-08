import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/contact";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-green-700 text-white font-semibold">
            T
          </div>
          <div className="leading-tight">
            <Link href="/" className="text-lg font-semibold text-stone-900">
              Tipvogn.dk
            </Link>
            <p className="text-xs text-stone-500">
              Tipvogne til professionelle landmænd
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
          <Link href="/" className="hover:text-stone-900">
            Forside
          </Link>
          <Link href="/produkter" className="hover:text-stone-900">
            Produkter
          </Link>
          <Link href="/brugt" className="hover:text-stone-900">
            Brugt
          </Link>
          <Link href="/kontakt" className="hover:text-stone-900">
            Kontakt
          </Link>
        </nav>

        <div className="text-right text-xs sm:text-sm">
          <a
            href={`tel:${PHONE_LINK}`}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Tlf. {PHONE}
          </a>
          <br />
          <a href={`mailto:${EMAIL}`} className="text-stone-600 hover:text-stone-900">
            {EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-stone-200 bg-stone-50 md:hidden">
        <nav className="mx-auto flex max-w-6xl justify-between px-4 py-2 text-sm font-medium text-stone-700">
          <Link href="/" className="hover:text-stone-900">
            Forside
          </Link>
          <Link href="/produkter" className="hover:text-stone-900">
            Produkter
          </Link>
          <Link href="/brugt" className="hover:text-stone-900">
            Brugt
          </Link>
          <Link href="/kontakt" className="hover:text-stone-900">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
