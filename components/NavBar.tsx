"use client"
import { useMotionValueEvent, useScroll } from 'motion/react'
import React, { useState } from 'react'
import Link from 'next/link'
import Container from './Container';
import {motion} from "motion/react"

export interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Other', href: '/#other' },
];

export default function NavBar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
    setIsScrolled(true)
    
    if (latest > 20) {
      setIsScrolled(true) // using standard tailwind shadow
    } else {
      setIsScrolled(false)
    }
  })

  return (
    <Container className='relative' >

    <motion.nav   animate={{
        boxShadow: isScrolled ?("var(--shadow-base)"):("none"),
        y:isScrolled?(20):(0),
        width: isScrolled ?("50%"):("100%")
    }}  
    transition={{
        duration:0.3,
        ease:"easeInOut"
    }}
    className={`  bg-white rounded-full flex fixed inset-x-0 top-0  max-w-5xl m-auto  justify-between p-4   `}>
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">Logo</Link>
      </div>

      <ul className="flex items-center   gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
    </Container>
  )
}
