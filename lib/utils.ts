import { clsx, type ClassValue } from "clsx";
import { ExternalLink, Github, Mail, Twitter } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const response = await fetch(input, { ...init, cache: "no-store" });

  return response.json();
}

export const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const truncate = (str: string, num: number) => {
  if (!str) return "";
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const getBlurDataURL = async (url: string | null) => {
  if (!url) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }
  try {
    const response = await fetch(
      `https://wsrv.nl/?url=${url}&w=50&h=50&blur=5`,
    );
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return `data:image/png;base64,${base64}`;
  } catch (error) {
    return "data:image/webp;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";
  }
};

export const placeholderBlurhash =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoJJREFUWEfFl4lu4zAMRO3cx/9/au6reMaOdkxTTl0grQFCRoqaT+SQotq2bV9N8rRt28xms87m83l553eZ/9vr9Wpkz+ezkT0ej+6dv1X81AFw7M4FBACPVn2c1Z3zLgDeJwHgeLFYdAARYioAEAKJEG2WAjl3gCwNYymQQ9b7/V4spmIAwO6Wy2VnAMikBWlDURBELf8CuN1uHQSrPwMAHK5WqwFELQ01AIXdAa7XawfAb3p6AOwK5+v1ugAoEq4FRSFLgavfQ49jAGQpAE5wjgGCeRrGdBArwHOPcwFcLpcGU1X0IsBuN5tNgYhaiFFwHTiAwq8I+O5xfj6fOz38K+X/fYAdb7fbAgFAjIJ6Aav3AYlQ6nfnDoDz0+lUxNiLALvf7XaDNGQ6GANQBKR85V27B4D3QQRw7hGIYlQKWGM79hSweyCUe1blXhEAogfABwHAXAcqSYkxCtHLUK3XBajSc4Dj8dilAeiSAgD2+30BAEKV4GKcAuDqB4TdYwBgPQByCgApUBoE4EJUGvxUjF3Q69/zLw3g/HA45ABKgdIQu+JPIyDnisCfAxAFNFM0EFNQ64gfS0EUoQP8ighrZSjn3oziZEQpauyKbfjbZchHUL/3AS/Dd30gAkxuRACgfO+EWQW8qwI1o+wseNuKcQiESjALvwNoMI0TcRzD4lFcPYwIM+JTF5x6HOs8yI7jeB5oKhpMRFH9UwaSCDB2Jmg4rc6E2TT0biIaG0rQhNqyhpHBcayTTSXH6vcDL7/sdqRK8LkwTsU499E8vRcAojHcZ4AxABdilgrp4lsXk8oVqgwh7+6H3phqd8J0Kk4vbx/+sZqCD/vNLya/5dT9fAH8g1WdNGgwbQAAAABJRU5ErkJggg==";

export const toDateString = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// MY ADDED UTILS FOR MY PORTFOLIO

// Project Interface
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  link?: string; // Optional link
  technologies: string[]; // Array of tech stack used in the project
}

// SocialLink Interface
export interface SocialLinkData {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

// Tech Stack Interface
export interface TechStackItem {
  name: string;
}

// Achievement Interface
export interface Achievement {
  title: string;
  description: string;
  link: string;
}

// Sample Projects
export const projects: Project[] = [
  {
    title: "BingBang",
    subtitle: "Social gaming platform",
    description:
      "Social gaming platform that connects gamers worldwide. Integrated with Random.ORG for fair game results and Supabase for user authentication and data storage.",
    link: "https://bingbang.bet",
    technologies: ["NextJs", "Random.ORG", "Supabase"],
  },
  {
    title: "PropManage",
    subtitle: "Property management webapp",
    description:
      "Scalable platform for efficient management of multiple properties, integrated with Supabase and Paystack, designed to streamline operations and enhance user engagement.",
    link: "https://propmanage-farajabiens-projects.vercel.app",
    technologies: ["React", "Supabase", "Paystack"],
  },
  {
    title: "ESG Score Visualization",
    subtitle: "Frontend development at Minklist Digital",
    description:
      "Implemented user-friendly charts and graphs for complex ESG data using Next.js and React, enhancing data visualization for better decision-making in sustainability practices.",
    link: "https://in-house.com",
    technologies: ["Next.js", "React"],
  },
  {
    title: "Linha Verde Project",
    subtitle: "World Food Programme",
    description:
      "Developed custom project management tools to improve operational efficiency for the World Food Programme. This internal tool is not publicly accessible but is crucial for mission-critical operations.",
    technologies: ["React", "Node.js"], // Assuming typical tech stack
  },
];

// Kwetunova Web Agency Projects
export const kwetunovaProjects: Project[] = [
  {
    title: "Academic Now",
    subtitle: "Educational platform",
    description:
      "Guided and mentored intern Fathi Hassan in building this educational platform. Provided project planning, code review, and development oversight.",
    link: "https://academic-now.vercel.app/",
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "SugarDaddy",
    subtitle: "Sugar cane juice parlour in Nairobi",
    description:
      "Supervised intern Fathi Hassan in developing a website for this local Nairobi business. Offered guidance on design and implementation.",
    link: "#", // Replace with actual link if available
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "VR Space",
    subtitle: "Virtual Reality Solutions",
    description:
      'Led development of the VR Space website, offering immersive VR experiences for industries like real estate and education. Guided the team, fixed critical bugs, and optimized SEO, achieving #1 Google ranking for "VR gaming Nairobi".',
    link: "http://vrspace.co.ke/",
    technologies: ["Vue.js", "CSS", "JavaScript"],
  },
  {
    title: "Kwetunova",
    subtitle: "Web agency website",
    description: "Official website for Kwetunova web agency.",
    link: "https://kwetunova-3.vercel.app",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn/ui"],
  },
];

// Technology Stack
export const techStack: TechStackItem[] = [
  { name: "Next.js" },
  { name: "Supabase" },
  { name: "Tailwind CSS" },
  { name: "shadcn/ui" },
  { name: "Resend" },
  { name: "PayStack" },
  { name: "Vercel" },
];

// Social Links
export const socialLinks: SocialLinkData[] = [
  {
    href: "https://github.com/farajabien",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/farajabien",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "mailto:farajabien@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/bienvenufaraja/",
    icon: ExternalLink,
    label: "LinkedIn",
  },
];

// Achievements
export const achievements: Achievement[] = [
  {
    title: "Certified Digital Innovator",
    description:
      "Awarded to Bienvenu Faraja for successfully completing the Entrepreneur Academy Explore Course. Gained valuable knowledge in business modeling, customer research, and entrepreneurial experimentation. Explore Course Cohort 4, Certificate ID: jk683ezjjm.",
    link: "https://54collective.thinkific.com/certificates/jk683ezjjm",
  },
  // Add more achievements as needed
];
