import Container from "@/components/Container";
import { Projects } from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  flex items-start justify-start">
      <Container>
        <div className="text-3xl text-primary  font-bold  ">hii there</div>
        <div className="text-primary/80">
          {" "}
          i'm atharv a full stack developer exprert in building scalabale and
          efficient web applications
          lorem100
        </div>
        <Projects/>
      </Container>
    </div>
  );
}
