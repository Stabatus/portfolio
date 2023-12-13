import { z, defineCollection, reference } from "astro:content";

const home = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      lastUpdate: z.date(),
      schools: z.array(z.tuple([z.string(), z.string()])),
      testimonials: z.array(z.tuple([z.string(), z.string()])),
      relatedProject: z.array(reference("projects")),
      aboutMe_title: z.string(),
      aboutMe_desc: z.string(),
      skills: z.array(z.string()),
      skills_indevelopment: z.array(z.string()),
      tools: z.array(z.string()),
      photo_i_took_title: z.string(),
      photo_i_took: z.array(
        image().refine(() => true),
        z.string()
      ),
      playlist: z.string(),
      playlist_title: z.string(),
      lolRank: z.tuple([z.string(), z.string()]),
      aboutMe_pic: z.tuple([image().refine(() => true), z.string()]),
      training: z.array(reference("training")),
      expertise: z.array(reference("expertise")),
    }),
});

const credentials = defineCollection({
  type: "content",
  schema: z.object({
    instagram: z.string(),
    linkedin: z.string(),
    github: z.string(),
    email: z.string(),
    curriculum: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
      link: z.string().optional(),
      post: z.string().optional(),
      timing: z.string().optional(),
      jobType: z.string().optional(),
      tasks: z.array(z.string()),
      heroImage: image().refine(() => true),
      heroImage_alt: z.string(),
    }),
});

const training = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    location: z.string(),
    date: z.string(),
    option: z.string(),
    result: z.string(),
    projects: z.array(z.tuple([z.string(), z.string()])).optional(),
  }),
});

const expertise = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    location: z.string(),
    timing: z.string(),
    date: z.string(),
    post: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  home,
  credentials,
  projects,
  training,
  expertise,
};
