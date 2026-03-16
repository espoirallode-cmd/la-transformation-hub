import { useState } from "react";
import transfo1 from "@/assets/transformation-1.jpg";
import transfo2 from "@/assets/transformation-2.jpg";
import transfo3 from "@/assets/transformation-3.jpg";
import DotGrid from "./DotGrid";

const transformations = [
  {
    image: transfo1,
    name: "Sophie, 34 ans",
    quote: "J'ai perdu 18 kg et retrouvé le sourire. Aurélie m'a appris à m'aimer.",
  },
  {
    image: transfo2,
    name: "Marc, 41 ans",
    quote: "Je ne me reconnaissais plus. Grâce à Aurélie, j'ai repris ma vie en main.",
  },
  {
    image: transfo3,
    name: "Léa, 28 ans",
    quote: "Une transformation intérieure autant qu'extérieure. Merci infiniment.",
  },
];

const BeforeAfterSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + transformations.length) % transformations.length);
  const next = () => setCurrent((c) => (c + 1) % transformations.length);

  const item = transformations[current];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#07070a]">
      <DotGrid baseColor="#2a2a2a" activeColor="#ffffff" dotSize={4} gap={28} proximity={140} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 section-fade">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Avant / <span className="text-primary">Après</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Des transformations réelles, des vies changées.
          </p>
        </div>

        <div className="section-fade max-w-3xl mx-auto">
          <div className="relative">
            <img
              src={item.image}
              alt={`Transformation de ${item.name}`}
              className="w-full rounded-xl object-cover aspect-video"
              loading="lazy"
            />

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 text-foreground flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Précédent"
            >
              <i className="fas fa-chevron-left" style={{ fontSize: "1rem" }} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 text-foreground flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Suivant"
            >
              <i className="fas fa-chevron-right" style={{ fontSize: "1rem" }} />
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="font-heading text-lg font-semibold text-foreground">{item.name}</p>
            <p className="font-body text-muted-foreground italic mt-2">« {item.quote} »</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {transformations.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
