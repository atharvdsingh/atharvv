import Container from "@/components/Container";
import { Projects } from "@/components/Projects";
import fs from "fs";
import { object } from "motion/react-client";
import path from "path";
import {Link} from "next-view-transitions";
import { blogService } from "@/utils/Blog.utils";
import Image from "next/image";


export default  async function Home() {
const blogs= await blogService.getAllBlogs()
console.log(blogs.map(blogs=>blogs.image))
if(!blogs) return (
  <div>null</div>
)

return (
      <div className="min-h-screen mt-20 flex items-start justify-start">
        <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center" >
        {
          blogs.map((blog,index)=>(
            <Link  href={`./blog/${blog.slug}`} key={index} className="relative bg-neutral-300/15 rounded-2xl flex flex-col items-center justify-center   aspect-square " >
  {blog.title}  
            <Image width={300} height={300} alt={blog.title || "/file.svg" } className="" src={blog.image ||"/file.svg"} />
            </Link>
          ))
        }
      </div>
        </Container>
      </div>
    );
}
