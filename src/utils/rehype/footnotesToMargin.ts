/**
 * rehype plugin — reshapes GFM footnotes for the margin-notes design:
 *   1. Rewrites each inline reference `<sup><a data-footnote-ref>N</a></sup>`
 *      into a single bevelled badge `<a class="fn-marker" data-note-ref="N">`.
 *   2. Tags the trailing `<section data-footnotes>` with `margin-notes-source`
 *      so the post layout's client script can lift each note into the right
 *      margin rail (and CSS can show it inline as the narrow-viewport fallback).
 *   3. Records the note count on the Astro frontmatter (`footnotes`) so the
 *      layout only renders the rail scaffold when a post actually has notes.
 *
 * Works on the hast tree directly (no hast serialization / extra deps needed).
 */
export function rehypeFootnotesToMargin() {
  return function (tree: any, file: any) {
    let count = 0;

    const visit = (node: any, parent: any, index: number) => {
      if (!node || typeof node !== "object") return;

      // (1) inline reference marker → badge
      if (
        node.tagName === "sup" &&
        Array.isArray(node.children) &&
        node.children.length === 1 &&
        node.children[0]?.tagName === "a" &&
        node.children[0]?.properties?.dataFootnoteRef !== undefined
      ) {
        const anchor = node.children[0];
        const n = String(anchor.children?.[0]?.value ?? "").trim();
        anchor.properties = anchor.properties ?? {};
        anchor.properties.className = ["fn-marker"];
        anchor.properties.dataNoteRef = n;
        if (parent && Array.isArray(parent.children)) {
          parent.children[index] = anchor; // drop the <sup> wrapper
        }
        return;
      }

      // (2) footnotes section → mark as the margin-notes source + count notes
      if (
        node.tagName === "section" &&
        node.properties?.dataFootnotes !== undefined
      ) {
        const cls = node.properties.className;
        node.properties.className = Array.isArray(cls)
          ? [...cls, "margin-notes-source"]
          : [cls, "margin-notes-source"].filter(Boolean);
        const ol = (node.children ?? []).find((c: any) => c.tagName === "ol");
        if (ol) {
          count = (ol.children ?? []).filter(
            (c: any) => c.tagName === "li"
          ).length;
        }
      }

      if (Array.isArray(node.children)) {
        for (let i = 0; i < node.children.length; i++) {
          visit(node.children[i], node, i);
        }
      }
    };

    visit(tree, null, -1);

    const data = file.data ?? (file.data = {});
    data.astro ??= {};
    data.astro.frontmatter ??= {};
    data.astro.frontmatter.footnotes = count;
  };
}
