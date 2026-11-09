---
title: "Azure Bot Service Pricing: Separate Messages From Hosting"
description: Azure Bot Service pricing splits into Activity POST messages by channel type and separately provisioned hosting. Learn how to measure both for an ROI model.
seoTitle: "Azure Bot Service Pricing: Messages vs Hosting"
focusKeyword: azure bot service pricing
tags:
  - azure bot service pricing
  - chatbot cost
  - automation ROI
  - bot hosting
  - small business automation
pubDate: "2026-11-09"
image: /images/blog/azure-bot-service-pricing.webp
imageAlt: "Azure Bot Service Pricing: Separate Messages From Hosting: azure bot service pricing"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**Azure Bot Service pricing has two separate meters. Channel messages are Activity POSTs, treated differently for standard and premium channels, and hosting is provisioned separately. The captured premium rate was a placeholder, not a number. Split the two, measure your own bill, and enter the total as an ongoing cost in your ROI math.**

## What counts as a channel message

**On Azure Bot Service, a message is an Activity POST. Each Activity your bot sends to a channel endpoint counts, and each Activity the channel sends to your bot's endpoint counts too. One customer exchange therefore produces at least two messages, so count both directions when you estimate volume.**

Microsoft's pricing page defines it this way: bots send Activity objects to the channel by HTTP POST, channels send Activity objects to the bot by HTTP POST, and each of those POSTs is a message. A "conversation" in your head is not the unit. The POST is.

### The volume formula

Use this to turn a conversation count into message volume:

`Monthly messages = conversations x (customer Activities + bot Activities per conversation)`

**Illustrative example, not a benchmark:** a dental office gets 400 website chats a month. Each chat has 5 customer Activities and 5 bot Activities. That is 400 x 10 = 4,000 messages. Replace every number with counts from your own bot logs.

## Standard versus premium channels

**Standard channels, such as Teams, Slack and Facebook, show unlimited messages in the captured table. Premium channels, which cover your own app or website through DirectLine and Web Chat, show 10,000 messages a month on Free and a per-1,000 rate on S1. Your channel choice decides whether volume matters.**

Here is the captured entitlement table, restated:

| | Standard channels | Premium channels |
|---|---|---|
| Typical examples | Skype, Teams, Facebook, Slack | Your own app or website via DirectLine and Web Chat |
| Free tier | Unlimited messages | 10,000 messages a month |
| S1 tier | Unlimited messages | Charged per 1,000 messages |
| Does volume drive cost? | Not per the captured table | Yes, once you pass any included amount |

The S1 premium rate appeared as "$-" in the capture. That is a placeholder, not a price. Do not turn it into zero, and do not turn it into a guess. Read the live rate for your region and account before you publish any estimate.

## Hosting is a separate line

**Hosting is not part of the message meter. An AzureBot resource provisions an Azure Web App to host your bot, while a Bot Channels Registration provisions no App Service. Price the Web App or your own host as its own line, taken from your invoice, not from the messaging table.**

This is where owners get surprised. A free message allotment does not make a bot free all-in. If you register a bot that runs elsewhere, the registration provisions no App Service, but your code still runs somewhere and that place has a bill. If you create an AzureBot, a Web App is provisioned for you, and it appears as its own resource.

The practical rule: every bot has a message line and a hosting line. Some bots also call other paid services. Keep each as its own row so you can see which one grows when usage grows.

## Turn it into a monthly cost input

**Monthly service cost equals premium message charge plus hosting plus any other services your bot calls. Measure each from your own invoice or usage view, then enter the total as an ongoing cost in an ROI scenario. Never plug in the $- placeholder or a remembered vendor quote as a rate.**

Work through it in order:

1. Count monthly messages with the volume formula above.
2. Identify which channels carry them. Only premium channel messages can create a per-1,000 charge.
3. Read the measured premium rate from your own invoice or pricing view, then compute `(premium messages / 1,000) x measured rate`.
4. Add the hosting line from your invoice.
5. Add any other service lines the bot uses.
6. Enter the sum as the ongoing cost in your ROI scenario.

**Illustrative ROI scenario, all numbers assumed:** the 4,000 messages above sit under the 10,000 included on the Free premium row, so the message charge is $0 in this example. Assume your invoice shows $30 for hosting and $20 for other services. Ongoing cost is $50 a month.

Now the benefit side. If the bot fully handles 400 chats at 4 minutes each, that is 1,600 minutes, about 26.7 hours. At an assumed $22 fully loaded hourly rate, the modeled value is about $587. Net modeled value is about $537 a month, before build cost. If you are unsure of your own rate, see [fully loaded labor rate: how to calculate yours](/blog/fully-loaded-labor-rate/).

If volume grows to 25,000 messages, the premium line becomes `25 x your measured rate per 1,000`. Run that case too, because growth is where this line changes.

### Compare against the alternatives

A bot is one option among several. For a call-based version of the same math, read [virtual receptionist pricing: minutes, calls, and overages](/blog/virtual-receptionist-pricing/). For a human-handled baseline, [customer service outsourcing pricing: cost per resolved contact](/blog/customer-service-outsourcing-pricing/) shows how to put both on the same unit. If you are weighing building versus subscribing, [chatbot development cost: build versus subscription](/blog/chatbot-development-cost/) covers that split, and AI agent cost: what actually drives the bill covers the usage-driven lines a bot may add.

## When this math misleads you

**This split fails when the rate is unverified, when volume grows past an allotment, or when the savings are not real cash. A placeholder price is not a price, and a modeled labor value only turns into savings if hours actually leave the payroll or get redeployed. Recheck the vendor page before you commit.**

Three specific risks:

- **Stale capture.** Rates and entitlements are tied to a date and scope. Confirm region, account type and tier before you use any figure.
- **Missed meters.** This article covers messages and hosting. It does not cover every service a bot can touch, and it cannot tell you what your account will be charged.
- **Soft savings.** The $587 above is a modeled labor value. If the saved minutes just become idle time, cash savings are $0 and the bot is a cost.

If your channel is standard-only and your hosting is already paid for, the message formula may not matter at all. Skip it and spend the effort on the benefit side.

## Frequently Asked Questions

### Is Azure Bot Service free?

Not all-in. The captured table shows a Free tier with an included premium-channel allotment of 10,000 messages a month. Hosting is provisioned separately, and other services your bot calls carry their own charges. Check your invoice for every line.

### What is a message in Azure Bot Service?

A message is an Activity POST. An Activity your bot sends to a channel counts, and an Activity a channel sends to your bot's endpoint counts. A single question and answer is therefore two messages.

### Do Teams and Slack messages get charged per 1,000?

In the captured table, standard channels show unlimited messages. Standard channels include Microsoft first-party services and services with public Bot APIs, such as Facebook and Slack. Verify the current terms for your account.

### What price per 1,000 premium messages should I use?

Use the rate you measure from your own invoice or live pricing view. The captured S1 premium rate showed as "$-", which is a placeholder and not a usable number.

[AI automation ROI calculator](/calculator/)
