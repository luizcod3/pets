// app/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse space-y-16 p-6">
      {/* HERO */}
      <section className="space-y-4">
        <div className="h-10 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-12 bg-gray-300 rounded w-40"></div>
        <div className="h-64 bg-gray-300 rounded w-full"></div>
      </section>

      {/* SOBRE */}
      <section className="space-y-4">
        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </section>

      {/* SERVIÇOS */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-10 bg-gray-300 rounded w-32"></div>
          </div>
        ))}
      </section>

      {/* TESTEMUNHOS */}
      <section className="space-y-6">
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </footer>
    </div>
  );
}
