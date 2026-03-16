import { CheckCircle2, ChevronRight, Square, CheckSquare } from "lucide-react";
import { useState } from "react";

const OffersSection = () => {
  const [includeAddon, setIncludeAddon] = useState(false);

  return (
    <section id="offres" className="py-20 md:py-32 bg-[#07070a] relative overflow-hidden">
      {/* Background glow effects to mimic the image's space nebula look */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 section-fade max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Choisissez le
            <br />
            parcours qui vous correspond
          </h2>
          <p className="font-body text-white/50 text-base md:text-lg">
            Mon approche est adaptable. Commencez en douceur avec l'offre Éveil, ou passez à la vitesse supérieure avec la Métamorphose pour une transformation profonde et accompagnée.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 max-w-6xl mx-auto">
          
          {/* Card 1: Éveil (Left) */}
          <div className="w-full lg:w-[320px] bg-[#07070a] rounded-[20px] border border-white/10 p-8 shadow-2xl z-10 transform lg:translate-x-4 transition-transform hover:z-30 hover:scale-[1.02]">
            <h3 className="text-white font-heading text-2xl font-bold mb-2">Éveil</h3>
            <p className="text-white/50 text-sm mb-6 min-h-[40px]">L'idéal pour débuter et poser les bases de votre transformation.</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-white text-4xl font-bold">197€</span>
              <span className="text-white/50 text-sm">/ mois</span>
            </div>
            
            <div className="w-full h-px bg-white/5 mb-6" />

            <p className="text-white/80 text-sm mb-4 font-medium">Ce qui est inclus</p>
            <ul className="space-y-4 mb-8">
              {[
                "2 séances de coaching",
                "Plan d'action personnalisé",
                "Support par email",
                "Accès au groupe privé",
                "Ressources & exercices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                  <CheckCircle2 className="w-[18px] h-[18px] text-white/40 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#cta-final" className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
              Commencer <ChevronRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Card 2: Métamorphose (Center - PRO) */}
          <div className="w-full lg:w-[380px] bg-[#07070a] rounded-[20px] border border-primary/40 p-10 shadow-[0_0_80px_rgba(204,34,0,0.15)] z-20 relative transform transition-transform hover:scale-105">
            {/* Top inner glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[4px] bg-primary/20 blur-[4px]" />
            
            <h3 className="text-white font-heading text-[32px] font-bold mb-3">Métamorphose</h3>
            <p className="text-white/60 text-sm mb-8 min-h-[40px]">Débloquez un nouveau niveau d'énergie physique et mentale.</p>
            
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-white text-5xl font-bold">397€</span>
                <span className="text-white/50 text-sm">/ mois</span>
              </div>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold tracking-wide">
                POPULAIRE
              </span>
            </div>

            <div className="w-full h-px bg-white/5 mb-6" />

            <p className="text-white/80 text-sm mb-4 font-medium">Ce qui est inclus</p>
            <ul className="space-y-4 mb-8">
              {[
                "Tout ce qui est dans Éveil",
                "4 séances de coaching",
                "Plan nutrition personnalisé",
                "Accès WhatsApp illimité",
                "Suivi hebdomadaire",
                "Méditations guidées",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-[18px] h-[18px] text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Checkbox Addon */}
            <div 
              className="mb-8 p-3 rounded-lg border border-white/10 bg-black/20 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors" 
              onClick={() => setIncludeAddon(!includeAddon)}
            >
              <div className="flex items-center gap-3">
                {includeAddon ? (
                  <CheckSquare className="w-[18px] h-[18px] text-primary" />
                ) : (
                  <Square className="w-[18px] h-[18px] text-white/40" />
                )}
                <span className="text-white/80 text-sm">Séance Flash Urgence</span>
              </div>
              <span className="text-white/50 text-xs">+ 97€ / mois</span>
            </div>

            <a href="#cta-final" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-white hover:bg-gray-100 text-black font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              S'inscrire <ChevronRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Card 3: Renaissance (Right) */}
          <div className="w-full lg:w-[320px] bg-[#07070a] rounded-[20px] border border-white/10 p-8 shadow-2xl z-10 transform lg:-translate-x-4 transition-transform hover:z-30 hover:scale-[1.02]">
            <h3 className="text-white font-heading text-2xl font-bold mb-2">Renaissance</h3>
            <p className="text-white/50 text-sm mb-6 min-h-[40px]">Un accompagnement sur-mesure pour un renouveau total.</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-white text-4xl font-bold">697€</span>
              <span className="text-white/50 text-sm">/ mois</span>
            </div>

            <div className="w-full h-px bg-white/5 mb-6" />
            
            <p className="text-white/80 text-sm mb-4 font-medium">Ce qui est inclus</p>
            <ul className="space-y-4 mb-8">
              {[
                "Tout ce qui est dans Métamo.",
                "Séances illimitées",
                "Accès prioritaire 7j/7",
                "Retraite bien-être",
                "Coaching en duo",
                "Suivi à vie",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                  <CheckCircle2 className="w-[18px] h-[18px] text-white/40 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#cta-final" className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
              Commencer <ChevronRight className="w-4 h-4 opacity-70" />
            </a>
          </div>
          
        </div>

        {/* Bottom Contact Pill */}
        <div className="mt-16 flex justify-center">
          <a href="#cta-final" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:text-white transition-colors">
            Besoin d'un accompagnement d'entreprise ? <span className="font-semibold text-white ml-1">Contactez-nous &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
