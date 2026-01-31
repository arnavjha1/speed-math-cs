{/* Sponsors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Sponsors
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're grateful to our generous sponsors who make our mission possible.
            </p>
          </div>

          {platinumSponsors.length > 0 && (
            <div className="mb-12">
              <h3 className="text-center text-lg font-display font-bold text-muted-foreground mb-6">
                Platinum Sponsors
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {platinumSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
              </div>
            </div>
          )}

          {goldSponsors.length > 0 && (
            <div className="mb-12">
              <h3 className="text-center text-lg font-display font-bold text-muted-foreground mb-6">
                Gold Sponsors
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {goldSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
              </div>
            </div>
          )}

          {otherSponsors.length > 0 && (
            <div>
              <h3 className="text-center text-lg font-display font-bold text-muted-foreground mb-6">
                Supporting Sponsors
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {otherSponsors.map((sponsor) => (
                  <SponsorCard key={sponsor.id} sponsor={sponsor} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>