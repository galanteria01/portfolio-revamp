"use client";

import DarkModeSwitch from "@/components/dark-mode-switch";
import HomeButton from "@/components/home-button";
import RedirectButton from "@/components/redirect-button";
import { RESUME_URL } from "@/utils/const";
import { motion } from "motion/react";

export default function page() {
  return (
    <motion.main className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h2 className="text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-16">
        Timeline
      </h2>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            National Institute of Technology, Bhopal
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Graduated in Electrical Engineering Majors with 7.8 CPI
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Katonic.ai
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Started working full time as Full-Stack Engineer{" "}
          </p>
          <a
            href={RESUME_URL}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-amber-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-amber-500 dark:bg-neutral-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-amber-600 dark:focus:ring-gray-700"
          >
            Resume
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Katonic.ai
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Started working as Full-Stack Engineer Intern
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2019
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            New Jain High School
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Finished the Senior School with 86.6%
          </p>
        </li>
      </ol>

      <RedirectButton href="/contact" title="Shall we connect?" />
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  );
}
