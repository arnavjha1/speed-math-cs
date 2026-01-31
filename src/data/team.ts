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
    name: "Sarah Chen",
    role: "Executive Director",
    bio: "Former software engineer at Google with a passion for making coding education accessible to everyone."
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Board President",
    bio: "Education advocate and entrepreneur dedicated to bridging the digital divide in underserved communities."
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    role: "Head of Curriculum",
    bio: "Computer Science professor specializing in innovative teaching methods for programming education."
  },
  {
    id: "4",
    name: "David Kim",
    role: "Director of Operations",
    bio: "Non-profit veteran with 15 years of experience building sustainable educational programs."
  },
  {
    id: "5",
    name: "Aisha Patel",
    role: "Community Outreach Lead",
    bio: "Dedicated to connecting students with mentors and career opportunities in tech."
  },
  {
    id: "6",
    name: "James O'Brien",
    role: "Treasurer",
    bio: "CPA and former startup CFO committed to financial transparency in non-profit organizations."
  }
];

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "TechForward Foundation",
    tier: "platinum",
    website: "https://example.com"
  },
  {
    id: "2",
    name: "CodeCraft Industries",
    tier: "platinum",
    website: "https://example.com"
  },
  {
    id: "3",
    name: "Digital Futures Inc.",
    tier: "gold",
    website: "https://example.com"
  },
  {
    id: "4",
    name: "ByteSize Learning",
    tier: "gold",
    website: "https://example.com"
  },
  {
    id: "5",
    name: "Community Tech Hub",
    tier: "silver",
    website: "https://example.com"
  },
  {
    id: "6",
    name: "Local Dev Group",
    tier: "bronze",
    website: "https://example.com"
  }
];
