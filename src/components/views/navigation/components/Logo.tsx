import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { LOGO_VARIANTS } from "../constants";

interface LogoProps {
  onLogoClick: (e: React.MouseEvent) => void;
}

export function Logo({ onLogoClick }: LogoProps) {
  return (
    <Link 
      href="#" 
      className="flex items-center space-x-2"
      onClick={onLogoClick}
      aria-label="Back to Home"
    >
      <motion.div
        whileHover="hover"
        variants={LOGO_VARIANTS}
        initial="initial"
        animate="animate"
        className="text-primary"
      >
        <Code2 size={32} />
      </motion.div>
      <span className="font-bold text-xl">Filip Namysł</span>
    </Link>
  );
} 