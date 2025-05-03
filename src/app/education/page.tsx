"use client";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const carouselData = [
    {
      title:
        "Solving the Automated Warehouse Scenario using Answer Set Programming",
      src: "/papers/screenshots/automated-warehouse-asp.png",
      link: "papers/pdfs/automated-warehouse-asp.pdf",
    },
    {
      title: "Fiscal Clarity: Turning Data into Insights for Engagement, Ohio",
      src: "/papers/screenshots/fiscal-clarity-data-visualization.png",
      link: "papers/pdfs/fiscal-clarity-data-visualization.pdf",
    },
  ];

  return (
    <div className="px-5 md:px-20 lg:px-40 mt-12 mb-24 lg:mt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-6xl font-bold">An academic weapon. 📚</div>
        <div className="text-lg font-normal text-neutral-600 dark:text-neutral-400 mt-5">
          4 years, 2 degrees, and a 4.0 GPA all the way.
        </div>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
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
            delay: 0.2,
          }}
        >
          <Image
            src="/bachelors-diploma.jpg"
            alt="Bachelors Diploma"
            width={3300}
            height={2550}
            className="h-auto border-3 dark:border-2 border-neutral-600 dark:border-neutral-700 rounded p-7"
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
            delay: 0.4,
          }}
        >
          <Image
            src="/masters-diploma.jpg"
            alt="Bachelors Diploma"
            width={3300}
            height={2550}
            className="h-auto border-3 dark:border-2 border-neutral-600 dark:border-neutral-700 rounded p-7"
          ></Image>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >
          <div className="grid grid-cols-12 w-full my-24">
            <div className="col-span-7">
              <div className="text-2xl font-bold">
                Computer Science (Big Data Systems), M.S.
              </div>
              <div className="text-xl text-neutral-600 dark:text-neutral-400 mt-2">
                Arizona State University, Tempe AZ
              </div>
              <div className="text-lg text-neutral-500 dark:text-neutral-500 mt-1">
                2022 - 2023
              </div>
              <div className="mt-10 text-xl font-bold dark:text-neutral-300">
                Key Coursework
              </div>
              <div className="text-lg text-neutral-700 dark:text-neutral-400 mt-1">
                <ul className="list-disc list-inside">
                  <li>Data Processing at Scale</li>
                  <li>Data Mining</li>
                  <li>Semantic Web Mining</li>
                  <li>Statistical Machine Learning</li>
                  <li>Data Visualization</li>
                  <li>Knowledge Representation</li>
                  <li>Mobile Computing</li>
                  <li>Database Management System Implementation</li>
                </ul>
              </div>
            </div>
            <div className="col-span-5">
              <Carousel className="w-full mx-auto border-3 border-neutral-600 dark:border-0 rounded">
                <CarouselContent>
                  {carouselData.map((item, index) => (
                    <CarouselItem key={index} className="relative">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={810}
                        height={1052}
                        className="relative opacity-50 dark:opacity-50"
                      ></Image>
                      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center dark:text-white text-2xl font-bold px-10 mx-auto">
                        <div className="text-center">{item.title}</div>
                        <a className="cursor-pointer" href={item.link} download>
                          <Button className="cursor-pointer">Explore</Button>
                        </a>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="text-2xl font-bold">Computer Science, B.S.</div>
              <div className="text-xl text-neutral-600 dark:text-neutral-400 mt-2">
                Arizona State University, Tempe AZ
              </div>
              <div className="text-lg text-neutral-500 dark:text-neutral-500 mt-1">
                2019 - 2022
              </div>
              <div className="mt-10 text-xl font-bold dark:text-neutral-300">
                Key Coursework
              </div>
              <div className="text-lg text-neutral-700 dark:text-neutral-400 mt-1">
                <ul className="list-disc list-inside">
                  <li>Programming Languages</li>
                  <li>Object-Oriented Programming & Data Structures</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Database Management</li>
                  <li>Machine Learning</li>
                  <li>Software Engineering</li>
                  <li>Operating Systems</li>
                  <li>Information Assurance</li>
                  <li>Software QA & Testing</li>
                  <li>Logic in Computer Science</li>
                  <li>Probability & Statistics Engineering Problem Solving</li>
                  <li>Computer Organization & Assembly Language Programming</li>
                  <li>Theoretical Computer Science</li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 px-10 lg:px-0 mt-10 lg:mt-0">
              <Carousel className="w-full mx-auto border-3 border-neutral-600 dark:border-0 rounded">
                <CarouselContent>
                  <CarouselItem className="relative">
                    <Image
                      src="/papers/screenshots/undergraduate-thesis.png"
                      alt="Undergraduate thesis"
                      width={812}
                      height={1051}
                      className="relative opacity-50"
                    ></Image>
                    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center dark:text-white text-2xl font-bold px-10 mx-auto">
                      <div className="text-center">
                        Undergraduate Thesis:
                        <br /> Party on Wall Street
                      </div>
                      <a
                        className="cursor-pointer"
                        href="papers/pdfs/undergraduate-thesis.pdf"
                        download
                      >
                        <Button className="cursor-pointer">Explore</Button>
                      </a>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="relative">
                    <Image
                      src="/papers/screenshots/undergraduate-capstone.png"
                      alt="Undergraduate Capstone: Developing a Contractor Management System"
                      width={812}
                      height={1051}
                      className="relative opacity-50"
                    ></Image>
                    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center dark:text-white text-2xl font-bold px-10 mx-auto">
                      <div className="text-center">
                        Undergraduate Capstone:
                        <br /> Developing a Contractor Management System
                      </div>
                      <a
                        className="cursor-pointer"
                        href="https://youtu.be/gXEd-HVifVI?si=C152_wEGmC8HLu_B"
                        target="_blank"
                      >
                        <Button className="cursor-pointer">Explore</Button>
                      </a>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
