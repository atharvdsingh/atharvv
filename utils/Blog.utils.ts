
import { promises as fs } from "fs"
import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc"
import path from "path"

 type Frontmatter={
    title:string,
    date:string,
    image:string,
    description:string
 }


class BlogService {
    async getSingeBlogBySlugName({ slug }: { slug: string }): Promise<CompileMDXResult<Frontmatter> | null> {
        if (!slug) return null
        const data = await this.readFile({ slug })
        if (!data) return null

        const blog = await compileMDX<Frontmatter>({
            source: data,
            options: {
                parseFrontmatter: true
            }
        })
        return blog



    }
    async getAllBlogs()  {
        const files=await blogService.readDir()
        if(!files) return []
        const blog= await Promise.all(files?.map(
            async file =>{
                const slug= file.replace(".mdx","");
                const frontmatter = await this.getFrontendMatter({slug})
                return {slug,
                    ...frontmatter
                }
            }
        ))

        
        
      return blog 

        

    }
    async readFile({ slug }: { slug: string }) {
        try {
            return await fs.readFile(path.join(process.cwd(), "data", `${slug}.mdx`), "utf-8")
        } catch (error) {
            return null
        }
    }
    async readDir(){
        try {
            return await fs.readdir(path.join(process.cwd(),"data"))
        } catch (error) {
            return null
            
        }
        
    }
    async getFrontendMatter({slug}:{slug:string}){
        const data= await this.readFile({slug})
        if(!data) return null
        const {frontmatter}= await compileMDX<Frontmatter>({
            source:data,
            options:{
                parseFrontmatter:true
            }
        })
        if(!frontmatter) return null
        return frontmatter

    }
}

export const blogService = new BlogService()