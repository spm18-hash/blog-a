import type { CollectionEntry } from "astro:content";
import type { Page } from "astro";

type PageLink = {
  pageNum: number;
  text: string;
  href: string;
};

type Ellipsis = {
  text: string;
  pageNum?: never;
  href?: never;
};

export function collapseRange(
  page: Page<CollectionEntry<"blog">>,
  pages: Array<PageLink>,
): Array<PageLink | Ellipsis> {
  const total = pages.length;
  const max = 5;

  const needEllipsis = total > max;

  const hasStartEllipsis = needEllipsis && page.currentPage > max - 2;

  const hasEndEllipsis = needEllipsis && page.currentPage < total - 2;

  if (!needEllipsis) {
    return pages;
  }

  if (hasStartEllipsis && !hasEndEllipsis) {
    return [
      pages[0],
      { text: "..." },

      ...pages.slice(Math.min(page.currentPage - 2, total - 3)),
    ];
  }

  if (!hasStartEllipsis && hasEndEllipsis) {
    return [
      ...pages.slice(0, Math.max(3, page.currentPage + 1)),
      { text: "..." },
      pages[pages.length - 1],
    ];
  }

  return [
    pages[0],
    { text: "..." },
    ...pages.slice(page.currentPage - 2, page.currentPage + 1),
    { text: "..." },
    pages[pages.length - 1],
  ];
}
