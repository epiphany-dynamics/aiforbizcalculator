---
title: "Customer Lifetime Value Calculator: Margin, Not Revenue"
description: Calculate customer lifetime value on contribution margin, not revenue, then pair it with acquisition cost using a worked example and a clear decision framework.
seoTitle: "Customer Lifetime Value Calculator: Margin Math"
focusKeyword: customer lifetime value calculator
tags:
  - customer lifetime value
  - unit economics
  - CAC
  - small business metrics
  - contribution margin
pubDate: "2026-08-18"
image: /images/blog/customer-lifetime-value-calculator.webp
imageAlt: "Customer Lifetime Value Calculator: Margin, Not Revenue: customer lifetime value calculator"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Customer lifetime value is worth calculating only on contribution margin: gross profit per order, minus the variable cost of serving that customer, multiplied by purchase frequency and retained years. Revenue-based CLV overstates what a customer is worth by your entire cost of delivery, which is usually most of it.**

## Revenue CLV and margin CLV are different numbers

**Revenue CLV multiplies what a customer pays you. Margin CLV multiplies what you keep after the cost of serving them. For a service business with 60 percent gross margins and real per-visit costs, the two numbers can differ by roughly half, and only one of them can be safely compared against acquisition spend.**

Most free calculators ask for average order value, purchase frequency, and customer lifespan, then multiply the three together. That produces revenue lifetime value. It is a real number, but it describes the top line of a customer, not the money that survives delivery.

Margin CLV asks the harder question: if this customer vanished tomorrow, how much profit would I actually lose? That is the figure that belongs beside acquisition cost, because acquisition is paid in cash, not in revenue.

### Two costs owners routinely leave out

Gross margin usually captures the obvious cost of goods: product, materials, the technician hour. It rarely captures per-transaction drag such as card processing, booking fees, travel, returns and rework, and the support contacts a customer generates over a year. Those scale with the customer, so they belong inside the CLV math rather than in an overhead bucket you ignore.

## The contribution-margin CLV formula

**Work it in three steps. Contribution per order equals average order value times gross margin percent, minus variable service cost per order. Annual contribution equals contribution per order times orders per year. Margin CLV equals annual contribution times expected retained years. Every input should come from your own last twelve months.**

```
Contribution per order = (AOV x Gross margin %) - Variable service cost per order
Annual contribution    = Contribution per order x Orders per year
Margin CLV             = Annual contribution x Retained years
```

| Input | Where to pull it | Common mistake |
|---|---|---|
| Average order value | Revenue divided by orders, last 12 months | Using list price instead of realized price after discounts |
| Gross margin percent | (Revenue minus COGS) divided by revenue | Putting rent, admin salaries, or software into COGS |
| Variable service cost per order | Processing fees, travel, consumables, rework, support minutes | Excluding support time because it feels like overhead |
| Orders per year | Orders in the period divided by active customers | Averaging in one-time buyers who never returned |
| Retained years | 1 divided by annual churn rate | Claiming a lifespan longer than the business has existed |

When you price support minutes, use a real hourly cost rather than a wage. The method in [Fully loaded labor rate: how to calculate yours](/blog/fully-loaded-labor-rate/) gives you the multiplier that turns payroll into the number this formula needs.

## A worked example with illustrative numbers

**A mobile dog grooming operation charging an 85 dollar average ticket at 62 percent gross margin keeps 52.70 per visit before service costs. After processing, travel, and scheduling software, contribution lands near 43.80. Six visits a year across 2.5 retained years produces a margin CLV close to 657 dollars.**

All figures below are illustrative and chosen to show the arithmetic, not to serve as benchmarks.

| Line | Value | How it was derived |
|---|---|---|
| Average ticket | $85.00 | Realized price after discounts |
| Gross margin | 62% | Groomer pay and supplies sit in COGS |
| Gross profit per visit | $52.70 | 85.00 x 0.62 |
| Card processing | $2.50 | About 2.9 percent plus fixed fee |
| Travel and fuel | $6.00 | Per stop, mobile route |
| Booking and reminder software | $0.40 | Monthly cost divided by visits |
| Contribution per visit | $43.80 | 52.70 minus 8.90 |
| Visits per year | 6 | Active customers only |
| Annual contribution | $262.80 | 43.80 x 6 |
| Retained years | 2.5 | 40 percent annual churn |
| **Margin CLV** | **$657** | 262.80 x 2.5 |
| Revenue CLV, for contrast | $1,275 | 85 x 6 x 2.5 |

The revenue figure is 94 percent higher than the margin figure. Budget against the wrong one and you will approve acquisition spend that never pays back.

Retention moves this number more than price does. Pushing retained years from 2.5 to 3.5 adds about 263 dollars of CLV without touching the ticket, which is the mechanism behind [How Salon Automation Increases Client Lifetime Value](https://epiphanydynamics.ai/blog/how-salon-automation-increases-client-lifetime-value/): rebooking and reminder flows extend the tail rather than raise the price.

## Pairing CLV with acquisition cost without double counting

**Customer acquisition cost is total acquisition spend divided by new customers won in the same period. It includes ad spend, agency fees, and lead-gen tools. It does not include the variable service costs you already subtracted inside CLV, and you never subtract cost per lead again on top of CAC.**

Cost per lead sits one layer upstream. Leads become customers at some close rate, so cost per lead times leads per customer equals CAC. They are the same money viewed at two stages, and the missed-lead adjustment in the [Cost per lead calculator: the missed-lead adjustment](/blog/cost-per-lead-calculator/) changes CAC by changing the denominator, not by adding a separate deduction.

Continuing the illustration: 2,200 dollars of monthly acquisition spend producing 22 new customers gives a CAC of 100 dollars. Against a 657 dollar margin CLV that is a 6.6 to 1 ratio. Against the revenue CLV it would read 12.8 to 1, which is the flattering number nobody should act on.

Payback matters separately from the ratio. At 43.80 of contribution per visit, a 100 dollar CAC clears in 2.3 visits, roughly 4.6 months at six visits a year. Run your own inputs through the [AI automation ROI calculator](/calculator/) before you commit budget to any channel or tool.

## A decision framework for the ratio

**Read the ratio and the payback window together. A high ratio with a 30 month payback still starves cash. Use the bands below as a starting posture, then confirm with your own retention data before scaling spend. The bands are judgment calls, not industry standards.**

1. Below 1 to 1: each new customer destroys margin. Stop increasing spend and fix pricing or service cost first.
2. Between 1 and 2 to 1: too thin to absorb a bad quarter. Work on retained years and per-order costs before adding channels.
3. Between 3 and 5 to 1: healthy for most local service businesses. Scale the channel that produced it and watch whether CAC rises as volume does.
4. Above 6 to 1: often means underspending on acquisition, or an optimistic retained-years estimate. Verify churn before celebrating.
5. Regardless of band: if CAC takes more than 12 months of contribution to recover, treat growth as cash-constrained and finance it accordingly.

That same discipline applies when you evaluate tooling. The reading guide in [AI ROI calculator: how to read the output and spot a fake](/blog/ai-roi-calculator/) covers which outputs deserve trust, and [AI automation savings calculator: an honest estimate](/blog/ai-automation-savings-calculator/) shows how to keep a savings estimate conservative enough to survive contact with your books.

## When contribution-margin CLV is the wrong tool

**Skip this calculation when you have fewer than roughly 12 months of repeat-purchase history, when a handful of accounts dominate revenue, or when your product is genuinely one-time. In those cases the retained-years input is a guess, and multiplying by a guess produces a confident number with no evidence underneath it.**

Concentrated books break the average outright. If three clients supply half your revenue, an average CLV describes nobody. Segment first, calculate per segment, and accept that the smallest segment may need a per-account model instead. Highly seasonal businesses have the same problem in a different shape: annualize from a full cycle, never from a peak quarter.

## Frequently Asked Questions

### What is a good LTV to CAC ratio?

Three to one is the figure most often repeated, but it is a convention rather than a measured standard. On margin CLV, three to one with a payback under a year is a defensible place to scale. Judge your own trend over time ahead of any external number.

### Should I discount future cash flows?

For retained periods under three years, discounting changes the answer very little for most small businesses, and the retained-years estimate carries far more error than the discount rate would correct. If your model runs five years or longer, apply a discount rate and state it openly.

### How do I estimate retained years without years of history?

Use one divided by your annual churn rate. If 40 percent of active customers do not return within twelve months, retained years is 2.5. With less than a full year of data, cap the estimate at one year and revisit it each quarter rather than inventing a longer tail.

### Does CLV tell me what to spend on automation?

Indirectly. CLV sets the ceiling on acquisition spend, while automation usually acts on retention and on the variable service cost line. Improvements to either one raise CLV, which then raises what you can afford to pay for a customer.

### Should CLV be per customer or per household?

Match it to how you bill and how you market. If one household books multiple pets, rooms, or vehicles under a single relationship, calculate at the household level, because that is the unit your acquisition spend actually buys.

Run your own figures through the [AI automation ROI calculator](/calculator/), then compare the margin CLV it implies against your current CAC before your next budget cycle.
