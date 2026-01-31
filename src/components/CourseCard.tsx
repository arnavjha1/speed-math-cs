import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { CourseLevel } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  level: CourseLevel;
  courseColor: string;
  courseIcon: string;
  courseName: string;
}

const CourseCard = ({ level, courseColor, courseIcon, courseName }: CourseCardProps) => {
  const colorClasses = {
    python: {
      bg: "bg-python-muted",
      border: "border-python/20",
      badge: "bg-python text-python-foreground",
      icon: "gradient-python",
      button: "python" as const,
    },
    webdev: {
      bg: "bg-webdev-muted",
      border: "border-webdev/20",
      badge: "bg-webdev text-webdev-foreground",
      icon: "gradient-webdev",
      button: "webdev" as const,
    },
  };

  const colors = colorClasses[courseColor as keyof typeof colorClasses] || colorClasses.python;

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-card-hover",
        colors.border,
        level.isActive && "ring-2 ring-primary ring-offset-2"
      )}
    >
      {level.isActive && (
        <div className="absolute -top-3 left-6">
          <Badge className={cn("shadow-md", colors.badge)}>
            Now Enrolling
          </Badge>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-2xl", colors.icon)}>
          <span className="drop-shadow-sm">{courseIcon}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{level.duration}</span>
        </div>
      </div>

      <div className="mb-1 text-sm font-medium text-muted-foreground">
        {courseName} • Level {level.level}
      </div>

      <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
        {level.title}
      </h3>

      <p className="text-muted-foreground mb-4 text-sm">
        {level.description}
      </p>

      <div className="space-y-2 mb-6">
        {level.topics.slice(0, 4).map((topic, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{topic}</span>
          </div>
        ))}
        {level.topics.length > 4 && (
          <div className="text-sm text-muted-foreground pl-6">
            +{level.topics.length - 4} more topics
          </div>
        )}
      </div>

      {level.isActive && level.joinLink ? (
        <Button variant={colors.button} className="w-full" asChild>
          <Link to={level.joinLink}>
            Join This Class
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      ) : (
        <Button variant="secondary" className="w-full" disabled>
          Coming Soon
        </Button>
      )}
    </div>
  );
};

export default CourseCard;
