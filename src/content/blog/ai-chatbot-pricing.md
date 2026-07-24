---
title: "AI Chatbot Pricing: The Four Models and What Each Costs"
description: Compare the four AI chatbot pricing models (per seat, per conversation, per resolution, per credit), see real small-business costs, and find the cheapest by ticket count.
seoTitle: "AI Chatbot Pricing: 4 Models and What Each Costs"
focusKeyword: ai chatbot pricing
tags:
  - ai chatbot pricing
  - chatbot cost
  - small business ai
  - pricing models
  - customer support automation
  - roi
pubDate: "2026-07-24"
image: /images/blog/ai-chatbot-pricing.webp
imageAlt: "AI Chatbot Pricing: The Four Models and What Each Costs: ai chatbot pricing"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**AI chatbot pricing follows four models: per seat, per conversation, per resolution, and per credit. For most small businesses handling under 500 support tickets a month, expect roughly $50 to $500 monthly. Per-conversation billing usually wins at low volume, while per-resolution pricing tends to scale cheapest once you cross a few hundred tickets.**

Most pricing pages show you a monthly number without telling you which billing model produced it. That is the part that decides whether a chatbot costs you $79 or $790 at the same real workload. Below are the four models, what each costs at small-business volumes, and a break-even framework for picking the cheapest one at your ticket count. All dollar figures here are clearly labeled illustrative examples, not vendor quotes.

## The four ways AI chatbots are priced

**Vendors bill in one of four ways: per seat (per human agent using the tool), per conversation (each chat session), per resolution (only the chats the bot closes without a human), or per credit (a metered bundle of messages or tokens). Each spreads cost differently, so identical usage can produce very different invoices.**

### Per seat
You pay a flat monthly fee for each human agent with a login. The bot itself may be unlimited. This suits teams where a few agents handle overflow the bot cannot. Cost is predictable but disconnected from volume, so a tiny team paying for three seats can overpay when the bot handles almost everything.

### Per conversation
You pay for every distinct chat session, whether the bot resolves it or hands it off. A "conversation" usually means one visitor thread inside a time window (often 24 hours). Simple to forecast if you know your monthly chat count.

### Per resolution
You pay only when the bot closes a ticket end to end with no human touch. Handoffs are free. This aligns cost with value, but the definition of "resolved" is the vendor's, and edge cases get argued.

### Per credit
You buy a bundle of credits and spend them as the bot answers. One message, one document lookup, or one AI generation each burns credits at different rates. Flexible, but the true per-ticket cost is hard to see until the bill lands.

## What each model costs at small-business volumes

**At a common small-business load of about 300 tickets a month, all four models can land between roughly $100 and $400, but the drivers differ. Per-seat cost tracks headcount, per-conversation tracks total chats, per-resolution tracks bot success rate, and per-credit tracks how chatty each answer is. Match the model to whichever driver you can predict.**

The table below uses one illustrative scenario so the models are comparable: 300 monthly tickets, a 70 percent bot resolution rate, two human agents, and an average of four bot messages per chat. These rates are made up for the example, not benchmarks.

| Pricing model | Illustrative unit price | How the bill is built at 300 tickets | Illustrative monthly cost |
|---|---|---|---|
| Per seat | $60 per agent | 2 agents, bot volume irrelevant | $120 |
| Per conversation | $0.90 per chat | 300 chats billed | $270 |
| Per resolution | $0.99 per resolved chat | 210 resolved (70%), 90 handoffs free | $208 |
| Per credit | $0.25 per message-credit | 300 chats x 4 messages = 1,200 credits | $300 |

Read the drivers, not just the totals. Per seat is cheapest here only because two agents is a small number. Add a third agent and it jumps to $180 without handling one extra ticket. Per resolution beats per conversation because 30 percent of chats were free handoffs. Per credit is the most sensitive to answer length, since a bot that sends more messages per chat quietly inflates the bill.

If you want to see how these operating costs stack against the labor you save, the [AI automation ROI calculator](/calculator/) lets you enter your own ticket count and hourly rate instead of trusting a vendor's example.

## Which pricing model is cheapest at your ticket count

**Break-even depends on volume and bot success rate. At low ticket counts with few agents, per seat is usually cheapest because the flat fee spreads across many free bot chats. As volume climbs, per-resolution pricing tends to win, since you only pay for outcomes and never for growing chat traffic that the bot handles for free.**

Use this ordered framework to find your likely winner:

1. **Count your monthly tickets.** Pull the last three months from your help desk or chat log and average them. Call this T.
2. **Estimate your bot resolution rate.** What share of chats can a bot realistically close with no human? A conservative illustrative figure is 60 to 75 percent for FAQ-style support. Call this R.
3. **Count seats you actually need.** How many humans must have a login for the chats the bot cannot close? Call this S.
4. **Run the per-model math.** Per seat = S x seat price. Per conversation = T x chat price. Per resolution = (T x R) x resolution price. Per credit = T x messages-per-chat x credit price.
5. **Pick the lowest, then re-run at 2x volume.** The cheapest model at today's volume is often not the cheapest at double. Choosing for where you will be in a year avoids a painful re-platform.

A rough rule from the illustrative math above: under about 150 tickets a month with one or two agents, per seat usually wins. Between roughly 150 and 600 tickets, per resolution and per conversation trade places depending on your resolution rate. Above that, per resolution generally pulls ahead because it never charges for volume the bot absorbs. Treat those thresholds as starting points to test against your own numbers, not fixed lines.

## The costs a pricing page hides

**The headline number is rarely the full cost. Setup, integrations, overage rates, and human fallback all sit outside the per-unit price and can add 20 to 50 percent in the first year, illustratively. Ask for these before signing, because they are where a cheap-looking plan turns expensive.**

Run this checklist against any quote:

- **Onboarding or setup fee.** One-time build cost for training the bot on your content.
- **Overage rate.** What each ticket, resolution, or credit costs once you exceed the plan cap. This is often far higher than the included rate.
- **Integration fees.** Connecting your help desk, CRM, or booking system may sit on a higher tier.
- **Human handoff cost.** Whether live-agent seats are included or billed separately.
- **Annual lock-in.** Whether the low monthly rate requires a yearly commitment.
- **Message vs conversation definitions.** How the vendor defines the billable unit, since a generous definition can double your effective cost.

For a fuller breakdown of the line items a quote leaves out, see our guide to [the five buckets an AI cost quote hides](/blog/ai-cost-calculator/). If you are weighing the chatbot against a phone-answering use case, [AI receptionist ROI and the value of fewer missed calls](/blog/ai-receptionist-roi/) covers the volume math there.

## When per-resolution pricing can work against you

**Per-resolution pricing is not always the safe choice. If your questions are complex or your content is thin, the bot resolves fewer chats, so you pay a premium unit rate on every success while still funding humans for the rest. When your realistic resolution rate is below about 40 percent, a flat per-seat plan often costs less.**

The trap is that per-resolution rates are set higher per unit precisely because handoffs are free. That math only pays off when the bot actually resolves a healthy share of chats. A business with technical, account-specific, or emotionally charged support (illustratively: a chatbot fielding billing disputes) may see a low resolution rate, which means a high effective cost per real ticket plus the full cost of human agents. Measure your resolution rate in a trial before committing to a model that rewards it.

## Turn the pricing model into a real decision

**Once you know your ticket count, resolution rate, and seat needs, the cheapest model is arithmetic, not a sales pitch. Plug your numbers into the framework above, then pressure-test the total against the labor hours the bot saves so you are comparing net value, not just monthly cost.**

Before you sign anything, run your own figures through the [AI automation ROI calculator](/calculator/) to see whether the cheapest pricing model still clears a worthwhile return. If you want to sanity-check a vendor's projected savings, our guide on [how to read an AI ROI output and spot a fake](/blog/ai-roi-calculator/) shows which numbers deserve suspicion.

## Frequently Asked Questions

### What is the average monthly cost of an AI chatbot for a small business?

For a small business handling a few hundred support tickets a month, an illustrative range is roughly $50 to $500 monthly depending on the pricing model and your volume. Very low-volume plans can start near $30, while heavier usage with integrations and human fallback pushes higher. Your ticket count and bot resolution rate drive the number more than the sticker price.

### Is per-conversation or per-resolution pricing cheaper?

It depends on your bot resolution rate. Per-resolution charges only for chats the bot closes, so if a large share of chats become free human handoffs, it can beat per-conversation. But per-resolution carries a higher unit price, so when your resolution rate is high and steady, per-conversation can end up cheaper. Run both formulas against your real numbers.

### What counts as a "conversation" in chatbot billing?

Usually a single visitor thread inside a fixed window, often 24 hours, regardless of how many messages it contains. That definition matters because a chat that spans two days may bill as two conversations under one vendor and one under another. Always confirm the exact definition, since it can quietly change your effective per-ticket cost.

### Are AI chatbot setup fees worth it?

A setup fee buys the work of training the bot on your content, connecting your systems, and testing responses. For a business with messy or scattered documentation, that work is real and often improves resolution rates enough to lower your ongoing per-ticket cost. Judge the fee against the resolution lift it produces, not as a standalone expense.

### How do I forecast chatbot cost as my volume grows?

Take your current monthly ticket count, apply an expected growth rate, and re-run the per-model math at that future volume. The model that is cheapest today may not be cheapest at double the tickets, especially per-seat plans that force new seats. Forecasting a year ahead helps you avoid re-platforming onto a different pricing model later.
