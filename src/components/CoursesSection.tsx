import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient-speed">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path and start learning today. Each course is designed to take you 
            from fundamentals to mastery with hands-on projects.
          </p>
        </div>

        {courses.map((course) => (
          <div key={course.id} className="mb-16 last:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">{course.icon}</span>
              <h3 className="text-2xl font-display font-bold">{course.name}</h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {course.levels.map((level) => (
                <CourseCard
                  key={level.id}
                  level={level}
                  courseColor={course.color}
                  courseIcon={course.icon}
                  courseName={course.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
