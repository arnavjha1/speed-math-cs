export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  logo?: string;
  website?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "1",
    name: "Arnav Jha",
    role: "President & Co-Founder",
    bio: "Software engineer passionate about leveraging technology to create educational opportunities for all."
  },
  {
    id: "2",
    name: "Sidhaanth Kapoor",
    role: "Chief Technology Officer & Co-Founder",
    bio: "Full-stack developer dedicated to building scalable tech solutions for non-profits."
  },
  {
    id: "3",
    name: "Sreejith Sreekumar",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Aspiring entrepreneur focused on driving social impact through innovative educational programs."
  },
  {
    id: "4",
    name: "Sathvik Darbha",
    role: "Board Advisor & Co-Founder",
    bio: "Experienced tech leader committed to mentoring the next generation of developers."
  }
];

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "FlatLogic",
    tier: "bronze",
    website: "https://flatlogic.com/"
  }
];
