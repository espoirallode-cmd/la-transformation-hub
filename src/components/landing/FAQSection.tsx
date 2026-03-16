import { useState } from "react";

const faqs = [
  {
    q: "À qui s'adresse cet accompagnement ?",
    a: "Mon coaching s'adresse à toute personne qui souhaite retrouver confiance en elle, se sentir mieux dans son corps et transformer durablement ses habitudes. Aucun prérequis n'est nécessaire.",
  },
  {
    q: "Combien de temps dure un accompagnement ?",
    a: "La durée dépend de vos objectifs. En général, je recommande un minimum de 3 mois pour observer des résultats profonds et durables. Vous êtes libre d'arrêter à tout moment.",
  },
  {
    q: "Les séances se font-elles en ligne ou en présentiel ?",
    a: "Les séances se font principalement en visio (Zoom), ce qui permet de vous accompagner partout en France et en Belgique. Des séances en présentiel sont possibles sur demande.",
  },
  {
    q: "Est-ce que je dois suivre un régime strict ?",
    a: "Absolument pas. Mon approche est anti-régime. Nous travaillons ensemble sur votre relation à la nourriture, votre mental et votre bien-être global, sans privation ni frustration.",
  },
  {
    q: "Comment savoir si c'est fait pour moi ?",
    a: "Le meilleur moyen est de réserver un appel découverte gratuit. C'est un moment d'échange sans engagement où nous verrons ensemble si mon accompagnement correspond à vos besoins.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#07070a]">
      <style>{`
        @keyframes grid-move-faq {
          0%   { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }
        .faq-card {
          --accent-color: hsl(var(--primary));
          --accent-glow: hsl(var(--primary) / 0.30);
          background-color: #07070a;
          border: 1px solid #1f2937;
          border-radius: 16px;
          padding: 0;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 24px -1px rgba(0,0,0,0.3);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
          z-index: 1;
        }
        .faq-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 20px 40px -5px rgba(0,0,0,0.5), 0 0 0 1px hsl(var(--primary) / 0.3);
          border-color: hsl(var(--primary) / 0.5);
        }
        .faq-card-grid {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          pointer-events: none;
          z-index: -2;
          opacity: 0.4;
          transition: opacity 0.5s ease;
        }
        .faq-card:hover .faq-card-grid {
          animation: grid-move-faq 20s linear infinite;
          opacity: 0.8;
        }
        .faq-card-glow {
          position: absolute;
          top: -50px; right: -50px;
          width: 150px; height: 150px;
          background: radial-gradient(circle, var(--accent-glow) 0%, rgba(0,0,0,0) 70%);
          filter: blur(40px);
          z-index: -1;
          transition: all 0.5s ease;
        }
        .faq-card:hover .faq-card-glow {
          transform: scale(1.6);
          background: radial-gradient(circle, hsl(var(--primary) / 0.45) 0%, rgba(0,0,0,0) 70%);
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14 section-fade">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
        </div>

        <div className="space-y-4 section-fade">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card">
              {/* Animated grid */}
              <div className="faq-card-grid" />
              {/* Corner glow */}
              <div className="faq-card-glow" />

              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors relative z-10"
              >
                <span className="font-body font-semibold text-white pr-4">{faq.q}</span>
                <div
                  className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: openIndex === i ? "hsl(var(--primary))" : "rgba(255,255,255,0.05)",
                    borderColor: openIndex === i ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
                  }}
                >
                  <span className="text-white text-sm font-bold leading-none" style={{ marginTop: "-1px" }}>
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className="relative z-10"
                style={{
                  display: openIndex === i ? "block" : "none",
                }}
              >
                <div className="w-full h-px bg-white/5 mb-0" />
                <p className="px-6 py-5 font-body text-sm text-white/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
