import Link from "next/link";
import { PHONE, PHONE_LINK, EMAIL } from "@/lib/contact";

type ProductCardProps = {
  brand: string;
  name: string;
  description: string;
  specs: string[];
  perfectFor: string;
  imageAlt: string;
  imageSrc?: string;
};

export function ProductCard({
  brand,
  name,
  description,
  specs,
  perfectFor,
  imageAlt,
  imageSrc,
}: ProductCardProps) {
  return (
    <article className="flex flex-col border border-stone-200 bg-white">
      <div className="relative h-40 w-full bg-stone-200">
        {imageSrc ? (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
            aria-hidden
          />
        ) : null}
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs font-semibold text-green-700">
          {brand}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-stone-900">{name}</h3>
        <p className="mt-1 text-sm text-stone-600">{description}</p>

        <ul className="mt-3 space-y-1 text-sm text-stone-600">
          {specs.map((spec) => (
            <li key={spec}>• {spec}</li>
          ))}
        </ul>

        <p className="mt-3 text-sm text-stone-600">
          <span className="font-semibold text-stone-900">Perfekt til:</span>{" "}
          {perfectFor}
        </p>

        <div className="mt-4 border-t border-stone-200 pt-3 text-sm text-stone-600">
          <p className="font-semibold text-green-700">
            Interesseret i denne tipvogn?
          </p>
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
            Få et tilbud på denne model →
          </Link>
        </div>
      </div>
    </article>
  );
}
