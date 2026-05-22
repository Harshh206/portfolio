import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center
        bg-[linear-gradient(135deg,#000_0%,#24254f_40%,#24254f_60%,#000_100%)] text-foreground text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold animate-[fadeInDown_0.8s_ease-out], md:text-6xl">
          Hi, I'm{" "}
          <span className="text-blue-400 tracking-wide">Harsh Patel</span>
        </h1>
        <h2 className="mb-6 text-neutral-200 text-xl font-normal tracking-wide text-muted-foreground md:text-2xl tracking-wide">
          Aspiring AI/ML Engineer
        </h2>
        {/* <p className="mb-8 text-slate-400 max-w-3xl mx-auto text-base leading-7 text-foreground/70 tracking-wide ">
          Recent graduate passionate about building innovative, AI-driven web
          solutions. Eager to apply my skills in Python, generative AI
          frameworks, intelligent application development and and modern web
          technologies to create meaningful and impactful digital experiences.
        </p> */}
        <p className="mb-8 text-slate-400 max-w-2xl mx-auto text-base leading-7 text-foreground/70 tracking-wide ">
          Passionate about building innovative, AI-driven web solutions. Eager
          to create meaningful digital experiences with Python, GenAI, and
          modern web technologies.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-primary-foreground transition-all duration-200 hover:scale-105 hover:opacity-90">
            View My Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full text-blue-500 px-6 py-3 border border-slate-600 bg-transparent  transition-all duration-200 hover:scale-105 hover:bg-[#E9E4F0] hover:text-black">
            Let's connect
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8  text-muted-foreground" />
      </a>
    </section>
  );
}