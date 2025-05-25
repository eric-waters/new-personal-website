"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function Experience() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <div className="text-3xl">Intel Corporation</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Software Application Development Engineer
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                Developed a{" "}
                <strong>modular web platform for Generative AI tools</strong>{" "}
                using <strong>Angular</strong> and <strong>Sanic</strong>,
                empowering teams to rapidly build AI-powered apps with reusable
                components, a unified UI, and robust API integrations.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                Designed a drag-and-drop{" "}
                <strong>Generative AI tool studio </strong>
                using <strong>React</strong>, <strong>Next.js</strong>, and{" "}
                <strong>Tailwind</strong>, enabling teams to rapidly create and
                deploy AI-powered apps without any code.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                Designed and deployed a scalable{" "}
                <strong>API for machine learning analytics</strong> of
                manufacturing data using <strong>FastAPI</strong>,{" "}
                <strong>Docker</strong>, and <strong>Kubernetes</strong>,
                enabling multiple teams to seamlessly integrate advanced ML
                capabilities into their applications.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                Solely owned and administered a{" "}
                <strong>cognitive search platform</strong> for manufacturing
                data—developed robust <strong>ETL pipelines</strong> with{" "}
                <strong>Pandas</strong> and <strong>SQL Server</strong> to
                ingest and normalize enterprise data, and collaborated across
                business units to identify, map, and integrate diverse data
                sources.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/intel-ocotillo.png"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              priority
            />
            <Image
              src="/ai-summit.png"
              alt="Eric Waters at Intel"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="text-3xl">Dell Technologies</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Graduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                Enhanced user experience across multiple applications by{" "}
                <strong>reducing login time by 400%</strong> through
                implementing "Sign in with Dell" (SSO) using{" "}
                <strong>OAuth 2.0</strong>, streamlining authentication and
                boosting productivity.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                <strong>Safeguarded sensitive data</strong> and ensured
                regulatory compliance by implementing fine-grained authorization
                controls in multiple <strong>REST APIs</strong> using{" "}
                <strong>Spring Boot</strong>,<strong> Angular</strong>, and{" "}
                <strong>Oracle Database</strong>.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/eric-dell.jpg"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/dell-group-photo-1.jpg"
              alt="Eric Waters at Intel"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="text-3xl">Dell Technologies</div>
          <div className="text-xl text-neutral-800 dark:text-neutral-200">
            Undergraduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                Developed a{" "}
                <strong>proprietary Kanban Board application</strong> using{" "}
                <strong>Spring</strong> and <strong>MySQL</strong>,{" "}
                significantly improving task tracking and collaboration for
                Agile teams.
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
              <div>✅</div>
              <div>
                <strong>Streamlined the onboarding process</strong> for Employee
                Resource Groups, earning{" "}
                <strong>1st place in the Dell Intern Hackathon</strong> for
                delivering a high-impact, user-centric solution.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dell-campus.jpg"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/dell-group-photo-2.jpg"
              alt="Eric Waters at Intel"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
