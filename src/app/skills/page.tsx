import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "React",
      image: "/skills/react.png",
      description:
        "I'm proficient in React, a JavaScript library for building user interfaces. I have experience in creating reusable components, managing state with hooks, and optimizing performance.",
    },
    {
      name: "Angular",
      image: "/skills/angular.png",
      description:
        "I have a strong understanding of Angular, a platform for building mobile and desktop web applications. I can create dynamic single-page applications using Angular's powerful features.",
    },
    {
      name: "Typescript",
      image: "/skills/typescript.png",
      description:
        "I am skilled in TypeScript, a superset of JavaScript that adds static types. I use TypeScript to write more robust and maintainable code, especially in large applications.",
    },
  ];

  return (
    <div className="px-5 md:px-20 lg:px-40 mt-12 mb-24 lg:mt-20">
      <div className="text-4xl md:text-6xl font-bold">Skills</div>
      <div className="text-lg text-neutral-600 dark:text-neutral-400 mt-5">
        These are my skills.
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {skills.map((skill) => (
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
      </div>
    </div>
  );
}
