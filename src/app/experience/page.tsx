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
          <div className="text-xl text-neutral-700 dark:text-neutral-300">
            Software Application Development Engineer
          </div>
          {/* <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Software Application Development Engineer at Intel
          </p> */}
          <div className="my-8">
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Developed a scalable <strong>internal web platform</strong> for
              Generative AI tools using <strong>Angular</strong>,{" "}
              <strong>Sanic</strong>, and
              <strong> microfrontend architecture</strong>, enabling teams to
              efficiently build AI-powered apps by creating modular components,
              standardizing the UI, and implementing robust API integrations.
            </div>
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Built and deployed a scalable <strong>Python API</strong> using{" "}
              <strong>FastAPI</strong>, <strong>OAuth</strong>,
              <strong> Docker</strong>, and <strong>Kubernetes</strong> to
              expose ML analytics and data caching from a high-traffic
              application (4,000+ MAUs), enabling secure, rapid integration
              across internal applications.
            </div>
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Soley owned and administrated a company-wide{" "}
              <strong>cognitive search platform</strong>, developing extensive
              <strong> ETL scripts</strong> using <strong>Pandas</strong> and{" "}
              <strong>SQLAlchemy</strong> to ingest and normalize enterprise
              data; partnered across business units to identify, map, and
              integrate diverse data sources.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/intel-ocotillo.png"
              alt="Intel Ocotillo Campus"
              width={500}
              height={500}
              className="h-25 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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
          <div className="text-xl text-neutral-700 dark:text-neutral-300">
            Graduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Improved user experience of several applications by{" "}
              <strong>reducing login time by 400%</strong> through the
              implementation of “Sign in with Dell” (SSO) using{" "}
              <strong>OAuth</strong> and <strong>VMware Tanzu</strong>.
            </div>
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ <strong>Safeguarded sensitive data</strong> and ensured
              regulatory compliance by implementing fine-grained authorization
              controls in multiple <strong>REST APIs</strong> using{" "}
              <strong>Spring Boot</strong>, <strong>Spring Security</strong>,{" "}
              <strong>Angular</strong>, and <strong>Oracle Database</strong>
              —preventing potential legal penalties and data breaches.
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
          <div className="text-xl text-neutral-700 dark:text-neutral-300">
            Undergraduate Software Engineering Intern
          </div>
          <div className="my-8">
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Developed a{" "}
              <strong>proprietary Kanban Board application</strong> using{" "}
              <strong>Spring MVC</strong>, <strong>MySQL</strong>,{" "}
              <strong>jQuery</strong>, and <strong>Bootstrap</strong>,
              significantly improving task tracking and collaboration for Agile
              teams.
            </div>
            <div className="gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ <strong>Streamlined the onboarding process</strong> for
              Employee Resource Groups, earning{" "}
              <strong>1st place in the Dell Intern Hackathon</strong> for
              delivering a high-impact, user-centric solution.
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
