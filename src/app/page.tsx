import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo/logo.png" 
              alt="SmartCoachIQ logo" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-semibold tracking-wide">SmartCoachIQ</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-white text-black">
        {/* Hero */}
        <section className="text-center py-20 px-6 border-b border-gray-200">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            La inteligencia detrás de tu equipo
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700">
            SmartCoachIQ es la plataforma que centraliza entrenamientos, 
            calendario, rendimiento físico y salud de tu plantilla en un único lugar.
          </p>
          <WaitlistForm />
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto py-16 px-6 grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            { title: "Entrenamientos", desc: "Planifica, ajusta y comparte sesiones personalizadas." },
            { title: "Calendario", desc: "Gestiona partidos, viajes y eventos con sincronización." },
            { title: "Desarrollo físico", desc: "Monitorea métricas de fuerza, resistencia y velocidad." },
            { title: "Desarrollo fisiológico", desc: "Evalúa bienestar, sueño y recuperación de jugadores." },
            { title: "Departamento médico", desc: "Historial de lesiones, informes y seguimiento clínico." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-gray-300 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </section>
        
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} SmartCoachIQ. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
