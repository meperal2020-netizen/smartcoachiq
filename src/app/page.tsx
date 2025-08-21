import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

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
            <span className="brand-logo-alt">SmartCoach IQ</span>

          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-white text-black">
        {/* Hero */}
        <section className="relative min-h-[60vh] border-b border-gray-200">
          {/* Imagen optimizada */}
          <Image
            src="/images/main/staff-meeting.png"   // o .png si aún no la convertiste
            alt="Staff técnico preparando entrenamiento"
            fill
            priority
            quality={70}           // compresión extra (0–100)
            sizes="100vw"          // ancho completo de pantalla
            className="object-cover"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-white">
              La inteligencia detrás de tu equipo
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200">
              La plataforma que centraliza entrenamientos, calendario, rendimiento físico y salud de tu plantilla en un único lugar.
            </p>
            <WaitlistForm />
          </div>
        </section>


        {/* About */}
        <section className="max-w-3xl mx-auto py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Sobre SmartCoachIQ</h2>
          <p className="text-gray-700">
            Nacemos para revolucionar la gestión de equipos de fútbol con herramientas inteligentes de 
            planificación, análisis y bienestar. Una solución para entrenadores, jugadores y staff que 
            quieran ir más allá de las hojas de cálculo y WhatsApp.
          </p>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto py-16 px-6 grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            { title: "Entrenamientos", desc: "Planifica y comparte sesiones personalizadas." },
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
      <footer className="bg-black text-white text-center py-8">
        <p className="mb-2 text-sm">
          © {new Date().getFullYear()} SmartCoachIQ. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/" target="_blank" className="text-white hover:text-gray-400">Twitter</a>
          <a href="https://linkedin.com/" target="_blank" className="text-white hover:text-gray-400">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
