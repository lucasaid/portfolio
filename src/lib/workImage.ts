import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>("/src/img/work/*", { eager: true });

export const workImage = (path?: string) => (path ? images[`/src/img/${path}`]?.default : undefined);
