"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Carousel from "@/components/ui/carousel";

export default function Experience() {
  const slideData = [
    {
      title:
        "Solving the Automated Warehouse Scenario using Answer Set Programming",
      button: "Explore Paper",
      src: "masters-papers/screenshots/automated-warehouse-asp.png",
    },
    {
      title: "Fiscal Clarity: Turning Data into Insights for Engagement, Ohio",
      button: "Explore Paper",
      src: "masters-papers/screenshots/fiscal-clarity-data-visualization.png",
    },
  ];

  return (
    <div className="px-5 md:px-20 lg:px-40 mt-12 lg:mt-20">
      <div className="text-6xl font-bold">An academic weapon. 📚</div>
      <div className="text-lg font-normal text-neutral-600 dark:text-neutral-400 mt-5">
        Graduated with a Bachelor's and Master's in Computer Science in just 4
        years—earned an A in every single class.
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
        >
          <Image
            src="/bachelors-diploma.jpg"
            alt="Bachelors Diploma"
            width={3300}
            height={2550}
            className="h-auto border-10 lg:border-15 border-neutral-800 dark:border-neutral-200 rounded p-7"
          ></Image>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <Image
            src="/masters-diploma.jpg"
            alt="Bachelors Diploma"
            width={3300}
            height={2550}
            className="h-auto border-10 lg:border-15 border-neutral-800 dark:border-neutral-200 rounded p-7"
          ></Image>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <div className="grid grid-cols-12 gap-4 w-full my-20">
            <div className="col-span-6">
              <div className="text-2xl font-bold">
                Computer Science (Big Data Systems), M.S.
              </div>
              <div className="text-xl text-neutral-600 dark:text-neutral-400 mt-2">
                Arizona State University, Tempe AZ
              </div>
              <div className="text-lg text-neutral-500 dark:text-neutral-500 mt-1">
                2022 - 2023
              </div>
            </div>
            <div className="col-span-6 relative overflow-hidden">
              <Carousel slides={slideData} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
