import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    meta: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    /** Até 3 resultados curtos exibidos no card e no topo do case. */
    results: z.array(z.string()).default([]),
    repoUrl: z.string().optional().default(""),
  }),
});

export const collections = { projects };
