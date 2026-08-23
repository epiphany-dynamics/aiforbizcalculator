---
title: "Call center staffing calculator: Erlang C inputs explained"
description: Learn how a call center staffing calculator uses Erlang C to size your team. Covers workload, target answer time, shrinkage, and occupancy with worked examples.
seoTitle: "Call Center Staffing Calculator: Erlang C Explained"
focusKeyword: call center staffing calculator
tags:
  - call center staffing
  - Erlang C
  - workforce planning
  - staffing calculator
  - call center metrics
pubDate: "2026-08-22"
image: /images/blog/call-center-staffing-calculator.webp
imageAlt: "Call center staffing calculator: Erlang C inputs explained: call center staffing calculator"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**A call center staffing calculator converts call volume, average handle time, and a target answer speed into the number of agents you need on the phone. The standard engine behind it is the Erlang C formula, which models callers who wait in queue. Your final headcount must also add shrinkage, typically 25 to 35 percent.**

Most small-business owners get this math wrong in one of two ways. They either divide call volume by calls per agent and end up with hold times that drive customers away, or they overhire to feel safe and pay for seats that sit empty. The fix is not a bigger spreadsheet. It is understanding the five inputs, running one honest worked example, and knowing where the formula breaks.

## What Erlang C actually calculates

**Erlang C is a queuing formula that predicts how many calls will wait in line before an agent answers. It takes your offered workload in Erlangs, your planned agent count, and your service level target, then returns the probability a caller waits and the average wait time. It assumes calls arrive randomly, not evenly.**

An Erlang is one hour of workload. If you receive 60 calls in an hour at 6 minutes of handle time each, you have 360 minutes, or 6 Erlangs, of work to cover. That sounds like six agents, but six agents answering randomly arriving calls will leave some callers waiting. Erlang C tells you how much waiting, at each agent count, so you can pick the count that hits your target answer speed.

The formula also assumes callers who get through do not abandon instantly and that agents work in parallel on the same queue. For a small team answering its own phone line, those assumptions are close enough to be useful. If you want the background on where workload math fits into shift planning, the [Staffing Calculator: Turn Workload and Coverage Windows Into Shifts](/blog/staffing-calculator/) walks through the broader framework.

## The five inputs you need before you open the calculator

**Any credible call center staffing calculator needs five inputs: call volume per interval, average handle time, target answer speed or service level, shrinkage, and occupancy. Missing or guessed inputs are the main reason staffing plans fail. Gather 30 days of real call records before you trust any output.**

### Input 1: Call volume by interval

Do not average the whole day. Calls bunch up. A plumbing company may take 20 calls between 8 and 10 a.m. and only 3 per hour after lunch. Staff to the busy interval, and accept some slack in quiet hours. Break your day into half-hour or hourly buckets and find the peak.

### Input 2: Average handle time

Average handle time is talk time plus hold plus after-call work, not just talk time. Owners routinely undercount by 30 percent because they forget the 90 seconds of notes after each call. The [Average Handle Time Calculator: Talk, Hold, and ACW](/blog/average-handle-time-calculator/) shows how to measure this correctly from call recordings or software logs.

### Input 3: Target answer speed

This is your service level, often written like 80/20, meaning 80 percent of calls answered within 20 seconds. Pick this from what your customers tolerate, not from an industry slogan. A clinic booking appointments may target 30 seconds. A parts supplier may accept 90.

### Input 4: Shrinkage

Shrinkage is paid time when agents cannot take calls: breaks, training, meetings, sick days, and time spent logged in but unavailable. Typical planning figures run 25 to 35 percent, but measure yours. If your five agents spend 6.5 of 40 weekly hours unavailable, your shrinkage is about 16 percent. Low, but verify it.

### Input 5: Occupancy

Occupancy is the share of logged-in time agents spend handling calls. Erlang C outputs assume occupancy stays below roughly 85 to 90 percent. Push past that and agents burn out, error rates climb, and turnover follows. More agents than the formula minimum is sometimes the right call for sustainability, not waste.

## A worked example: staffing to answer in 60 seconds

**Here is the full math for a service business taking 40 calls in its busiest hour at 7 minutes average handle time, targeting 80 percent of calls answered within 60 seconds. The workload is 4.7 Erlangs. Erlang C says you need 7 agents on the floor, and shrinkage pushes scheduled headcount to 9 or 10.**

Step 1: Compute workload. 40 calls times 7 minutes equals 280 minutes, divided by 60 gives 4.67 Erlangs.

Step 2: Run Erlang C at different agent counts. Illustrative outputs for 4.67 Erlangs at a 60-second target:

| Agents on floor | Probability caller waits | Average wait (seconds) | Service level, 60 sec |
|---|---|---|---|
| 5 | 0.69 | 78 | 41% |
| 6 | 0.42 | 29 | 68% |
| 7 | 0.24 | 14 | 84% |
| 8 | 0.13 | 8 | 92% |

Step 3: Read the table against your target. You wanted 80 percent answered within 60 seconds. Six agents deliver only 68 percent. Seven agents deliver 84 percent. Seven is your floor.

Step 4: Add shrinkage. If shrinkage is 30 percent, divide 7 by 0.70. You need 10 agents scheduled for that hour so 7 are actually available.

Step 5: Sanity-check occupancy. At 7 agents, occupancy is 4.67 divided by 7, about 67 percent. Comfortable. At 5 agents it would be 93 percent, which is a burnout schedule even though the math technically shows most calls eventually answered.

Once you know your real staffing requirement, the money question follows. Seven agents is a payroll line, and it is worth comparing that cost against automation coverage for overflow and after-hours calls. Run your own volume and wage numbers through the [AI automation ROI calculator](/calculator/) to see where the break-even sits before you post the job ad.

## Shrinkage and occupancy: where the math goes wrong

**The two silent killers of staffing plans are unmeasured shrinkage and overestimated occupancy tolerance. Shrinkage inflates scheduled headcount 25 to 35 percent above floor agents, and pushing occupancy above 85 percent produces service level collapse during absence spikes. Budget for both explicitly, or your Erlang C output will lie to you.**

Shrinkage errors compound. If you plan 7 agents and lose 2 to a sick day and a training session, you are running 5, and your service level drops from 84 percent to 41 percent. Small teams have no buffer, which is why small-business call centers should plan shrinkage at the higher end of the range.

Occupancy errors are subtler. A spreadsheet showing 90 percent occupancy looks efficient. In practice it means agents finish one call and the next one is already ringing, with no recovery time. Within months, attrition rises and you are paying hiring costs on top of the phones. The Cost of Employee Turnover Calculator: The Five Real Buckets shows what that churn actually costs, and it usually dwarfs the savings from running lean.

A practical rule: if your calculated occupancy is above 80 percent, add an agent or shift some calls to automation for the routine questions.

## A decision checklist before you hire

**Before converting staffing math into job postings, run five checks: confirm peak interval volume from call records, measure true handle time including after-call work, set a service level your customers actually require, measure real shrinkage from schedules, and compare agent cost against automation for overflow. Skipping any check invalidates the whole plan.**

Work through this ordered framework:

1. Pull 30 days of call data and chart volume by hour. Identify your single busiest hour.
2. Calculate average handle time from recordings or software, including after-call work.
3. Write down your target answer speed and the business reason for it.
4. Run Erlang C for your busiest hour and read the agent count at your target.
5. Divide by one minus shrinkage to get scheduled headcount.
6. Check occupancy at that count. Above 80 percent, add one agent.
7. Compare the fully loaded cost of that headcount against automation for routine and after-hours calls. The [Call center ROI: the formula without double-counting](/blog/call-center-roi/) explains how to make that comparison without inflating either side.

If step 7 shows automation covers the predictable calls cheaply, your human staffing requirement drops and the whole plan gets easier to fund.

## When Erlang C is the wrong tool

**Erlang C assumes random arrivals, patient callers, and a single skill-based queue. It breaks down for teams under five agents, heavy call-abandonment environments, callback systems, and multi-skill routing. If fewer than four agents ever work at once, queueing models get noisy and simple capacity math plus judgment often beats the formula.**

Very small operations have a different problem: the phone rings while the only agent is on another call or at lunch. No formula fixes a coverage gap; you fix it with overflow routing, an answering service, or an AI receptionist. Also note that Erlang C does not model callers hanging up and calling back later, which understates true demand in high-abandonment shops.

Treat the formula as a floor for teams of five to fifty agents answering live calls, not a universal law.

## Frequently Asked Questions

### What is a good service level for a small-business call center?

A common target is 80 percent of calls answered within 20 to 60 seconds, but the right number depends on what a missed call costs you. A clinic losing booked appointments should answer faster than a wholesaler taking reorder calls. Set the target from customer behavior and revenue at stake, not from a generic standard.

### How do I calculate agents needed per hour without software?

Compute workload in Erlangs: calls per hour times average handle time in minutes, divided by 60. Then test agent counts against an Erlang C table or free online Erlang C calculator until the predicted service level meets your target. Finally, divide by one minus your shrinkage rate to get scheduled headcount.

### What shrinkage percentage should I use?

Typical planning figures run 25 to 35 percent of paid time, covering breaks, training, meetings, absence, and logged-in unavailable time. Measure yours from schedules and payroll before adopting a default. Small teams should plan toward the higher end because one absence removes a large share of capacity.

### Does Erlang C work for chat and email staffing?

Erlang C fits live, queue-based channels like phone and chat where customers wait for a response. Email and tickets have no real-time queue, so simpler workload math works: total handle time divided by available hours per agent. Chat also needs a concurrency adjustment since one agent often handles two or three sessions at once.

### Can automation reduce my staffing requirement?

Yes, if automation deflects routine calls like hours, directions, and appointment confirmations. Every deflected call removes handle time from your workload, which lowers the Erlang total and the agent count. Measure deflection honestly from call records, and read [Call center software pricing: the real first-year total](/blog/call-center-software-pricing/) before assuming the software side is free.

Your next step is simple: pull your busiest hour's call volume and handle time, run the math above, then plug the resulting headcount cost into the [AI automation ROI calculator](/calculator/) to see whether humans, automation, or a mix gives you the best cost per answered call.
