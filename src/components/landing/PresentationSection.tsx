import { useCountUp } from "@/hooks/useCountUp";
import aurelieImg from "@/assets/aurelie-hero.jpg";
import { ArrowRight, Play } from "lucide-react";

const PresentationSection = () => {
  const clients = useCountUp(200, 2000, "+");
  const satisfaction = useCountUp(94, 2000, "%");
  const experience = useCountUp(5, 1500, "+");
  const transformees = useCountUp(500, 2000, "+");

  const stats = [
    { ...experience, label: "Ans d'expérience" },
    { ...clients, label: "Clients accompagnés" },
    { ...satisfaction, label: "Taux de réussite" },
    { ...transformees, label: "Vies transformées" },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-[#07070a] overflow-hidden flex items-center">
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch max-w-6xl mx-auto w-full">
          
          {/* Left Column (Details & Stats) */}
          <div className="flex flex-col justify-between pr-0 lg:pr-4 section-fade h-full">
            <div>
              {/* Top Title & Main Description */}
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-white mb-6 tracking-wide">
                À propos <span className="opacity-70 font-normal">de moi</span>
              </h2>
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mb-16 md:mb-20 max-w-xl">
                Chez Lie Transformation Hub, je vous propose un accompagnement de confiance qui simplifie la 
                transformation personnelle et physique. Avec des années d'expérience, ma mission 
                est d'aider chacun à retrouver confiance, énergie et sérénité, tout en favorisant 
                une croissance durable et harmonieuse.
              </p>

              <p className="font-body text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                Coach certifiée en développement personnel et holistique, je simplifie la 
                complexité et vous guide avec assurance vers votre meilleure version.
              </p>

              <button className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors w-max text-sm text-white/90 font-medium mb-12 lg:mb-16 shadow-lg backdrop-blur-sm group">
                En savoir plus <ArrowRight size={16} className="text-white/70 group-hover:text-white transition-colors group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-auto">
              {/* Subtle Separator */}
              <div className="w-full h-px bg-white/10 mb-10"></div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {stats.map((stat, i) => (
                  <div key={i} ref={stat.ref} className="flex flex-col">
                    <div className="font-heading text-4xl md:text-[2.75rem] font-medium text-white mb-2 tracking-tight">
                      {stat.display}
                    </div>
                    <div className="font-body text-sm text-white/50 tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Image Card) */}
          <div className="relative w-full h-full min-h-[550px] lg:min-h-[auto] max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl section-fade">
            <img 
              src={aurelieImg} 
              alt="Aurélie, Coach certifiée" 
              className="absolute inset-0 w-full h-full object-cover object-top scale-x-[-1]"
              loading="lazy"
            />
            
            {/* Red overlay gradient mimicking the blue glow from the reference */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary))/0.6] to-transparent mix-blend-multiply opacity-80 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary))/0.4] to-transparent opacity-90 pointer-events-none"></div>
            
            {/* Play Button matching the reference format */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max">
               <button className="flex items-center gap-3 pr-5 pl-1.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 transition-all shadow-xl group">
                 <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[hsl(var(--primary))] shadow-inner group-hover:bg-white transition-colors">
                   <Play size={14} fill="currentColor" className="ml-0.5" />
                 </div>
                 Découvrir mon approche
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
