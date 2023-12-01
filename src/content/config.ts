import { z, defineCollection, reference } from "astro:content";

const home = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdate: z.date(),
    schools: z.array(z.tuple([z.string(), z.string()])),
    testimonials: z.array(z.tuple([z.string(), z.string()])),
    relatedProject: z.array(reference("projects"))
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    post: z.string(),
    timing: z.string(),
    jobType: z.string(),
    tasks: z.array(z.string())
  })
});

export const collections = {
  home,
  projects
};
