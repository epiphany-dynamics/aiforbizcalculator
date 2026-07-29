---
title: Eligibility automation ROI for physical therapy clinics
description: "Model eligibility automation ROI for a physical therapy clinic: cost inputs, labor per check, savings rate, break-even formula, and payback window."
seoTitle: Eligibility Automation ROI for PT Clinics
focusKeyword: eligibility automations physical therapy
tags:
  - eligibility automation
  - physical therapy
  - roi
  - automation payback
  - healthcare operations
  - break-even analysis
pubDate: "2026-07-29"
image: /images/blog/eligibility-automations-physical-therapy.webp
imageAlt: "Eligibility automation ROI for physical therapy clinics: eligibility automations physical therapy"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Eligibility automation pays for itself when the monthly cost of manual verification plus eligibility related denials, multiplied by the share the software actually removes, exceeds the subscription fee. Most physical therapy clinics can model this with five inputs: checks per month, minutes per check, loaded wage, denial write off cost, and vendor pricing.**

Eligibility verification is one of the few clinic tasks with a clean unit of work. One patient, one payer, one check. That makes it easier to price than almost any other automation candidate, because you can count the units and time them instead of guessing at a vague "front desk efficiency" gain.

## What you are actually paying for

**Your cost side has three lines, not one: the subscription or per transaction fee, a one time setup and integration charge, and the internal time someone spends reviewing exceptions the automation kicks back. Leave the third line out and every payback number you produce will be optimistically wrong.**

Vendors quote eligibility tools in three shapes: flat monthly, per transaction (often a few cents to a dollar per check), or bundled inside a larger practice management fee. Per transaction pricing is the honest one for a clinic with seasonal volume, but it also means your cost grows with your visit count, so model it as a variable, not a constant.

| Cost input | Where you find it | Illustrative value |
| --- | --- | --- |
| Subscription or per check fee | Vendor quote, in writing | $349 per month |
| Setup and integration | One time line on the quote | $1,200 |
| Exception review time | Vendor's stated auto resolve rate | 15% of checks still touched by staff |
| Contract length | Order form, not the sales call | 12 months |

If a quote will not separate those lines for you, that is itself a finding. The five places pricing tends to hide is the whole subject of the [AI cost calculator: the five buckets a quote hides](/blog/ai-cost-calculator/) breakdown, and eligibility tools hide costs in exactly the same buckets as everything else.

## The labor side: minutes per check, not hours per week

**Measure eligibility work per verification, not per week. Time ten real checks with a stopwatch, take the median, and multiply by your loaded hourly wage, which is pay plus payroll tax plus benefits. Then add denial rework separately, because a failed verification costs both staff minutes and reimbursement dollars.**

"My front desk spends about half a day on this" is not an input. It is a feeling. Two clinics with the same visit volume can differ threefold on verification load depending on payer mix, how many plans require re-verification each month, and how often patients change coverage mid episode.

### The two labor lines to capture

1. **Proactive verification.** New patient checks, monthly re-verifications, and visit limit tracking. Time these directly.
2. **Reactive rework.** Time spent on claims that bounced for coverage or authorization reasons: rechecking, refiling, calling the payer, and calling the patient.

Reactive rework is the line most clinics underweight, and it is usually where the real money sits. A denied visit is not just twenty minutes of staff time. It is a reimbursement dollar you may never collect.

## The four formulas that decide this

**Four formulas cover the whole decision: cost per manual check, total monthly exposure, monthly net savings after software cost, and payback in months. Everything else is commentary. Write these down with your own numbers before you take a demo, so the demo cannot become the source of your assumptions.**

**1. Cost per manual check**
`(minutes per check / 60) x loaded hourly wage`

**2. Monthly exposure**
`(checks per month x cost per check) + (visits x eligibility denial rate x average reimbursement x unrecovered share) + rework labor cost`

**3. Monthly net savings**
`(monthly exposure x savings rate) - monthly software cost`

**4. Payback window**
`setup cost / monthly net savings`

The savings rate is the input that decides whether this is a good project or a bad one, and it is the one you have the least evidence for on day one. It is the share of your current exposure the automation actually removes. Not the share of checks it touches. The share of cost it eliminates.

There is also a useful floor calculation. Break even checks per month equals `monthly software cost / (cost per check x savings rate)`. That tells you the verification volume below which the tool cannot pay for itself on labor alone, ignoring denial recovery entirely.

## Illustrative example: a three therapist clinic

**The following numbers are illustrative, not benchmarks. Riverbend Physical Therapy is a made up three therapist clinic used to show the arithmetic end to end. Substitute your own counts from your practice management reports and payer remittance data, because payer mix moves these results more than any other variable.**

Illustrative inputs:

- 620 visits per month
- 210 eligibility checks per month (new patients, monthly re-verifications, coverage changes)
- 9 minutes median per manual check
- $24 loaded hourly wage for front desk staff
- 2.5% of visits denied for eligibility or authorization reasons
- $95 average reimbursement per visit, 40% of denied visits never recovered
- 20 minutes of rework per denied visit
- $349 per month software, $1,200 setup

The math:

- Cost per check: (9 / 60) x $24 = **$3.60**
- Verification labor: 210 x $3.60 = **$756 per month**
- Denial write offs: 620 x 2.5% = 15.5 visits, call it 15. 15 x $95 x 40% = **$570**
- Rework labor: 15 x (20 / 60) x $24 = **$120**
- Total monthly exposure: 756 + 570 + 120 = **$1,446**

At a 65% savings rate: $1,446 x 0.65 = $940 gross, minus $349 software = **$591 net per month**. Payback: $1,200 / $591 = **2.0 months**.

Because the savings rate is the soft input, run it as a range instead of a point estimate:

| Savings rate | Gross monthly savings | Net after software | Payback |
| --- | --- | --- | --- |
| 45% | $651 | $302 | 4.0 months |
| 65% | $940 | $591 | 2.0 months |
| 85% | $1,229 | $880 | 1.4 months |

Even the pessimistic column clears the fee here, which is what a genuinely good automation candidate looks like. If your worst case column goes negative, the decision is volume dependent and you should say so out loud.

Plug your own visit counts, wage, and denial rate into the [AI automation ROI calculator](/calculator/) to see where your break even sits before a vendor frames it for you.

## A six step check before you commit budget

**Work through these in order. Steps one through three are data collection you can do this week with your practice management reports and a stopwatch. Steps four through six are contract questions. Skipping straight to step five is how clinics end up paying for a tool that automates the easy half of their payer mix.**

1. Pull actual check volume for the last three months, not a typical week.
2. Time ten real verifications and record the median, not the average.
3. Pull eligibility and authorization denial counts and dollar amounts from remittance data.
4. Ask the vendor which of your specific payers they connect to in real time versus by portal scrape or manual fallback.
5. Ask what happens to checks the system cannot complete, and who owns that queue.
6. Recalculate the savings rate using only the payers with real connections, then re run the payback.

Step six is the one that changes answers. If a vendor covers 70% of your payer mix, your realistic savings rate is capped near 70%, not the number on the slide.

## When eligibility automation is not the first thing to fix

**If your no show rate is above roughly 12% or you are missing inbound calls during treatment hours, those problems usually carry a larger dollar exposure than verification labor, and they are cheaper to fix. Eligibility automation earns its place after the revenue leaks upstream of it are closed.**

A verification tool saves staff minutes on visits that already happened. A reminder system protects revenue on visits that would not have happened at all. Compare your eligibility exposure against the arithmetic in [Automated appointment reminders: the break-even math](/blog/automated-appointment-reminders/) and the call handling model in [AI front desk math: call volume, booking rate, payback](/blog/ai-front-desk/) before deciding which project goes first. Whichever one shows the biggest monthly exposure wins.

The same sequencing logic applies to any queue of automation candidates, and [AI workflow automation ROI: how to calculate the payback](/blog/ai-workflow-automation-roi/) covers how to rank them consistently rather than by whoever demoed most recently. For clinical and operational context specific to this workflow, [Insurance Eligibility Automation for Physical Therapy Clinics](https://epiphanydynamics.ai/blog/insurance-eligibility-automation-physical-therapy/) walks through what the automation actually does at the payer connection level.

## Frequently Asked Questions

### What savings rate should I assume before I have data?

Use your vendor's payer coverage as the ceiling and take something below it. If they connect to payers representing 70% of your checks, modeling 50% to 60% is defensible for a first pass. Then measure the real rate after 60 days and rebuild the model.

### Should I count denial reduction as savings or as new revenue?

Count the unrecovered portion as recovered revenue and the rework hours as labor savings. Keep them on separate lines. Mixing them makes it impossible to see which half of the benefit failed if your actual results come in short.

### How do per transaction fees change the break even?

They convert a fixed cost into a variable one, which flattens the payback curve. Your break even shifts from a volume threshold to a margin per check: the tool works whenever the fee per check stays meaningfully below your manual cost per check.

### Does a short payback window mean the vendor is honest?

No. A short payback usually means the setup fee is small, which tells you nothing about ongoing value. Judge the monthly net savings line and the assumptions behind the savings rate, not the payback number alone.

### What if my clinic runs fewer than 100 checks a month?

Then labor savings alone probably will not cover a flat monthly fee, and your case has to rest on denial reduction or a per transaction plan. Run the break even checks formula first, because it will tell you quickly whether a flat fee is a nonstarter at your volume.

Start with your own three month numbers, run them through the [AI automation ROI calculator](/calculator/), and bring the output to the vendor call instead of the other way around.
