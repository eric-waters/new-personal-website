import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      title: "Web Development",
      content: [
        {
          name: "React",
          image: "/skills/react.png",
          description:
            "A JavaScript library for building user interfaces. I have built multiple applications using React, including this website. It's my go-to library for web development.",
        },
        {
          name: "Angular",
          image: "/skills/angular.png",
          description:
            "A comprehensive framework for building web applications. I have used it extensively at both Intel and Dell. I appreciate its batteries-included approach and dependency injection system.",
        },
        {
          name: "Tailwind CSS",
          image: "/skills/tailwind.png",
          description:
            "A utility-first CSS framework for rapidly building custom user interfaces. I use it in most of my web projects, including this website. It drastically improve my productivity and design consistency.",
        },
        {
          name: "Next.js",
          image: "/skills/nextjs.webp",
          description:
            "A React framework for building full-stack web applications. I have used it for multiple projects, including this website. I love its performance, file-based routing, and server actions.",
        },
        {
          name: "Spring",
          image: "/skills/spring.png",
          description:
            "A Java-based framework for building enterprise applications. I used it in both my Dell internships to build web applications and REST APIs.",
        },
        {
          name: "Laravel",
          image: "/skills/laravel.png",
          description:
            "A PHP framework for building web applications. I used it for a year-long capstone project where I built a full-stack contractor management system.",
        },
      ],
    },
    {
      title: "Programming Languages",
      content: [
        {
          name: "Typescript",
          image: "/skills/typescript.png",
          description:
            "A superset of JavaScript that adds static typing. I use it in all my web projects, as it helps catch errors early and improves code quality.",
        },
        {
          name: "Python",
          image: "/skills/python.webp",
          description:
            "A versatile language that I use extensively for data analysis, web APIs, machine learning, and one-off automation scripts.",
        },
        {
          name: "Java",
          image: "/skills/java.png",
          description:
            "A high-level OOP language that was my first. I used it throughout high school, college, and in my internships to build everything from command line tools to web applications.",
        },
        {
          name: "C/C++",
          image: "/skills/c-plus-plus.png",
          description:
            "A low-level language that I used in multiple college courses for learning principles of programming languages, data structures, and algorithms.",
        },
        {
          name: "C#",
          image: "/skills/c-sharp.png",
          description:
            "Microsoft’s object-oriented language I used for Unity game development and an Intel desktop application.",
        },
        {
          name: "SQL",
          image: "/skills/sql.png",
          description:
            "A language for managing and querying databases. I studied it formally in several database courses and use it very frequently in my work as an owner of several relational databases.",
        },
      ],
    },
  ];

  return (
    <div className="px-5 md:px-20 lg:px-40 mt-12 mb-24 lg:mt-20">
      <div className="text-4xl md:text-6xl font-bold">
        A Powerful Toolbox 🔨
      </div>
      <div className="text-lg text-neutral-600 dark:text-neutral-400 mt-5">
        Skills I've aquried over the years. Always adding new ones.
      </div>

      {skills.map((section) => (
        <>
          <div className="text-2xl md:text-3xl font-semibold mt-20">
            {section.title}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
            {section.content.map((skill) => (
              <Card
                key={skill.name}
                className="p-5 border-neutral-400 dark:border-neutral-600 gap-3"
              >
                <div className="flex">
                  <div className="flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={70}
                      height={70}
                      className="object-contain w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] max-h-full"
                    ></Image>
                  </div>
                  <div className="pl-3 flex flex-col justify-center">
                    <div className="text-2xl md:text-3xl font-semibold">
                      {skill.name}
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-base dark:text-neutral-300">
                  {skill.description}
                </div>
              </Card>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
