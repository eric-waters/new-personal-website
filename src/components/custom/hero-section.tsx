"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Intel",
    image: "intel-logo.png",
    imageSize: 100,
    position: "Software Application Development Engineer",
    date: "August 2023 - Present",
    description:
      "Created a drag-and-drop generative AI tool studio, redesigned an entire generative AI web platform, created an API to serve advanced ML analytics, and owned an internal search engine.",
  },
  {
    name: "ASU",
    image: "asu-logo.png",
    imageSize: 200,
    position: "Computer Science (Big Data Systems), M.S.",
    date: "August 2022 - May 2023",
    description:
      "Studied Data Mining, Data Processing at Scale, Statistical Machine Learning, Data Visualization, Database Management System Implementation, and Mobile Computing.",
  },
  {
    name: "Dell",
    image: "dell-logo.png",
    imageSize: 300,
    position: "Graduate Software Engineering Intern",
    date: "June 2022 - August 2022",
    description:
      "Implemented Sign in with Dell (OAuth SSO) for several applications and protected data integrity by implementing authorization for several Spring Boot REST APIs.",
  },
  {
    name: "ASU",
    image: "asu-logo.png",
    imageSize: 200,
    position: "Computer Science, B.S.",
    date: "August 2019 - May 2022",
    description:
      "Studied Data Structures and Algorithms, Programming Languages, Operating Systems, Software Engineering, Database Management Systems, QA & Testing, and a bunch of math.",
  },
  {
    name: "Dell",
    image: "dell-logo.png",
    imageSize: 300,
    position: "Undergraduate Software Engineering Intern",
    date: "May 2021 - August 2021",
    description:
      "Enhanced the efficiency of agile teams by creating a proprietary kanban board application using Spring MVC. Won the intern hackathon for streamlining the Employee Resource Group onboarding process.",
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="my-1 md:my-10 py-10 flex w-full flex-col items-center justify-center">
        <div className="py-10 w-full">
          <div className="flex justify-between">
            <div className="my-auto">
              <h1 className="z-10 max-w-4xl text-5xl font-bold lg:text-7xl text-center lg:text-left">
                {"Hi, I'm Eric 👋".split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                }}
                className="z-10 max-w-2xl md:px-0 lg:pr-4 py-4 text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200 text-center lg:text-left"
              >
                I'm a software engineer with a proven track record of writing
                quality software solutions. Passionate about building scalable,
                user-friendly applications and continuously learning new
                technologies to improve my craft.
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 1,
                }}
              >
                <div className="flex gap-4 mt-2 justify-center lg:justify-start">
                  <a href="/resume.pdf" download>
                    <button className="w-40 flex items-center justify-center gap-2 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
                      <IconDownload />
                      Resume
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eric-waters2019/"
                    target="_blank"
                  >
                    <button className="w-40 flex items-center justify-center gap-2 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer">
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
              transition={{
                duration: 0.3,
                delay: 0,
              }}
            >
              <div className="hidden lg:flex">
                <Image
                  src="/eric-profile-lg.jpg"
                  alt="Eric Waters"
                  width={1125}
                  height={1125}
                  className="aspect-square max-w-xs rounded-full border bg-neutral-50/50 border-neutral-400/50 dark:bg-neutral-950/40 dark:border-neutral-800"
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
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
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
