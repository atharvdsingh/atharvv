"use client"
import Image from "next/image";
import React from "react";
import {motion} from "motion/react"

export interface Project {
    title: string;
    src: string;
    href: string;
}

const projects: Project[] = [
    {
        title: "Macbook Mockup",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        href: "#",
    },
    {
        title: "Dashboard App",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        href: "#",
    },
    {
        title: "E-Commerce Platform",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        href: "#",
    },
    {
        title: "AI Chat Interface",
        src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
        href: "#",
    },
];

export const Projects = () => {
    return (
        <div className="py-10 w-full ">
            <div className="text-primary  pt-4 text-sm md:text-sm">
                <div className="grid gap-10 grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-2" >
                    
                {
                    projects.map((project,idx)=>(
                        <motion.div  
                        initial={{
                            opacity:0,
                            filter:'blur(10px)',
                            y:10
                        }}
                        animate={{
                            opacity:100,
                            filter:'blur(0px)',
                            y:0
                        }}
                        transition={{
                            duration:0.3,
                            delay : idx * 0.1,
                            ease:"easeInOut"
                        }}
                        className=" border group w-full  relative my-10 h-72" key={idx} >
                            <Image src={project.src}  height={62} width={400} alt="" className="aspect-square m-auto group-hover:blur-[3px]  duration-300 transition-all  p-2  rounded-3xl object-cover " />
                            <h1 className="font-extrabold text-lg tracking-tight" >
                                {project.title}
                                </h1>

                        </motion.div>
                    ))
                }
                </div>
                
            </div>
        </div>
    );
};
