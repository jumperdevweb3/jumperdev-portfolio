import { Variants } from 'framer-motion';
import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects", offsetPercentage: 15 },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" }
];

export const LOGO_VARIANTS: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  hover: { scale: 1.1, rotate: 360, transition: { duration: 0.5 } }
};

export const INTERSECTION_OBSERVER_OPTIONS = {
  rootMargin: "-50% 0px",
  threshold: 0
} as const; 