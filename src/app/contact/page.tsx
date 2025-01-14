"use client";

import DarkModeSwitch from "@/components/dark-mode-switch";
import HomeButton from "@/components/home-button";
import RedirectButton from "@/components/redirect-button";
import RevealLinks from "@/components/reveal-links";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.main className="relative flex min-h-screen flex-col items-center justify-center px-2 py-4 md:p-24">
      <h2 className="text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-16">
        Contact
      </h2>
      <RevealLinks />

      <RedirectButton href="/" title="Go Home" />
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  );
}
