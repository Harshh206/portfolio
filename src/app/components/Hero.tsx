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
          Graduate | Aspiring AI/ML Engineer
        </h2>
        <p className="mb-8 text-slate-400 max-w-3xl mx-auto text-base leading-7 text-foreground/70 tracking-wide ">
          Recent graduate passionate about building
          innovative, AI-driven web solutions. Eager to apply my skills in
          Python, generative AI frameworks, and intelligent application
          development to create meaningful and impactful digital experiences.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-primary-foreground transition-all duration-200 hover:scale-105 hover:opacity-90">
            View My Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full text-blue-500 px-6 py-3 border border-slate-600 bg-transparent  transition-all duration-200 hover:scale-105 hover:bg-[#4a9eff25] hover:text-white">
            Get In Touch
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