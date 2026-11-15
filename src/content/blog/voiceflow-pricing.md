---
title: "Voiceflow Pricing: Shared Credits and Auto Top-Ups in Your Budget"
description: How Voiceflow's organization-wide credits and auto top-ups change a monthly agent budget, with a formula and an illustrative ROI example for small businesses.
seoTitle: "Voiceflow Pricing: Shared Credits and Auto Top-Ups"
focusKeyword: voiceflow pricing
tags:
  - voiceflow pricing
  - chatbot cost
  - ai agent budget
  - automation ROI
  - usage-based pricing
pubDate: "2026-11-15"
image: /images/blog/voiceflow-pricing.webp
imageAlt: "Voiceflow Pricing: Shared Credits and Auto Top-Ups in Your Budget: voiceflow pricing"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Voiceflow bills one organization invoice: plan fee, optional add-ons such as editor seats and phone numbers, and credit usage shared across every workspace. Auto top-ups buy more credits when you reach zero, so they are spending, not a cap. Budget a fixed floor plus a measured top-up range, then feed that into your ROI scenario.**

## What one Voiceflow bill contains

**Per Voiceflow's credits documentation, the bill has three parts: a monthly plan fee, optional add-ons such as editor seats and phone numbers, and credit-based usage. All of it is billed at the organization level, and the plan decides your features and monthly credits. Current prices are not quoted here, so check your billing page.**

This article uses no current plan or credit prices. Those change, and a number copied from a pricing page goes stale. What stays useful is the structure of the bill, because that structure decides how you forecast it.

| Bill part | How it behaves | Budget type |
|---|---|---|
| Monthly plan fee | Same each month until you change plans | Fixed |
| Optional add-ons (editor seats, phone numbers) | Changes only when you add or remove them | Fixed, with step changes |
| Included monthly credits | Come with the plan | Fixed, but finite |
| Extra credits (bundle, upgrade, auto top-up) | Bought when usage outruns the plan | Variable |

The first three rows you can read off an invoice. The last row is the one you have to measure.

## How shared credits change the budget

**Credits belong to the organization, not to a single workspace. A test agent, a staging build and a live agent all draw from the same pool. Your monthly budget therefore depends on total usage across every workspace, so one noisy project can exhaust credits that your production agent needs.**

### Why per-agent math misleads

Many owners price one agent and stop. With a shared pool, the honest unit is the organization. If you run a customer-facing agent plus an internal prototype, the prototype's testing consumes the same credits.

### What to track

Keep a simple log for each billing month:

1. Credits included with your plan.
2. Credits left on the last day of the month.
3. Number of extra credit purchases, and their dollar total.
4. Which workspaces were active.

The vendor documentation states there is no fixed credit-to-token exchange rate, so do not convert credits into model tokens in your head. Count dollars on the invoice instead. For a wider view of what drives agent bills, see [AI agent cost: what actually drives the bill](/blog/ai-agent-cost/).

## Auto top-ups are spending, not a cap

**Auto top-ups buy more credits when your balance hits zero, so the agent keeps running mid-month. That protects uptime but removes the natural stopping point. Treat the setting as an open-ended purchase and set your own ceiling by reviewing invoices weekly, or leave it off and accept interruption.**

The documentation lists three responses to low credits: upgrade to a higher plan, buy a credit bundle, or turn on auto top-ups from the Plans page. Only the third happens without a human decision. That is the point of it, and also the risk.

### Two budgeting stances

- **Auto top-ups on.** The agent stays live. Your bill can rise above plan plus add-ons, and the vendor documentation does not describe a spending limit here.
- **Auto top-ups off.** Your cost stays predictable, but the agent stops when credits run out. If it answers customers, that is a service failure, so price the lost conversations.

Neither is wrong. Pick based on what an hour of downtime costs you. Usage-based billing elsewhere works the same way, as in [Dialogflow price: flow vs playbook hybrid billing](/blog/dialogflow-price/), where the unit you pay for matters as much as the rate.

## Turn it into a monthly budget formula

**Monthly service cost equals plan fee plus add-ons plus expected top-up purchases. Take the fee and add-ons from your invoice, then measure top-ups over at least three billing months. Budget to the highest month you saw, not the average, because a spike is what breaks a tight margin.**

The formula:

**Monthly service cost = plan fee + add-ons + extra credit purchases**

Floor = plan fee + add-ons. Range = floor + lowest to highest top-up month.

### Illustrative example

These numbers are invented round figures, not Voiceflow prices. Suppose your invoices show a fixed floor (plan plus add-ons) of $500. Over three months your extra credit purchases were $0, $90 and $180.

- Average top-ups: ($0 + $90 + $180) / 3 = $90
- Average monthly service cost: $500 + $90 = $590
- Worst observed month: $500 + $180 = $680

Plan on $680 for cash flow and use $590 for the expected case. If the worst month came from a one-off test campaign, note that, but do not delete it from the record.

## Feed the measured cost into an ROI scenario

**Enter the measured monthly service cost as an ongoing cost, next to maintenance labor, then compare it with modeled labor value. In the illustrative case below, a $590 bill and $140 of upkeep leave $2,150 of modeled monthly value. That is a scenario, not a vendor quote or guaranteed cash savings.**

Continue the example with invented inputs:

- 1,200 customer conversations per month reach the agent.
- 40% are resolved with no human, which is 480 conversations.
- A human handles a contact at an assumed $6 fully loaded cost.
- Modeled labor value: 480 x $6 = $2,880.
- Maintenance: 4 hours per month at $35 = $140.
- Net modeled monthly value: $2,880 - $590 - $140 = $2,150.

Rerun it with the worst month: $2,880 - $680 - $140 = $2,060. The conclusion holds, which is the useful test. If the worst month flips the sign, your margin is too thin to rely on usage-based billing.

Two inputs deserve scrutiny. The $6 contact cost should come from your own payroll, and [Customer service outsourcing pricing: cost per resolved contact](/blog/customer-service-outsourcing-pricing/) shows how to compare it against paid alternatives. The $590 is a recurring cost, so it belongs with the other first-year items covered in [Call center software pricing: the real first-year total](/blog/call-center-software-pricing/).

Enter your own figures in the [AI automation ROI calculator](/calculator/). It is a general workflow model. It does not compute Voiceflow credit units, so do the credit arithmetic above first and paste the dollar result in as an ongoing cost. Modeled labor value is not cash unless you reduce hours or avoid a hire.

## When this math does not hold

**Skip this model if you have not run the agent long enough to measure usage. A guess at top-ups is an unsupported estimate, not a budget. Run a pilot for a few billing cycles first, or the output will look precise while resting on numbers nobody observed.**

Other limits to keep in mind:

- A plan change or new add-on shifts your floor, so restart the measurement.
- Seasonal spikes may not appear in a three-month window.
- Conversations that need a human still cost staff time, which the resolution rate has to account for.
- This article reflects the vendor's documented billing structure. Confirm current terms on your own billing page before you sign or switch.

## Frequently Asked Questions

### Are Voiceflow credits shared across workspaces?

Yes. The vendor documentation says credits are shared across all workspaces in your organization, and billing happens at the organization level. Usage in any workspace draws from the same pool.

### Do auto top-ups cap my Voiceflow spending?

No. Auto top-ups purchase additional credits when you reach zero so agents are not interrupted. They keep the agent running, which means they add spending rather than limit it. Review invoices to set your own ceiling.

### What is on a Voiceflow bill besides credits?

A monthly plan fee and optional add-ons such as editor seats and phone numbers. The plan also determines which features you can use and how many credits you receive each month.

### What Voiceflow price should I put in my ROI model?

Use your own invoices, not a quoted price. Add the plan fee and add-ons, then average extra credit purchases over several months. Use the highest month as a stress test.

[AI automation ROI calculator](/calculator/)
