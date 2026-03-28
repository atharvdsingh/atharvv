
"use client"
import React from "react";
import { motion } from "motion/react";

export default function Subheading({
  as: Tag = "h1",
  children,
  className
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?:string
}) {
  return (
    <motion.div
    className={className}
      initial={{
        opacity: 0,
        y: 0,
      }}
      whileInView={{
        opacity:1,
        y:-10
      }}
      transition={{
        duration:0.3,
        ease:"easeInOut",
        delay:0.2 
      }}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}
