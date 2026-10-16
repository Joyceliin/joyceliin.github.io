import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

export type Project = CollectionEntry<"projects"> & { caseSlug: string };

/** Cases de um idioma (pasta pt/ ou en/), ordenados, com o slug sem o prefixo. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection("projects", (p) => p.slug.startsWith(`${lang}/`));
  return all
    .map((p) => Object.assign(p, { caseSlug: p.slug.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
