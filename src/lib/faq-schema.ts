export interface FAQItem {
  question: string;
  answer: string;
}

function plainText(value: string): string {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_`>#|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFAQItems(markdown: string): FAQItem[] {
  const heading = /^##\s+Frequently Asked Questions\s*$/im.exec(markdown);
  if (!heading || heading.index == null) return [];
  const remainder = markdown.slice(heading.index + heading[0].length);
  const nextH2 = remainder.search(/^##\s+/m);
  const section = nextH2 >= 0 ? remainder.slice(0, nextH2) : remainder;
  const headings = Array.from(section.matchAll(/^###\s+([^\n]+)\s*$/gm));
  return headings
    .map((item, index) => ({
      question: plainText(item[1]),
      answer: plainText(section.slice((item.index ?? 0) + item[0].length, headings[index + 1]?.index ?? section.length)),
    }))
    .filter((item) => item.question && item.answer);
}

export function buildFAQSchema(markdown: string): Record<string, unknown> | null {
  const items = extractFAQItems(markdown);
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
