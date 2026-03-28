"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Subheading from "./helper/Subheading";
type Data = {
  title: string;
  content: {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
  }[];
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Building my portfolio with Next.js & MDX",
          description:
            "Designed and built a personal portfolio site with a blog powered by MDX, server components, and Framer Motion animations.",
        },
        {
          title: "Explored microservices with NestJS & Kafka",
          description:
            "Built a chat microservice using NestJS, PostgreSQL, Redis, and Kafka for real-time event-driven communication.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Shipped a full stack e-commerce platform",
          description:
            "End-to-end e-commerce app with authentication, payments, and an admin dashboard using Next.js, Prisma, and PostgreSQL.",
        },
        {
          title: "Deep-dived into TypeScript patterns",
          description:
            "Adopted discriminated unions, branded types, and template literal types to write safer, more expressive code.",
        },
        {
          title: "Started writing technical blog posts",
          description:
            "Began sharing knowledge on React Server Components, scalable architecture, and TypeScript best practices.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Learned React & landed first freelance project",
          description:
            "Built a dashboard app for a client using React, Tailwind CSS, and REST APIs.",
        },
        {
          title: "Picked up Docker & CI/CD",
          description:
            "Containerized apps with Docker Compose and set up automated deployment pipelines.",
        },
      ],
    },
  ];

  return (
    <div ref={ref}>
      {data.map((item, index) => (
        <div key={index}>
          <motion.h1
            animate={{
              filter: inView ? "blur(0px" : "blur(40px)",
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2 * index,
            }}
            className="font-bold text-xl"
          >
            {item.title}
          </motion.h1>
          {item.content.map((content, ind) => (
            <motion.div
            initial={{
                y:0,
                opacity:0.5,
                filter:"blur(10px)"
            }}
            animate={{
                opacity:1,
                filter:"blur(0px)",
                
                y:-10
            }}
              transition={{ delay: 0.2 * ind,
                duration:1
               }}
              className="p-2 mx-2 text-foreground/80 "
            
              key={ind}
            >
              <Subheading>{content.title}</Subheading>
              <p>{content.description}</p>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};
