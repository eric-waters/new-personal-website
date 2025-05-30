"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  Code,
  GraduationCap,
  Hand,
  Laptop,
  Smile,
  Terminal,
  User,
} from "lucide-react";

const testimonials = [
  {
    name: "Intel Corporation",
    icon: Briefcase,
    image: "intel-logo.png",
    imageSize: 100,
    position: "Software Application Development Engineer",
    date: "August 2023 - Present",
    description:
      "Created a drag-and-drop generative AI tool studio, redesigned an entire generative AI web platform, created an API to serve advanced ML analytics, and owned a search engine for manufacturing data.",
  },
  {
    name: "Arizona State University",
    icon: GraduationCap,
    image: "asu-logo.png",
    imageSize: 200,
    position: "Computer Science (Big Data Systems), M.S.",
    date: "August 2022 - May 2023",
    description:
      "Studied Data Mining, Data Processing at Scale, Statistical Machine Learning, Data Visualization, Database Management System Implementation, and Mobile Computing.",
  },
  {
    name: "Dell Technologies",
    icon: Briefcase,
    image: "dell-logo.png",
    imageSize: 300,
    position: "Graduate Software Engineering Intern",
    date: "June 2022 - August 2022",
    description:
      "Implemented Sign in with Dell (OAuth SSO) for several applications and protected data integrity by implementing authorization for several Spring Boot REST APIs.",
  },
  {
    name: "Arizona State University",
    icon: GraduationCap,
    image: "asu-logo.png",
    imageSize: 200,
    position: "Computer Science, B.S.",
    date: "August 2019 - May 2022",
    description:
      "Studied Data Structures and Algorithms, Programming Languages, Operating Systems, Software Engineering, Database Management Systems, QA & Testing, and various mathematics.",
  },
  {
    name: "Dell Technologies",
    icon: Briefcase,
    image: "dell-logo.png",
    imageSize: 300,
    position: "Undergraduate Software Engineering Intern",
    date: "May 2021 - August 2021",
    description:
      "Enhanced the efficiency of agile teams by creating a proprietary kanban board application using Spring. Won the intern hackathon for streamlining the Employee Resource Group onboarding process.",
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="my-auto">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
              >
                <h1 className="relative z-10 max-w-4xl text-5xl font-bold lg:text-7xl text-center lg:text-left flex items-center gap-8">
                  <span className="align-middle">Hi, I'm Eric</span>
                  <Code className="text-blue-500 w-16 h-16" />
                </h1>
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className="z-10 max-w-2xl md:px-0 lg:pr-4 py-4 text-base lg:text-xl font-normal text-neutral-900 dark:text-neutral-200 text-center lg:text-left"
              >
                I build powerful backend systems and intuitive interfaces —
                always with clean, optimized code and a focus on impact.
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
              >
                <div className="flex gap-4 mt-2 justify-center lg:justify-start">
                  <a href="/resume.pdf" download>
                    <button className="w-40 flex items-center justify-center gap-2 transform rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.6 hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer">
                      <IconDownload />
                      Resume
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eric-waters2019/"
                    target="_blank"
                  >
                    <button className="w-40 flex items-center justify-center gap-2 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.6 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer">
                      <IconBrandLinkedin />
                      LinkedIn
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="hidden lg:flex">
                <Image
                  src="/eric-profile-lg.jpg"
                  alt="Eric Waters"
                  width={1125}
                  height={1125}
                  className="aspect-square max-w-60 rounded-full border bg-neutral-50/50 border-neutral-400/50 dark:bg-neutral-950/40 dark:border-neutral-800"
                  priority
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="z-10 mt-20 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
