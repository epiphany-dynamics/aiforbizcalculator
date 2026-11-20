---
title: "Amazon Textract Cost Per Document: Price the API First"
description: Textract has no flat cost per document. Pick the API and features first, price pages with the Oregon Forms plus Tables example, then test the ROI.
seoTitle: "Amazon Textract Cost Per Document: Price the API"
focusKeyword: amazon textract cost per document
tags:
  - amazon textract
  - document processing cost
  - automation roi
  - aws pricing
  - small business automation
pubDate: "2026-11-19"
image: /images/blog/amazon-textract-cost-per-document.webp
imageAlt: "Amazon Textract Cost Per Document: Price the API First: amazon textract cost per document"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Amazon Textract has no flat cost per document. The bill depends on which API you call, which Analyze Document features you add, and how many pages each file has. AWS's scoped Oregon example prices Forms plus Tables at $0.065 per page, so 5,000 pages cost $325. Estimate pages first, then feed the result into an ROI model.**

## Why there is no flat Textract cost per document

**Textract bills per page, and the rate changes with the API and features you call. A document is just a page count multiplied by a per-page rate. Two files with the same page count can cost different amounts if one needs text only and the other needs Forms and Tables.**

Search results often promise one number per document. That number only exists after you fix three inputs: the API, the features, and the pages in a typical file.

The working formula:

**Cost per document = pages per document × (sum of per-page rates for the features you use)**

This is the same discipline behind [cost per contact and its deflection trap](/blog/cost-per-contact/). Define the unit first, then divide. If you skip the unit, the result looks precise and means nothing.

## Pick the API and features before counting pages

**AWS lists five Textract APIs: Detect Document Text, Analyze Document, Analyze Expense, Analyze ID, and Analyze Lending. Analyze Document adds Forms, Tables, Queries, and Signatures, and you can combine them. Choose the API for the job first, then look up its rate.**

Use this order. Each step feeds the next.

| Step | Question to answer | What it changes |
|---|---|---|
| 1 | What is the job: plain text, structured fields, expenses, IDs, lending packets? | Which API family you price |
| 2 | Which fields must come out as data, not just text? | Which Analyze Document features you add |
| 3 | How many pages does a typical file have? | The page multiplier per document |
| 4 | How many files arrive per month? | Total pages per month |
| 5 | What is the current rate for your region and volume tier? | The per-page rate, from the AWS pricing page |

Step 2 is where owners overspend or underbuild. Adding Tables to a job that only needs a total line adds a charge for nothing. Leaving Forms off a job that needs key-value fields forces manual typing, which is the cost you were trying to remove.

## Worked example: Forms plus Tables in Oregon

**In AWS's Oregon example, tables cost $0.015 per page and forms cost $0.05 per page. Using both on 5,000 tax form pages costs $325, which is $0.065 per page. Treat that as one scoped example, not a rate for every document, region, or volume.**

The AWS example extracts text and structured data from 5,000 pages of tax forms with Analyze Document in US West (Oregon). It uses the one million page tier rates.

**Pages × (tables rate + forms rate) = 5,000 × ($0.015 + $0.05) = 5,000 × $0.065 = $325**

### What each feature choice does to that example

These lines reuse the same two rates and the same 5,000 pages, so only the feature choice moves.

| Features on 5,000 pages | Math | Total |
|---|---|---|
| Tables only | 5,000 × $0.015 | $75 |
| Forms only | 5,000 × $0.05 | $250 |
| Forms plus Tables | 5,000 × $0.065 | $325 |

### Turning pages into a per-document figure

If a document is 4 pages (an illustrative assumption), Forms plus Tables at the example rate gives 4 × $0.065 = $0.26 per document. At 1 page it would be $0.065. At 12 pages it would be $0.78. The per-document number moves with page count, which is why quoting one is a trap.

## Put the service cost into an automation ROI scenario

**Treat Textract as one ongoing cost line, then subtract it with your other running costs from the labor time you remove. Estimate the Textract line outside the calculator, because the calculator does not compute Textract billing units. The result is a modeled figure, not guaranteed cash savings.**

Every number below is illustrative. Replace each with your own measurement.

**Scenario:** a small bookkeeping office handles 400 multi-page documents a month, 3 pages each (assumed), and uses Forms plus Tables at the Oregon example rate.

| Line | Illustrative math | Monthly value |
|---|---|---|
| Pages | 400 × 3 | 1,200 pages |
| Textract cost | 1,200 × $0.065 | $78 |
| Manual entry today | 400 × 6 min at $28 per hour | $1,120 |
| Remaining human review | 400 × 1.5 min at $28 per hour | $280 |
| Other running costs (storage, glue code, hosting) | assumed | $150 |
| Modeled net monthly benefit | $1,120 − $280 − $78 − $150 | $612 |

The $28 hourly figure should be your own [fully loaded labor rate](/blog/fully-loaded-labor-rate/), not a wage guess. The review line matters: extraction output still needs checking, so budget real minutes for it rather than assuming zero.

Now divide any one-time build cost by the monthly benefit to get payback. The method for that step is in [how to calculate software ROI](/blog/how-to-calculate-software-roi/). If the alternative is adding a data entry hire, compare against the [full cost per hire with vacancy and manager time](/blog/cost-per-hire-calculator/). Then enter the monthly Textract and running costs as ongoing costs in the [AI automation ROI calculator](/calculator/).

## When this estimate will mislead you

**A Textract estimate breaks when pages per document vary, when files need rework, or when the rate you captured is stale. Rates here are date and scope bound. Recheck the AWS pricing page for your region and volume tier before you commit, and test on real files.**

Watch for these specific failures:

- **Page count drift.** One 40 page packet in a batch of 3 page files can swamp your average. Use real counts, not a guess.
- **Wrong feature bundle.** Pricing Forms plus Tables when your job needs only one inflates the budget. Pricing one when you need both understates it.
- **Different API.** Expense, ID, and Lending have their own rates. The Oregon example does not transfer to them.
- **Unverified output quality.** This article makes no promise about extraction quality on your documents. Run a sample and count the fields your staff still fix.
- **Modeled labor value.** Minutes saved become cash only if you cut hours, avoid a hire, or sell the freed time.

If volume is a few dozen pages a month, the service cost is rounding error and your own setup time is the real expense. Skip the precision and just test.

## Frequently Asked Questions

### What is the Amazon Textract cost per document?

There is no single figure. Multiply pages per document by the per-page rates of the features you use. In the AWS Oregon example, Forms plus Tables is $0.065 per page, so a 4 page document would be $0.26 under that scoped rate.

### Which Textract API should I price first?

Start with the job. AWS lists Detect Document Text, Analyze Document, Analyze Expense, Analyze ID, and Analyze Lending. Pick the one that matches your document type, then price its features and page counts.

### Can I combine Forms and Tables on the same page?

Yes. AWS says you can call any combination of Forms, Tables, Queries, and Signatures together in Analyze Document. Each feature you add is priced, which is why the Oregon example sums the tables and forms rates.

### Is the $325 Oregon example my price?

Not automatically. It covers 5,000 pages of tax forms in US West (Oregon) at the stated rates. Your region, volume tier, and feature mix can differ, so recheck the AWS pricing page for your own estimate.

### How do I know if Textract is worth it for my business?

Compare the modeled monthly labor you remove against Textract, review time, and running costs. If the net is positive and payback is acceptable, test on real files. The AI automation savings calculator guide shows how to keep that estimate honest.

[AI automation ROI calculator](/calculator/)
