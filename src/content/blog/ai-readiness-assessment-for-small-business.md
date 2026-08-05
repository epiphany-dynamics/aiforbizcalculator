---
title: "AI readiness assessment: the three conditions that matter"
description: Most AI readiness assessments are lead forms. Here are the three conditions that actually predict whether a small business automation survives, plus the math.
seoTitle: AI Readiness Assessment for Small Business
focusKeyword: ai readiness assessment for small business
tags:
  - ai readiness
  - small business automation
  - automation roi
  - process automation
  - payback period
pubDate: "2026-08-05"
image: /images/blog/ai-readiness-assessment-for-small-business.webp
imageAlt: "AI readiness assessment: the three conditions that matter: ai readiness assessment for small business"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**A useful AI readiness assessment tests three things: whether the process runs the same way most of the time, whether one named person owns the result, and whether you already track a number the automation is supposed to move. Fail any one of the three and the tool fails, no matter how good the software is.**

## Why most readiness assessments predict nothing

**Most assessments are scored questionnaires attached to a sales funnel. They ask about budget, timeline, and appetite for change, which are buying signals, not failure predictors. Nothing in them tests whether your process is stable enough to encode. That is why a business can score highly and still watch the build stall in month two.**

Read the questions on the next readiness quiz you get. Budget range. Target launch date. How open is your team to new technology. Number of employees. Every one of those is answerable by someone who has never watched the process actually run, and every one of them sorts you into a pipeline rather than telling you anything about risk.

None of those questions would catch the three things that most often kill a small automation: a process that runs differently every time, a build that nobody owns after handoff, and no baseline number to compare against six months later. The honest version of the assessment is shorter and much harder to pass, which is the point. It fails you in ten minutes instead of ten weeks. If you want the broader context on where the expectations come from, [AI Automation Myths Small Business Owners Should Stop Believing](https://epiphanydynamics.ai/blog/ai-automation-myths-small-business/) covers the assumptions that lead owners into builds they were never set up to support.

## The three conditions that decide the outcome

**Repeatability, ownership, and a tracked number. Repeatability decides whether the work can be encoded at all. Ownership decides whether anyone fixes it when it breaks in week three. A tracked number decides whether you can tell six months later if it worked. Everything else in a readiness questionnaire is secondary to these three.**

### A repeatable process

Pull the last twenty times the process ran and count how many followed the same steps, in the same order, with the same inputs. That fraction is your repeatability rate.

Repeatability rate = (runs that followed the standard path) / (total runs reviewed)

Above 80 percent, you can encode the main path and route the exceptions to a person. Between 60 and 80 percent, you can usually automate one slice of the process rather than the whole thing. Below 60 percent, you are not automating a process, you are automating a guess, and the tool will spend its life in exception handling.

"The same" refers to decision points, not details. Different customer names and job sizes are fine. Different approval chains, different intake channels, and different people deciding what counts as urgent are not. Scoring the candidate process before you price anything is the same discipline covered in [How to Automate Business Processes: Score Candidates Before ROI](/blog/how-to-automate-business-processes/).

### Someone who owns the outcome

Fill in one sentence: a person's name, the number they are accountable for, and the day they report it. If any blank stays empty, there is no owner.

"The office manager will handle it" is not ownership. "Dana reports missed-call rate every Monday" is. The common failure mode is naming yourself, because your calendar is already full, so exceptions collect in an inbox until someone quietly switches the automation off and nobody notices for a quarter.

### A number you already track

The metric has to exist before the build starts. Not "we will start measuring once it is live." If you are inventing the number to justify the project, you have no baseline and every result becomes a story rather than a comparison.

Workable baselines include hours logged on a task, quotes sent per week, missed calls, days from job completion to invoice, and no-show rate. The test is whether you can pull the prior 60 to 90 days of it today without building a report.

## Score yourself in ten minutes

**Score each condition zero, one, or two using the table below, then apply the gate: any single zero stops the project regardless of total. A perfect score on two conditions does not offset a zero on the third, because the three failure modes are independent and each one is enough to sink a build on its own.**

| Condition | Score 0 | Score 1 | Score 2 |
|---|---|---|---|
| Repeatable process | Under 60 percent of runs follow the same path | 60 to 80 percent, with a defined exception route | Over 80 percent, steps written down |
| Named owner | No name, or the name is yours and you are at capacity | A name, but no metric or reporting cadence | Name, metric, and a recurring report date |
| Tracked number | Metric does not exist yet | Metric exists but only in someone's head | 60 or more days of history you can pull today |

How to read the total:

1. Any zero: stop. Fix that condition first, at zero software cost.
2. All ones (total of three): the process is close but the build will drift. Write the steps down and assign the owner, then rescore in 30 days.
3. No zeros and at least two twos (total of five or six): proceed to the arithmetic below.

## Run the numbers once you pass

**Passing the gate earns you the right to do arithmetic, not a purchase. Convert the repeatable share of the process into hours, price those hours at fully loaded cost, subtract recurring software, then divide the build cost by what is left. If payback runs past twelve months, cut scope before you cut the idea.**

The four formulas:

- Repeatable hours per month = (monthly volume x minutes per run x repeatability rate) / 60
- Monthly labor value = repeatable hours x fully loaded hourly cost
- Net monthly gain = monthly labor value - recurring software and maintenance
- Payback months = build cost / net monthly gain

Illustrative example, not a benchmark. A nine-person commercial cleaning company handles 140 quote requests per month. Intake and scheduling take about 12 minutes each, and 80 percent of requests follow the standard path. That is (140 x 12 x 0.80) / 60 = 22.4 repeatable hours per month. At a fully loaded rate of 28 dollars per hour, the labor value is 627 dollars per month. Subtract 180 dollars of recurring software and the net monthly gain is 447 dollars.

At a 6,000 dollar build, payback is 6,000 / 447 = 13.4 months, which is too slow. Narrow the scope to only the standard 80 percent path and skip the custom CRM write-back, and the build drops to roughly 2,800 dollars. Payback becomes 6.3 months on the same savings. The condition scores did not change; the scope did.

Run your own version in the [AI automation ROI calculator](/calculator/) before you take a single vendor call. Then sanity-check the two inputs people get wrong most often: build cost, covered in [AI implementation cost for small business: the real floor](/blog/ai-implementation-cost-small-business/), and the payback threshold itself, covered in [AI automation payback period: the number that decides](/blog/ai-automation-payback-period/).

## When you should not automate yet

**Skip automation entirely when the process is still changing, when the owner would be you and your calendar is already full, or when total volume is under roughly forty units a month. At low volume the arithmetic almost never clears, and a written checklist gets you most of the consistency for zero dollars.**

There is a fourth case worth naming. If the process is repeatable and owned but the pain is seasonal, your monthly savings figure is inflated by whichever months you happened to measure. Average across a full year before dividing, or you will buy a twelve-month payback that is really twenty.

Failing this assessment is not a verdict on the business. Every condition here is fixable in weeks with no vendor involved: write the steps down, name the owner, start logging the number. Rescore in 30 days, and when you clear the gate, take your own volume and minutes into the [AI automation ROI calculator](/calculator/) and see what the payback actually says.

## Frequently Asked Questions

### Can I pass with a process I only run a few times a week?

Sometimes. Volume matters less than minutes. A process that runs 30 times a month but eats 40 minutes each time produces 20 hours, which is more than a 200-run process that takes 3 minutes. Multiply before you judge.

### What if the number I track is not accurate?

Directionally correct beats precise. If your missed-call count is off by 15 percent but consistently off, it still works as a baseline because you are measuring change, not the absolute. The disqualifier is a number that does not exist at all.

### Does the owner need to be technical?

No. The owner needs authority to change the process and time to review exceptions weekly. Technical work belongs to whoever builds it. Confusing the two is how ownership lands on the person least able to act on what they see.

### How is this different from a vendor readiness quiz?

A vendor quiz is scored on buying capacity, so its worst outcome is telling you no. This one is scored on failure conditions, so its most useful outcome is telling you to wait. Three of the questions here can disqualify a paying customer.

### What score should I have before asking for a quote?

No zeros, at least two twos, and a payback under twelve months on your own numbers. Walking into a vendor conversation with a repeatability rate, a named owner, and a baseline metric also changes the quote you get, because scope stops being guesswork.
