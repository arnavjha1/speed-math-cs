export interface CourseLevel {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  duration: string;
  isActive: boolean;
  joinLink?: string;
}

export interface Course {
  id: string;
  name: string;
  icon: string;
  color: string;
  levels: CourseLevel[];
}

export const courses: Course[] = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "python",
    levels: [
      {
        id: "python-1",
        level: 1,
        title: "Python Fundamentals",
        subtitle: "Start your coding journey",
        description: "Master the basics of Python programming. Perfect for complete beginners with no prior coding experience.",
        topics: [
          "Variables & Data Types",
          "Control Flow (if/else, loops)",
          "Functions & Parameters",
          "Lists & Dictionaries",
          "Basic File I/O",
          "Introduction to Problem Solving"
        ],
        duration: "5 days",
        isActive: true,
        joinLink: "/join/python-1"
      },
      {
        id: "python-2",
        level: 2,
        title: "Advanced Python & Machine Learning",
        subtitle: "Level up your skills",
        description: "Dive deeper into Python with object-oriented programming, APIs, and real-world projects.",
        topics: [
          "Object-Oriented Programming",
          "Data Processing with Pandas",
          "Introduction to Machine Learning",
          "Working with APIs",
          "Final Capstone Project"
        ],
        duration: "5 days",
        isActive: true,
        joinLink: "/join/python-2"
      }
    ]
  },
  {
    id: "webdev",
    name: "Web Development",
    icon: "🌐",
    color: "webdev",
    levels: [
      {
        id: "webdev-1",
        level: 1,
        title: "Web Dev Basics",
        subtitle: "Build your first website",
        description: "Learn HTML, CSS, and JavaScript fundamentals to create beautiful, interactive websites from scratch.",
        topics: [
          "HTML Structure & Semantics",
          "CSS Styling & Layouts",
          "Flexbox & Grid",
          "JavaScript Basics",
          "DOM Manipulation",
          "Responsive Design"
        ],
        duration: "5 days",
        isActive: false
      },
      {
        id: "webdev-2",
        level: 2,
        title: "Web Dev Advanced",
        subtitle: "Become a full-stack developer",
        description: "Master React, work with databases, and build complete web applications ready for deployment.",
        topics: [
          "React Fundamentals",
          "State Management",
          "API Integration",
          "Database Basics",
          "Authentication",
          "Deployment & Hosting"
        ],
        duration: "5 days",
        isActive: false
      }
    ]
  }
];
