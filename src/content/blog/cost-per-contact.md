---
title: "Cost per contact: the formula and the deflection trap"
description: "Cost per contact explained: the labor, tools, facilities, and outsourcing formula, handled versus resolved denominators, and why deflection skews the average."
seoTitle: "Cost per contact: the baseline formula"
focusKeyword: cost per contact
tags:
  - cost per contact
  - unit economics
  - contact center costs
  - support metrics
  - automation roi
pubDate: "2026-08-16"
image: /images/blog/cost-per-contact.webp
imageAlt: "Cost per contact: the formula and the deflection trap: cost per contact"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Cost per contact is your total contact-handling cost divided by the number of contacts your team handled in the same period. Add labor, tools, facilities, and outsourcing for the numerator. Count every handled contact, by channel, for the denominator. One period, one boundary, and no netting out deflected volume.**

## What cost per contact actually measures

**Cost per contact is a unit-economics baseline, not a performance score. It tells you what one inbound interaction costs to handle today, before any automation touches the queue. Every savings claim, payback estimate, and vendor quote you evaluate later gets measured against this number, so it has to come from your own ledger.**

The formula is deliberately boring:

```
Cost per handled contact = (Labor + Tools + Facilities + Outsourcing) / Handled contacts
```

Two rules keep it honest. First, the numerator and the denominator cover the exact same period, usually one calendar month. If you use a busy month's volume against an average month's payroll, the number is fiction. Second, draw a boundary and hold it. Costs that exist because contacts exist go in. Costs that would exist at zero contacts, like your accounting software or your delivery vehicles, stay out.

This baseline is an input, not an answer. The return on an automation investment is a separate calculation that starts from this figure and then asks what changes.

## The four buckets in the numerator

**The numerator is four buckets: labor, tools, facilities, and outsourcing. Labor is fully loaded, not base wage. Tools are the seats and licenses that exist because contacts exist. Facilities are allocated by headcount, not counted in total. Outsourcing covers overflow and after-hours vendors. Anything unrelated to handling contacts stays out.**

| Bucket | What belongs in it | Illustrative monthly |
|---|---|---|
| Labor | Fully loaded pay for everyone who touches the queue, plus the supervisor share that supports it | $9,920 |
| Tools | Phone system, CRM and ticketing seats, call recording, chat widget | $340 |
| Facilities | Allocated desk space, utilities, hardware amortization for those seats | $420 |
| Outsourcing | After-hours answering service, overflow vendor, seasonal contractors | $600 |
| **Total** | | **$11,280** |

Those figures are illustrative and exist to show the mechanics. The labor line is where most estimates go wrong, because people drop in an hourly wage instead of the loaded rate that includes payroll taxes, benefits, paid time off, and unproductive hours. If you have not built that rate yet, work through [how to calculate your fully loaded labor rate](/blog/fully-loaded-labor-rate/) before you touch anything else, because a 30 percent understatement in labor flows straight through to a 30 percent understatement in cost per contact.

Partial allocation is normal. If your office manager spends roughly a quarter of the day on inbound calls, put 25 percent of that loaded cost in the bucket and leave the rest out.

## Handled, resolved, and the deflection trap

**Handled contacts and resolved contacts are different denominators, and they answer different questions. Cost per handled contact measures throughput. Cost per resolved contact measures whether the work actually ended. Track both, because a queue can look cheap per contact while quietly sending the same customer back three times.**

```
Cost per resolved contact = Same numerator / Contacts resolved without a repeat within 7 days
Resolution rate = Resolved / Handled
```

With the illustrative numbers, 1,850 handled contacts against $11,280 gives $6.10 per handled contact. If only 1,480 of those actually ended the customer's problem, the resolved figure is $7.62. The gap between those two numbers is the cost of rework, and it is the first thing worth fixing because it requires no purchase.

The deflection trap follows from the same arithmetic. Suppose a chatbot absorbs 200 simple hours-and-location chats. Handled contacts drop to 1,650. If nobody's schedule changed, the numerator is still $11,280, so cost per contact rises to $6.84. Nothing got worse, and nothing got better either. Deflection removes the cheapest contacts first, which pushes the blended average up. That is why a vendor reporting a low cost per AI-handled contact is not describing your savings. Savings show up only when a cost bucket shrinks: fewer overtime hours, a dropped answering service, a seat you did not need to backfill.

## Channel mix and the blended average problem

**Channel mix moves cost per contact more than most efficiency projects do. A call that takes eight minutes of undivided attention costs several times what a chat handled two at a time costs. When your mix shifts toward the cheap channel, the blended number falls on its own, and nothing about your operation actually improved.**

Split the number by channel using handle minutes as the allocation key. Continuing the illustrative example:

| Channel | Contacts | Avg handle time | Share of minutes | Allocated cost | Cost per contact |
|---|---|---|---|---|---|
| Phone | 1,050 | 7.5 min | 68% | $7,694 | $7.33 |
| Email | 470 | 5.0 min | 20% | $2,296 | $4.89 |
| Chat | 330 | 4.0 min | 12% | $1,290 | $3.91 |
| Blended | 1,850 | | 100% | $11,280 | $6.10 |

Now a shift is readable. If phone volume falls and chat rises, you can see whether the blended drop came from real cost reduction or from mix alone. Hold the mix constant across two periods and recompute. If the per-channel numbers did not move, the improvement is arithmetic, not operations.

## A worked example, start to finish

**Build the number in six passes, in this order, using one closed month of data. Order matters because each step constrains the next. The output is three figures you will reuse constantly: cost per handled contact, cost per resolved contact, and cost per contact for your most expensive channel.**

1. Pick a closed month. Not the current one, and not your slowest.
2. Pull contact counts by channel from the phone system, inbox, and chat tool. Deduplicate the customer who called and then emailed about the same issue; count that as one contact with two touches.
3. Build fully loaded labor for every person who touched the queue, allocating partial roles by honest percentage.
4. Add tools, allocated facilities, and outsourcing invoices for that same month.
5. Divide for the blended figure, then divide again using resolved contacts.
6. Allocate by handle minutes to get the per-channel view.

In the running example that produces $6.10 blended, $7.62 resolved, and $7.33 for phone. Phone is where an automation case would have to prove itself, and phone is where the loaded labor sits.

Once you have those three numbers, put them into the [AI automation ROI calculator](/calculator/) with your monthly volume. The calculator uses cost per contact as the baseline input and computes the investment return as a separate line, so you can see how much of a projected gain comes from a lower unit cost versus simply fewer contacts reaching a human.

Before you compare that against a vendor proposal, read [the five buckets an AI cost calculator quote hides](/blog/ai-cost-calculator/), because implementation, integration, and ongoing tuning rarely appear on the first page of a quote.

## When cost per contact is the wrong tool

**Cost per contact assumes contacts are roughly interchangeable. When they are not, the average hides everything that matters. Below about 300 contacts a month the figure swings too much month to month to steer decisions, and in sales-heavy queues a cheaper contact can quietly mean a lost deal.**

If your inbound queue is mostly prospects rather than existing customers, the unit you care about is acquisition, not handling. Use the [cost per lead calculator and its missed-lead adjustment](/blog/cost-per-lead-calculator/) instead, because a contact that books revenue and a contact that asks about parking hours do not belong in the same average. The same caution applies to any queue where handle time varies by a factor of ten between the simplest and hardest case: segment first, then compute.

Cost per contact also says nothing about timing. It is a rate, not a schedule. When you are deciding whether a system pays for itself before the fiscal year closes, move to [the AI automation payback period math](/blog/ai-automation-payback-period/) and use this figure as the input it was built to be.

## Frequently Asked Questions

### What is a good cost per contact?

There is no universal benchmark worth trusting, because the number depends entirely on your channel mix, wage market, and what you chose to include in the numerator. The useful comparison is your own figure across two periods with a consistent boundary. A published industry average calculated under different rules will mislead you more than it helps.

### Should I include contacts nobody answered?

Not in the denominator, since no cost was incurred handling them. Track abandoned and missed contacts as a separate count next to the calculation. They represent lost revenue rather than handling cost, and mixing them in makes a queue that drops calls look artificially efficient on a per-contact basis.

### Does management and quality assurance time count?

Yes, allocated by the share of their time spent on the queue. A supervisor who spends two hours a day monitoring calls and coaching contributes 25 percent of a loaded cost to the numerator. Excluding supervision is the second most common way small businesses understate this number, right after using unloaded wages.

### How do I count a contact that moves between channels?

Count the customer issue once, in the channel where it started, and record the extra touches separately. Counting each touch as a distinct contact inflates the denominator and makes your cost per contact fall while the actual work rises. Consistency across periods matters more than which convention you choose.

### How often should I recalculate?

Quarterly is enough for a stable operation, monthly if you are actively changing staffing, tools, or channels. Recompute before any vendor evaluation, and recompute again 90 days after a change goes live so the comparison uses the same boundary rules rather than a remembered figure.

Ready to see what your baseline implies? Run your three figures through the [AI automation ROI calculator](/calculator/) and compare the result against the quote sitting in your inbox.
