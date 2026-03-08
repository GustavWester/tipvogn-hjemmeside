import { UsedProductCard } from "@/components/UsedProductCard";
import { ContactStrip } from "@/components/ContactStrip";

export default function Brugt() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:py-12 lg:py-16">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
          Brugt
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
          Brugte tipvogne
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Vi har løbende brugte tipvogne på lager fra Smyth, Rolland,
          Herculano, Bossini og andre mærker. Udvalget ændrer sig hurtigt, så
          kontakt os for en opdateret liste eller hvis du søger noget bestemt.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-stone-900 sm:text-xl">
          Eksempler på brugte vogne
        </h2>
        <p className="max-w-2xl text-sm text-stone-600">
          Nedenfor ser du typiske eksempler på vores brugte vogne.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <UsedProductCard
            title="Smyth 16T kornvogn (brugt)"
            brand="Smyth"
            year="2017"
            condition="God, velholdt stand"
            notes="Klar til kampagne. Har kørt i dansk planteavl. Bremser og lys gennemgået."
            imageSrc="/photos/brugt-2017.jpg"
          />
          <UsedProductCard
            title="Rolland højvolumen til grovfoder (brugt)"
            brand="Rolland"
            year="2019"
            condition="Pæn stand"
            notes="Velegnet til grovfoder og majs. Har primært kørt på mark og gårdsplads."
            imageSrc="/photos/rolland-7840.jpg"
          />
          <UsedProductCard
            title="Herculano 14T allround (brugt)"
            brand="Herculano"
            year="2015"
            condition="Brugt men funktionel"
            notes="God mulighed for en stærk vogn til fornuftig pris. Perfekt som ekstra kapacitet."
            imageSrc="/photos/herculano-hmb-24.jpeg"
          />
        </div>
      </section>

      <section className="space-y-3 border border-stone-200 bg-stone-50 px-4 py-6 sm:px-6 sm:py-7">
        <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
          Søger du noget specifikt?
        </h2>
        <p className="max-w-2xl text-sm text-stone-600">
          Hvis du leder efter en bestemt model, størrelse eller mærke, så
          kontakt os. Vi har ofte kendskab til vogne, der er på vej ind – eller
          kan hjælpe med at finde den rigtige løsning til dig.
        </p>
      </section>

      <ContactStrip />
    </div>
  );
}

