const testimonials = [
  {
    name: "Claire M.",
    role: "Maman de 2 enfants",
    text: "Aurélie a transformé ma relation avec mon corps. Je me sens enfin libre et confiante. Un accompagnement humain et profond.",
    stars: 5,
    initials: "CM",
  },
  {
    name: "Thomas D.",
    role: "Entrepreneur",
    text: "J'ai retrouvé une énergie que je pensais perdue. Le coaching d'Aurélie va bien au-delà du physique, c'est un vrai travail de fond.",
    stars: 5,
    initials: "TD",
  },
  {
    name: "Nadia K.",
    role: "Enseignante",
    text: "Après des années de souffrance silencieuse, Aurélie m'a aidée à me réconcilier avec moi-même. Je recommande les yeux fermés.",
    stars: 5,
    initials: "NK",
  },
  {
    name: "Julien R.",
    role: "Commercial",
    text: "Un vrai déclic. En 3 mois, j'ai perdu 12 kg et surtout gagné une confiance en moi incroyable.",
    stars: 5,
    initials: "JR",
  },
  {
    name: "Émilie B.",
    role: "Infirmière",
    text: "Aurélie est d'une bienveillance rare. Elle m'a accompagnée avec douceur et fermeté. Résultat : -15 kg et un moral au top !",
    stars: 5,
    initials: "EB",
  },
  {
    name: "Sophie L.",
    role: "Graphiste",
    text: "Je me suis enfin réconciliée avec mon alimentation. Plus de culpabilité, plus de yo-yo. Juste de la sérénité.",
    stars: 5,
    initials: "SL",
  },
  {
    name: "Marc A.",
    role: "Kinésithérapeute",
    text: "L'approche holistique d'Aurélie est vraiment unique. Corps et mental travaillent ensemble. Je recommande à 100%.",
    stars: 5,
    initials: "MA",
  },
];

// Row 1 — first 4, Row 2 — last 4 (overlap intentional for richness)
const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(3);

const CARD_W = 340;
const CARD_H = 220;
const CARD_W_MOBILE = 240;
const CARD_H_MOBILE = 170;
const QUANTITY_1 = row1.length;
const QUANTITY_2 = row2.length;
const DURATION = "18s";

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="testimonial-card">
    {/* Glow */}
    <div className="t-card-glow" />
    {/* Stars */}
    <div className="t-stars">
      {Array.from({ length: t.stars }).map((_, i) => (
        <span key={i} className="t-star">★</span>
      ))}
    </div>
    {/* Quote */}
    <p className="t-text">« {t.text} »</p>
    {/* Author */}
    <div className="t-author">
      <div className="t-avatar">{t.initials}</div>
      <div>
        <p className="t-name">{t.name}</p>
        <p className="t-role">{t.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-20 md:py-28 relative overflow-hidden bg-[#07070a]">
      <style>{`
        /* ---------- Continuous Marquee Slider ---------- */
        .t-slider {
          width: 100%;
          height: ${CARD_H}px;
          overflow: hidden;
          position: relative;
          display: flex;
          mask-image: linear-gradient(to right, transparent, #000 12% 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 12% 88%, transparent);
        }

        .t-list {
          display: flex;
          width: max-content;
          gap: 16px; /* EXACT HORIZONTAL GAP */
          animation: marquee-left 35s linear infinite;
        }

        .t-slider[data-reverse="true"] .t-list {
          animation: marquee-right 35s linear infinite;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); } 
        }

        .t-slider:hover .t-list {
          animation-play-state: paused;
        }

        /* ---------- Card Design ---------- */
        .testimonial-card {
          width: ${CARD_W}px;
          height: ${CARD_H}px;
          flex-shrink: 0;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          color: white;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .testimonial-card:hover {
          border-color: hsl(var(--primary) / 0.4);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px hsl(var(--primary) / 0.2);
        }

        @media (max-width: 640px) {
          .testimonial-card {
            width: ${CARD_W_MOBILE}px;
            height: ${CARD_H_MOBILE}px;
            padding: 14px;
            border-radius: 12px;
          }
          .t-slider {
            height: ${CARD_H_MOBILE}px;
          }
          .t-text {
            font-size: 11px;
            line-height: 1.4;
          }
          .t-name { font-size: 11px; }
          .t-role { font-size: 10px; }
          .t-star { font-size: 11px; }
          .t-avatar { width: 28px; height: 28px; font-size: 9px; }
          .t-author { gap: 8px; margin-top: 10px; }
          .t-stars { margin-bottom: 6px; }
          .flex.flex-col.gap-\[16px\] { gap: 10px; }
        }

        .t-card-glow {
          position: absolute;
          top: -40px; right: -40px;
          width: 120px; height: 120px;
          background: radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%);
          filter: blur(30px);
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.4s;
          opacity: 0;
        }
        .testimonial-card:hover .t-card-glow {
          opacity: 1;
        }

        .t-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        .t-star {
          color: hsl(var(--primary));
          font-size: 13px;
        }
        .t-text {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          line-height: 1.55;
          font-style: italic;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .t-author {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          position: relative;
          z-index: 1;
        }
        .t-avatar {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: hsl(var(--primary) / 0.25);
          border: 1px solid hsl(var(--primary) / 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .t-name {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
        }
        .t-role {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
        }
      `}</style>

      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-14 section-fade px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ce qu'ils <span className="text-primary">disent</span>
          </h2>
          <p className="font-body text-white/50">
            Des témoignages sincères de personnes qui ont osé changer.
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          {/* Row 1 — left to right */}
          <div className="t-slider">
            <div className="t-list">
              {/* Duplicate the items multiple times so it fills any screen and loops seamlessly by -50% */}
              {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          </div>

          {/* Row 2 — right to left */}
          <div className="t-slider" data-reverse="true">
            <div className="t-list">
              {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
