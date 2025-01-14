import React, { ReactNode } from "react";

import { motion } from "motion/react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from "@/utils/const";

const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 px-8 py-16 dark:text-white text-black">
      <FlipLink href={GITHUB_URL}>Github</FlipLink>

      <FlipLink href={LINKEDIN_URL}>Linkedin</FlipLink>

      <FlipLink href={`mailto:${EMAIL}`}>Mail</FlipLink>

      <FlipLink href={MEDIUM_URL}>Medium</FlipLink>
    </section>
  );
};

const DURATION = 0.25;

const STAGGER = 0.025;

type FlipLinkProps = {
  children: ReactNode;
  href: string;
};

const FlipLink = ({ children, href }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {(children as string).split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
                color: "#f59e0b"
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {(children as string).split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },

              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
