import { sponsors } from "@/data/team";

const SponsorsSection = () => {
  const allSponsors = sponsors;

  if (allSponsors.length === 0) return null;

  return (
    <section className="py-16 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-display font-bold mb-2">
            Our <span className="text-gradient-speed">Sponsors</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Partnering to make free coding education possible
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {allSponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl px-6 py-4 hover:border-primary/50 hover:shadow-card transition-all duration-300"
            >
              <div className="text-center">
                <span className="text-3xl mb-2 block">{sponsor.logo}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {sponsor.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
