import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        categories: defineCollection({
            type: 'data',
            source: {
                include: "categories/*.json"
            },
            schema: z.object({
                name: z.string(),
            })
        }),
        articles: defineCollection({
            type: 'data',
            source: {
                include: "articles/*.md"
            },
            schema: z.object({
                category: z.string(),

                date: z.date(),
                tags: z.array(z.string())
            })
        }),
        pages: defineCollection({
            type: 'page',
            source: {
                exclude: ["articles/*.md"],
                include: "*.md",
                prefix: "/"
            },
        })
    }
})
