import Container from "@/components/Container";
import { Timeline } from "@/components/Timeline";
import Image from "next/image";

export const metadata = {
  title: "About — Atharv",
  description:
    "Full stack developer specializing in building scalable and efficient web applications.",
};

const techStack = [
  { name: "TypeScript", icon: "🔷" },
  { name: "React / Next.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Prisma", icon: "🔺" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Redis", icon: "🟥" },
];

const experience = [
  {
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications with modern frameworks, focusing on performance and developer experience.",
  },
  {
    title: "System Design",
    description:
      "Designing scalable architectures with clean service layers, microservices patterns, and efficient database queries.",
  },
  {
    title: "Technical Writing",
    description:
      "Sharing knowledge through blog posts on TypeScript patterns, React Server Components, and web development best practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="py-20">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            Hey, I&apos;m Atharv
          </h1>
          <p className="text-lg text-primary/70 max-w-2xl leading-relaxed">
            A full stack developer who loves building scalable, efficient web
            applications. I care deeply about clean architecture, type safety,
            and crafting experiences that feel fast and polished. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident reiciendis officiis dicta autem aut vel non voluptatem culpa quis. Molestiae delectus nihil ad, recusandae eos dicta vero nesciunt illum ipsa, vitae atque praesentium. Saepe sed illum et neque dolor accusamus molestias, labore, perferendis itaque numquam non enim incidunt, sit laborum doloremque quod maxime possimus. Facere error suscipit dignissimos modi aspernatur cumque tenetur laudantium dolorum sint. Blanditiis vel, porro ipsam incidunt laborum magnam libero similique sed, veniam deserunt excepturi esse quod. Culpa, reiciendis hic laborum itaque voluptatibus debitis corporis amet soluta suscipit, quis quisquam facere. Earum a ducimus exercitationem quibusdam rem eos asperiores fugit laboriosam totam ex. Officia veritatis, recusandae quibusdam doloremque nobis aliquam repellendus praesentium eveniet dolorum. Nobis ab unde exercitationem, rem autem recusandae modi possimus delectus ducimus quibusdam, esse, facere voluptatem eaque sunt necessitatibus est placeat excepturi qui sequi repudiandae perferendis tempore minus perspiciatis? Nostrum laudantium, fugiat illo facilis autem blanditiis nemo quo laboriosam voluptate vel excepturi mollitia enim nulla sint possimus odio iusto, doloremque assumenda aliquam eveniet molestiae libero officia? Iste, accusamus! Nihil adipisci rerum recusandae repellendus quasi nostrum, cumque quidem repellat ut aut mollitia numquam magnam corrupti porro, deserunt dolor facilis sequi. Error quia aliquam accusamus!
          </p>
        </div>
        <div>
          <Timeline />
        </div>

      </Container>
    </div>
  );
}
