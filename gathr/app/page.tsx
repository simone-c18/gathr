export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          gathr
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          find local events and see which friends are actually free to go
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/dashboard"
            className="rounded-lg bg-black px-5 py-3 text-white font-medium"
          >
            view dashboard
          </a>

          <a
            href="/events"
            className="rounded-lg border px-5 py-3 font-medium"
          >
            browse events
          </a>
        </div>
      </section>
    </main>
  );
}