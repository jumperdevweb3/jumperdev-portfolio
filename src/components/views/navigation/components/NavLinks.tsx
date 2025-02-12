import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS } from "../constants";
import { NavItem } from "../types";

interface NavLinksProps {
  activeSection: string;
  onNavItemClick: (e: React.MouseEvent, id: string, offsetPercentage?: number) => void;
}

export function NavLinks({ activeSection, onNavItemClick }: NavLinksProps) {
  const renderNavLink = (item: NavItem) => (
    <Link
      key={item.label}
      href={`#${item.id}`}
      onClick={(e) => onNavItemClick(e, item.id, item.offsetPercentage)}
      className={`
        relative text-muted-foreground hover:text-primary transition-colors
        ${activeSection === item.id ? "text-primary font-medium" : ""}
      `}
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.label}
      </motion.span>
      {activeSection === item.id && (
        <motion.div
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30
          }}
        />
      )}
    </Link>
  );

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map(renderNavLink)}
    </nav>
  );
} 