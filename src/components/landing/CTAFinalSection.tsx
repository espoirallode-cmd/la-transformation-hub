const CTAFinalSection = () => {
  return (
    <section id="cta-final" className="py-20 md:py-28 bg-[#07070a] relative overflow-hidden">
      <style>{`
        @keyframes grid-move-cta {
          0%   { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }
        @keyframes blink-cta {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cta-nhost-card {
          --accent-color: hsl(var(--primary));
          --accent-glow: hsl(var(--primary) / 0.30);
          font-family: "Inter", system-ui, sans-serif;
          width: 100%;
          max-width: 680px;
          background-color: #07070a;
          border: 1px solid #1f2937;
          border-radius: 24px;
          border-radius: 24px;
          padding: 32px 24px;
          @media (min-width: 768px) {
            padding: 48px 40px;
          }
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 40px -1px rgba(0,0,0,0.4);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
          z-index: 1;
          margin: 0 auto;
        }
        .cta-nhost-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 24px 56px -5px rgba(0,0,0,0.5), 0 0 0 1px hsl(var(--primary) / 0.35);
          border-color: hsl(var(--primary) / 0.5);
        }
        .cta-card-grid {
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
        .cta-nhost-card:hover .cta-card-grid {
          animation: grid-move-cta 20s linear infinite;
          opacity: 0.9;
        }
        .cta-card-glow {
          position: absolute;
          top: -60px; right: -60px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, var(--accent-glow) 0%, rgba(0,0,0,0) 70%);
          filter: blur(50px);
          z-index: -1;
          transition: all 0.5s ease;
        }
        .cta-nhost-card:hover .cta-card-glow {
          transform: scale(1.6);
          background: radial-gradient(circle, hsl(var(--primary) / 0.50) 0%, rgba(0,0,0,0) 70%);
        }
        .cta-card-glow-left {
          position: absolute;
          bottom: -60px; left: -60px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, rgba(0,0,0,0) 70%);
          filter: blur(50px);
          z-index: -1;
          pointer-events: none;
        }
        .blinking-cursor-cta {
          display: inline-block;
          width: 10px; height: 3px;
          background-color: hsl(var(--primary));
          margin-left: 6px;
          animation: blink-cta 1s step-end infinite;
          box-shadow: 0 0 8px hsl(var(--primary));
          vertical-align: middle;
        }
        .cta-badge {
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 6px;
          background-color: hsl(var(--primary) / 0.12);
          color: hsl(var(--primary));
          border: 1px solid hsl(var(--primary) / 0.25);
          transition: all 0.3s ease;
          cursor: default;
          display: inline-block;
        }
        .cta-badge:hover {
          background-color: hsl(var(--primary) / 0.22);
          box-shadow: 0 0 12px hsl(var(--primary) / 0.25);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10 section-fade">
        <div className="cta-nhost-card">
          {/* Animated grid bg */}
          <div className="cta-card-grid" />
          {/* Corner glows */}
          <div className="cta-card-glow" />
          <div className="cta-card-glow-left" />

          {/* Header badge row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 shrink-0"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  className="text-white" style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.3))" }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-white text-lg tracking-wide leading-tight">La Transformation Hub</span>
            </div>
            <div className="sm:ml-auto flex gap-2 flex-wrap">
              <span className="cta-badge">Sans engagement</span>
              <span className="cta-badge">Gratuit</span>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Le premier pas est toujours
            <br />
            le plus courageux.
            <span className="blinking-cursor-cta" />
          </h2>

          {/* Description */}
          <p className="font-body text-white/60 text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            Réservez votre appel découverte gratuit et commençons ensemble votre transformation. 
            Sans engagement, avec bienveillance.
          </p>

          {/* CTA button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-300 group"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.35), 0 4px 12px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 35px hsl(var(--primary) / 0.55), 0 8px 20px rgba(0,0,0,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 20px hsl(var(--primary) / 0.35), 0 4px 12px rgba(0,0,0,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Réserver mon appel gratuit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
