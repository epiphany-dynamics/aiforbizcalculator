---
title: "Dialogflow Price: Flow vs Playbook Hybrid Billing"
description: "Dialogflow price depends on call direction: a Flow calling a Playbook splits billing, a Playbook calling a Flow bills every turn as Playbook. Formulas and an ROI input."
seoTitle: "Dialogflow Price: Flow vs Playbook Billing Direction"
focusKeyword: dialogflow price
tags:
  - Dialogflow pricing
  - hybrid agents
  - chatbot cost
  - automation ROI
  - voice agents
pubDate: "2026-11-10"
image: /images/blog/dialogflow-price.webp
imageAlt: "Dialogflow Price: Flow vs Playbook Hybrid Billing: dialogflow price"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Dialogflow hybrid billing depends on direction. When a Flow calls a Playbook, only the Playbook turns or seconds bill as Playbook usage. When a Playbook calls a Flow, the whole conversation bills as Playbook usage. This guide gives the formulas, an illustrative budget, and the cost input to carry into your ROI math.**

## What Google's hybrid billing rule says

**Google's pricing page says hybrid agents bill per turn, according to the features consumed, and that the architecture matters. Direction decides the split. A Flow calling a Playbook separates turns into two buckets. A Playbook calling a Flow puts every turn of the conversation into the Playbook bucket.**

Google's [Dialogflow pricing page](https://cloud.google.com/dialogflow/pricing) describes combining agent building techniques, such as calling a Flow from a Playbook, as a "hybrid" agent. Its breakdown for chat and voice is below.

| Agent type | Direction | What bills |
| --- | --- | --- |
| Chat | Flow calls a Playbook, Data Store, Generator or Generative Fallback | Flow-only turns bill as Flow requests. Turns using a Playbook, Data Store, Generator or Generative Fallback bill as Playbook requests. |
| Chat | Playbook calls a Flow | All turns in the conversation bill as Playbook requests. |
| Voice | Flow calls a Playbook, Data Store, Generator or Generative Fallback | Flow-only duration bills as Flow seconds. Duration using the other features bills as Playbook seconds. |
| Voice | Playbook calls a Flow | The entire conversation duration bills as Playbook seconds. |

Google's own example: in a 5-turn chat with 4 Flow turns and 1 Playbook turn, you get 4 Flow requests and 1 Playbook request, assuming one request per turn. If a Playbook calls a Flow at any point, all 5 turns bill as Playbook requests.

This table is a capture of one page. Rates and scope change, so recheck the page before you budget.

## The two formulas

**Chat cost is turns multiplied by the rate of the bucket those turns land in. Voice cost is seconds multiplied by the per-second rate of the bucket. Direction changes which bucket applies, so you need two current rates from Google's page, not one.**

Use these symbols. F is Flow-only turns, P is turns that use a Playbook or related feature, and N is all turns (F plus P). Rates are r_flow and r_playbook per request.

```
Flow calls Playbook (chat):  F x r_flow + P x r_playbook
Playbook calls Flow (chat):  N x r_playbook
Gap (chat):                  F x (r_playbook - r_flow)
```

Voice works the same way with seconds. Replace turns with seconds and use the per-second rates.

The gap line matters most. Moving to a Playbook-calls-Flow design adds the number of Flow-only turns times the rate difference, for every conversation. A design with mostly Flow turns pays the most for that switch.

## Illustrative budget for one hybrid agent

**With made-up rates, a Playbook-calls-Flow design costs 50% more per chat and about 43% more per call than a Flow-calls-Playbook design, because every turn or second bills at the Playbook rate. Swap in current rates before using any figure here.**

These rates are invented for the example. They are not Google's prices.

- Chat: r_flow = $0.007 and r_playbook = $0.012 per request.
- Voice: $0.0015 per Flow second and $0.0025 per Playbook second.

### Chat example

A 5-turn conversation has 4 Flow turns and 1 Playbook turn, one request per turn.

- Flow calls Playbook: 4 x $0.007 + 1 x $0.012 = $0.040.
- Playbook calls Flow: 5 x $0.012 = $0.060.
- At 3,000 chats a month: $120 versus $180, a $60 gap.

### Voice example

A 40-second call has 30 Flow seconds and 10 Playbook seconds.

- Flow calls Playbook: 30 x $0.0015 + 10 x $0.0025 = $0.070.
- Playbook calls Flow: 40 x $0.0025 = $0.100.
- At 800 calls a month: $56 versus $80, a $24 gap.

At this size the gap is small. It grows with volume and with the share of Flow-only time in each conversation.

## Turn the usage estimate into an ROI input

**Estimate monthly Dialogflow usage cost outside the calculator, then enter it as an ongoing cost in your workflow ROI scenario. Use measured turns and seconds from your own logs. The calculator does not compute Dialogflow billing units, and modeled labor value is not guaranteed cash savings.**

Illustrative scenario: a front desk spends 4 minutes on each of 3,000 routine chats a month, and the agent handles them. At a $24 fully loaded hourly rate, modeled labor value is 3,000 x 4 / 60 x $24 = $4,800. Subtract the usage cost from the chat example. You get $4,680 with the Flow-calls-Playbook design and $4,620 with the other one.

The direction choice moved the answer by $60 here. Staff time dominates, so build effort and containment rate usually matter more. Get the labor figure right first with [fully loaded labor rate: how to calculate yours](/blog/fully-loaded-labor-rate/).

Billing units rarely match what you think you used. [Azure Bot Service Pricing: Separate Messages From Hosting](/blog/azure-bot-service-pricing/) shows the same trap on another platform, and [Amazon SQS Payload Request Billing: Why Batches Bill as More](/blog/amazon-sqs-payload-request-billing/) shows it in a queue service.

## A five-step decision checklist

**Pick the architecture by computing both formulas with current rates and your logged turn mix, then multiplying the gap by monthly volume. If the gap is smaller than the effort to restructure the agent, choose the design that works best for callers.**

1. Pull a month of conversations. Count Flow-only turns (F) and Playbook turns (P) per conversation.
2. Check whether any design path has a Playbook calling a Flow. If so, those conversations bill entirely as Playbook usage.
3. Read the current Flow and Playbook rates from Google's pricing page for your agent type, chat or voice.
4. Compute both formulas and the gap, then multiply by monthly conversations.
5. Enter the chosen monthly cost as an ongoing cost in your ROI scenario and check the payback.

## When this math does not apply

**Do not use this for Dialogflow ES or for any scenario beyond the captured chat and voice breakdown. The source covers only the Flow and Playbook direction rules. It does not give your region's quote, free-tier eligibility, or a guarantee that your account bills the same way.**

The formulas assume one request per turn, as Google's example does. If your agent makes several requests in one turn, count requests, not turns. Check your billing console for actual line items before committing to a budget.

Regulated work adds separate costs this math ignores. For that case, see [HIPAA-Compliant Chatbot Cost: Build, BAAs, and Real Exposure](/blog/hipaa-compliant-chatbot/).

## Frequently Asked Questions

### Does the Dialogflow price change if a Flow calls a Playbook?

Yes. Flow-only turns bill as Flow requests, and turns using a Playbook, Data Store, Generator or Generative Fallback bill as Playbook requests. Chat and voice follow the same pattern, with seconds instead of turns for voice.

### What happens when a Playbook calls a Flow?

Per Google's pricing page, the entire conversation bills as Playbook usage. In chat, all turns count as Playbook requests. In voice, the full duration counts as Playbook seconds, even the part that ran in a Flow.

### Is a hybrid agent always cheaper when I use Flows?

No. If a Playbook calls a Flow at any point, the Flow turns do not bill at the Flow rate. Direction matters more than how many Flows you built.

### Where do I find the current Dialogflow rates?

Use Google's Dialogflow pricing page and your own billing console. This article uses invented rates for illustration, so do not reuse them in a budget.

### Can I plug this into the ROI calculator directly?

Not as billing units. Compute the monthly usage cost yourself with the formulas above, then enter the dollar figure as an ongoing cost.

[AI automation ROI calculator](/calculator/)
