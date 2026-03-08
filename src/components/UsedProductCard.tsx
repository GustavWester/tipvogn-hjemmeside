import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/contact";

type UsedProductCardProps = {
  title: string;
  brand: string;
  year?: string;
  condition: string;
  notes?: string;
  imageSrc?: string;
};

export function UsedProductCard({
  title,
  brand,
  year,
  condition,
  notes,
  imageSrc,
}: UsedProductCardProps) {
  return (
    <article className="flex flex-col border border-stone-200 bg-white">
      <div className="relative h-36 w-full bg-stone-200">
        {imageSrc ? (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
            aria-hidden
          />
        ) : null}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <span className="bg-amber-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-stone-900">
            Brugt
          </span>
          <span className="bg-white px-2 py-0.5 text-[10px] font-medium uppercase text-stone-700">
            {brand}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 text-sm text-stone-600">
        <h3 className="font-semibold text-stone-900">{title}</h3>
        <p className="mt-1">
          Stand: <span className="font-medium">{condition}</span>
        </p>
        {year ? (
          <p>
            Årgang: <span className="font-medium">{year}</span>
          </p>
        ) : null}
        {notes ? <p className="mt-1">{notes}</p> : null}

        <div className="mt-4 border-t border-stone-200 pt-3">
         
          <p className="mt-1">
            Ring{" "}
            <a
              href={`tel:${PHONE_LINK}`}
              className="font-semibold text-green-700 hover:text-green-800"
            >
              {PHONE}
            </a>{" "}
            eller skriv til{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold text-green-700 hover:text-green-800"
            >
              {EMAIL}
            </a>
            .
          </p>
          <Link
            href="/kontakt"
            className="mt-2 inline-block text-sm font-semibold text-green-700 hover:text-green-800"
          >
            Få et tilbud / flere oplysninger →
          </Link>
        </div>
      </div>
    </article>
  );
}
