import Container from "@/components/Container";
import { Projects } from "@/components/Projects";
import fs from "fs";
import { object } from "motion/react-client";
import path from "path";
import Link from "next/link";

export default function Home() {
    const files=fs.readdirSync(path.join(process.cwd(),"app/blog")).filter((files)=>(!files.endsWith(".tsx")))
    console.log(files)

  return (
    <div className="min-h-screen  flex items-start justify-start">
      <Container>
    {/* <div>
      {
        files.map((file,index)=>(
          <div> {Object.keys(file).map((value)=>(
            <div>{file}</div>
          ))} </div>
        ))
      }

    </div> */}
    <div className="flex flex-col gap-10 mt-20" >
        
    {files.map((file,index)=>(
        <Link key={index} href={`/blog/${file}`} >
        {
            file
        }
      </Link>
    ))}
    </div>
<div>

</div>
      </Container>
    </div>
  );
}
