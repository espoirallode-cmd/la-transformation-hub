import { Sparkles } from "lucide-react";
import FloatingLines from "./FloatingLines";
import ScrollVelocity from "./ScrollVelocity";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-0 bg-background">
      {/* 3D Floating Lines Animated Background */}
      <FloatingLines
        linesGradient={['#ff4b5c', '#cc0000', '#8a0a1a']}
        animationSpeed={1.5}
        interactive={true}
        parallax={true}
        mixBlendMode="screen"
      />

      {/* Main centered content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10 w-full max-w-5xl mt-6 flex-1">

        {/* Top Badge / Pill */}
        <div className="section-fade flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 whitespace-nowrap max-w-[95vw]">
          <span className="text-[12px] sm:text-sm font-medium text-white/90">Plus de 500 personnes transformées</span>
          <div className="flex -space-x-1.5 sm:-space-x-2 shrink-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-white bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-white bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-white bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=9" alt="Avatar" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="section-fade font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8">
          {/* Version Desktop */}
          <span className="hidden sm:block">Reprenez le pouvoir<br />sur votre vie</span>
          {/* Version Mobile */}
          <span className="sm:hidden">Reprenez le pouvoir sur<br />votre vie</span>
        </h1>

        {/* Subtitle */}
        <p className="section-fade font-body text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
          Vous méritez de vous sentir bien dans votre corps et dans votre tête.
          Je vous accompagne dans une transformation profonde, douce et durable.
        </p>

        {/* Buttons */}
        <div className="section-fade flex flex-col sm:flex-row items-center justify-center gap-4 mb-0 w-full">
          <a href="#cta-final" className="cta-button flex items-center justify-center rounded-full px-8 py-3.5 w-full sm:w-[220px] text-base text-white">
            Contactez-moi
          </a>
          <a href="#about" className="flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-base transition-all duration-300 w-full sm:w-[220px] backdrop-blur-sm">
            Mes services
          </a>
        </div>

      </div>

      {/* ScrollVelocity — placé DIRECTEMENT dans la section, hors du conteneur overflow */}
      <div className="relative z-10 w-full py-16">
        <ScrollVelocity
          texts={[
            <div className="flex items-center gap-16 pr-16">
              <div className="flex items-center gap-3 font-heading font-semibold text-white/50 text-xl md:text-2xl lg:text-3xl cursor-default">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white/40" strokeWidth={1.5} /> Neurosciences
              </div>
              <div className="flex items-center gap-3 font-heading font-semibold text-white/50 text-xl md:text-2xl lg:text-3xl cursor-default">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white/40" strokeWidth={1.5} /> Certifiée PNL
              </div>
              <div className="flex items-center gap-3 font-heading font-semibold text-white/50 text-xl md:text-2xl lg:text-3xl cursor-default">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white/40" strokeWidth={1.5} /> Holistique
              </div>
              <div className="flex items-center gap-3 font-heading font-semibold text-white/50 text-xl md:text-2xl lg:text-3xl cursor-default">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white/40" strokeWidth={1.5} /> Master Coach
              </div>
            </div>
          ]}
          velocity={50}
        />
      </div>

    </section>
  );
};

export default HeroSection;
