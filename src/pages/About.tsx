import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoardMemberCard from "@/components/BoardMemberCard";
import SponsorCard from "@/components/SponsorCard";
import { boardMembers, sponsors } from "@/data/team";
import { Heart, Target, Users } from "lucide-react";
import SponsorsSection from "@/components/SponsorsSection";

const About = () => {
  const platinumSponsors = sponsors.filter(s => s.tier === "platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "gold");
  const otherSponsors = sponsors.filter(s => s.tier === "silver" || s.tier === "bronze");

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-gradient-speed">Speed</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make coding education accessible to everyone, 
            regardless of their background or financial situation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-xl gradient-speed flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower the next generation of developers by providing free, 
                high-quality coding education to students of all backgrounds.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-xl gradient-speed flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Accessibility, inclusivity, and excellence. We believe everyone 
                deserves the opportunity to learn to code, regardless of circumstance.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-xl gradient-speed flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Our Community</h3>
              <p className="text-muted-foreground">
                A vibrant community of learners, mentors, and industry professionals 
                working together to build the future of tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Board Members
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Meet the dedicated individuals who guide our organization's mission and strategy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsSection />


      <Footer />
    </div>
  );
};

export default About;
