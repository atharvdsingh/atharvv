import { promises as fs } from "fs"
import path from "path"
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc"
import { redirect } from "next/navigation"
import { blogService } from "@/utils/Blog.utils"


export  async function generateStaticParams(){
    const blogs= await blogService.getAllBlogs()
    return blogs.map((blog,index)=>(
        {
            slug:blog.slug
        }
    ))

}

export  async function generateMetadata({params}:{params:Promise<{slug:string}>}){
    
    const frontmatter= await blogService.getFrontendMatter({slug:(await params).slug})
    console.log(frontmatter)
    if(!frontmatter) return {title:"blog not found"}
    return {
        title:frontmatter.title,
        description:frontmatter.description
    }

}

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {

    const blog = await blogService.getSingeBlogBySlugName({ slug: (await params).slug })
    if (!blog) redirect("/blog")
    const { content } = blog
    console.log("this is current path", process.cwd())
    console.log(blog)
    return (
        <div className="prose" >

            {content}
        </div>
    )
}