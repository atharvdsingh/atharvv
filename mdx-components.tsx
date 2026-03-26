import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
    return {
        // Headings
        h1: (props) => (
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary mt-8 mb-4" {...props} />
        ),
        h2: (props) => (
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary mt-10 mb-3 pb-2 border-b border-border" {...props} />
        ),
        h3: (props) => (
            <h3 className="text-lg md:text-xl font-semibold text-primary mt-6 mb-2" {...props} />
        ),

        // Paragraph
        p: (props) => (
            <p className="text-primary/80 leading-7 mb-4 text-[15px]" {...props} />
        ),

        // Links
        a: (props) => (
            <a className="text-blue-600 underline underline-offset-4 decoration-blue-600/30 hover:decoration-blue-600 transition-colors" {...props} />
        ),

        // Lists
        ul: (props) => (
            <ul className="list-disc list-inside space-y-1.5 mb-4 text-primary/80 text-[15px] ml-2" {...props} />
        ),
        ol: (props) => (
            <ol className="list-decimal list-inside space-y-1.5 mb-4 text-primary/80 text-[15px] ml-2" {...props} />
        ),
        li: (props) => (
            <li className="leading-7" {...props} />
        ),

        // Code
        code: (props) => {
            const isInline = typeof props.children === 'string' && !props.className
            if (isInline) {
                return (
                    <code className="bg-primary/[0.06] text-primary/90 px-1.5 py-0.5 rounded-md text-[13px] font-mono border border-border" {...props} />
                )
            }
            return (
                <code className="text-[13px] font-mono" {...props} />
            )
        },
        pre: (props) => (
            <pre className="bg-[#0d1117] text-[#e6edf3] rounded-xl p-4 mb-6 mt-2 overflow-x-auto text-[13px] leading-6 border border-white/[0.06]" {...props} />
        ),

        // Blockquote
        blockquote: (props) => (
            <blockquote className="border-l-4 border-blue-500/50 pl-4 py-1 my-4 text-primary/70 italic bg-blue-500/[0.03] rounded-r-lg" {...props} />
        ),

        // Horizontal rule
        hr: () => (
            <hr className="my-8 border-border" />
        ),

        // Strong and emphasis
        strong: (props) => (
            <strong className="font-semibold text-primary" {...props} />
        ),
        em: (props) => (
            <em className="italic text-primary/70" {...props} />
        ),

        // Table
        table: (props) => (
            <div className="overflow-x-auto mb-6 mt-2 rounded-xl border border-border">
                <table className="w-full text-[14px]" {...props} />
            </div>
        ),
        thead: (props) => (
            <thead className="bg-primary/[0.04]" {...props} />
        ),
        th: (props) => (
            <th className="text-left font-semibold text-primary px-4 py-2.5 border-b border-border" {...props} />
        ),
        td: (props) => (
            <td className="px-4 py-2.5 text-primary/80 border-b border-border/50" {...props} />
        ),

        // Image
        img: (props) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="rounded-xl my-6 border border-border shadow-sm" alt="" {...props} />
        ),
    }
}