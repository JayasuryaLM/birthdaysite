import { motion } from "motion/react";
import { ReactNode } from "react";
import { FloatingHearts } from "./FloatingHearts";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-rose-50 to-white flex items-center justify-center overflow-hidden relative">
      <FloatingHearts />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl px-6 py-12"
      >
        {children}
      </motion.div>
    </div>
  );
}
