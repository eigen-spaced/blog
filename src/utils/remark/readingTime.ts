/**
 * remark plugin — estimates reading time (whole minutes, ~200 wpm) from the
 * markdown body and exposes it as `minutesRead` on the Astro frontmatter, read
 * back in the post layout via `render()`'s `remarkPluginFrontmatter`.
 * Written without `mdast-util-to-string` to avoid an extra dependency.
 */
function textOf(node: any): string {
  if (typeof node?.value === "string") return node.value;
  if (Array.isArray(node?.children)) return node.children.map(textOf).join(" ");
  return "";
}

export function remarkReadingTime() {
  return function (tree: any, file: any) {
    const words = textOf(tree).split(/\s+/).filter(Boolean).length;
    const minutesRead = Math.max(1, Math.round(words / 200));

    const data = file.data ?? (file.data = {});
    data.astro ??= {};
    data.astro.frontmatter ??= {};
    data.astro.frontmatter.minutesRead = minutesRead;
  };
}
