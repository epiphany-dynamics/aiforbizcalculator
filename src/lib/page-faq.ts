import type { FAQItem } from './faq-schema';

// FAQ for the tool pages (homepage + /calculator). Questions are answered
// strictly from what these pages already claim: the report is an estimate from
// 16 inputs matched against 35+ automations using industry benchmarks.
// No invented prices, quotes, or customer results.
// `answer` is HTML; the same string is used for the visible <p> and the
// FAQPage schema Answer text, so schema and visible text always match.
export const pageFAQItems: FAQItem[] = [
  {
    question: 'What do the numbers in my calculator report mean?',
    answer:
      'The AI for Business Calculator takes 16 inputs about your business, team, and goals, matches them against 35+ automations for your industry, and returns a personalized report. The numbers are estimates based on industry benchmarks for businesses your size, not a quote or a guaranteed result. For a full walkthrough of the math, read <a href="/blog/ai-automation-roi-calculator">How to use an AI automation ROI calculator (with a worked example)</a>.',
  },
  {
    question: 'Who is this calculator for?',
    answer:
      'It is built for owners and operators of small service businesses, across industries the site already tailors for, including med spas, dental offices, home services, real estate, and more. It is free, and you get your personalized business report instantly. You can start anytime on the <a href="/calculator">calculator page</a>.',
  },
  {
    question: 'Which assumption changes the result the most?',
    answer:
      'Your own inputs. The estimate is anchored to how much time your team loses to manual work and what that labor costs per hour, so those two inputs move the result more than anything else. To stress-test the other numbers, see <a href="/blog/ai-agent-cost">AI agent cost: what actually drives the bill</a> and the guide to your <a href="/blog/ai-automation-payback-period">AI automation payback period</a>.',
  },
];

export function buildPageFAQSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageFAQItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
