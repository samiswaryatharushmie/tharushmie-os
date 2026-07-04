import {
  Home,
  User,
  Code2,
  FolderKanban,
  GraduationCap,
  Briefcase,
  Trophy,
  Mail,
} from "lucide-react";

export const navigation = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    id: "about",
    title: "About",
    icon: User,
    href: "#about",
  },
  {
    id: "skills",
    title: "Skills",
    icon: Code2,
    href: "#skills",
  },
  {
    id: "projects",
    title: "Projects",
    icon: FolderKanban,
    href: "#projects",
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    href: "#education",
  },
  {
    id: "experience",
    title: "Experience",
    icon: Briefcase,
    href: "#experience",
  },
  {
    id: "achievements",
    title: "Achievements",
    icon: Trophy,
    href: "#achievements",
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    href: "#contact",
  },
];