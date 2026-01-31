import { Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

const LevelLadder = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Our <span className="text-gradient-speed">Classes</span>
          </h2>
          <p className="text-muted-foreground">Choose your path and start learning today</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{course.icon}</span>
                <h3 className="text-xl font-display font-bold text-foreground">{course.name}</h3>
              </div>
              
              <div className="flex flex-col gap-4 flex-1">
                {course.levels.map((level) => {
                  const isActive = level.isActive;
                  
                  return (
                    <div
                      key={level.id}
                      className={cn(
                        "relative rounded-xl border p-6 transition-all duration-300",
                        isActive 
                          ? "bg-card border-primary/50 shadow-card hover:shadow-card-hover glow-primary" 
                          : "bg-muted/30 border-border grayscale opacity-50"
                      )}
                    >
                      {isActive && (
                        <div className="absolute -top-2.5 right-4">
                          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                            Active
                          </span>
                        </div>
                      )}
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className={cn(
                            "text-xs font-mono uppercase tracking-wider",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )}>
                            Level {level.level}
                          </span>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="text-xs">{level.duration}</span>
                          </div>
                        </div>

                        <h4 className={cn(
                          "font-display font-bold text-lg",
                          isActive ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {level.title}
                        </h4>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {level.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-1">
                          {level.topics.slice(0, 3).map((topic, i) => (
                            <span 
                              key={i} 
                              className={cn(
                                "text-xs px-2 py-1 rounded-md font-mono",
                                isActive 
                                  ? "bg-primary/10 text-primary" 
                                  : "bg-muted text-muted-foreground"
                              )}
                            >
                              {topic}
                            </span>
                          ))}
                          {level.topics.length > 3 && (
                            <span className="text-xs text-muted-foreground">
                              +{level.topics.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        {isActive && level.joinLink && (
                          <Link
                            to={level.joinLink}
                            className="mt-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors w-fit shadow-button"
                          >
                            Join Class
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LevelLadder;
