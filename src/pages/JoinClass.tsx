import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { ArrowLeft, Calendar, Clock, CheckCircle2, Users } from "lucide-react";

const JoinClass = () => {
  const { levelId } = useParams();
  
  // Find the course and level
  let foundCourse = null;
  let foundLevel = null;
  
  for (const course of courses) {
    const level = course.levels.find(l => l.id === levelId);
    if (level) {
      foundCourse = course;
      foundLevel = level;
      break;
    }
  }

  if (!foundCourse || !foundLevel) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Class Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The class you're looking for doesn't exist or is no longer available.
          </p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <Link 
            to="/#courses" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{foundCourse.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">
                  {foundCourse.name} • Level {foundLevel.level}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {foundLevel.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                {foundLevel.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{foundLevel.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Starting Soon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Limited Spots</span>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h3 className="font-display font-bold text-lg mb-4">What You'll Learn</h3>
                <div className="space-y-3">
                  {foundLevel.topics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-card rounded-2xl border-2 border-primary/20 p-8 shadow-card-hover">
                <h3 className="font-display font-bold text-2xl mb-2">Join This Class</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below to register for this course. 
                  We'll contact you with next steps.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Why do you want to learn to code?</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      rows={3}
                      placeholder="Tell us a bit about yourself..."
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  100% free. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinClass;
