const mirrorCards = [
  {
    text: "Tu évites les miroirs et les photos de groupe.",
    icon: "far fa-face-sad-tear",
  },
  {
    text: "Tu as essayé des dizaines de régimes sans résultat durable.",
    icon: "far fa-face-sad-tear",
  },
  {
    text: "Tu te sens prisonnier(e) d'un corps qui ne te ressemble pas.",
    icon: "far fa-face-sad-tear",
  },
  {
    text: "Tu as perdu confiance en toi et tu t'isoles de plus en plus.",
    icon: "far fa-face-sad-tear",
  },
];


const MirrorSection = () => {
  return (
    <section id="miroir" className="py-20 md:py-28 relative overflow-visible bg-[#07070a]">
      {/* Shadow overlay that bleeds upward over the Hero section */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to bottom, transparent 0%, #07070a 100%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
      <style>{`
        .slider {
          width: 100%;
          height: 600px;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent);
        }
        
        .slider-track {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px; 
          animation: autoRunVertical 20s linear infinite;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes autoRunVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 20px)); }
        }

        /* 3D Container */
        .container-3d {
          position: relative;
          width: 100%;
          max-width: 450px;
          height: 220px;
          transition: 200ms;
        }

        .container-3d:active {
          transform: scale(0.95);
        }

        /* The Card Frame */
        .cyber-card {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          transition: 700ms ease;
          
          /* Blending Uiverse base with our Glassmorphism */
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.08));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Content inside the card always visible */
        .card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          text-align: center;
          padding: 0 24px;
          z-index: 25;
        }

        .card-inner i {
          font-size: 2.2rem;
          color: hsl(var(--primary));
          text-shadow: 0 0 15px hsl(var(--primary) / 0.5);
          transition: 300ms ease-in-out;
        }

        .card-inner p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: white;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          line-height: 1.5;
          transition: 300ms ease-in-out;
        }

        .glowing-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .glow-1, .glow-2, .glow-3 {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%);
          filter: blur(15px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glow-1 { top: -20px; left: -20px; }
        .glow-2 { top: 50%; right: -30px; transform: translateY(-50%); }
        .glow-3 { bottom: -20px; left: 30%; }

        .card-particles span {
          position: absolute;
          width: 3px;
          height: 3px;
          background: hsl(var(--primary));
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* --- HOVER EFFECTS --- */
        .tracker:hover ~ .cyber-card .card-inner i {
          transform: scale(1.1) translateY(-2px);
        }

        .tracker:hover ~ .cyber-card .card-inner p {
          transform: translateY(2px);
        }

        .tracker:hover ~ .cyber-card .glowing-elements div {
          opacity: 1;
        }

        .tracker:hover ~ .cyber-card .card-particles span {
          animation: particleFloat 2s infinite;
        }

        .tracker:hover ~ .cyber-card {
          transition: 300ms;
          filter: brightness(1.2);
          border-color: hsl(var(--primary) / 0.4);
        }

        @keyframes particleFloat {
          0% { transform: translate(0, 0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px)); opacity: 0; }
        }

        .card-particles span:nth-child(1) { --x: 1; --y: -1; top: 40%; left: 20%; }
        .card-particles span:nth-child(2) { --x: -1; --y: -1; top: 60%; right: 20%; }
        .card-particles span:nth-child(3) { --x: 0.5; --y: 1; top: 20%; left: 40%; }
        .card-particles span:nth-child(4) { --x: -0.5; --y: 1; top: 80%; right: 40%; }
        .card-particles span:nth-child(5) { --x: 1; --y: 0.5; top: 30%; left: 60%; }
        .card-particles span:nth-child(6) { --x: -1; --y: 0.5; top: 70%; right: 60%; }

        .cyber-card::before {
          content: "";
          background: radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 60%);
          filter: blur(20px);
          opacity: 0;
          width: 150%;
          height: 150%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }

        .tracker:hover ~ .cyber-card::before { opacity: 1; }
        .container-3d:hover .cyber-card::before { transition: 200ms; opacity: 1; }

        /* The 25 trackers grid */
        .canvas {
          perspective: 800px;
          inset: 0;
          z-index: 200;
          position: absolute;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 0;
        }

        .tracker {
          width: 100%;
          height: 100%;
          z-index: 200;
          cursor: pointer;
        }

        /* 3D Rotations logic based on grid position */
        .tr-1:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-10deg); }
        .tr-2:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-5deg); }
        .tr-3:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(0deg); }
        .tr-4:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(5deg); }
        .tr-5:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(10deg); }
        .tr-6:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-10deg); }
        .tr-7:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-5deg); }
        .tr-8:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(0deg); }
        .tr-9:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(5deg); }
        .tr-10:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(10deg); }
        .tr-11:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-10deg); }
        .tr-12:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-5deg); }
        .tr-13:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(0deg); }
        .tr-14:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(5deg); }
        .tr-15:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(10deg); }
        .tr-16:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-10deg); }
        .tr-17:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-5deg); }
        .tr-18:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(0deg); }
        .tr-19:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(5deg); }
        .tr-20:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(10deg); }
        .tr-21:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-10deg); }
        .tr-22:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-5deg); }
        .tr-23:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(0deg); }
        .tr-24:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(5deg); }
        .tr-25:hover ~ .cyber-card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(10deg); }

        .card-glare {
          position: absolute;
          inset: 0;
          background: linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0) 100%);
          opacity: 0;
          transition: opacity 300ms;
        }

        .cyber-card:hover .card-glare { opacity: 1; }

        .scan-line {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.1), transparent);
          transform: translateY(-100%);
          animation: scanMove 2s linear infinite;
        }

        @keyframes scanMove {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .corner-elements span {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid hsl(var(--primary) / 0.3);
          transition: all 0.3s ease;
        }

        .cyber-card:hover .corner-elements span {
          border-color: hsl(var(--primary) / 0.8);
          box-shadow: 0 0 10px hsl(var(--primary) / 0.5);
        }

        .corner-elements span:nth-child(1) { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
        .corner-elements span:nth-child(2) { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
        .corner-elements span:nth-child(3) { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
        .corner-elements span:nth-child(4) { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 section-fade">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tu te reconnais ?
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Si ces mots résonnent en toi, sache que tu n'es pas seul(e). 
            Et surtout, que le changement est possible.
          </p>
        </div>

        {/* The continuous vertical slider */}
        <div className="slider mt-10">
          <div className="slider-track">
            {/* Array doubled for infinite looping */}
            {[...mirrorCards, ...mirrorCards].map((card, i) => (
              <div key={i} className="container-3d">
                <div className="canvas">
                  {/* Generate the 25 tracking tiles for capturing mouse hover angle */}
                  {Array.from({ length: 25 }).map((_, j) => (
                    <div key={j} className={`tracker tr-${j + 1}`}></div>
                  ))}

                  <div className="cyber-card">
                    <div className="card-glare"></div>
                    
                    <div className="card-content">
                      <div className="card-inner">
                        <i className={card.icon}></i>
                        <p>{card.text}</p>
                      </div>

                      <div className="glowing-elements">
                        <div className="glow-1"></div>
                        <div className="glow-2"></div>
                        <div className="glow-3"></div>
                      </div>

                      <div className="card-particles">
                        <span></span><span></span><span></span><span></span><span></span><span></span>
                      </div>

                      <div className="corner-elements">
                        <span></span><span></span><span></span><span></span>
                      </div>

                      <div className="scan-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MirrorSection;
