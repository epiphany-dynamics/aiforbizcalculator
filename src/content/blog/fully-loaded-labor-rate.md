---
title: "Fully loaded labor rate: how to calculate yours"
description: A fully loaded labor rate is wages plus taxes, benefits, insurance, and employee-specific costs divided by productive hours. Build yours with a worked example and formulas.
seoTitle: "Fully Loaded Labor Rate: How to Calculate Yours"
focusKeyword: fully loaded labor rate
tags:
  - fully loaded labor rate
  - labor cost
  - automation roi
  - small business finance
  - payback period
  - calculator inputs
pubDate: "2026-08-08"
image: /images/blog/fully-loaded-labor-rate.webp
imageAlt: "Fully loaded labor rate: how to calculate yours: fully loaded labor rate"
imageWidth: 1536
imageHeight: 1024
draft: false
networkLinks: []
---

**A fully loaded labor rate is what one hour of an employee's actual working time costs you: wages plus payroll taxes, benefits, insurance, equipment, and other employee-specific costs, divided by productive hours instead of paid hours. It is always higher than the wage, often by a third or more, and it is the number every automation ROI estimate should use.**

Almost every automation payback estimate starts with the same input: what an hour of staff time is worth. Most owners type in the hourly wage because it is the number they know. That single substitution is the most common reason an ROI estimate comes out wrong, and it always errs in the same direction: it makes automation look worse than it is.

## What the fully loaded rate is, and what it is not

**The fully loaded rate answers one question: if this person gave you back an hour, what does that hour cost the business? It is not the wage, not the salary divided by 2,080, and not a billing rate. It is total annual employment cost divided by the hours that person is actually available to produce work.**

The formula has two halves, and both of them get abused:

```
Fully loaded rate = Total annual cost of employment / Annual productive hours
```

The numerator is bigger than payroll. The denominator is smaller than 2,080. Wage-only math gets both wrong at once, which is why the gap compounds instead of canceling out.

## The costs that sit on top of the wage

**Seven categories reliably show up above the wage line: employer payroll taxes, unemployment insurance, workers compensation, health benefits, retirement contributions, equipment and software, and the amortized cost of hiring and training. Every one of them is real cash leaving your account, and every one of them disappears from a wage-only calculation.**

The table below builds the numerator for one illustrative employee: a front desk coordinator paid $22 an hour for 2,080 paid hours. Every dollar figure here is an illustrative assumption, not a benchmark. Replace each line with your own document.

| Cost line | Illustrative annual amount | Where to find yours |
|---|---|---|
| Base wages (2,080 h at $22) | $45,760 | Payroll summary report |
| Employer FICA at 7.65% | $3,501 | Payroll summary report |
| Federal and state unemployment | $500 | State rate notice |
| Workers compensation (1.2% illustrative) | $549 | Policy declaration page |
| Employer health contribution | $6,000 | Broker or carrier invoice |
| Retirement match (3% illustrative) | $1,373 | Plan statement |
| Phone, laptop, software seats | $1,200 | Vendor invoices |
| Hiring and training, amortized | $800 | Recruiting spend / average tenure |
| **Total annual cost** | **$59,683** | |

The employer share of FICA is fixed at 7.65 percent of covered wages, so that line is arithmetic rather than estimation. The rest vary by state, carrier, and plan design, which is exactly why you should pull your own numbers instead of borrowing a multiplier off the internet.

## A worked example: the coordinator at $22 an hour

**Total annual cost for the illustrative coordinator is $59,683. Paid hours are 2,080, but productive hours are far fewer once paid time off and unproductive time come out. The result is a fully loaded rate near $37 an hour, roughly 1.68 times the posted wage.**

Start from 2,080 paid hours and subtract time the employee is paid for but not working:

1. Vacation: 80 hours
2. Holidays: 64 hours
3. Sick and personal: 40 hours
4. Paid working hours remaining: 1,896

Then subtract time at work that is not available for the task you are automating. Breaks, team meetings, training, system downtime, and the gap between tasks. Using an illustrative 15 percent:

```
1,896 x 0.85 = 1,612 productive hours
$59,683 / 1,612 = $37.02 per productive hour
```

Now watch what the wrong number does to a real decision. Suppose a scheduling automation gives that coordinator back five hours a week, or 260 hours a year:

- At the $22 wage: 260 x $22 = **$5,720** of annual value
- At the $37.02 loaded rate: 260 x $37.02 = **$9,625** of annual value

Same automation, same hours recovered, $3,905 of difference in the answer. On a $6,000 build, one version pays back in about seven and a half months and the other never quite gets there inside a year. That is the entire decision flipping on an input, which is why the [payback period calculator method](/blog/payback-period-calculator/) is only as honest as the rate you feed it.

## Why productive hours move the number more than benefits do

**Owners who do adjust for load usually add benefits and stop. But the denominator does more damage than the numerator. Cutting 2,080 paid hours down to 1,612 productive hours raises the rate by about 29 percent on its own, before a single dollar of benefits gets added on top.**

Run it both ways with the illustrative figures. Wages only, spread over paid hours, gives $45,760 / 2,080 = $22.00. Wages only, spread over productive hours, gives $45,760 / 1,612 = $28.39. The denominator alone accounts for more than half the total gap between $22 and $37.

This matters most for the roles automation actually touches. Front desk, intake, scheduling, and billing staff have the most fragmented days, so their unproductive percentage runs high. If you are sizing an [AI front desk against call volume and booking rate](/blog/ai-front-desk/), the recovered hour is coming out of the most interrupted part of somebody's day, and the loaded rate is what that hour costs.

## Which number to type into the calculator

**Use the fully loaded rate of the specific person whose hours the automation frees, not a company average and not the owner's rate. If two roles share the work, weight the rate by how the hours actually split. Round down rather than up when you are estimating any input.**

A short decision framework:

1. **Identify who loses the task, not who owns the process.** The manager approves the change; the coordinator does the work. Use the coordinator's rate.
2. **Split mixed work by hours.** If 70 percent of the recovered time is the coordinator at $37 and 30 percent is the office manager at $52, the blended rate is $41.50.
3. **Never use the owner's rate for delegable work.** An owner's loaded rate is high, and applying it to tasks a $20 hire could do inflates the estimate.
4. **Keep your assumptions written down.** Note the load factor you used and the date. When someone challenges the number, you want the build, not a memory.

Run your figure through the [AI automation ROI calculator](/calculator/) and see what it does to your payback window. If it changes the decision, you had the wrong input before, not the wrong plan.

## When the fully loaded rate overstates your savings

**A recovered hour is only cash if payroll changes. If you free 260 hours and nobody's schedule, headcount, or hiring plan moves, you saved capacity, not money. The fully loaded rate values that hour at full cost while your bank balance stays flat, and that is a real overstatement.**

Recovered time converts to money in three ways: you avoid a hire you were about to make, you reduce hours or headcount you already have, or you redirect the time to work that produces revenue. If none of those apply, apply a realization factor. Multiplying by 0.5 is a defensible haircut and is far more honest than pretending capacity equals cash.

This is also the honest lens for staffing comparisons. When you weigh a [virtual assistant's cost against automation](/blog/virtual-assistant-cost/), the VA's loaded rate is lower than an employee's because you skip taxes, benefits, and equipment, so a wage-to-wage comparison quietly stacks the deck. And when you size something small like [automated appointment reminders and their break-even math](/blog/automated-appointment-reminders/), the labor saving is often the smaller half of the case; the recovered revenue from fewer no-shows carries it.

Build your rate once, write down the assumptions, and reuse it across every automation you evaluate this year. Then take the number to the [ROI calculator](/calculator/) and let the payback math run on an input you can actually defend.

## Frequently Asked Questions

### What multiplier should I use if I cannot build the rate right now?

Use your own payroll register instead of a multiplier if you possibly can, because benefit generosity and state insurance rates swing the answer widely. If you need a placeholder to move forward today, take the wage, add your actual benefit and tax spend as a percentage, then divide by roughly 1,600 productive hours instead of 2,080. Label it as an estimate and replace it.

### Does this apply to salaried staff and to the owner?

Yes, with one change. For salaried employees, start from annual salary rather than wage times 2,080, then add the same tax, benefit, and equipment lines. For an owner, the loaded rate is usually the opportunity cost of the highest-value work you are not doing, which is a judgment call rather than a payroll calculation. Do not use it to value delegable admin tasks.

### Should rent, utilities, and general overhead go into the rate?

For automation ROI, usually no. Rent does not fall when you recover five hours a week, so including it inflates savings that never appear. Include costs that scale with the person: taxes, benefits, insurance, their equipment, their software seats. Full absorption overhead belongs in pricing and job costing, not in a savings estimate.

### Do 1099 contractors have a fully loaded rate?

They have a smaller one. You skip employer FICA, unemployment, workers compensation in most cases, benefits, and usually equipment. What remains is the contract rate plus management time, onboarding, and any tools you provide. The gap between contractor and employee loaded rates is often larger than the gap between their headline rates, which is worth knowing before you compare the two.

### How often should I recalculate it?

Once a year is enough for most small businesses, ideally right after your benefits renewal, since that is when the largest add-on line changes. Recalculate sooner if you change carriers, add a retirement match, get a new workers compensation rate, or give raises above a few percent. Note the date on the figure so you know when it went stale.
