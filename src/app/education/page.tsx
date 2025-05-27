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
import { IconBrandYoutubeFilled, IconDownload } from "@tabler/icons-react";

export default function Experience() {
  const mastersCarouselData = [
    {
      title:
        "Automated Detection of Phishing Attacks using Machine Learning Techniques",
      src: "/papers/screenshots/machine-learning-phishing-detection.jpg",
      link: "papers/pdfs/machine-learning-phishing-detection.pdf",
    },
    {
      title:
        "A Data Processing Pipeline with Kafka, Neo4j, and Kubernetes for Distributed Graph Algorithm Processing",
      src: "/papers/screenshots/data-processing-pipeline.jpg",
      link: "papers/pdfs/data-processing-pipeline.pdf",
    },
    {
      title:
        "Statistical Machine Learning Approaches in Medicine and Biomedical Sciences",
      src: "/papers/screenshots/statistical-machine-learning-medicine.jpg",
      link: "papers/pdfs/statistical-machine-learning-medicine.pdf",
    },
    {
      title: "Fiscal Clarity: Turning Data into Insights for Engagement, Ohio",
      src: "/papers/screenshots/data-visualization-fiscal-clarity.jpg",
      link: "papers/pdfs/data-visualization-fiscal-clarity.pdf",
    },
    {
      title: "Stance Detection of Tweets",
      src: "/papers/screenshots/web-mining-stance-detection.jpg",
      link: "papers/pdfs/web-mining-stance-detection.pdf",
    },
    {
      title:
        "Solving the Automated Warehouse Scenario using Answer Set Programming",
      src: "/papers/screenshots/knowledge-representation-automated-warehouse.jpg",
      link: "papers/pdfs/knowledge-representation-automated-warehouse.pdf",
    },
  ];

  const mastersContent = {
    textData: (
      <>
        <div className="flex gap-4 items-center mb-8">
          <Image
            src="/pitchfork.png"
            alt="ASU logo"
            width={1085}
            height={2160}
            className="h-34 w-auto"
          ></Image>
          <div>
            <div className="text-2xl font-bold">
              Computer Science (Big Data Systems), M.S.
            </div>
            <div className="text-lg text-neutral-800 dark:text-neutral-300">
              Arizona State University, Tempe AZ
            </div>
            <div className="text-base text-neutral-600 dark:text-neutral-400">
              2022 - 2023
            </div>
            <div className="text-base text-neutral-600 dark:text-neutral-400">
              4.0 GPA
            </div>
          </div>
        </div>
        <div className="mt-5 text-xl font-bold dark:text-neutral-200">
          Overview
        </div>
        <div className="md:text-lg text-neutral-800 dark:text-neutral-300 mt-1">
          Focused on designing and deploying scalable systems for processing and
          analyzing large-scale, complex datasets. Gained hands-on experience
          with distributed computing, real-time data processing, data mining,
          machine learning, and visualization through project-based
          learning—equipping me to develop efficient, data-driven solutions
          across various domains.
        </div>
        <div className="mt-5 text-xl font-bold dark:text-neutral-200">
          Key Coursework
        </div>
        <div className="md:text-lg text-neutral-800 dark:text-neutral-300 mt-1">
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
      </>
    ),
    carousel: (
      <Carousel className="w-full mx-auto border-3 border-neutral-600 dark:border-0 rounded">
        <CarouselContent>
          {mastersCarouselData.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                src={item.src}
                alt={item.title}
                width={1700}
                height={2200}
                className="relative opacity-50 dark:opacity-50"
              ></Image>
              <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center dark:text-white sm:text-2xl font-bold px-10 mx-auto">
                <div className="text-center">{item.title}</div>
                <a className="cursor-pointer" href={item.link} download>
                  <Button className="cursor-pointer">
                    <IconDownload />
                    Download
                  </Button>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  };

  const bachelorsContent = {
    textData: (
      <>
        <div className="flex gap-4 items-center mb-8">
          <Image
            src="/pitchfork.png"
            alt="ASU logo"
            width={1085}
            height={2160}
            className="h-34 w-auto"
          ></Image>
          <div>
            <div className="text-2xl font-bold">Computer Science, B.S.</div>
            <div className="text-lg text-neutral-800 dark:text-neutral-300">
              Arizona State University, Tempe AZ
            </div>
            <div className="text-base text-neutral-600 dark:text-neutral-400">
              2019 - 2022
            </div>
            <div className="text-base text-neutral-600 dark:text-neutral-400">
              4.0 GPA
            </div>
          </div>
        </div>
        <div className="mt-5 text-xl font-bold dark:text-neutral-200">
          Overview
        </div>
        <div className="md:text-lg text-neutral-800 dark:text-neutral-300 mt-1">
          Studied the design, development, and analysis of software systems,
          building a strong foundation in programming, data structures,
          algorithms, and computer systems. Gained hands-on experience in
          machine learning, cybersecurity, and software engineering, developing
          the skills to solve complex technical problems and build robust,
          scalable applications.
        </div>
        <div className="mt-5 text-xl font-bold dark:text-neutral-200">
          Key Coursework
        </div>
        <div className="md:text-lg text-neutral-800 dark:text-neutral-300 mt-1">
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
            <li>Probability & Statistics Engineering Problem Solving</li>
            <li>Theoretical Computer Science</li>
          </ul>
        </div>
      </>
    ),
    carousel: (
      <Carousel className="w-full mx-auto border-3 border-neutral-600 dark:border-0 rounded">
        <CarouselContent>
          <CarouselItem className="relative">
            <Image
              src="/papers/screenshots/undergrad-thesis-party-on-wall-street.jpg"
              alt="Undergraduate thesis"
              width={1700}
              height={2200}
              className="relative opacity-50"
            ></Image>
            <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center dark:text-white text-lg md:text-2xl font-bold px-10 mx-auto">
              <div className="text-center">
                Undergraduate Thesis:
                <br /> Party on Wall Street
              </div>
              <a
                className="cursor-pointer"
                href="papers/pdfs/undergrad-thesis-party-on-wall-street.pdf"
                download
              >
                <Button className="cursor-pointer">
                  <IconDownload />
                  Download
                </Button>
              </a>
            </div>
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              src="/papers/screenshots/undergrad-capstone-netpoint-llc.png"
              alt="Undergraduate Capstone: Developing a Contractor Management System"
              width={812}
              height={1051}
              className="relative opacity-50"
            ></Image>
            <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center dark:text-white text-lg md:text-2xl font-bold px-10 mx-auto">
              <div className="text-center">
                Undergraduate Capstone:
                <br /> Developing a Contractor Management System
              </div>
              <a
                className="cursor-pointer"
                href="https://youtu.be/gXEd-HVifVI?si=C152_wEGmC8HLu_B"
                target="_blank"
              >
                <Button className="cursor-pointer">
                  <IconBrandYoutubeFilled />
                  Watch Demo
                </Button>
              </a>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  };

  return (
    <div className="mt-12 mb-24 lg:mt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-4xl md:text-6xl font-bold">
          Academic Excellence{"\u00A0"}📚
        </div>
        <div className="text-lg text-neutral-800 dark:text-neutral-300 mt-5">
          Pursuing knowledge with purpose and precision.
        </div>
      </motion.div>

      {/* <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-20">
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
            src="/masters-diploma.jpg"
            alt="Bachelors Diploma"
            width={3300}
            height={2550}
            className="h-auto rounded border-3 border-neutral-600 dark:border-neutral-900"
            priority={true}
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
            src="/bachelors-diploma.jpg"
            alt="Bachelors Diploma"
            width={3300}
            height={2550}
            className="h-auto rounded border-3 border-neutral-600 dark:border-neutral-900"
            priority={true}
          ></Image>
        </motion.div>
      </div> */}

      {[mastersContent, bachelorsContent].map((content, index) => (
        <motion.div
          key={index}
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
            delay: 0.2 + index * 0.2,
          }}
          className="my-20"
        >
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 my-20">
            <div className="">{content.textData}</div>
            <div className="">{content.carousel}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
