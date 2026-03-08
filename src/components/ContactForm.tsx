export function ContactForm() {
  return (
    <form
      action="mailto:info@tipvogn.dk"
      method="POST"
      encType="text/plain"
      className="space-y-4 border border-stone-200 bg-white p-4 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="navn" className="block text-sm font-medium text-stone-700">
            Navn
          </label>
          <input
            id="navn"
            name="Navn"
            type="text"
            required
            className="w-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            placeholder="Dit navn"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="telefon" className="block text-sm font-medium text-stone-700">
            Telefon
          </label>
          <input
            id="telefon"
            name="Telefon"
            type="tel"
            required
            className="w-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            placeholder="Dit telefonnummer"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-medium text-stone-700">
          E-mail
        </label>
        <input
          id="email"
          name="E-mail"
          type="email"
          required
          className="w-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          placeholder="din@mail.dk"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="emne" className="block text-sm font-medium text-stone-700">
          Emne
        </label>
        <select
          id="emne"
          name="Emne"
          className="w-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        >
          <option>Ny tipvogn</option>
          <option>Brugt tipvogn</option>
          <option>Reservedele / service</option>
          <option>Andet</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="besked" className="block text-sm font-medium text-stone-700">
          Besked
        </label>
        <textarea
          id="besked"
          name="Besked"
          rows={5}
          className="w-full border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          placeholder="Fortæl kort om din bedrift og hvad du søger..."
        />
      </div>

      <p className="text-xs text-stone-500">
        Vi bruger kun dine oplysninger til at kontakte dig om din forespørgsel.
      </p>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-green-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-800 sm:w-auto"
      >
        Send forespørgsel
      </button>
    </form>
  );
}
